class Category {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

class Product {
  constructor(
    id,
    categoryIds,
    name,
    price,
    description,
    imageUrl,
    stock,
    features
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.stock = stock;
    this.features = features;
  }
}
export const CATEGORIES = [
  new Category("c1", "Toys", "#f5428d"),
  new Category("c2", "Electronics", "#f54242"),
  new Category("c3", "Furniture", "#f5a442"),
  new Category("c4", "Books", "#f5d142"),
  new Category("c5", "Clothing", "#368dff"),
  new Category("c6", "Gardening", "#41d95d"),
  new Category("c7", "Sports", "#9eecff"),
  new Category("c8", "Music", "#b9ffb0"),
  new Category("c9", "Health & Beauty", "#ffc7ff"),
  new Category("c10", "Automotive", "#47fced"),
  new Category("c11", "Kitchenware", "#ff6f69"),
  new Category("c12", "Computers", "#c73866"),
  new Category("c13", "Mobile Accessories", "#6f69ff"),
  new Category("c14", "Outdoor", "#69ff7a"),
];
export const PRODUCTS = [
  new Product(
    "p1",
    ["c2", "c12"],
    "High-Performance Laptop",
    1200,
    "Powerful laptop perfect for gaming and professional work.",
    "https://placehold.co/300x200",
    35,
    ["16GB RAM", "1TB SSD", "Intel Core i7 Processor"]
  ),
  new Product(
    "p2",
    ["c1", "c5"],
    "Interactive Learning Toy",
    29.99,
    "Educational toy for children, combining fun and learning.",
    "https://placehold.co/300x200",
    80,
    ["Ages 3-6", "Battery Operated", "Teaches Basic Math"]
  ),
  new Product(
    "p3",
    ["c3"],
    "Modern Sofa Set",
    899.99,
    "Stylish and comfortable sofa set for your living room.",
    "https://placehold.co/300x200",
    15,
    ["Leather Material", "Seats 4", "Includes Throw Pillows"]
  ),
  new Product(
    "p4",
    ["c7", "c14"],
    "Mountain Bike",
    499.99,
    "Durable and rugged mountain bike for outdoor enthusiasts.",
    "https://placehold.co/300x200",
    20,
    ["All-Terrain Tires", "21 Speeds", "Aluminum Frame"]
  ),
  new Product(
    "p5",
    ["c9", "c13"],
    "Wireless Earbuds",
    59.99,
    "Compact and high-quality wireless earbuds.",
    "https://placehold.co/300x200",
    50,
    ["Bluetooth 5.0", "Noise Cancellation", "5 Hours Battery Life"]
  ),
  new Product(
    "p6",
    ["c2", "c13"],
    "Smartwatch with Fitness Tracker",
    199.99,
    "Advanced smartwatch with health and fitness tracking features.",
    "https://placehold.co/300x200",
    40,
    ["Heart Rate Monitor", "GPS", "Water Resistant"]
  ),
  new Product(
    "p7",
    ["c11"],
    "Stainless Steel Cookware Set",
    129.99,
    "High-quality stainless steel cookware for your kitchen.",
    "https://placehold.co/300x200",
    30,
    ["Dishwasher Safe", "Oven Safe", "Includes 5 Pieces"]
  ),
  new Product(
    "p8",
    ["c4", "c5"],
    "Bestselling Novel",
    17.99,
    "Captivating novel by a bestselling author.",
    "https://placehold.co/300x200",
    100,
    ["Hardcover Edition", "320 Pages", "Critically Acclaimed"]
  ),
  new Product(
    "p9",
    ["c3"],
    "Elegant Table Lamp",
    45.99,
    "Beautiful table lamp to enhance your home decor.",
    "https://placehold.co/300x200",
    60,
    ["LED Bulb Included", "Adjustable Brightness", "Modern Design"]
  ),
  new Product(
    "p10",
    ["c1", "c5"],
    "Board Game for Families",
    34.99,
    "Fun and engaging board game for the whole family.",
    "https://placehold.co/300x200",
    70,
    ["2-6 Players", "Ages 7+", "60 Minutes Playtime"]
  ),
  new Product(
    "p11",
    ["c6", "c14"],
    "Gardening Tool Set",
    49.99,
    "Essential tools for gardening enthusiasts.",
    "https://placehold.co/300x200",
    50,
    ["Ergonomic Handles", "Rust Resistant", "Includes Storage Bag"]
  ),
  new Product(
    "p12",
    ["c10", "c14"],
    "Car Cleaning Kit",
    29.99,
    "Complete kit for keeping your car clean and shiny.",
    "https://placehold.co/300x200",
    40,
    ["Wash Mitt", "Wax", "Tire Cleaner"]
  ),
  new Product(
    "p13",
    ["c2", "c12"],
    "Desktop Computer",
    800,
    "Reliable and powerful desktop computer.",
    "https://placehold.co/300x200",
    25,
    ["8GB RAM", "500GB HDD", "Quad-Core Processor"]
  ),
  new Product(
    "p14",
    ["c8", "c13"],
    "Acoustic Guitar",
    199.99,
    "High-quality acoustic guitar for musicians.",
    "https://placehold.co/300x200",
    30,
    ["Spruce Top", "Steel Strings", "Includes Gig Bag"]
  ),
  new Product(
    "p15",
    ["c9", "c11"],
    "Organic Skincare Set",
    59.99,
    "Natural and organic skincare products.",
    "https://placehold.co/300x200",
    45,
    ["Paraben-Free", "Suitable for All Skin Types", "Includes 3 Products"]
  ),
  new Product(
    "p16",
    ["c7", "c14"],
    "Yoga Mat",
    24.99,
    "Non-slip yoga mat for your fitness routine.",
    "https://placehold.co/300x200",
    60,
    ["Eco-Friendly Material", "Carry Strap Included", "6mm Thickness"]
  ),
  new Product(
    "p17",
    ["c5", "c9"],
    "Designer Sunglasses",
    129.99,
    "Stylish sunglasses from a renowned designer.",
    "https://placehold.co/300x200",
    35,
    ["UV Protection", "Polarized Lenses", "Includes Case"]
  ),
  new Product(
    "p18",
    ["c3"],
    "Wall Art Canvas",
    75.99,
    "Beautiful canvas print to decorate your walls.",
    "https://placehold.co/300x200",
    20,
    ["High-Quality Print", "Ready to Hang", "Multiple Sizes Available"]
  ),
  new Product(
    "p19",
    ["c1", "c4"],
    "Educational Children’s Book",
    12.99,
    "Engaging and educational book for young readers.",
    "https://placehold.co/300x200",
    80,
    ["Illustrated", "Ages 4-8", "32 Pages"]
  ),
  new Product(
    "p20",
    ["c10", "c14"],
    "Portable Air Compressor",
    59.99,
    "Handy air compressor for inflating tires.",
    "https://placehold.co/300x200",
    40,
    ["12V Power", "Digital Gauge", "Auto Shut-off"]
  ),
  new Product(
    "p21",
    ["c2", "c12"],
    "Tablet with Stylus",
    499.99,
    "Versatile tablet ideal for work and play.",
    "https://placehold.co/300x200",
    45,
    ["10-inch Display", "32GB Storage", "Includes Stylus Pen"]
  ),
  new Product(
    "p22",
    ["c1", "c5"],
    "Plush Toy Bear",
    19.99,
    "Soft and cuddly plush bear for kids.",
    "https://placehold.co/300x200",
    70,
    ["Machine Washable", "Safe for All Ages", "12 Inches Tall"]
  ),
  new Product(
    "p23",
    ["c3"],
    "Decorative Throw Pillows",
    39.99,
    "Stylish throw pillows to accent your furniture.",
    "https://placehold.co/300x200",
    50,
    ["Set of 2", "Removable Covers", "Various Patterns"]
  ),
  new Product(
    "p24",
    ["c7", "c14"],
    "Fitness Tracker Watch",
    99.99,
    "Track your fitness goals with this smart watch.",
    "https://placehold.co/300x200",
    40,
    ["Heart Rate Monitoring", "Waterproof", "Sleep Tracking"]
  ),
  new Product(
    "p25",
    ["c9", "c13"],
    "Bluetooth Speaker",
    59.99,
    "Portable Bluetooth speaker with great sound quality.",
    "https://placehold.co/300x200",
    55,
    ["10-Hour Battery Life", "Water-Resistant", "Built-in Microphone"]
  ),
];
