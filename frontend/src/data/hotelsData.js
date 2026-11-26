
import hotel11 from "../assets/hotels/hotel0101.png";
import hotel12 from "../assets/hotels/hotel0102.png";
import hotel13 from "../assets/hotels/hotel0103.png";
import hotel14 from "../assets/hotels/hotel0104.png";
import hotel15 from "../assets/hotels/hotel0105.png";

import hotel2 from "../assets/hotels/hotel-2.jpg";
import hotel3 from "../assets/hotels/hotel-3.jpg";
import hotel4 from "../assets/hotels/hotel-4.jpg";

// Reusable room options
const createRoomOptions = (basePrice, image) => [
  {
    id: "single",
    name: "Single Bed Room",
    bedType: "1 Single Bed",
    maxGuests: 1,
    price: Math.round(basePrice * 0.75),
    originalPrice: Math.round(basePrice * 0.9),
    image,
    description:
      "Comfortable room suitable for solo travellers.",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Attached Bathroom",
      "Room Service",
    ],
  },
  {
    id: "double",
    name: "Double Bed Room",
    bedType: "1 Double Bed",
    maxGuests: 2,
    price: basePrice,
    originalPrice: Math.round(basePrice * 1.15),
    image,
    description:
      "Spacious room with a comfortable double bed for couples.",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Attached Bathroom",
      "TV",
      "Room Service",
    ],
  },
  {
    id: "triple",
    name: "Triple Bed Room",
    bedType: "3 Single Beds",
    maxGuests: 3,
    price: Math.round(basePrice * 1.35),
    originalPrice: Math.round(basePrice * 1.5),
    image,
    description:
      "Large room with three beds, ideal for small families and groups.",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Attached Bathroom",
      "TV",
      "Extra Space",
      "Room Service",
    ],
  },
];

export const hotelsData = [
  {
    id: 1,
    name: "Hotel Nakshatra INN",

    image: hotel11,

    gallery: [
      hotel11,
      hotel12,
      hotel13,
      hotel14,
      hotel15,
    ],

    location: "Gangtok",
    address: "M.P. Golai, Tadong, Gangtok, Sikkim 737102",
    category: "Hotels",
    rating: 4.0,
    reviews: 120,
    originalPrice: 4593,
    price: 2775,
    discount: 20,

    overview:
      "Enjoy a comfortable stay with beautiful mountain views, modern rooms and premium hospitality. The hotel offers a relaxing atmosphere for families and couples.",

    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Parking",
      "Room Service",
      "Air Conditioning",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "02:00 PM",
    checkOutTime: "12:00 PM",

    taxes: 184,
    rooms: createRoomOptions(3675, hotel11),
  },

  {
    id: 2,
    name: "Valmere Magnolia Boutique Hotel",
    image: hotel2,
    gallery: [hotel2],
    location: "Pelling",
    address: "Near Old State Bank Of India, Lower Pelling, 737113",
    category: "Hotels",
    rating: 4.0,
    reviews: 95,
    originalPrice: 4502,
    price: 3602,
    discount: 20,

    overview:
      "Experience luxury and comfort in a peaceful boutique hotel. Enjoy well-maintained rooms, modern facilities and a relaxing stay in Pelling.",

    amenities: [
      "Free WiFi",
      "Restaurant",
      "Room Service",
      "Parking",
      "Air Conditioning",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "02:00 PM",
    checkOutTime: "12:00 PM",

    taxes: 180,
    rooms: createRoomOptions(3602, hotel2),
  },

  {
    id: 3,
    name: "Mount Amara Hotel And Spa",
    image: hotel3,
    gallery: [hotel3],
    location: "Siliguri",
    address: "Siliguri, West Bengal, India",
    category: "Hotels",
    rating: 3.0,
    reviews: 80,
    originalPrice: 2748,
    price: 2199,
    discount: 20,

    overview:
      "A relaxing stay with modern rooms, comfortable accommodation and convenient city access. Suitable for leisure and business travellers.",

    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "Air Conditioning",
      "Room Service",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "02:00 PM",
    checkOutTime: "12:00 PM",

    taxes: 110,
    rooms: createRoomOptions(2199, hotel3),
  },

  {
    id: 4,
    name: "Mountain View Premium Resort",
    image: hotel4,
    gallery: [hotel4],
    location: "Gangtok",
    address: "Gangtok, Sikkim, India",
    category: "Resorts",
    rating: 5.0,
    reviews: 150,
    originalPrice: 6500,
    price: 5200,
    discount: 20,

    overview:
      "Enjoy a premium mountain resort experience with scenic surroundings, comfortable rooms and excellent hospitality.",

    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Parking",
      "Room Service",
      "Air Conditioning",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "02:00 PM",
    checkOutTime: "12:00 PM",

    taxes: 260,
    rooms: createRoomOptions(5200, hotel4),
  },
];
