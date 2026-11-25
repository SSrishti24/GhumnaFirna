
import himachal from "../assets/packages/himachal.png";
import kashmir from "../assets/packages/kashmir.png";
import rajasthan from "../assets/packages/rajasthan.png";

export const packagesData = [
  {
    id: 1,
    title: "Himachal Special",
    duration: "2 Nights / 3 Days",
    image: himachal,
    price: 7599,
    location: "Himachal Pradesh",
    stayPlan: "2N Shimla",

    // Person-wise pricing (per person)
    pricing: {
      perPerson: [
        { people: 1, price: 10000 },
        { people: 2, price: 6000 },
        { people: 3, price: 5000 },
        { people: 4, price: 4000 },
        { people: 5, price: 3500 },
        { people: 6, price: 3300 },
        { people: 7, price: 3000 },
      ],

      group: 2800,
    },

    overview:
      "Explore the beautiful landscapes of Himachal Pradesh with a memorable stay in Shimla. Enjoy scenic mountain views and a comfortable travel experience.",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla & Local Sightseeing",
        activities: [
          "Arrive at Shimla and meet your travel representative",
          "Transfer to the hotel and complete check-in",
          "Visit Mall Road and The Ridge",
          "Explore Christ Church and nearby attractions",
          "Overnight stay in Shimla",
        ],
      },
      {
        day: 2,
        title: "Kufri Excursion",
        activities: [
          "Enjoy breakfast at the hotel",
          "Visit Kufri and enjoy its scenic mountain views",
          "Explore Himalayan Nature Park",
          "Visit Jakhoo Temple",
          "Return to Shimla for an overnight stay",
        ],
      },
      {
        day: 3,
        title: "Departure from Shimla",
        activities: [
          "Enjoy breakfast at the hotel",
          "Complete hotel check-out",
          "Transfer for your onward journey",
        ],
      },
    ],

    // YAHAN ADD KARO
    inclusions: [
      "Accommodation on Twin sharing basis",
      "Daily Breakfast and dinner in hotel.",
      "Pick and drop from Srinagar.",
      "All Transfers by Pvt Car",
      "Shikara ride",
      "All applicable hotel taxes."
    ],

    exclusions: [
      "Any Airfare",
      "Anything not mentioned in Inclusions.",
      "Any expenses for optional activities.",
      "Items of personal nature like portage, tips, laundry.",
      "GST 5%",
      "Entry Fees To Monuments And Palaces.",
    ],

    additionalInfo: {
      travelInformation: [
        "The deal is valid for travel till 31 March 2027.",
        "Rates are not valid from 20th December to 15th January, during long weekends, or on blackout dates such as Holi, Diwali, and other peak holiday periods."
      ],

      bookingPolicy: [
        "At the time of Booking: 50% of total package cost",
        "D-30: 75% of package cost",
        "D-15: 100% of package cost"
      ],

      otherInformation: [
        "Limited Time Deal"
      ]
    },
  },

  {
    id: 2,
    title: "Kashmir Special",
    duration: "4 Nights / 5 Days",
    image: kashmir,
    price: 12999,
    location: "Srinagar | Pahalgam | Gulmarg",
    stayPlan: "2N Srinagar | 1N Pahalgam | 1N Gulmarg",

    // Person-wise pricing (per person)
    pricing: {
      perPerson: [
        { people: 1, price: 10000 },
        { people: 2, price: 6000 },
        { people: 3, price: 5000 },
        { people: 4, price: 4000 },
        { people: 5, price: 3500 },
        { people: 6, price: 3300 },
        { people: 7, price: 3000 },
      ],

      group: 2800,
    },

    overview:
      "Discover the beauty of Kashmir with scenic lakes, lush valleys, snow-covered mountains and memorable sightseeing experiences.",

    itinerary: [
      {
        day: 1,
        title: "Srinagar Arrival & Sightseeing",
        activities: [
          "Arrive at Srinagar airport and meet your representative",
          "Transfer to the hotel and complete check-in",
          "Enjoy a Shikara ride on Dal Lake",
          "Visit Mughal Gardens and Shankaracharya Temple",
          "Explore local handicraft shops",
          "Overnight stay in Srinagar",
        ],
      },
      {
        day: 2,
        title: "Sonamarg Excursion",
        activities: [
          "Enjoy breakfast at the hotel",
          "Proceed towards the beautiful Sonamarg valley",
          "Enjoy scenic views of mountains and rivers",
          "Explore the destination at your own pace",
          "Return to Srinagar for an overnight stay",
        ],
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg",
        activities: [
          "Enjoy breakfast and hotel check-out",
          "Drive towards Gulmarg",
          "Enjoy beautiful mountain and meadow views",
          "Explore Gulmarg and optional Gondola ride",
          "Overnight stay in Gulmarg",
        ],
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam",
        activities: [
          "Enjoy breakfast at the hotel",
          "Check out and drive towards Pahalgam",
          "Enjoy the scenic countryside and valley views",
          "Explore the local market and surroundings",
          "Overnight stay in Pahalgam",
        ],
      },
      {
        day: 5,
        title: "Pahalgam to Srinagar & Departure",
        activities: [
          "Enjoy breakfast at the hotel",
          "Complete hotel check-out",
          "Drive towards Srinagar airport",
          "Continue your onward journey with beautiful memories",
        ],
      },
    ],

    // YAHAN ADD KARO
    inclusions: [
      "Accommodation on Twin sharing basis",
      "Daily Breakfast and dinner in hotel.",
      "Pick and drop from Srinagar.",
      "All Transfers by Pvt Car",
      "Shikara ride",
      "All applicable hotel taxes."
    ],

    exclusions: [
      "Any Airfare",
      "Anything not mentioned in Inclusions.",
      "Any expenses for optional activities.",
      "Items of personal nature like portage, tips, laundry.",
      "GST 5%",
      "Entry Fees To Monuments And Palaces.",
    ],
    additionalInfo: {
  travelInformation: [
    "The deal is valid for travel till 31 March 2027.",
    "Rates are not valid from 20th December to 15th January, during long weekends, or on blackout dates such as Holi, Diwali, and other peak holiday periods."
  ],

  bookingPolicy: [
    "At the time of Booking: 50% of total package cost",
    "D-30: 75% of package cost",
    "D-15: 100% of package cost"
  ],

  otherInformation: [
    "Limited Time Deal"
  ]
},
  },

  {
    id: 3,
    title: "Rajasthan Special",
    duration: "4 Nights / 5 Days",
    image: rajasthan,
    price: 9999,
    location: "Rajasthan",
    stayPlan: "2N Jaipur | 2N Udaipur",

    // Person-wise pricing (per person)
    pricing: {
      perPerson: [
        { people: 1, price: 10000 },
        { people: 2, price: 6000 },
        { people: 3, price: 5000 },
        { people: 4, price: 4000 },
        { people: 5, price: 3500 },
        { people: 6, price: 3300 },
        { people: 7, price: 3000 },
      ],

      group: 2800,
    },

    overview:
      "Experience Rajasthan's royal heritage, beautiful palaces, historic forts and colourful local culture.",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur & Local Sightseeing",
        activities: [
          "Arrive in Jaipur and transfer to the hotel",
          "Complete hotel check-in",
          "Explore the local markets",
          "Visit Hawa Mahal",
          "Overnight stay in Jaipur",
        ],
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        activities: [
          "Enjoy breakfast at the hotel",
          "Visit Amber Fort",
          "Explore City Palace",
          "Visit Jantar Mantar",
          "Overnight stay in Jaipur",
        ],
      },
      {
        day: 3,
        title: "Jaipur to Udaipur",
        activities: [
          "Enjoy breakfast and hotel check-out",
          "Drive towards Udaipur",
          "Arrive and check in at the hotel",
          "Enjoy an evening near Lake Pichola",
          "Overnight stay in Udaipur",
        ],
      },
      {
        day: 4,
        title: "Udaipur Sightseeing",
        activities: [
          "Enjoy breakfast at the hotel",
          "Visit City Palace",
          "Explore Saheliyon Ki Bari",
          "Visit Jagdish Temple",
          "Enjoy the beautiful lakeside views",
          "Overnight stay in Udaipur",
        ],
      },
      {
        day: 5,
        title: "Departure from Udaipur",
        activities: [
          "Enjoy breakfast at the hotel",
          "Complete hotel check-out",
          "Transfer for your onward journey",
        ],
      },
    ],

    // YAHAN ADD KARO
    inclusions: [
      "Accommodation on Twin sharing basis",
      "Daily Breakfast and dinner in hotel.",
      "Pick and drop from Srinagar.",
      "All Transfers by Pvt Car",
      "Shikara ride",
      "All applicable hotel taxes."
    ],

    exclusions: [
      "Any Airfare",
      "Anything not mentioned in Inclusions.",
      "Any expenses for optional activities.",
      "Items of personal nature like portage, tips, laundry.",
      "GST 5%",
      "Entry Fees To Monuments And Palaces.",
    ],

    additionalInfo: {
  travelInformation: [
    "The deal is valid for travel till 31 March 2027.",
    "Rates are not valid from 20th December to 15th January, during long weekends, or on blackout dates such as Holi, Diwali, and other peak holiday periods."
  ],

  bookingPolicy: [
    "At the time of Booking: 50% of total package cost",
    "D-30: 75% of package cost",
    "D-15: 100% of package cost"
  ],

  otherInformation: [
    "Limited Time Deal"
  ]
},
  },

  {
    id: 4,
    title: "Kashmir Special",
    duration: "4 Nights / 5 Days",
    image: kashmir,
    price: 12999,
    location: "Srinagar | Pahalgam | Gulmarg",
    stayPlan: "2N Srinagar | 1N Pahalgam | 1N Gulmarg",

    // Person-wise pricing (per person)
    pricing: {
      perPerson: [
        { people: 1, price: 10000 },
        { people: 2, price: 6000 },
        { people: 3, price: 5000 },
        { people: 4, price: 4000 },
        { people: 5, price: 3500 },
        { people: 6, price: 3300 },
        { people: 7, price: 3000 },
      ],

      group: 2800,
    },

    overview:
      "Discover the beauty of Kashmir with scenic lakes, lush valleys, snow-covered mountains and memorable sightseeing experiences.",

    itinerary: [
      {
        day: 1,
        title: "Srinagar Arrival & Sightseeing",
        activities: [
          "Arrive at Srinagar airport and meet your representative",
          "Transfer to the hotel and complete check-in",
          "Enjoy a Shikara ride on Dal Lake",
          "Visit Mughal Gardens and Shankaracharya Temple",
          "Explore local handicraft shops",
          "Overnight stay in Srinagar",
        ],
      },
      {
        day: 2,
        title: "Sonamarg Excursion",
        activities: [
          "Enjoy breakfast at the hotel",
          "Proceed towards the beautiful Sonamarg valley",
          "Enjoy scenic views of mountains and rivers",
          "Explore the destination at your own pace",
          "Return to Srinagar for an overnight stay",
        ],
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg",
        activities: [
          "Enjoy breakfast and hotel check-out",
          "Drive towards Gulmarg",
          "Enjoy beautiful mountain and meadow views",
          "Explore Gulmarg and optional Gondola ride",
          "Overnight stay in Gulmarg",
        ],
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam",
        activities: [
          "Enjoy breakfast at the hotel",
          "Check out and drive towards Pahalgam",
          "Enjoy the scenic countryside and valley views",
          "Explore the local market and surroundings",
          "Overnight stay in Pahalgam",
        ],
      },
      {
        day: 5,
        title: "Pahalgam to Srinagar & Departure",
        activities: [
          "Enjoy breakfast at the hotel",
          "Complete hotel check-out",
          "Drive towards Srinagar airport",
          "Continue your onward journey with beautiful memories",
        ],
      },
    ],

    // YAHAN ADD KARO
    inclusions: [
      "Accommodation on Twin sharing basis",
      "Daily Breakfast and dinner in hotel.",
      "Pick and drop from Srinagar.",
      "All Transfers by Pvt Car",
      "Shikara ride",
      "All applicable hotel taxes."
    ],

    exclusions: [
      "Any Airfare",
      "Anything not mentioned in Inclusions.",
      "Any expenses for optional activities.",
      "Items of personal nature like portage, tips, laundry.",
      "GST 5%",
      "Entry Fees To Monuments And Palaces.",
    ],
    additionalInfo: {
      travelInformation: [
        "The deal is valid for travel till 31 March 2027.",
        "Rates are not valid from 20th December to 15th January, during long weekends, or on blackout dates such as Holi, Diwali, and other peak holiday periods."
      ],

      bookingPolicy: [
        "At the time of Booking: 50% of total package cost",
        "D-30: 75% of package cost",
        "D-15: 100% of package cost"
      ],

      otherInformation: [
        "Limited Time Deal"
      ]
    },
  },

  {
    id: 5,
    title: "Himachal Special",
    duration: "2 Nights / 3 Days",
    image: himachal,
    price: 7599,
    location: "Himachal Pradesh",
    stayPlan: "2N Shimla",

    // Person-wise pricing (per person)
    pricing: {
      perPerson: [
        { people: 1, price: 10000 },
        { people: 2, price: 6000 },
        { people: 3, price: 5000 },
        { people: 4, price: 4000 },
        { people: 5, price: 3500 },
        { people: 6, price: 3300 },
        { people: 7, price: 3000 },
      ],

      group: 2800,
    },

    overview:
      "Explore the beautiful landscapes of Himachal Pradesh with a memorable stay in Shimla. Enjoy scenic mountain views and a comfortable travel experience.",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla & Local Sightseeing",
        activities: [
          "Arrive at Shimla and meet your travel representative",
          "Transfer to the hotel and complete check-in",
          "Visit Mall Road and The Ridge",
          "Explore Christ Church and nearby attractions",
          "Overnight stay in Shimla",
        ],
      },
      {
        day: 2,
        title: "Kufri Excursion",
        activities: [
          "Enjoy breakfast at the hotel",
          "Visit Kufri and enjoy its scenic mountain views",
          "Explore Himalayan Nature Park",
          "Visit Jakhoo Temple",
          "Return to Shimla for an overnight stay",
        ],
      },
      {
        day: 3,
        title: "Departure from Shimla",
        activities: [
          "Enjoy breakfast at the hotel",
          "Complete hotel check-out",
          "Transfer for your onward journey",
        ],
      },
    ],

    // YAHAN ADD KARO
    inclusions: [
      "Accommodation on Twin sharing basis",
      "Daily Breakfast and dinner in hotel.",
      "Pick and drop from Srinagar.",
      "All Transfers by Pvt Car",
      "Shikara ride",
      "All applicable hotel taxes."
    ],

    exclusions: [
      "Any Airfare",
      "Anything not mentioned in Inclusions.",
      "Any expenses for optional activities.",
      "Items of personal nature like portage, tips, laundry.",
      "GST 5%",
      "Entry Fees To Monuments And Palaces.",
    ],

    additionalInfo: {
      travelInformation: [
        "The deal is valid for travel till 31 March 2027.",
        "Rates are not valid from 20th December to 15th January, during long weekends, or on blackout dates such as Holi, Diwali, and other peak holiday periods."
      ],

      bookingPolicy: [
        "At the time of Booking: 50% of total package cost",
        "D-30: 75% of package cost",
        "D-15: 100% of package cost"
      ],

      otherInformation: [
        "Limited Time Deal"
      ]
    },
  },
];
