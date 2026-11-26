
import h11 from "../assets/hotels/h11.png";
import h12 from "../assets/hotels/h12.png";
import h13 from "../assets/hotels/h13.png";
import h14 from "../assets/hotels/h14.png";
import h15 from "../assets/hotels/h15.png";

import h21 from "../assets/hotels/h21.png";
import h22 from "../assets/hotels/h22.png";
import h23 from "../assets/hotels/h23.png";
import h24 from "../assets/hotels/h24.png";
import h25 from "../assets/hotels/h25.png";

import h31 from "../assets/hotels/h31.png";
import h32 from "../assets/hotels/h32.png";
import h33 from "../assets/hotels/h33.png";
import h34 from "../assets/hotels/h34.png";
import h35 from "../assets/hotels/h35.png";

import h41 from "../assets/hotels/h41.png";
import h42 from "../assets/hotels/h42.png";
import h43 from "../assets/hotels/h43.png";
import h44 from "../assets/hotels/h44.png";
import h45 from "../assets/hotels/h45.png";

import h51 from "../assets/hotels/h51.png";
import h52 from "../assets/hotels/h52.png";
import h53 from "../assets/hotels/h53.png";
import h54 from "../assets/hotels/h54.png";
import h55 from "../assets/hotels/h55.png";


// Reusable room options
const createRoomOptions = (basePrice) => [
  {
    id: "single",
    name: "Single Bed Room",
    bedType: "1 Single Bed",
    maxGuests: 1,
    price: basePrice,
    originalPrice: Math.round(basePrice * 1.1),
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
    price: Math.round(basePrice * 1.25),
    originalPrice: Math.round(basePrice * 1.35),
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
    price: Math.round(basePrice * 1.45),
    originalPrice: Math.round(basePrice * 1.45),
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
    name: "Hotel Gujarat Heritage",

    image: h11,

    gallery: [
      h11,
      h12,
      h13,
      h14,
      h15,
    ],

    location: "Ujjain",
    address: "Ujjain, M.P.",
    category: "Hotels",
    rating: 4.0,
    reviews: 120,
    originalPrice: 2499,
    price: 2199,
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
    rooms: createRoomOptions(2199),
  },

  {
    id: 2,
    name: "Hotel Maheshwari Inn",

    image: h21,

    gallery: [
      h21,
      h22,
      h23,
      h24,
      h25,
    ],

    location: "Ujjain",
    address: "Dewas Gate, Ujjain, M.P.",
    category: "Hotels",
    rating: 4.2,
    reviews: 145,
    originalPrice: 2799,
    price: 2399,
    discount: 14,

    overview:
      "Enjoy a peaceful and comfortable stay near the famous Mahakaleshwar Temple. The hotel offers spacious rooms, modern facilities and convenient access to major attractions of Ujjain.",

    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "Room Service",
      "Air Conditioning",
      "24/7 Front Desk",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "12:00 PM",
    checkOutTime: "11:00 AM",

    taxes: 200,
    rooms: createRoomOptions(2399),
  },

  {
    id: 3,
    name: "Hotel Pitambara Residency",

    image: h31,

    gallery: [
      h31,
      h32,
      h33,
      h34,
      h35,
    ],

    location: "Ujjain",
    address: "Jaisinghpura, Ujjain, M.P.",
    category: "Hotels",
    rating: 4.1,
    reviews: 98,
    originalPrice: 2199,
    price: 1999,
    discount: 13,

    overview:
      "A comfortable accommodation option for families and pilgrims visiting Ujjain. Enjoy clean rooms, friendly hospitality and easy connectivity to popular temples and local markets.",

    amenities: [
      "Free WiFi",
      "Parking",
      "Room Service",
      "Air Conditioning",
      "Family Rooms",
      "Laundry Service",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "01:00 PM",
    checkOutTime: "11:00 AM",

    taxes: 180,
    rooms: createRoomOptions(1999),
  },

  {
    id: 4,
    name: "Hotel dev kripa",

    image: h41,

    gallery: [
      h41,
      h42,
      h43,
      h44,
      h45,
    ],

    location: "Ujjain",
    address: "Jaisinghpura Road, Ujjain, M.P.",
    category: "Hotels",
    rating: 4.3,
    reviews: 175,
    originalPrice: 2499,
    price: 2099,
    discount: 13,

    overview:
      "Experience a relaxing stay with well-maintained rooms and modern amenities. Suitable for families and travellers looking for a comfortable stay during their Ujjain visit.",

    amenities: [
      "Free WiFi",
      "Restaurant",
      "Parking",
      "Room Service",
      "Air Conditioning",
      "Breakfast",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "12:00 PM",
    checkOutTime: "10:00 AM",

    taxes: 220,
    rooms: createRoomOptions(2099),
  },

  {
    id: 5,
    name: "Hotel Padmawati Palace",

    image: h51,

    gallery: [
      h51,
      h52,
      h53,
      h54,
      h55,
    ],

    location: "Ujjain",
    address: "Malipura, Ujjain, M.P.",
    category: "Hotels",
    rating: 4.0,
    reviews: 110,
    originalPrice: 2199,
    price: 1999,
    discount: 16,

    overview:
      "A budget-friendly stay offering comfortable accommodation for pilgrims and families. Conveniently located for exploring the spiritual attractions and heritage sites of Ujjain.",

    amenities: [
      "Free WiFi",
      "Parking",
      "Room Service",
      "Air Conditioning",
      "Family Rooms",
      "24/7 Front Desk",
    ],

    cancellationPolicy:
      "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

    checkInTime: "12:00 PM",
    checkOutTime: "11:00 AM",

    taxes: 150,
    rooms: createRoomOptions(1999),
  },

  // {
  //   id: 6,
  //   name: "Hotel Avantika Comfort",

  //   image: h61,

  //   gallery: [
  //     h61,
  //     h62,
  //     h63,
  //     h64,
  //     h65,
  //   ],

  //   location: "Ujjain",
  //   address: "Nanakheda, Ujjain, M.P.",
  //   category: "Hotels",
  //   rating: 4.4,
  //   reviews: 190,
  //   originalPrice: 3299,
  //   price: 2899,
  //   discount: 12,

  //   overview:
  //     "Enjoy a pleasant stay with spacious accommodation, contemporary interiors and convenient facilities. Ideal for families and travellers exploring the temples and attractions of Ujjain.",

  //   amenities: [
  //     "Free WiFi",
  //     "Restaurant",
  //     "Parking",
  //     "Room Service",
  //     "Air Conditioning",
  //     "Breakfast",
  //   ],

  //   cancellationPolicy:
  //     "Free cancellation up to 24 hours before check-in. Cancellation charges may apply after the permitted period.",

  //   checkInTime: "02:00 PM",
  //   checkOutTime: "12:00 PM",

  //   taxes: 250,
  //   rooms: createRoomOptions(2899),
  // },

];
