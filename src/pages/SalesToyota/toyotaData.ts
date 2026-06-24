export interface VehicleSpecs {
  engine: string;
  power: string;
  torque: string;
  transmission: string;
  seating: string;
  fuelType: string;
}

export interface ToyotaVehicle {
  id: string;
  name: string;
  categories: string[];
  image: string;
  brochureUrl: string;
  tagline: string;
  specs: VehicleSpecs;
  highlights: string[];
}

export const TOYOTA_VEHICLES: ToyotaVehicle[] = [
  {
    id: "lc300",
    name: "Land Cruiser 300",
    categories: ["Luxury", "SUVs & Pickups"],
    image: "/toyota/images/lc300.png",
    brochureUrl: "/toyota/e-brochure-lc-300.pdf",
    tagline: "The Pride of the Land. Unrivaled luxury meets extreme off-road capability.",
    specs: {
      engine: "3.3L V6 Twin-Turbo Diesel (3346 cc)",
      power: "309 PS (227 kW) @ 4000 rpm",
      torque: "700 Nm @ 1600 - 2600 rpm",
      transmission: "10-Speed Automatic with Manual Shift Mode",
      seating: "5 Seater",
      fuelType: "Diesel"
    },
    highlights: [
      "Toyota Safety Sense 3.0 (Advanced ADAS)",
      "Electronic Kinetic Dynamic Suspension System (E-KDSS)",
      "AWD with Multi-Terrain Select & Crawl Control",
      "12.3-inch Infotainment & 14-Speaker JBL Sound",
      "10 SRS Airbags for maximum passenger safety",
      "Ventilated & Heated Leather Seats with memory functions"
    ]
  },
  {
    id: "vellfire",
    name: "Vellfire",
    categories: ["Luxury", "Hybrid/Electric", "MPVs"],
    image: "/toyota/images/vellfire.png",
    brochureUrl: "/toyota/e-brochure-vellfire.pdf",
    tagline: "Masterpiece of Luxury. The ultimate executive lounge on wheels.",
    specs: {
      engine: "2.5L 4-Cylinder Petrol Hybrid (2487 cc)",
      power: "193 PS Combined Output",
      torque: "240 Nm @ 4300 - 4500 rpm",
      transmission: "e-CVT (Continuously Variable Transmission)",
      seating: "7 Seater",
      fuelType: "Strong Hybrid Petrol"
    },
    highlights: [
      "VIP Executive Lounge Captain Seats with Massage & Ottoman",
      "15-Speaker Premium JBL Audio System",
      "35.5 cm (14-inch) Infotainment & 14-inch Rear Screen",
      "Toyota Safety Sense (Lane Trace, Pre-Collision, ADAS)",
      "Dual Sunroof & Power Sliding Rear Doors",
      "6 SRS Airbags & Active Safety Assist"
    ]
  },
  {
    id: "camry",
    name: "Camry Hybrid",
    categories: ["Luxury", "Hybrid/Electric"],
    image: "/toyota/images/camry.png",
    brochureUrl: "/toyota/e-brochure-camry-hybrid.pdf",
    tagline: "Intelligent Luxury. The self-charging hybrid luxury sedan.",
    specs: {
      engine: "2.5L 4-Cylinder Dynamic Force Engine (2487 cc)",
      power: "218 PS Combined (178 PS Engine + 120 PS Motor)",
      torque: "221 Nm Engine / 202 Nm Motor",
      transmission: "Electronically-controlled CVT (e-CVT)",
      seating: "5 Seater",
      fuelType: "Strong Hybrid Petrol"
    },
    highlights: [
      "Self-Charging Hybrid technology for unmatched mileage",
      "9-Speaker JBL Premium Sound System",
      "3-Zone Automatic Climate Control",
      "Power Reclining Rear Seats with touch-control armrest",
      "9 SRS Airbags & Head-Up Display (HUD)",
      "Toyota Safety Sense 3.0 suite of safety systems"
    ]
  },
  {
    id: "legender",
    name: "Fortuner Legender",
    categories: ["SUVs & Pickups", "Luxury"],
    image: "/toyota/images/legender.png",
    brochureUrl: "/toyota/legender-brochure-mobile.pdf",
    tagline: "Stature and Panache. Aggressive luxury, built to conquer.",
    specs: {
      engine: "2.8L 4-Cylinder Diesel (2755 cc)",
      power: "204 PS @ 3000 - 3400 rpm",
      torque: "500 Nm @ 1600 - 2800 rpm (AT)",
      transmission: "6-Speed Automatic / 6-Speed MT with iMT",
      seating: "7 Seater",
      fuelType: "Diesel"
    },
    highlights: [
      "Split Quad LED Headlamps with waterfall line guides",
      "Exclusive Dual-Tone Exterior design (White & Black)",
      "Dual-Zone Climate Control & Ambient Lighting",
      "Kick-Sensor Power Back Door & Wireless Charger",
      "7 SRS Airbags & Active Traction Control (A-TRC)",
      "Premium Dual-Tone Black & Maroon Leather Seats"
    ]
  },
  {
    id: "fortuner",
    name: "Fortuner",
    categories: ["SUVs & Pickups"],
    image: "/toyota/images/fortuner.png",
    brochureUrl: "/toyota/Fortuner.pdf",
    tagline: "The Undisputed Icon. Unmatched reliability, power, and road presence.",
    specs: {
      engine: "2.8L Diesel (2755 cc) / 2.7L Petrol (2694 cc)",
      power: "Diesel: 204 PS, Petrol: 166 PS",
      torque: "Diesel: 500 Nm (AT) / 420 Nm (MT), Petrol: 245 Nm",
      transmission: "6-Speed MT/AT (Diesel), 5-Speed MT / 6-Speed AT (Petrol)",
      seating: "7 Seater",
      fuelType: "Diesel / Petrol"
    },
    highlights: [
      "Rugged 4WD with High (H4) and Low (L4) range",
      "Smart Playcast Touchscreen with Apple CarPlay/Android Auto",
      "11-Speaker JBL Audio System",
      "7 SRS Airbags & Vehicle Stability Control",
      "Eco, Normal, and Power Driving modes",
      "Ventilated Front Seats & Premium Leather Upholstery"
    ]
  },
  {
    id: "hilux",
    name: "Hilux (Pickup Truck)",
    categories: ["SUVs & Pickups"],
    image: "/toyota/images/hilux.png",
    brochureUrl: "/toyota/e-brochure-hilux.pdf",
    tagline: "The Legendary Toughness. The ultimate lifestyle utility vehicle.",
    specs: {
      engine: "2.8L 4-Cylinder Turbo Diesel (2755 cc)",
      power: "204 PS @ 3000 - 3400 rpm",
      torque: "500 Nm (AT) / 420 Nm (MT)",
      transmission: "6-Speed Manual / 6-Speed Automatic",
      seating: "5 Seater",
      fuelType: "Diesel"
    },
    highlights: [
      "Heavy-Duty Suspension & high-strength steel frame",
      "4WD with Electronic Drive Control & Diff Lock",
      "700mm Water Wading Capacity",
      "Dual-Zone Climate Control & Leather Seats",
      "7 SRS Airbags & Hill Start Assist",
      "Premium 20 cm Display Audio with smartphone connect"
    ]
  },
  {
    id: "hycross",
    name: "Innova Hycross",
    categories: ["MPVs", "Hybrid/Electric"],
    image: "/toyota/images/hycross.png",
    brochureUrl: "/toyota/e-brochure-hycross.pdf",
    tagline: "The New HY Age. A revolutionary blend of hybrid efficiency and spaciousness.",
    specs: {
      engine: "2.0L 4-Cylinder Petrol (1987 cc) / 2.0L Hybrid",
      power: "Strong Hybrid: 186 PS, Petrol: 174 PS",
      torque: "Engine: 188 Nm, Motor: 206 Nm",
      transmission: "e-Drive (Hybrid), Direct Shift CVT (Petrol)",
      seating: "7 / 8 Seater",
      fuelType: "Petrol / Strong Hybrid Petrol"
    },
    highlights: [
      "TNGA 5th Gen Self-Charging Hybrid System",
      "Panoramic Sunroof with elegant Mood Lighting",
      "Powered Ottoman Seats in 2nd row",
      "Toyota Safety Sense (ADAS Level 2)",
      "Multi-Zone Automatic Climate Control",
      "Ventilated Front Seats & Premium Chestnut Leather"
    ]
  },
  {
    id: "crysta",
    name: "Innova Crysta",
    categories: ["MPVs"],
    image: "/toyota/images/crysta.png",
    brochureUrl: "/toyota/e-brochure-innova-crysta.pdf",
    tagline: "Unmatched Comfort. India's favorite MPV, redefined.",
    specs: {
      engine: "2.4L Diesel Engine (2393 cc)",
      power: "150 PS @ 3400 rpm",
      torque: "343 Nm @ 1400 - 2800 rpm",
      transmission: "5-Speed Manual",
      seating: "7 / 8 Seater",
      fuelType: "Diesel"
    },
    highlights: [
      "Tough GD Diesel engine with improved torque",
      "7 SRS Airbags & Vehicle Stability Control",
      "ECO and POWER drive modes",
      "Plush Hazel Brown dual-tone leather seats",
      "Automatic Climate Control with rear cooling duct",
      "Goa Body design for high impact absorption"
    ]
  },
  {
    id: "hyryder",
    name: "Urban Cruiser Hyryder",
    categories: ["SUVs & Pickups", "Hybrid/Electric"],
    image: "/toyota/images/hyryder.png",
    brochureUrl: "/toyota/e-brochure-urbancruiser-hyryder.pdf",
    tagline: "Hybrid Life. Advanced hybrid performance for the modern explorer.",
    specs: {
      engine: "1.5L Petrol Hybrid / 1.5L NeoDrive K-Series",
      power: "Hybrid: 115.56 PS, NeoDrive: 103 PS",
      torque: "Engine: 122 Nm, Motor: 141 Nm",
      transmission: "e-Drive (Hybrid), 5MT/6AT (NeoDrive)",
      seating: "5 Seater",
      fuelType: "Petrol / Strong Hybrid / CNG"
    },
    highlights: [
      "Self-charging strong hybrid with segment-best mileage",
      "All-Wheel Drive (AWD) option on NeoDrive MT",
      "Panoramic Sunroof & 360-degree View Camera",
      "Head-Up Display (HUD) & Wireless Charger",
      "Ventilated front seats & leather upholstery",
      "6 SRS Airbags & Hill Hold Control"
    ]
  }
];
