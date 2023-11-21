import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
//https://docs.expo.dev/versions/latest/sdk/location/
import * as Location from "expo-location";
import { useState, useEffect } from "react";
//geolib
import { getDistance } from "geolib";

export default function App() {
  //state variable to store location of the phone
  const [location, setLocation] = useState();
  //address of where the user wants to go
  const [address, setAddress] = useState();
  //track the location object that we will create from address
  const [destination, setDestination] = useState();
  //get permissions with a useEffect
  //this is an effect that runs once on load of the component
  useEffect(() => {
    const getPermissions = async () => {
      //foreground permissions means that we only have access to location
      //when the app is open
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }
      //if we get down here we know we have permission
      const currentLocation = await Location.getCurrentPositionAsync();
      console.log("Current Location");
      console.log(currentLocation);
      setLocation(currentLocation);
    };
    getPermissions();
  }, []);

  //This process is called geoCoding
  //geoCode is taking a string address and converting to a lat and long
  const geoCode = async () => {
    const code = await Location.geocodeAsync(address);
    console.log(code);
    alert(code[0].latitude + " " + code[0].longitude);
    setDestination(code);
  };
  //reverse geocode
  const reverseGeoCode = async () => {
    const reverseCode = await Location.reverseGeocodeAsync(location.coords);
    console.log(reverseCode);
    alert(
      `${reverseCode[0].name} ${reverseCode[0].street} ${reverseCode[0].city} ${reverseCode[0].region} ${reverseCode[0].country}`
    );
  };
  //calculate distance method
  const calculateDistance = () => {
    console.log("location");
    console.log(location);
    console.log("destination");
    console.log(destination);
    const distance = getDistance(
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      {
        latitude: destination[0].latitude,
        longitude: destination[0].longitude,
      }
    );
    console.log(distance);
    alert(distance / 1609);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type an address"
        value={address}
        onChangeText={setAddress}
      ></TextInput>
      <Button title="Set Destination" onPress={geoCode}></Button>
      {destination && (
        <Button title="Calculate Distance" onPress={calculateDistance}></Button>
      )}
      <Button
        title="Reverse code current Location"
        onPress={reverseGeoCode}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
