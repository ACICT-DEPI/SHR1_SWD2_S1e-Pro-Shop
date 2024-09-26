const products = [
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5.0,
    numReviews: 12,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 79.99,
    countInStock: 7,
    rating: 4.9,
    numReviews: 10,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 49.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 12,
  },
  {
    name: "Full HD Smart TV 102 cm (40”)",
    image: "/images/smart-tv.webp",
    description:
      "Full HD Smart TV with Harman/Kardon speaker system, wireless connection to mobile devices, 3 HDMI inputs, 2 USB ports for multimedia playback, and HD tuner DVB-T/T2/C/S/S2 (MPEG4 + HEVC/H.265 (10-bit)).",
    brand: "Sharp",
    category: "Electronics",
    price: 499.99,
    countInStock: 8,
    rating: 4.4,
    numReviews: 25,
  },
  {
    name: "Wireless Noise-Canceling Headphones",
    image: "/images/headphones.webp",
    description:
      "Experience immersive sound with wireless noise-canceling headphones. Ideal for music lovers and travelers alike, offering up to 30 hours of battery life.",
    brand: "Bose",
    category: "Electronics",
    price: 299.99,
    countInStock: 15,
    rating: 4.2,
    numReviews: 42,
  },
  {
    name: "Curology Custom Skincare Formula",
    image: "/images/curology-wK0h-mlvfuc-unsplash.webp",
    description:
      "Personalized skincare formula designed to target acne, dark spots, and uneven skin texture. Tailored to your skin's unique needs.",
    brand: "Curology",
    category: "Beauty",
    price: 59.99,
    countInStock: 20,
    rating: 5.0,
    numReviews: 84,
  },
  {
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/iphone12.webp",
    description:
      "The iPhone 12 features a 6.1-inch Super Retina XDR display, A14 Bionic chip, 5G capability, and an advanced dual-camera system for stunning photos and videos.",
    brand: "Apple",
    category: "Electronics",
    price: 799.99,
    countInStock: 10,
    rating: 4.9,
    numReviews: 128,
  },
  {
    name: "Mirrorless 20.1MP Camera",
    image: "/images/camera1.webp",
    description:
      "Compact mirrorless camera with 20.1 megapixels, 4K video recording, and fast autofocus for capturing sharp, high-quality images.",
    brand: "Sony",
    category: "Electronics",
    price: 899.99,
    countInStock: 5,
    rating: 2.8,
    numReviews: 51,
  },
  {
    name: "4K Ultra HD Action Camera",
    image: "/images/camera2.webp",
    description:
      "Capture all your adventures with this 4K Ultra HD action camera. Waterproof, durable, and perfect for recording high-speed activities with crystal-clear resolution.",
    brand: "GoPro",
    category: "Electronics",
    price: 1349.99,
    countInStock: 12,
    rating: 4.0,
    numReviews: 65,
  },
  {
    name: "Samsung 810L Family Hub Smart Refrigerator",
    image: "/images/refrigerator.webp",
    description:
      "The ultimate kitchen companion, this 810L Family Hub Smart Refrigerator features French doors, Wi-Fi connectivity, and a touch display for managing your groceries, recipes, and more.",
    brand: "Samsung",
    category: "Electronics",
    price: 2899.99,
    countInStock: 3,
    rating: 4.4,
    numReviews: 48,
  },
  {
    name: "Bosch Serie | 6 Bag Less Vacuum Cleaner",
    image: "/images/vacuum_cleaner.webp",
    description:
      "Powerful 2200 W bagless vacuum cleaner with a 2.4 L capacity. Designed for efficient cleaning with a sleek black, silver, and clear finish.",
    brand: "Bosch",
    category: "Electronics",
    price: 299.99,
    countInStock: 10,
    rating: 3.5,
    numReviews: 36,
  },
  {
    name: "Moulinex Blendeo Blender with Grinder and Grater",
    image: "/images/blender.webp",
    description:
      "Versatile 1.5 L blender with 450.0 W power. Includes a grinder and grater for all your blending and food preparation needs. Sleek white design.",
    brand: "Moulinex",
    category: "Electronics",
    price: 79.99,
    countInStock: 15,
    rating: 4.4,
    numReviews: 28,
  },
  {
    name: "Haier Front Load Washing Machine with Dryer",
    image: "/images/washing_machine.webp",
    description:
      "Efficient front load washing machine with a 10.5 kg washer and 6 kg dryer. Features a Direct Motion Inverter Motor for quiet and reliable operation. Elegant black and silver design.",
    brand: "Haier",
    category: "Electronics",
    price: 999.99,
    countInStock: 5,
    rating: 3.6,
    numReviews: 32,
  },
  {
    name: "Ultimate Makeup Collection",
    image: "/images/makeup-collection.webp",
    description:
      "A complete makeup collection featuring a variety of essential cosmetics, including eyeshadows, lip colors, blushes, and a highlighter for any look.",
    brand: "Beauty Bliss",
    category: "Beauty",
    price: 99.99,
    countInStock: 25,
    rating: 4.0,
    numReviews: 102,
  },
  {
    name: "Complete Makeup Kit",
    image: "/images/makeup-kit.webp",
    description:
      "This comprehensive makeup kit includes everything you need for a flawless look. Contains foundation, eyeshadow palettes, blush, lip gloss, mascara, and brushes, all in a chic portable case.",
    brand: "Glamour Essentials",
    category: "Beauty",
    price: 149.99,
    countInStock: 25,
    rating: 4.3,
    numReviews: 75,
  },
  {
    name: "Complete Makeup Kit 02",
    image: "/images/makeup-kit02.webp",
    description:
      "This comprehensive makeup kit includes everything you need for a flawless look. Contains foundation, eyeshadow palettes, blush, lip gloss, mascara, and brushes, all in a chic portable case.",
    brand: "Glamour Essentials",
    category: "Beauty",
    price: 119.99,
    countInStock: 0,
    rating: 3.5,
    numReviews: 75,
  },
  {
    name: "Hair Care ",
    image: "/images/hair-care.webp",
    description:
      "This Ultimate Hair Care Set includes a nourishing shampoo, a revitalizing conditioner, a deep conditioning mask, and a lightweight styling cream. Perfect for all hair types to achieve healthy, shiny, and manageable hair.",
    brand: "HairMust",
    category: "Beauty",
    price: 29.99,
    countInStock: 5,
    rating: 4.3,
    numReviews: 63,
  },
  {
    name: "Gentle Baby Oil",
    image: "/images/baby-oil.webp",
    description:
      "Gentle Baby Oil is formulated with pure natural oils to nourish and moisturize your baby's delicate skin. Ideal for use during baby massage, it helps to keep skin soft, smooth, and hydrated.",
    brand: "BabyCare",
    category: "Beauty",
    price: 14.99,
    countInStock: 40,
    rating: 4.4,
    numReviews: 100,
  },
  {
    name: "Classic Dining Table and Chair Set",
    image: "/images/table-chair-set.webp",
    description:
      "This classic dining table and chair set features a beautifully crafted wooden table with a smooth finish, accompanied by four matching chairs. Perfect for family meals or entertaining guests, it adds elegance to any dining area.",
    brand: "HomeStyle",
    category: "Home",
    price: 99.99,
    countInStock: 8,
    rating: 3.5,
    numReviews: 30,
  },
  {
    name: "Modern Glass Dining Table",
    image: "/images/dining-table.webp",
    description:
      "A stylish glass dining table that seats six people, featuring a sleek design with a metal frame. Ideal for contemporary dining rooms, it adds a touch of elegance and sophistication.",
    brand: "HomeStyle",
    category: "Home",
    price: 699.99,
    countInStock: 5,
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "Modern Kitchen Set",
    image: "/images/modern-kitchen-set.webp",
    description:
      "This modern kitchen set includes a spacious countertop, stylish cabinets, and a built-in oven and stove. Designed for functionality and elegance, it's perfect for any home chef looking to enhance their cooking space.",
    brand: "HomeDesign",
    category: "Home",
    price: 2999.99,
    countInStock: 5,
    rating: 5.0,
    numReviews: 98,
  },
  {
    name: "Modern Comfortable Living Room Set",
    image: "/images/modern-living-room.webp",
    description:
      "This modern living room set includes a stylish sofa and matching chairs, designed to fit any decor style. Made with high-quality fabric and comfortable cushions, it's perfect for everyday use.",
    brand: "HomeStyle",
    category: "Home",
    price: 299.99,
    countInStock: 10,
    rating: 4.4,
    numReviews: 25,
  },
  {
    name: "Luxury King Size Bed",
    image: "/images/luxury-king-bed.webp",
    description:
      "This luxury king size bed features a stylish upholstered headboard and a sturdy wooden frame. Designed for comfort and elegance, it provides ample space for a restful night's sleep.",
    brand: "SleepWell",
    category: "Home",
    price: 899.99,
    countInStock: 2,
    rating: 4.8,
    numReviews: 38,
  },
  {
    name: "Modern Queen Size Bed",
    image: "/images/modern-queen-bed.webp",
    description:
      "This modern queen size bed features a sleek design with a tufted headboard and a durable wooden frame. Perfect for contemporary bedrooms, it combines style and comfort for a restful sleep experience.",
    brand: "HomeStyle",
    category: "Home",
    price: 749.99,
    countInStock: 3,
    rating: 4.7,
    numReviews: 25,
  },
  {
    name: "Multi-Tier Kitchen Storage Shelf",
    image: "/images/kitchen-shelf.webp",
    description:
      "This multi-tier kitchen storage shelf is perfect for organizing pots, pans, spices, and kitchen accessories. It features durable metal construction with wooden shelves, offering both style and functionality for your kitchen space.",
    brand: "KitchenPro",
    category: "Home",
    price: 129.99,
    countInStock: 15,
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "Luxury Living Room Collection",
    image: "/images/living-room-collection.webp",
    description:
      "This Luxury Living Room Collection features a stylish sofa, matching armchairs, and a contemporary coffee table, perfect for enhancing your home decor. Crafted from high-quality materials, this collection offers both comfort and elegance to elevate your living space.",
    brand: "Home Decor Co.",
    category: "Home",
    price: 1999.99,
    countInStock: 5,
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Professional Beauty Brush Set",
    image: "/images/beauty-brushes.webp",
    description:
      "This Professional Beauty Brush Set includes 10 high-quality brushes designed for flawless makeup application. Each brush is crafted with soft, durable bristles and ergonomic handles for easy use, making it a must-have for makeup enthusiasts.",
    brand: "Glamour Pro",
    category: "Beauty",
    price: 99.99,
    countInStock: 50,
    rating: 4.4,
    numReviews: 85,
  },
  {
    name: "Revitalizing Facial Serum",
    image: "/images/facial-serum.webp",
    description:
      "This Revitalizing Facial Serum is enriched with vitamins and antioxidants to hydrate and rejuvenate your skin. Designed to reduce fine lines and improve skin texture, it leaves your complexion looking radiant and youthful.",
    brand: "GlowSkin",
    category: "Beauty",
    price: 34.99,
    countInStock: 25,
    rating: 4.3,
    numReviews: 60,
  },
  {
    name: "Apple MacBook Air 13-inch",
    image: "/images/macbook-air.webp",
    description:
      "The Apple MacBook Air features a sleek design, a stunning Retina display, and the powerful Apple M1 chip, providing exceptional performance and battery life. Perfect for both work and play, it comes with macOS pre-installed.",
    brand: "Apple",
    category: "Electronics",
    price: 999.99,
    countInStock: 8,
    rating: 4.9,
    numReviews: 150,
  },
];

export default products;