
import p1 from "../assets/packages/p1.png";
import p2 from "../assets/packages/p2.png";
import p3 from "../assets/packages/p3.png";
import p4 from "../assets/packages/p4.png";
import p5 from "../assets/packages/p5.png";

export const packagesData = [

  {
    id: 1,
    title: "Mahakaleshwar & Omkareshwar Yatra",
    duration: "1N / 2D",
    image: p1,
    price: 3000,
    location: "Madhya Pradesh",
    stayPlan: "1 Night Ujjain",

    pricing: {
      perPerson: [
        { people: 2, price: 6000 },
        { people: 3, price: 5000 },
        { people: 4, price: 4000 },
        { people: 5, price: 3500 },
        { people: 6, price: 3300 },
      ],

      group: 3000,
    },

    overview:
      "Experience a spiritual journey covering two sacred Jyotirlingas of Madhya Pradesh. Visit Shri Mahakaleshwar Jyotirlinga and explore the famous temples and attractions of Ujjain on Day 1. On Day 2, proceed to Omkareshwar for darshan of Omkareshwar Jyotirlinga and Mamleshwar Temple before completing your onward drop.",

    itinerary: [
      {
        day: 1,
        title: "Mahakaleshwar Darshan & Ujjain Local Sightseeing",
        activities: [
          "Arrive in Ujjain and meet your travel representative",
          "Visit Shri Mahakaleshwar Jyotirlinga for darshan",
          "Explore the sacred Mahakal Lok corridor",
          "Visit Harsiddhi Mata Temple",
          "Visit Kal Bhairav Temple",
          "Return to the hotel for an overnight stay in Ujjain",
        ],
      },
      {
        day: 2,
        title: "Omkareshwar & Mamleshwar Darshan with Drop",
        activities: [
          "Wake up and complete hotel check-out",
          "Visit Shri Omkareshwar Jyotirlinga for darshan",
          "Visit Shri Mamleshwar Temple",
          "Explore the sacred Omkareshwar surroundings",
          "Complete darshan and sightseeing",
          "Proceed for your onward drop",
        ],
      },
    ],

    inclusions: [
      "1 Night accommodation in Ujjain",
      "Hotel stay as per selected room category",
      "Mahakaleshwar Jyotirlinga Darshan visit",
      "Ujjain local sightseeing",
      "Omkareshwar Jyotirlinga Darshan visit",
      "Mamleshwar Temple visit",
      "Pickup and drop as per selected itinerary",
      "Driver allowance, parking and toll charges",
    ],

    exclusions: [
      "Any train, flight or bus tickets",
      "Meals unless specifically mentioned",
      "VIP Darshan tickets or special darshan charges",
      "Any pooja or special religious rituals",
      "Personal expenses like shopping, tips and laundry",
      "Entry fees wherever applicable",
      "Anything not mentioned in inclusions",
    ],

    additionalInfo: {
      travelInformation: [
        "This package covers 1 night stay in Ujjain and a 2-day temple tour.",
        "Day 1 includes Mahakaleshwar Darshan and Ujjain local sightseeing.",
        "Day 2 includes Omkareshwar and Mamleshwar Darshan followed by drop.",
        "Darshan timings and temple schedules may affect the sightseeing sequence.",
        "Pickup and final drop locations should be confirmed at the time of booking.",
      ],

      bookingPolicy: [
        "At the time of booking: 50% of total package cost",
        "Remaining payment as per the confirmed booking schedule",
        "Any additional services or itinerary changes will be charged separately",
      ],

      otherInformation: [
        "Package price depends on the number of travelers.",
        "Group pricing applies to 8–10 travelers.",
        "Hotel availability and room category are subject to confirmation.",
        "Limited Time Deal",
      ],
    },
  },

  {
    id: 2,
    title: "Jyotirlinga & Shaktipeeth Yatra",
    duration: "2N / 3D",
    image: p2,
    price: 4000,
    location: "Madhya Pradesh",
    stayPlan: "2 Nights ujjain",

    pricing: {
      perPerson: [
        { people: 2, price: 7500 },
        { people: 3, price: 6500 },
        { people: 4, price: 5500 },
        { people: 5, price: 5000 },
        { people: 6, price: 4500 },
      ],
      group: 4000,
    },

    overview:
      "Experience a spiritual journey through three important religious destinations of Madhya Pradesh. Begin with Shri Mahakaleshwar Jyotirlinga Darshan and explore the famous temples and attractions of Ujjain on Day 1. On Day 2, visit Shri Omkareshwar Jyotirlinga and explore the sacred surroundings. On Day 3, seek blessings at Maa Baglamukhi Temple in Nalkheda before completing your onward drop.",

    itinerary: [
      {
        day: 1,
        title: "Mahakaleshwar Darshan & Ujjain Local Sightseeing",
        activities: [
          "Arrive in Ujjain and meet your travel representative",
          "Visit Shri Mahakaleshwar Jyotirlinga for darshan",
          "Explore the sacred Mahakal Lok corridor",
          "Visit Harsiddhi Mata Temple",
          "Visit Kal Bhairav Temple",
          "Return to the hotel for an overnight stay",
        ],
      },
      {
        day: 2,
        title: "Omkareshwar Jyotirlinga Darshan",
        activities: [
          "Wake up and get ready for the journey",
          "Proceed towards Omkareshwar",
          "Visit Shri Omkareshwar Jyotirlinga for darshan",
          "Explore the sacred Omkareshwar surroundings",
          "Visit nearby temples and ghats",
          "Complete darshan and sightseeing",
          "Return to the hotel for an overnight stay",
        ],
      },
      {
        day: 3,
        title: "Baglamukhi Mata Darshan & Drop",
        activities: [
          "Wake up and complete hotel check-out",
          "Proceed towards Maa Baglamukhi Temple, Nalkheda",
          "Visit Maa Baglamukhi Temple for darshan",
          "Spend time at the temple premises",
          "Complete darshan",
          "Proceed for your onward drop",
        ],
      },
    ],

    inclusions: [
      "2 Nights accommodation in ujjain",
      "Hotel stay as per selected room category",
      "Mahakaleshwar Jyotirlinga Darshan visit",
      "Omkareshwar Jyotirlinga Darshan visit",
      "Maa Baglamukhi Temple Darshan visit",
      "Transfers and sightseeing as per selected itinerary",
      "Pickup and drop as per confirmed itinerary",
    ],

    exclusions: [
      "Any train, flight or bus tickets",
      "Meals unless specifically mentioned",
      "VIP Darshan tickets or special darshan charges",
      "Any pooja or special religious rituals",
      "Personal expenses like shopping, tips and laundry",
      "Entry fees wherever applicable",
      "Extra charges due to itinerary changes",
      "Anything not mentioned in inclusions",
    ],

    additionalInfo: {
      travelInformation: [
        "This package covers 2 nights stay and a 3-day temple tour.",
        "Day 1 includes Mahakaleshwar Darshan and Ujjain local sightseeing.",
        "Day 2 includes Omkareshwar Jyotirlinga Darshan.",
        "Day 3 includes Maa Baglamukhi Temple Darshan at Nalkheda followed by drop.",
        "Darshan timings and temple schedules may affect the sightseeing sequence.",
        "Pickup and final drop locations should be confirmed at the time of booking.",
      ],

      bookingPolicy: [
        "At the time of booking: 50% of total package cost",
        "Remaining payment as per the confirmed booking schedule",
        "Any additional services or itinerary changes will be charged separately",
      ],

      otherInformation: [
        "Package price depends on the number of travelers.",
        "Group pricing applies to 8–10 travelers.",
        "Hotel availability and room category are subject to confirmation.",
        "Limited Time Deal",
      ],
    },
  },

  {
    id: 3,
    title: "Mahakal – Omkareshwar – Maheshwar – Mandu",
    duration: "3N / 4D",
    image: p3,
    price: 5000,
    location: "Madhya Pradesh",
    stayPlan: "3 Nights (Stay Location to be Confirmed)",

    pricing: {
      perPerson: [
        { people: 2, price: 9000 },
        { people: 3, price: 8000 },
        { people: 4, price: 7000 },
        { people: 5, price: 6500 },
        { people: 6, price: 6000 },
      ],
      group: 5500,
    },

    overview:
      "Explore the spiritual and historical beauty of Madhya Pradesh with this 4-day journey. Visit Shri Mahakaleshwar Jyotirlinga in Ujjain, seek blessings at Omkareshwar Jyotirlinga, explore the historic Maheshwar Fort and Narmada Ghats, and discover the magnificent heritage of Mandu.",

    itinerary: [
      {
        day: 1,
        title: "Mahakaleshwar Darshan & Ujjain Sightseeing",
        activities: [
          "Arrive in Ujjain",
          "Visit Shri Mahakaleshwar Jyotirlinga",
          "Explore Mahakal Lok",
          "Visit Harsiddhi Mata Temple",
          "Visit Kal Bhairav Temple",
          "Explore Ram Ghat",
          "Overnight stay in Ujjain",
        ],
      },
      {
        day: 2,
        title: "Omkareshwar Jyotirlinga Darshan",
        activities: [
          "Proceed towards Omkareshwar",
          "Visit Shri Omkareshwar Jyotirlinga",
          "Visit Mamleshwar Temple",
          "Explore Omkareshwar Island",
          "Visit Narmada Ghats",
          "Overnight stay as per confirmed itinerary",
        ],
      },
      {
        day: 3,
        title: "Maheshwar Sightseeing",
        activities: [
          "Proceed towards Maheshwar",
          "Visit Ahilya Fort",
          "Explore Maheshwar Fort",
          "Visit Narmada Ghats",
          "Enjoy the beautiful riverside surroundings",
          "Explore Maheshwari Handloom",
          "Overnight stay as per confirmed itinerary",
        ],
      },
      {
        day: 4,
        title: "Mandu Sightseeing & Drop",
        activities: [
          "Proceed towards Mandu",
          "Visit Jahaz Mahal",
          "Explore Hindola Mahal",
          "Visit Rani Roopmati Pavilion",
          "Explore Baz Bahadur Palace",
          "Complete sightseeing and proceed for drop",
        ],
      },
    ],

    inclusions: [
      "3 Nights accommodation as per confirmed itinerary",
      "Hotel stay as per selected room category",
      "Mahakaleshwar Jyotirlinga Darshan visit",
      "Ujjain local sightseeing",
      "Omkareshwar and Mamleshwar Temple visits",
      "Maheshwar sightseeing",
      "Mandu sightseeing",
      "Transfers and sightseeing as per selected itinerary",
      "Pickup and drop as per confirmed itinerary",
    ],

    exclusions: [
      "Train, flight or bus tickets",
      "Meals unless specifically mentioned",
      "VIP Darshan or special darshan charges",
      "Pooja and special religious rituals",
      "Personal expenses",
      "Entry fees wherever applicable",
      "Anything not mentioned in inclusions",
    ],

    additionalInfo: {
      travelInformation: [
        "This package covers 3 nights and 4 days.",
        "Day 1 includes Mahakaleshwar Darshan and Ujjain sightseeing.",
        "Day 2 includes Omkareshwar and Mamleshwar Darshan.",
        "Day 3 covers Maheshwar sightseeing.",
        "Day 4 covers Mandu sightseeing followed by drop.",
        "Stay locations and pickup/drop points will be confirmed during booking.",
      ],

      bookingPolicy: [
        "Booking payment terms to be confirmed.",
        "Additional services and itinerary changes may cost extra.",
      ],

      otherInformation: [
        "Package price depends on the number of travelers.",
        "Hotel availability is subject to confirmation.",
        "Limited Time Deal",
      ],
    },
  },

  {
    id: 4,
    title: "Mahakal – Omkareshwar – Indore Tour",
    duration: "2N / 3D",
    image: p4,
    price: 4000,
    location: "Madhya Pradesh",
    stayPlan: "2 Nights (Stay Location to be Confirmed)",

    pricing: {
      perPerson: [
        { people: 2, price: 7500 },
        { people: 3, price: 6500 },
        { people: 4, price: 5500 },
        { people: 5, price: 5000 },
        { people: 6, price: 4500 },
      ],
      group: 4000,
    },

    overview:
      "Experience a combination of spiritual destinations and city sightseeing with this 3-day Madhya Pradesh tour. Visit Mahakaleshwar Jyotirlinga and famous attractions of Ujjain, seek blessings at Omkareshwar Jyotirlinga, and explore the popular heritage and attractions of Indore.",

    itinerary: [
      {
        day: 1,
        title: "Mahakaleshwar Darshan & Ujjain Local",
        activities: [
          "Arrive in Ujjain",
          "Visit Mahakaleshwar Jyotirlinga",
          "Explore Mahakal Lok",
          "Visit Harsiddhi Mata Temple",
          "Visit Kal Bhairav Temple",
          "Explore Ram Ghat",
          "Overnight stay in Ujjain",
        ],
      },
      {
        day: 2,
        title: "Omkareshwar Darshan",
        activities: [
          "Proceed towards Omkareshwar",
          "Visit Omkareshwar Jyotirlinga",
          "Visit Mamleshwar Temple",
          "Explore Omkareshwar Island",
          "Visit Narmada Ghats",
          "Proceed towards the confirmed stay location",
          "Overnight stay",
        ],
      },
      {
        day: 3,
        title: "Indore Sightseeing & Drop",
        activities: [
          "Proceed towards Indore",
          "Visit Rajwada Palace",
          "Explore Kanch Mandir",
          "Visit Lal Bagh Palace",
          "Explore Sarafa Bazaar",
          "Visit Chappan Dukan",
          "Complete sightseeing and proceed for drop",
        ],
      },
    ],

    inclusions: [
      "2 Nights accommodation as per confirmed itinerary",
      "Hotel stay as per selected room category",
      "Mahakaleshwar Jyotirlinga Darshan visit",
      "Ujjain local sightseeing",
      "Omkareshwar and Mamleshwar Temple visits",
      "Indore sightseeing",
      "Transfers and sightseeing as per selected itinerary",
      "Pickup and drop as per confirmed itinerary",
    ],

    exclusions: [
      "Train, flight or bus tickets",
      "Meals unless specifically mentioned",
      "VIP Darshan or special darshan charges",
      "Pooja and special religious rituals",
      "Personal expenses and shopping",
      "Entry fees wherever applicable",
      "Anything not mentioned in inclusions",
    ],

    additionalInfo: {
      travelInformation: [
        "This package covers 2 nights and 3 days.",
        "Day 1 includes Mahakaleshwar Darshan and Ujjain sightseeing.",
        "Day 2 includes Omkareshwar and Mamleshwar Darshan.",
        "Day 3 includes Indore sightseeing followed by drop.",
        "Stay locations will be confirmed during booking.",
      ],

      bookingPolicy: [
        "Booking payment terms to be confirmed.",
        "Additional services and itinerary changes may cost extra.",
      ],

      otherInformation: [
        "Package price depends on the number of travelers.",
        "Hotel availability is subject to confirmation.",
        "Limited Time Deal",
      ],
    },
  },

  {
    id: 5,
    title: "Sanwaliya Seth – Udaipur Tour",
    duration: "2N / 3D",
    image: p5,
    price: 7999,
    location: "Rajasthan",
    stayPlan: "2 Nights (Stay Location to be Confirmed)",

    pricing: {
      perPerson: [
        { people: 1, price: 7999 },
        { people: 2, price: 7999 },
        { people: 3, price: 7999 },
        { people: 4, price: 7999 },
      ],
      group: 7999,
    },

    overview:
      "Enjoy a spiritual and scenic Rajasthan journey covering Shri Sanwaliya Seth Temple and the beautiful city of Udaipur. Seek blessings at the famous Sanwaliya Seth Temple and explore Udaipur's royal palaces, beautiful lakes, gardens and popular tourist attractions.",

    itinerary: [
      {
        day: 1,
        title: "Sanwaliya Seth Temple Darshan",
        activities: [
          "Depart from Ujjain",
          "Proceed towards Shri Sanwaliya Seth Temple",
          "Visit Sanwaliya Seth Ji Temple for darshan",
          "Explore the temple surroundings",
          "Proceed towards Udaipur",
          "Overnight stay in Udaipur",
        ],
      },
      {
        day: 2,
        title: "Udaipur Local Sightseeing",
        activities: [
          "Visit City Palace",
          "Explore Lake Pichola",
          "Visit Jagdish Temple",
          "Explore Saheliyon Ki Bari",
          "Visit Fateh Sagar Lake",
          "Explore local markets",
          "Overnight stay in Udaipur",
        ],
      },
      {
        day: 3,
        title: "Udaipur Sightseeing & Return",
        activities: [
          "Complete hotel check-out",
          "Visit Sajjangarh Monsoon Palace, subject to time",
          "Explore remaining sightseeing attractions",
          "Proceed towards the confirmed drop location",
          "Complete the journey",
        ],
      },
    ],

    inclusions: [
      "2 Nights accommodation as per confirmed itinerary",
      "Hotel stay as per selected room category",
      "Sanwaliya Seth Temple Darshan visit",
      "Udaipur local sightseeing",
      "Transfers and sightseeing as per selected itinerary",
      "Pickup and drop as per confirmed itinerary",
    ],

    exclusions: [
      "Train, flight or bus tickets",
      "Meals unless specifically mentioned",
      "Special pooja or religious rituals",
      "Personal expenses and shopping",
      "Boating charges",
      "Monument entry fees wherever applicable",
      "Anything not mentioned in inclusions",
    ],

    additionalInfo: {
      travelInformation: [
        "This package covers 2 nights and 3 days.",
        "Day 1 includes Sanwaliya Seth Temple Darshan and transfer to Udaipur.",
        "Day 2 includes Udaipur local sightseeing.",
        "Day 3 includes remaining sightseeing and return drop.",
        "Sightseeing order depends on travel time and availability.",
      ],

      bookingPolicy: [
        "Booking payment terms to be confirmed.",
        "Additional services and itinerary changes may cost extra.",
      ],

      otherInformation: [
        "Package price depends on the number of travelers.",
        "Hotel availability is subject to confirmation.",
        "Limited Time Deal",
      ],
    },
  },

];
