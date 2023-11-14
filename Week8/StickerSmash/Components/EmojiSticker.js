import { View, Image } from 'react-native';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
// creating an animated image and animated view component
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

export default function EmojiSticker({ imageSize, stickerSource }) {
    //set initial values for x and y position of the emoji
    //these will be used in dragging the emoji around the screen
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  //set initial value for the size of the emoji
  //this will be used in the double tap gesture
  const scaleImage = useSharedValue(imageSize);
    //This animated style will be used to scale the image
    //it disctates how the image animates, this case a spring animation
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });
  //when the double table guesture is activated
  //the size of the image will double
  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });
  //when the drag gesture is activated
  //the x and y position of the image will be updated
  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
        //set the initial x and y position of the image
        //context provides the initial x and y position
      context.translateX = translateX.value;
      //console.log(context.translateX);
      context.translateY = translateY.value;
      //console.log(context.translateY);
    },
    onActive: (event, context) => {
        //as the user drag the image, update the x and y position
      translateX.value = event.translationX + context.translateX;
      //console.log(translateX.value);
      translateY.value = event.translationY + context.translateY;
      //console.log(translateY.value);
    },
  });
  //the transform array is used to update the x and y position of the image
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
}
