export interface ToyotaVehicleDetails {
  id: string;
  hero: {
    title: string;
    tagline: string;
    introduction: string;
    highlights: string[];
    imageSuggestion: string;
  };
  overview: {
    category: string;
    positioning: string;
    strengths: string[];
    targetCustomers: string;
    platform: string;
  };
  variants: {
    name: string;
    transmission: string;
    fuelType: string;
    seating: string;
    features: string[];
  }[];
  exterior: {
    front: string;
    side: string;
    rear: string;
    alloys: string;
    lighting: string;
    colors: string[];
  };
  interior: {
    dashboard: string;
    instrumentCluster: string;
    steering: string;
    seatingDesc: string;
    cabinSpace: string;
    materials: string;
    storage: string;
  };
  comfort: {
    climate: string;
    sunroof: string;
    ventilation: string;
    wirelessCharge: string;
    poweredSeats: string;
    smartEntry: string;
    pushStart: string;
    rearComfort: string;
  };
  infotainment: {
    screenSize: string;
    audio: string;
    androidAuto: string;
    appleCarplay: string;
    connectedCar: string;
    voiceCommand: string;
    navigation: string;
  };
  performance: {
    engineType: string;
    displacement: string;
    power: string;
    torque: string;
    transmission: string;
    drivetrain: string;
    efficiency: string;
    techExplanation: string;
  };
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
    clearance: string;
    fuelCapacity: string;
    weight: string;
  };
  chassis: {
    frontSusp: string;
    rearSusp: string;
    chassisType: string;
    rideQuality: string;
    handling: string;
  };
  safety: {
    airbags: string;
    abs: string;
    vsc: string;
    hillAssist: string;
    otherFeatures: string[];
    adas: {
      hasAdas: boolean;
      acc?: string;
      lka?: string;
      preCollision?: string;
      bsm?: string;
      rcta?: string;
    };
  };
  colors: { name: string; hex: string }[];
  accessories: {
    exterior: string[];
    interior: string[];
    protection: string[];
  };
  ownership: {
    warranty: string;
    intervals: string;
    schedule: string;
    benefits: string[];
  };
  comparison: {
    internalAlternative: string;
    competitor: string;
    comparisonPoints: { feature: string; thisCar: string; altCar: string; compCar: string }[];
  };
}

export const TOYOTA_VEHICLE_DETAILS: Record<string, ToyotaVehicleDetails> = {
  lc300: {
    id: "lc300",
    hero: {
      title: "Land Cruiser 300",
      tagline: "The Pinnacle of Off-Road Dominance and Luxury Heritage",
      introduction: "For over seven decades, the Land Cruiser has stood as the ultimate symbol of durability, reliability, and all-terrain capacity. The Land Cruiser 300 ZX represents the ultimate expression of this legendary SUV lineage, combining an advanced twin-turbo V6 engine with unparalleled modern luxury.",
      highlights: [
        "Powerful 3.3L V6 Twin-Turbo Diesel engine",
        "Legendary TNGA-F body-on-frame platform",
        "Adaptive Variable Suspension (AVS) & E-KDSS",
        "Advanced Toyota Safety Sense 3.0 ADAS Suite",
        "Sumptuous 5-Seater leather cabin with 4-Zone AC"
      ],
      imageSuggestion: "Front three-quarter action shot of a white Land Cruiser 300 ZX climbing a desert sand dune at sunset."
    },
    overview: {
      category: "Ultra-Luxury Full-Size 4X4 SUV",
      positioning: "Flagship luxury off-road cruiser targeting high-net-worth individuals, business executives, and adventure enthusiasts who demand absolute capability without compromising on premium comfort.",
      strengths: ["Ultimate off-road performance", "Bulletproof reliability", "Exceptional cabin isolation", "High resale value", "Sophisticated styling"],
      targetCustomers: "HNI customers, VIP diplomats, estate owners, and extreme overland travelers.",
      platform: "TNGA-F (Toyota New Global Architecture - Frame) platform. Retains the rugged body-on-frame configuration while achieving high rigidity, a lower center of gravity, and a 200kg weight reduction."
    },
    variants: [
      {
        name: "ZX (Flagship)",
        transmission: "10-Speed Automatic",
        fuelType: "Diesel",
        seating: "5 Seater",
        features: ["Multi-Terrain Monitor with 3D Under-floor view", "12.3-inch Infotainment", "14-Speaker JBL Sound System", "E-KDSS Active Suspensions", "Linear Solenoid AVS", "Fingerprint verification start"]
      }
    ],
    exterior: {
      front: "Aggressive yet sophisticated front profile featuring a massive horizontal-slat chrome grille, deep-set triple-eye LED headlamps, and functional air vents for high thermal management.",
      side: "Bold, muscular stance with high ground clearance, prominent wheel arches housing 20-inch alloy wheels, and premium brushed aluminum sidesteps.",
      rear: "Flat, clean tailgate design with horizontal LED rear combination lamps, dual chrome exhausts, and an integrated kick-sensor power tailgate.",
      alloys: "20-inch high-gloss silver finish multi-spoke luxury alloy wheels.",
      lighting: "LED Headlamps with Auto-Levelling, adaptive high beam, sequential turn indicators, and cornering fog lamps.",
      colors: ["Precious White Pearl", "Super White", "Dark Red Mica Metallic", "Attitude Black Mica", "Dark Blue Mica"]
    },
    interior: {
      dashboard: "Premium floating center stack, wrapped in soft-touch leather with hand-crafted wood inserts. Physical toggle buttons for active 4x4 controls are ergonomically positioned.",
      instrumentCluster: "7-inch multi-information screen flanked by high-resolution analog gauges showing boost pressure, oil temperature, and battery charge.",
      steering: "Wood and leather-wrapped multi-function steering wheel with electronic tilt, telescoping, and heating options.",
      seatingDesc: "ZX-Grade bespoke semi-aniline leather seats. 8-way power-adjustable front seats with driver memory.",
      cabinSpace: "Immense shoulder room and headroom for 5 adult occupants. Flat rear floor ensures absolute comfort for center passenger.",
      materials: "Bespoke leather, real open-pore wood inserts, satin chrome dials, and heavy insulation for an whisper-quiet cabin.",
      storage: "Bespoke cool-box inside the front center console, deep door pockets, overhead console, and standard split-folding rear cargo space."
    },
    comfort: {
      climate: "4-Zone Independent Automatic Climate Control with nanoe-X air purification.",
      sunroof: "Power tilt & slide moonroof with jam protection.",
      ventilation: "Ventilated and heated seats for both front and rear outboard passengers.",
      wirelessCharge: "Fast wireless smartphone charger in the center console.",
      poweredSeats: "8-Way power front seats with lumbar support and memory function.",
      smartEntry: "Smart entry system with push button start and fingerprint scanner.",
      pushStart: "Start button featuring a biometric fingerprint security sensor.",
      rearComfort: "Reclining rear seats, rear center armrest with controls, and dual 11.6-inch entertainment screens."
    },
    infotainment: {
      screenSize: "12.3-inch High-Definition Touchscreen display.",
      audio: "14-Speaker JBL Synthesis Reference Sound System.",
      androidAuto: "Wireless Android Auto integration.",
      appleCarplay: "Wireless Apple CarPlay integration.",
      connectedCar: "Toyota Connect Telematics with geo-fencing, SOS call, and remote control.",
      voiceCommand: "Intelligent natural language voice command recognition.",
      navigation: "3D Cloud-based navigation system with offline maps."
    },
    performance: {
      engineType: "3.3L Twin-Turbo V6 Diesel (F33A-FTV)",
      displacement: "3346 cc",
      power: "309 PS (227 kW) @ 4000 rpm",
      torque: "700 Nm @ 1600 - 2600 rpm",
      transmission: "Direct Shift 10-Speed Automatic (10AT)",
      drivetrain: "Full-Time 4WD with Multi-Terrain Select & Crawl Control",
      efficiency: "Averages ~10-12 km/l depending on terrain",
      techExplanation: "Dual twin-scroll turbochargers working sequentially to deliver immediate, lag-free low-end torque. Coupled with a 10-speed gearbox for optimal highway cruising efficiency."
    },
    dimensions: {
      length: "4985 mm",
      width: "1980 mm",
      height: "1945 mm",
      wheelbase: "2850 mm",
      clearance: "230 mm",
      fuelCapacity: "80 L",
      weight: "2630 kg"
    },
    chassis: {
      frontSusp: "Double Wishbone Independent Suspension with stabilizer bar",
      rearSusp: "4-Link Rigid Axle with coil springs and stabilizer",
      chassisType: "Robust Body-on-Frame construction using high-strength steel",
      rideQuality: "Pillow-soft ride over rough surfaces while maintaining horizontal stability via AVS.",
      handling: "Excellent high-speed stability and reduced body-roll thanks to active E-KDSS stabilizer bars."
    },
    safety: {
      airbags: "10 SRS Airbags (Front, Side, Curtain, and Knee airbags)",
      abs: "Multi-terrain ABS with Electronic Brakeforce Distribution (EBD)",
      vsc: "Vehicle Stability Control (VSC) and Traction Control (TRC)",
      hillAssist: "Hill Start Assist Control (HAC) and Downhill Assist Control (DAC)",
      otherFeatures: ["Multi-Terrain Monitor (MTM) with Underfloor View", "360-degree Panoramic View Monitor", "Crawl Control", "Active Traction Control (A-TRC)"],
      adas: {
        hasAdas: true,
        acc: "Dynamic Radar Cruise Control (DRCC) with Full-Speed Range",
        lka: "Lane Tracing Assist (LTA) and Lane Departure Alert (LDA)",
        preCollision: "Pre-Collision System (PCS) with Pedestrian & Cyclist Detection",
        bsm: "Blind Spot Monitor (BSM) with Rear Cross Traffic Alert",
        rcta: "Rear Cross Traffic Alert (RCTA) with Auto Braking"
      }
    },
    colors: [
      { name: "Precious White Pearl", hex: "#f3f4f6" },
      { name: "Attitude Black Mica", hex: "#111827" },
      { name: "Dark Red Mica Metallic", hex: "#7f1d1d" },
      { name: "Dark Blue Mica", hex: "#1e3a8a" }
    ],
    accessories: {
      exterior: ["Premium chrome exhaust tips", "Chrome door handle protectors", "All-terrain side decals", "Heavy-duty roof crossbars"],
      interior: ["Luxury all-weather cargo liners", "Illuminated scuff plates", "Rear seat organizer bags"],
      protection: ["Underbody skid plate kit", "Premium paint protection film", "Molded mudguards set"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km standard warranty (extendable up to 5 Years)",
      intervals: "10,000 km or 1 Year, whichever comes first",
      schedule: "Standard fluid changes, filters inspection, and active suspension checks.",
      benefits: ["Toyota Express Service connectivity", "24/7 Roadside Assistance", "Complimentary luxury pick & drop services"]
    },
    comparison: {
      internalAlternative: "Lexus LX 600 (Higher price, more luxury, same platform)",
      competitor: "Range Rover LWB / Mercedes-Benz GLS",
      comparisonPoints: [
        { feature: "Off-Road Durability", thisCar: "Legendary bulletproof chassis", altCar: "High luxury, similar off-road", compCar: "Air-suspension dependent, complex repairs" },
        { feature: "Reliability", thisCar: "Industry-leading global trust", altCar: "Excellent, luxury focus", compCar: "Average, higher electronics failure rate" },
        { feature: "Ground Clearance", thisCar: "230 mm mechanical clearance", altCar: "210 mm variable", compCar: "Adjustable 220 mm" }
      ]
    }
  },
  vellfire: {
    id: "vellfire",
    hero: {
      title: "Vellfire",
      tagline: "First-Class Lounge Luxury Redefined for the Road",
      introduction: "The Toyota Vellfire stands in a class of its own as the ultimate VIP luxury MPV. Embodying space, premium craftsmanship, and modern hybrid technology, it offers an executive lounge experience with automated captain chairs, massage functions, and cutting-edge passenger amenities.",
      highlights: [
        "2.5L Hybrid engine with E-Four AWD system",
        "VIP Executive Lounge seats with power ottoman",
        "15-Speaker Premium JBL Sound System",
        "Dual Sunroof with independent shade control",
        "Advanced ADAS Safety Suite (TSS)"
      ],
      imageSuggestion: "Side profile shot of a glossy black Vellfire parked outside a high-end modern hotel at night with warm lighting."
    },
    overview: {
      category: "Ultra-Luxury Hybrid MPV",
      positioning: "Premier luxury transport for top corporate executives, VIP diplomats, celebrities, and elite families who value workspace, relaxation, and prestige while traveling.",
      strengths: ["Unrivaled cabin space and comfort", "Silent hybrid operation", "Advanced corporate workspace", "VIP road presence", "High fuel efficiency"],
      targetCustomers: "CEOs, business leaders, premium hospitality providers, and VIP dignitaries.",
      platform: "TNGA-K platform. Optimizes structure rigidity, noise insulation, and suspension geometry for a silky-smooth, silent ride."
    },
    variants: [
      {
        name: "Hi-Grade",
        transmission: "e-CVT",
        fuelType: "Strong Hybrid",
        seating: "7 Seater",
        features: ["Premium captain seats", "14-inch Infotainment", "15-Speaker JBL System", "Ceiling console controls", "TSS Suite"]
      },
      {
        name: "VIP Executive Lounge",
        transmission: "e-CVT",
        fuelType: "Strong Hybrid",
        seating: "7 Seater",
        features: ["Heated & ventilated massage captain chairs", "Bespoke tray tables", "Rear comfort command screen", "Advanced ceiling console with multi-lighting"]
      }
    ],
    exterior: {
      front: "Striking front design featuring a massive chrome grid-like grille, sharp 3-lens LED headlamps, and dynamic sequential indicators that command presence.",
      side: "Boxy, aerodynamic silhouette with chrome window lining, power-sliding doors, and premium 19-inch multi-spoke alloy wheels.",
      rear: "Wide, prominent tailgate with integrated wrap-around LED tail lights, chrome tail lamp trim, and power opening/closing function.",
      alloys: "19-inch high-grade chrome-finished alloy wheels.",
      lighting: "3-Lens LED Headlamps with Adaptive High Beam System, LED cornering lamps, and ambient exterior greeting lights.",
      colors: ["Black", "Burning Black Crystal Shine", "Platinum White Pearl"]
    },
    interior: {
      dashboard: "Modern, minimalist dashboard wrapped in soft Nappa leather with a giant 14-inch touchscreen and wood accents.",
      instrumentCluster: "12.3-inch fully digital color cluster screen customizable with different visual themes.",
      steering: "Leather and wood heated steering wheel with audio, radar cruise, and lane trace controls.",
      seatingDesc: "Bespoke executive lounge seats in the 2nd row with electric slide, recline, memory, massage, and heated leg rests.",
      cabinSpace: "Bespoke ceiling height and flat floor layout provide unmatched legroom, headroom, and easy cabin movement.",
      materials: "Luxury Nappa leather, premium carpet mats, memory foam cushion seats, and high-frequency sound-deadening materials.",
      storage: "Under-seat compartments, multi-function ceiling console box, retractable side tables with bottle holders."
    },
    comfort: {
      climate: "4-Zone S-Flow Automatic Climate Control with nanoe-X and individual ceiling ducts.",
      sunroof: "Dual Left/Right independent panoramic glass roof panels with power sunshades.",
      ventilation: "Ventilated, heated, and massage functions for 1st and 2nd-row seats.",
      wirelessCharge: "Dual wireless phone chargers (front console and rear lounge armrests).",
      poweredSeats: "14-Way power seats with memory controls for driver and VIP passengers.",
      smartEntry: "One-touch power sliding doors and split back-door opening controls.",
      pushStart: "Smart push-start system with keyless remote entry.",
      rearComfort: "Ceiling-mounted 14-inch entertainment screen, retractable tray tables, and smart smartphone-like controller."
    },
    infotainment: {
      screenSize: "14-inch Central Touchscreen Display.",
      audio: "15-Speaker JBL Premium Sound System.",
      androidAuto: "Wireless Android Auto.",
      appleCarplay: "Wireless Apple CarPlay.",
      connectedCar: "Toyota Connect with remote engine start, AC control, and live tracking.",
      voiceCommand: "Interactive voice assistant commands with multi-zone pickup.",
      navigation: "Premium Navigation System with live traffic feeds."
    },
    performance: {
      engineType: "2.5L 4-Cylinder Petrol Engine with Self-Charging Hybrid System",
      displacement: "2487 cc",
      power: "193 PS Combined System Power",
      torque: "Engine: 240 Nm @ 4300 rpm",
      transmission: "e-CVT (Electronic Continuously Variable)",
      drivetrain: "E-Four (Electric 4WD) System",
      efficiency: "Outstanding hybrid mileage of ~19.28 km/l",
      techExplanation: "Self-charging strong hybrid system linking a high-efficiency 2.5L petrol engine with powerful front and rear electric motors. Automatically toggles between pure EV and petrol power."
    },
    dimensions: {
      length: "5005 mm",
      width: "1850 mm",
      height: "1950 mm",
      wheelbase: "3000 mm",
      clearance: "160 mm",
      fuelCapacity: "60 L",
      weight: "2180 kg"
    },
    chassis: {
      frontSusp: "MacPherson Strut Front Suspension with coil springs",
      rearSusp: "Double Wishbone Rear Suspension for premium comfort",
      chassisType: "High-rigidity monocoque chassis optimized for low vibration",
      rideQuality: "Bespoke Pitch & Bounce Control system regulates motor torque to keep the ride completely flat.",
      handling: "Stable, confident cornering assisted by active AWD E-Four torque vectoring."
    },
    safety: {
      airbags: "6 SRS Airbags (Front, Side, and Curtain airbags)",
      abs: "ABS with Electronic Brakeforce Distribution and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) with Hill Start Assist",
      hillAssist: "Hill-Start Assist Control (HAC) and Auto Hold",
      otherFeatures: ["360-degree Panoramic View Monitor", "Emergency Stop Signal", "Impact Sensing Auto Fuel Cut"],
      adas: {
        hasAdas: true,
        acc: "Dynamic Radar Cruise Control (DRCC)",
        lka: "Lane Trace Assist (LTA) and Lane Departure Alert",
        preCollision: "Pre-Collision Safety System with active pedestrian detection",
        bsm: "Blind Spot Monitor (BSM)",
        rcta: "Rear Cross Traffic Alert (RCTA)"
      }
    },
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Burning Black Crystal Shine", hex: "#1e1b4b" },
      { name: "Platinum White Pearl", hex: "#f3f4f6" }
    ],
    accessories: {
      exterior: ["Premium hood molding", "Door side chrome moldings", "Rear bumper chrome garnish"],
      interior: ["Bespoke lounge pillow cushions", "Premium wireless headphones set", "VIP floor mats"],
      protection: ["Scuff plate protectors", "Premium car cover", "Bumper corner protectors"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km standard. Hybrid Battery Warranty: 8 Years / 160,000 km.",
      intervals: "10,000 km or 1 Year",
      schedule: "Hybrid battery health diagnostics, air filters change, standard engine checks.",
      benefits: ["Toyota Hybrid Service Guarantee", "24/7 VIP Roadside Assistance", "Priority service bays"]
    },
    comparison: {
      internalAlternative: "Toyota Land Cruiser 300 (Same price, different styling - off-road focus)",
      competitor: "Mercedes-Benz V-Class",
      comparisonPoints: [
        { feature: "Cabin Comfort", thisCar: "Fully electric massage lounge seats", altCar: "High luxury SUV, tighter rear seats", compCar: "Manual reclining seats, van-like base" },
        { feature: "Fuel Efficiency", thisCar: "19.28 km/l (Self-Charging Hybrid)", altCar: "11 km/l (Diesel V6)", compCar: "12 km/l (Diesel)" },
        { feature: "Drivetrain", thisCar: "Electric E-Four AWD", altCar: "Heavy-duty full-time 4WD", compCar: "RWD or AWD options" }
      ]
    }
  },
  camry: {
    id: "camry",
    hero: {
      title: "Camry Hybrid",
      tagline: "The Intelligent Choice of Luxury and Sustainable Performance",
      introduction: "The Camry Hybrid is the epitome of the modern luxury sedan. Built around a self-charging hybrid engine, it delivers a seamless, whisper-quiet driving experience, cutting-edge technology, and supreme rear-seat luxury designed specifically for chauffeur-driven executives.",
      highlights: [
        "2.5L Dynamic Force Engine + Self-Charging Hybrid",
        "Adjustable power-reclining rear seats",
        "JBL Reference 9-Speaker Audio System",
        "3-Zone Automatic Climate Control",
        "Advanced Head-Up Display (HUD)"
      ],
      imageSuggestion: "Low angle studio shot of a dark grey Camry Hybrid sedan, accentuating its sleek aerodynamic curves and futuristic headlights."
    },
    overview: {
      category: "Premium Luxury Hybrid Sedan",
      positioning: "Executive luxury sedan offering the perfect alternative to entry-level German premium cars. Focuses on silent cabin comfort, eco-efficiency, and low cost of ownership.",
      strengths: ["Extremely quiet cabin", "Outstanding hybrid fuel economy", "Chauffeur-focused rear controls", "Very low emissions", "Superb reliability"],
      targetCustomers: "Corporate directors, environmentally conscious professionals, and premium sedan enthusiasts.",
      platform: "TNGA-K platform. Enables a low-slung, sporty stance, excellent structural rigidity, and superb ride dampening."
    },
    variants: [
      {
        name: "Premium Hybrid",
        transmission: "e-CVT",
        fuelType: "Strong Hybrid",
        seating: "5 Seater",
        features: ["9-Speaker JBL sound", "Heated/ventilated seats", "Reclining rear seats", "TSS 3.0 Suite", "Heads-Up Display", "3-Zone Climate"]
      }
    ],
    exterior: {
      front: "Futuristic bumper design with a bold horizontal lower grille, sharp bi-beam LED headlamps, and a glowing blue Toyota hybrid badge.",
      side: "Sleek, low-profile executive silhouette, chrome window trim, and elegant 18-inch multi-spoke alloy wheels.",
      rear: "Sporty yet elegant rear design featuring dual-LED taillights, a subtle trunk lid spoiler, and chrome lettering.",
      alloys: "18-inch dark grey finish multi-spoke alloy wheels.",
      lighting: "Bi-beam LED Headlamps with auto-high beam, LED daytime running lights (DRLs), and LED fog lights.",
      colors: ["Attitude Black", "Platinum White Pearl", "Graphite Metallic", "Metal Stream Metallic", "Red Mica", "Silver Metallic"]
    },
    interior: {
      dashboard: "Elegant Y-shaped central dashboard design finished in premium leather, soft padding, and dark wood trim overlays.",
      instrumentCluster: "7-inch multi-information screen in the gauge cluster displaying active power flow and hybrid statistics.",
      steering: "Leather-wrapped steering wheel with integrated cruise, media, and lane trace controls.",
      seatingDesc: "Premium leather upholstery. Driver's seat has 10-way power adjustment with memory; front passenger has 8-way power.",
      cabinSpace: "Generous legroom and headroom in the back. Reclining rear seats can be adjusted via a touch panel on the armrest.",
      materials: "Luxury soft-touch dashboard panels, premium leather seats, and high-quality wood accents.",
      storage: "Console glove box, front dual cup holders, rear door storage, and a large trunk space."
    },
    comfort: {
      climate: "3-Zone Automatic Climate Control with nanoe air purification.",
      sunroof: "Tilt and slide power sunroof.",
      ventilation: "Ventilated front seats.",
      wirelessCharge: "Wireless smartphone charger in the dash.",
      poweredSeats: "Power adjustable front seats and power-reclining rear seats.",
      smartEntry: "Smart keyless entry and start button.",
      pushStart: "Smart push-start system.",
      rearComfort: "Rear armrest touch control panel, rear power sunshade, and side window manual curtains."
    },
    infotainment: {
      screenSize: "9-inch Touchscreen Display.",
      audio: "9-Speaker JBL Premium Sound System.",
      androidAuto: "Yes (Wired/Wireless).",
      appleCarplay: "Yes (Wired/Wireless).",
      connectedCar: "Toyota Connect with remote monitoring, SOS service, and diagnostics.",
      voiceCommand: "Intelligent voice commands.",
      navigation: "Built-in premium navigation system."
    },
    performance: {
      engineType: "2.5L 4-Cylinder Petrol Hybrid (A25A-FXS)",
      displacement: "2487 cc",
      power: "218 PS Combined (178 PS Engine + 120 PS Motor)",
      torque: "Engine: 221 Nm @ 3600-5200 rpm / Motor: 202 Nm",
      transmission: "e-CVT",
      drivetrain: "FWD (Front-Wheel Drive)",
      efficiency: "Remarkable mileage of ~22.38 km/l",
      techExplanation: "Features the advanced Toyota 4th-Gen Hybrid system. Utilizes an Atkinson-cycle engine with high thermal efficiency linked to an electric motor. Regulates power output seamlessly."
    },
    dimensions: {
      length: "4885 mm",
      width: "1840 mm",
      height: "1445 mm",
      wheelbase: "2825 mm",
      clearance: "145 mm",
      fuelCapacity: "50 L",
      weight: "1665 kg"
    },
    chassis: {
      frontSusp: "MacPherson Strut Front Suspension with stabilizer bar",
      rearSusp: "Double Wishbone Rear Suspension for smooth ride control",
      chassisType: "Monocoque chassis with high torsional rigidity",
      rideQuality: "Extremely plush and refined ride, isolating road joints and vibrations cleanly.",
      handling: "Crisp and predictable handling with a low center of gravity."
    },
    safety: {
      airbags: "9 SRS Airbags (Driver, Passenger, Side, Curtain, and Driver Knee)",
      abs: "ABS with Electronic Brakeforce Distribution and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) with Hill Start Assist",
      hillAssist: "Hill Start Assist Control (HAC)",
      otherFeatures: ["360-degree Camera", "Parking Assist Sensors (Front & Rear)", "Tire Pressure Monitoring System (TPMS)"],
      adas: {
        hasAdas: true,
        acc: "Dynamic Radar Cruise Control (DRCC)",
        lka: "Lane Keeping Assist (LKA)",
        preCollision: "Pre-Collision System (PCS)",
        bsm: "Blind Spot Monitor (BSM)",
        rcta: "Rear Cross Traffic Alert (RCTA)"
      }
    },
    colors: [
      { name: "Attitude Black", hex: "#111827" },
      { name: "Platinum White Pearl", hex: "#f3f4f6" },
      { name: "Red Mica", hex: "#991b1b" },
      { name: "Metal Stream Metallic", hex: "#9ca3af" }
    ],
    accessories: {
      exterior: ["Chrome door visor", "Side chrome garnish", "Trunk lip garnish"],
      interior: ["Premium scuff plates", "All-weather floor mats", "VIP luggage tray"],
      protection: ["Car cover", "Mudguards", "Paint protection film"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km. Hybrid Battery: 8 Years / 160,000 km.",
      intervals: "10,000 km or 1 Year",
      schedule: "Engine oil changes, cabin air filter replacement, hybrid system diagnostics.",
      benefits: ["Toyota Roadside Assistance", "Express Service connectivity", "Bespoke owner portal access"]
    },
    comparison: {
      internalAlternative: "Toyota Innova Hycross ZX (Same price range, MPV utility vs Camry sedan luxury)",
      competitor: "Skoda Superb / Mercedes-Benz C-Class",
      comparisonPoints: [
        { feature: "Ride Quietness", thisCar: "Whisper quiet EV mode startup", altCar: "Quiet, but more engine echo", compCar: "Standard petrol engine hum" },
        { feature: "Fuel Cost", thisCar: "Extremely low (22.38 km/l)", altCar: "Very low (21.1 km/l)", compCar: "Average (14 km/l)" },
        { feature: "Rear Legroom", thisCar: "Excellent with power reclined seats", altCar: "Spacious seating, higher height", compCar: "Compact rear seating space" }
      ]
    }
  },
  legender: {
    id: "legender",
    hero: {
      title: "Fortuner Legender",
      tagline: "The Premium Stature of Aggressive Design and Off-Road Prowess",
      introduction: "The Fortuner Legender takes the legendary toughness of the Fortuner and elevates it with an aggressive, sporty exterior styling package and an ultra-premium cabin. Featuring unique dual-tone colors and black accents, the Legender commands ultimate road presence.",
      highlights: [
        "Powerful 2.8L Diesel engine with 500 Nm Torque",
        "Bespoke split-quad LED headlamps with waterfall DRLs",
        "Unique White & Black dual-tone roof exterior",
        "Kick-sensor power back door",
        "Premium dual-tone Black & Maroon leather interior"
      ],
      imageSuggestion: "Dynamic front three-quarter view of a white Fortuner Legender with a black roof, parked under city bridge lights at night."
    },
    overview: {
      category: "Premium Full-Size D-SUV",
      positioning: "A sporty, upscale variant of the best-selling Fortuner SUV, targeting premium buyers who want top-tier styling, luxury interior finishes, and extreme durability.",
      strengths: ["Unparalleled road presence", "Huge torque output", "Proven off-road 4x4 capability", "Low maintenance cost", "Very high resale value"],
      targetCustomers: "Politicians, business leaders, estate owners, and off-road driving enthusiasts.",
      platform: "Highly rigid IMV platform (body-on-frame). Shares underpinnings with the Hilux, delivering ultimate load-bearing capability and frame toughness."
    },
    variants: [
      {
        name: "Legender 4x2",
        transmission: "6-Speed Automatic",
        fuelType: "Diesel",
        seating: "7 Seater",
        features: ["Bespoke Legender styling", "Maroon leather interior", "Wireless charger", "Dual-zone AC", "Ambient lighting"]
      },
      {
        name: "Legender 4x4",
        transmission: "6-Speed Automatic",
        fuelType: "Diesel",
        seating: "7 Seater",
        features: ["Sigma-4 4WD system", "Active Traction Control", "Hill Descent Control", "Downhill Assist", "Bespoke 18-inch machine finish alloys"]
      }
    ],
    exterior: {
      front: "Aggressive front fascia with a slim upper grille, large piano black mesh lower grille, and sharp split-quad LED projector headlamps.",
      side: "Sleek side profile accentuated by the dual-tone black roof, black window columns, and exclusive 18-inch machine-cut alloy wheels.",
      rear: "Refined rear profile with a glossy black tailgate garnish, split-LED tail lamps, and an integrated rear spoiler.",
      alloys: "18-inch exclusive machine-cut alloy wheels with a premium dark silver finish.",
      lighting: "Split-Quad LED Headlamps, sequential LED indicators front & rear, and LED front fog lamps.",
      colors: ["White Pearl Crystal Shine with Attitude Black Roof"]
    },
    interior: {
      dashboard: "Premium black dashboard with maroon leather stitching, metallic trim garnishes, and piano black details.",
      instrumentCluster: "High-contrast Optitron meter cluster with a 4.2-inch color TFT multi-information display.",
      steering: "Multi-function leather-wrapped steering wheel with thumb rest and paddle shifters.",
      seatingDesc: "Bespoke dual-tone Black and Maroon leather seats. 8-way power-adjustable front seats.",
      cabinSpace: "Spacious 3-row layout accommodating 7 occupants. 2nd-row seats fold with a one-touch tumble mechanism.",
      materials: "Contrast leather stitching, brushed metal accents, soft-touch panels, and premium roof lining.",
      storage: "Dual glove boxes (upper box is cooled), center console storage, and multiple cup holders."
    },
    comfort: {
      climate: "Dual-Zone Automatic Climate Control with rear individual roof AC vents.",
      sunroof: "Not available.",
      ventilation: "Ventilated front driver & passenger seats.",
      wirelessCharge: "Wireless smartphone charger located in the front console.",
      poweredSeats: "8-Way power-adjustable driver and front passenger seats.",
      smartEntry: "Smart keyless entry and start button.",
      pushStart: "Smart push-start system.",
      rearComfort: "Rear armrest, charging sockets, and personal reading lamps."
    },
    infotainment: {
      screenSize: "8-inch Smart Playcast Touchscreen.",
      audio: "6-Speaker Audio System (Option for 11-Speaker JBL Sound on specific configurations).",
      androidAuto: "Yes (Wired).",
      appleCarplay: "Yes (Wired).",
      connectedCar: "Toyota Connect with vehicle tracing, geofencing, and SOS button.",
      voiceCommand: "Interactive voice commands.",
      navigation: "Navigation through smartphone mirroring."
    },
    performance: {
      engineType: "2.8L 4-Cylinder Turbo Diesel (1GD-FTV)",
      displacement: "2755 cc",
      power: "204 PS @ 3000-3400 rpm",
      torque: "500 Nm @ 1600-2800 rpm",
      transmission: "6-Speed Torque Converter Automatic with paddle shifters",
      drivetrain: "2WD / Sigma-4 4WD with Electronic Diff Lock",
      efficiency: "Averages ~11-13 km/l",
      techExplanation: "Utilizes a variable nozzle turbocharger (VNT) with an intercooler to deliver a massive torque flat-curve starting at a low 1600 rpm. Extremely responsive on-road and off-road."
    },
    dimensions: {
      length: "4795 mm",
      width: "1855 mm",
      height: "1835 mm",
      wheelbase: "2745 mm",
      clearance: "220 mm",
      fuelCapacity: "80 L",
      weight: "2180 kg (4WD)"
    },
    chassis: {
      frontSusp: "Double Wishbone Front Suspension with stabilizer bar",
      rearSusp: "4-Link Rear Suspension with coil springs and lateral control rod",
      chassisType: "Tough body-on-frame ladder frame chassis",
      rideQuality: "Firm, robust ride quality. Legender features unique shock absorber tuning for a slightly sportier on-road feel.",
      handling: "Heavy steering with positive feedback, highly stable at highway speeds."
    },
    safety: {
      airbags: "7 SRS Airbags (Front, Side, Curtain, and Driver Knee)",
      abs: "ABS with Electronic Brakeforce Distribution and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) with Brake Assist",
      hillAssist: "Hill Start Assist Control (HAC) and Downhill Assist Control (DAC)",
      otherFeatures: ["Active Traction Control (A-TRC)", "Electronic Differential Lock (4WD)", "Emergency Brake Signal"],
      adas: {
        hasAdas: false
      }
    },
    colors: [
      { name: "White Pearl with Black Roof", hex: "#e5e7eb" }
    ],
    accessories: {
      exterior: ["Chrome hood emblem", "Premium sidesteps garnish", "Legender door decals"],
      interior: ["Legender floor mats", "Bespoke ambient lighting kit", "Rear seat entertainment screens"],
      protection: ["Fender protectors", "Scratch guards", "Underbody coating"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km (Extendable up to 5 Years)",
      intervals: "10,000 km or 1 Year",
      schedule: "Engine oil and filter replacements, fuel filter checks, suspension greasing.",
      benefits: ["Toyota Service Value Package", "24/7 Roadside Assistance", "Express Maintenance coverage"]
    },
    comparison: {
      internalAlternative: "Toyota Fortuner Standard (Lower price, standard styling, same mechanicals)",
      competitor: "MG Gloster / Jeep Meridian",
      comparisonPoints: [
        { feature: "Off-Road Durability", thisCar: "Sigma-4 4WD with mechanical diff lock", altCar: "Same capability", compCar: "Electronics-based AWD systems" },
        { feature: "Reliability", thisCar: "Unbeatable body-on-frame structure", altCar: "Same structural trust", compCar: "Average reliability, more frequent sensor issues" },
        { feature: "Resale Value", thisCar: "Highest in the SUV segment", altCar: "Very high", compCar: "Depreciates much faster" }
      ]
    }
  },
  fortuner: {
    id: "fortuner",
    hero: {
      title: "Fortuner",
      tagline: "The Undisputed King of Indian SUV Stature",
      introduction: "The Toyota Fortuner is a legend on Indian roads. Known for its imposing design, immense power, and rugged reliability, the Fortuner dominates the full-size SUV segment, offering both powerful diesel and smooth petrol options for any adventure.",
      highlights: [
        "2.8L Diesel (500 Nm) / 2.7L Petrol engine options",
        "Sigma-4 4WD System with Active Traction Control",
        "Massive road presence with high seating position",
        "Premium 11-Speaker JBL Audio System",
        "7 SRS Airbags & strong body-on-frame chassis"
      ],
      imageSuggestion: "A front view of a silver Fortuner standing in a shallow forest river, highlighting its high ground clearance and water wading ability."
    },
    overview: {
      category: "Full-Size D-Segment SUV",
      positioning: "The dominant leader in the premium full-size SUV class. Popular among government officials, top business leaders, and off-road clubs for its durability, prestige, and power.",
      strengths: ["Imposing road presence", "Robust off-road capability", "Extremely reliable engine", "Unbeatable resale value", "Spacious 7-seater layout"],
      targetCustomers: "Corporate leaders, political figures, off-road enthusiasts, and large families.",
      platform: "Rugged body-on-frame IMV platform, offering a rigid ladder frame built to handle extreme physical stress and load."
    },
    variants: [
      {
        name: "Standard 4x2 (Petrol/Diesel)",
        transmission: "5-Speed MT / 6-Speed MT / 6-Speed AT",
        fuelType: "Petrol / Diesel",
        seating: "7 Seater",
        features: ["Ventilated front seats", "8-inch touchscreen", "7 Airbags", "VSC", "Dual-zone AC", "Eco/Power drive modes"]
      },
      {
        name: "Standard 4x4 (Diesel)",
        transmission: "6-Speed MT / 6-Speed AT",
        fuelType: "Diesel",
        seating: "7 Seater",
        features: ["Sigma-4 4WD system", "Active Traction Control", "11-Speaker JBL Sound", "Electronic Diff Lock", "Downhill Assist"]
      }
    ],
    exterior: {
      front: "Imposing chrome grille, sleek LED projector headlamps with light guide DRLs, and a massive lower bumper with integrated fog lamps.",
      side: "Clean, robust side profile with high window lines, muscular wheel arches, sidesteps, and premium 17 or 18-inch alloy wheels.",
      rear: "Horizontal wrap-around LED tail lights, chrome tailgate garnish with 'FORTUNER' branding, and a sporty rear spoiler.",
      alloys: "18-inch super chrome alloy wheels (4WD variants) / 17-inch silver alloys (2WD variants).",
      lighting: "Bi-LED Projector headlamps, LED DRLs, LED front fog lights, and LED rear combination lights.",
      colors: ["Phantom Brown", "Super White", "Attitude Black", "Grey Metallic", "Silver Metallic", "Bronze Mica Metallic"]
    },
    interior: {
      dashboard: "Premium black leather dashboard with metallic accents, detailed stitch lines, and integrated center touchscreen.",
      instrumentCluster: "Optitron dials with a 4.2-inch color multi-information screen.",
      steering: "Large leather steering wheel with wood-like top garnish, audio controls, and cruise control switches.",
      seatingDesc: "Bespoke leather seats. Driver and co-driver seats are 8-way power-adjustable.",
      cabinSpace: "Spacious 3-row layout with comfortable space for 7. 3rd-row seats fold up to the side for massive cargo space.",
      materials: "Tough leather-appointed seats, soft touch door trim pads, and high durability plastics.",
      storage: "Cooled glove box, deep console box, rear armrest cup holders, and slide-out dashboard cup holders."
    },
    comfort: {
      climate: "Dual-Zone Automatic Climate Control with independent rear roof ducts.",
      sunroof: "Not available.",
      ventilation: "Ventilated driver & passenger front seats.",
      wirelessCharge: "Not available (Available as accessory).",
      poweredSeats: "8-Way power-adjustable front driver & passenger seats.",
      smartEntry: "Keyless smart entry system.",
      pushStart: "Smart push-start button.",
      rearComfort: "Reclining 2nd & 3rd-row seats, rear center armrest, and individual roof ventilation."
    },
    infotainment: {
      screenSize: "8-inch Touchscreen Display.",
      audio: "11-Speaker JBL Audio System with Subwoofer (4WD) / 6-Speaker System (2WD).",
      androidAuto: "Yes (Wired).",
      appleCarplay: "Yes (Wired).",
      connectedCar: "Toyota Connect with remote monitoring and vehicle location status.",
      voiceCommand: "Yes.",
      navigation: "Through Apple CarPlay / Android Auto."
    },
    performance: {
      engineType: "2.8L Diesel (1GD) / 2.7L Petrol (2TR)",
      displacement: "Diesel: 2755 cc / Petrol: 2694 cc",
      power: "Diesel: 204 PS @ 3400 rpm / Petrol: 166 PS @ 5200 rpm",
      torque: "Diesel: 500 Nm (AT) / 420 Nm (MT). Petrol: 245 Nm @ 4000 rpm",
      transmission: "6-Speed MT/AT (Diesel). 5-Speed MT / 6-Speed AT (Petrol)",
      drivetrain: "2WD / Sigma-4 4WD System",
      efficiency: "Diesel: ~11-13 km/l. Petrol: ~8-10 km/l",
      techExplanation: "The 2.8L Diesel features a Variable Nozzle Turbocharger (VNT) that delivers high torque even at low engine RPMs, while the 2.7L Petrol features Dual VVT-i for smooth and linear power delivery."
    },
    dimensions: {
      length: "4795 mm",
      width: "1855 mm",
      height: "1835 mm",
      wheelbase: "2745 mm",
      clearance: "220 mm",
      fuelCapacity: "80 L",
      weight: "2180 kg (Diesel 4WD)"
    },
    chassis: {
      frontSusp: "Double Wishbone Front Suspension with coil springs and stabilizer",
      rearSusp: "4-Link Rear Suspension with coil springs and lateral rod",
      chassisType: "Ladder frame body-on-frame chassis",
      rideQuality: "Firm, rugged ride quality designed to take heavy abuse on off-road trails.",
      handling: "Commanding road view, heavy steering feel, highly stable at cruising speeds."
    },
    safety: {
      airbags: "7 SRS Airbags (Front, Side, Curtain, and Knee)",
      abs: "ABS with EBD and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) with Hill Start Assist",
      hillAssist: "Hill Start Assist Control (HAC) and Downhill Assist Control (DAC)",
      otherFeatures: ["Active Traction Control (A-TRC)", "Electronic Locking Differential (4WD)", "Emergency Brake Signal"],
      adas: {
        hasAdas: false
      }
    },
    colors: [
      { name: "Super White", hex: "#f3f4f6" },
      { name: "Attitude Black", hex: "#111827" },
      { name: "Phantom Brown", hex: "#451a03" },
      { name: "Silver Metallic", hex: "#cbd5e1" }
    ],
    accessories: {
      exterior: ["Chrome hood ornament", "Fender mirror", "Door edge protectors"],
      interior: ["Wireless charger pad", "Ambient lighting kit", "Premium carpet mats"],
      protection: ["Underbody engine guard", "Scuff plates set", "Paint protection wrap"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km (Extendable to 5 Years)",
      intervals: "10,000 km / 1 Year",
      schedule: "Standard oil changes, suspension lubrication, fuel filter checks.",
      benefits: ["Toyota Express Service", "Roadside Assistance coverage", "Maintenance Packages"]
    },
    comparison: {
      internalAlternative: "Toyota Fortuner Legender (Higher price, more aggressive style, same engines)",
      competitor: "MG Gloster / Jeep Meridian",
      comparisonPoints: [
        { feature: "Off-Road Capability", thisCar: "Hardcore Sigma-4 with diff lock", altCar: "Same Sigma-4 system", compCar: "AWD, road-biased platform" },
        { feature: "Maintenance Cost", thisCar: "Extremely low, parts last longer", altCar: "Same low cost", compCar: "Higher maintenance and parts cost" },
        { feature: "Resale", thisCar: "Remarkable resale value", altCar: "Very high", compCar: "Depreciates fast" }
      ]
    }
  },
  hilux: {
    id: "hilux",
    hero: {
      title: "Hilux (Pickup Truck)",
      tagline: "The Unbreakable Utility Icon of Global Repute",
      introduction: "The Toyota Hilux is globally famous as the ultimate pickup truck that simply cannot be broken. Engineered to handle extreme environments, it brings a heavy-duty ladder frame, a powerful 2.8L diesel engine, 4x4 capability, and a large cargo deck, making it the perfect vehicle for lifestyle adventurers.",
      highlights: [
        "Unbreakable build with 2.8L GD Diesel engine (500 Nm)",
        "Tough 4x4 system with High & Low range and Diff Lock",
        "Large cargo deck with up to 435 kg load capacity",
        "700 mm Water Wading capacity",
        "Premium cabin with leather seating and 8-inch screen"
      ],
      imageSuggestion: "A red Hilux loaded with off-road gear driving through a muddy mountain forest track."
    },
    overview: {
      category: "Double-Cabin Lifestyle Pickup Truck",
      positioning: "A premium lifestyle utility vehicle targeting off-roaders, travelers, farm owners, and businesses who require extreme utility without compromising on passenger comfort.",
      strengths: ["Unmatched off-road durability", "Massive load deck utility", "700mm water wading capacity", "Heavy-duty towing power", "Premium interior"],
      targetCustomers: "Off-road enthusiasts, estate owners, lifestyle travelers, and industrial project sites.",
      platform: "Ultra-rugged body-on-frame IMV platform, shared with the Fortuner, but with leaf-spring rear suspension for high weight-bearing utility."
    },
    variants: [
      {
        name: "Standard MT",
        transmission: "6-Speed Manual",
        fuelType: "Diesel",
        seating: "5 Seater",
        features: ["4WD with H4/L4", "Halogen headlamps", "Dual-zone AC", "8-inch touchscreen", "7 Airbags"]
      },
      {
        name: "High MT/AT",
        transmission: "6-Speed MT / 6-Speed AT",
        fuelType: "Diesel",
        seating: "5 Seater",
        features: ["Bespoke chrome styling", "LED Headlamps", "Leather Seats", "18-inch Alloy Wheels", "Wireless Charger", "Active Traction Control"]
      }
    ],
    exterior: {
      front: "Aggressive, high-riding front grille with thick black cladding, chrome accents, and high-clearance headlights.",
      side: "Double-cabin layout with wide side steps, black protective wheel arch cladding, and a huge cargo bed at the back.",
      rear: "Classic pickup vertical taillights, heavy-duty chrome bumper, and a solid steel tailgate with lock mechanism.",
      alloys: "18-inch super chrome alloy wheels (High variant) / 17-inch steel wheels (Standard variant).",
      lighting: "LED Projector Headlamps, LED daytime running lights, and halogen fog lights.",
      colors: ["Emotional Red", "Gray Metallic", "White Pearl Crystal Shine", "Super White", "Silver Metallic"]
    },
    interior: {
      dashboard: "Modern dashboard layout matching the Fortuner, finished in black with silver accents.",
      instrumentCluster: "Optitron dials with a 4.2-inch color TFT display.",
      steering: "Multi-function leather steering wheel with telephony and audio toggles.",
      seatingDesc: "Comfortable seating for 5. High variant features premium black leather seats and power-adjustable driver seat.",
      cabinSpace: "Excellent legroom and headroom in the front. Rear bench seating includes an armrest and folds up for extra in-cabin cargo storage.",
      materials: "Tough leather-appointed surfaces, hard-wearing interior trims, and thick floor carpets.",
      storage: "Dual glove box (upper box cooled), under-seat storage bins in the rear, and front console cup holders."
    },
    comfort: {
      climate: "Dual-Zone Automatic Climate Control with rear cooling vents.",
      sunroof: "Not available.",
      ventilation: "Not available.",
      wirelessCharge: "Wireless smartphone charger in the center console.",
      poweredSeats: "8-Way power-adjustable driver's seat (High variant).",
      smartEntry: "Smart keyless entry and push-start button.",
      pushStart: "Smart push-start system.",
      rearComfort: "Rear center armrest with cup holders, rear AC vents, and grab handles."
    },
    infotainment: {
      screenSize: "8-inch Smart Playcast display.",
      audio: "6-Speaker Audio System.",
      androidAuto: "Yes (Wired).",
      appleCarplay: "Yes (Wired).",
      connectedCar: "Toyota Connect with location tracking and security features.",
      voiceCommand: "Yes.",
      navigation: "Via smartphone connectivity."
    },
    performance: {
      engineType: "2.8L 4-Cylinder Turbo Diesel (1GD-FTV)",
      displacement: "2755 cc",
      power: "204 PS @ 3000-3400 rpm",
      torque: "500 Nm @ 1600-2800 rpm (AT) / 420 Nm (MT)",
      transmission: "6-Speed Manual / 6-Speed Torque Converter Automatic",
      drivetrain: "4WD with High (H4) and Low (L4) range, Electronic Diff Lock",
      efficiency: "Averages ~10-12 km/l depending on cargo load",
      techExplanation: "Heavy-duty 1GD diesel engine featuring a variable geometry turbocharger and common-rail injection, optimized for extreme low-end torque and high thermal durability under heavy towing loads."
    },
    dimensions: {
      length: "5325 mm",
      width: "1855 mm",
      height: "1815 mm",
      wheelbase: "3085 mm",
      clearance: "220 mm",
      fuelCapacity: "80 L",
      weight: "2290 kg"
    },
    chassis: {
      frontSusp: "Double Wishbone Front Suspension with stabilizer bar",
      rearSusp: "Heavy-duty Leaf Spring Rigid Axle rear suspension",
      chassisType: "High-strength ladder frame body-on-frame chassis",
      rideQuality: "Firm and stiff when empty. Becomes extremely smooth and comfortable when the cargo deck is loaded.",
      handling: "Predictable, rugged handling with high ground clearance feel."
    },
    safety: {
      airbags: "7 SRS Airbags (Front, Side, Curtain, and Knee)",
      abs: "ABS with EBD and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) with Hill Start Assist",
      hillAssist: "Hill Start Assist Control (HAC) and Downhill Assist Control (DAC)",
      otherFeatures: ["Active Traction Control (A-TRC)", "Electronic Locking Rear Differential", "Trailer Sway Control"],
      adas: {
        hasAdas: false
      }
    },
    colors: [
      { name: "Emotional Red", hex: "#b91c1c" },
      { name: "Gray Metallic", hex: "#4b5563" },
      { name: "White Pearl", hex: "#f3f4f6" },
      { name: "Silver Metallic", hex: "#9ca3af" }
    ],
    accessories: {
      exterior: ["Cargo bed liner", "Sporty roll bar", "Tonneau deck cover", "Over-fender claddings"],
      interior: ["Tough floor mats", "Seat organizers", "Scuff plates"],
      protection: ["Front underbody skid plate", "Premium car cover", "Door scratch guards"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km standard (Extendable up to 5 Years)",
      intervals: "10,000 km or 1 Year",
      schedule: "Engine oil replacement, suspension leaf lubrication, fuel filter checks.",
      benefits: ["Toyota Express Service", "Roadside Assistance support", "Genuine spares guarantee"]
    },
    comparison: {
      internalAlternative: "Toyota Fortuner (SUV enclosed cabin vs Hilux open deck utility)",
      competitor: "Isuzu D-Max V-Cross",
      comparisonPoints: [
        { feature: "Payload Capacity", thisCar: "435 kg deck load rating", altCar: "Enclosed SUV cargo space", compCar: "350 kg load rating" },
        { feature: "Engine Output", thisCar: "204 PS / 500 Nm torque", altCar: "204 PS / 500 Nm torque", compCar: "163 PS / 360 Nm torque" },
        { feature: "Durability", thisCar: "Globally famous 'unbreakable' reputation", altCar: "Extremely durable", compCar: "Average durability" }
      ]
    }
  },
  hycross: {
    id: "hycross",
    hero: {
      title: "Innova Hycross",
      tagline: "The Dawn of the Intelligent Luxury MPV Era",
      introduction: "The Innova Hycross is a complete revolution. Moving away from traditional diesel setups, it introduces a highly advanced 5th Gen Self-Charging Strong Hybrid system on a modern monocoque chassis. Combining premium SUV road presence with absolute cabin luxury, it stands as the benchmark for luxury family travel.",
      highlights: [
        "Self-Charging 2.0L Petrol Hybrid with ~21.1 km/l mileage",
        "TNGA Monocoque platform for passenger car comfort",
        "Bespoke Powered Ottoman 2nd-row seats",
        "Panoramic Sunroof with elegant Mood Lighting",
        "Full Toyota Safety Sense ADAS Suite"
      ],
      imageSuggestion: "A copper-bronze Innova Hycross ZX driving smoothly down a wide urban highway during the daytime."
    },
    overview: {
      category: "Premium Crossover MPV",
      positioning: "A premium crossover that blurs the line between a luxury SUV and a spacious MPV. Focuses on tech-savvy executives and large families looking for class-leading luxury, ride smoothness, and fuel economy.",
      strengths: ["Outstanding fuel economy", "Silky-smooth hybrid drive", "Bespoke rear cabin comfort", "Premium SUV styling", "Advanced ADAS safety"],
      targetCustomers: "Corporate directors, high-end families, and eco-conscious premium car buyers.",
      platform: "TNGA-C high-rigidity monocoque platform. Replaces the old body-on-frame setup to deliver a lower center of gravity, lightweight build, and passenger-car-like ride comfort."
    },
    variants: [
      {
        name: "GX / GX(O) (Petrol)",
        transmission: "10-Speed CVT",
        fuelType: "Petrol",
        seating: "7 / 8 Seater",
        features: ["16-inch alloy wheels", "8-inch touchscreen", "Dual Airbags", "VSC", "Analogue speedometer"]
      },
      {
        name: "VX / VX(O) (Hybrid)",
        transmission: "e-Drive",
        fuelType: "Strong Hybrid",
        seating: "7 / 8 Seater",
        features: ["Self-charging hybrid engine", "LED Headlamps", "Premium fabric/leatherette seats", "Panoramic sunroof (VX O)", "6 Airbags", "360 Camera"]
      },
      {
        name: "ZX / ZX(O) (Hybrid Flagship)",
        transmission: "e-Drive",
        fuelType: "Strong Hybrid",
        seating: "7 Seater",
        features: ["Bespoke 18-inch alloys", "Powered Ottoman seats", "Chestnut leather interior", "9-Speaker JBL sound", "TSS ADAS Suite (ZX O)", "Ventilated front seats"]
      }
    ],
    exterior: {
      front: "Bespoke high SUV bonnet line, large hexagonal grille with gunmetal finish, sleek tri-eye LED headlamps, and dynamic indicator strips.",
      side: "Dynamic crossover silhouette with flared wheel arches, chrome window lining, and premium 18-inch multi-spoke alloy wheels.",
      rear: "Stylized rear profile with integrated LED combination lamps, wide tailgate spoiler, and silver skid plate garnishes.",
      alloys: "18-inch high-gloss super chrome alloy wheels (ZX) / 17-inch alloys (VX).",
      lighting: "Tri-eye LED Headlamps, LED daytime running lights (DRLs), sequential indicators, and rear LED combination lights.",
      colors: ["Blackish Ageha Glass Flake", "Platinum White Pearl", "Attitude Black Mica", "Sparkling Black Pearl Crystal Shine", "Silver Metallic", "Grey Metallic", "Super White"]
    },
    interior: {
      dashboard: "Bespoke dual-tone dashboard in chestnut brown and black with soft leather stitching, silver outlines, and a floating 10.1-inch display.",
      instrumentCluster: "7-inch digital color screen with hybrid energy flow display and analog dials.",
      steering: "Multi-function leather steering wheel with paddle shifters and ADAS controls.",
      seatingDesc: "Bespoke Chestnut brown leather seats. 2nd-row features electrically reclining Ottoman seats with calf supports.",
      cabinSpace: "Immense 3-row space. 2nd-row seats have long slide capability. Easy access to the 3rd row.",
      materials: "Dark chestnut brown leather, soft-touch panels on doors and dashboard, and high-grade carpet layouts.",
      storage: "Console armrest box, multiple dashboard drawers, and large cargo area with folding 3rd-row seats."
    },
    comfort: {
      climate: "Multi-Zone Automatic Climate Control with front and rear digital panel.",
      sunroof: "Panoramic Sunroof with ambient blue lighting.",
      ventilation: "Ventilated front driver & passenger seats.",
      wirelessCharge: "Wireless smartphone charger in the center console.",
      poweredSeats: "8-Way power-adjustable driver's seat with memory function, and powered 2nd-row Ottoman seats.",
      smartEntry: "Smart keyless entry and start button.",
      pushStart: "Smart push-start system.",
      rearComfort: "Retractable window sunshades, personal reading lamps, and powered leg rests."
    },
    infotainment: {
      screenSize: "10.1-inch Floating Touchscreen.",
      audio: "9-Speaker JBL Premium Sound System with subwoofer (ZX).",
      androidAuto: "Yes (Wireless).",
      appleCarplay: "Yes (Wireless).",
      connectedCar: "Toyota Connect with vehicle diagnostics, geo-fencing, and remote climate controls.",
      voiceCommand: "Yes, multi-zone recognition.",
      navigation: "Yes."
    },
    performance: {
      engineType: "2.0L 4-Cylinder Petrol with 5th Gen Self-Charging Hybrid System / 2.0L Petrol",
      displacement: "1987 cc",
      power: "Hybrid: 186 PS Combined Power / Petrol: 174 PS",
      torque: "Engine: 188 Nm @ 4400-5200 rpm / Motor: 206 Nm",
      transmission: "e-Drive (Hybrid e-CVT) / Direct Shift CVT (Petrol)",
      drivetrain: "FWD (Front-Wheel Drive)",
      efficiency: "Bespoke fuel efficiency of ~21.1 km/l (Hybrid)",
      techExplanation: "The 5th Gen Strong Hybrid system utilizes a highly efficient 2.0L Atkinson cycle petrol engine paired with a compact, powerful electric motor and a Ni-MH battery. Runs silently in pure EV mode on startup and low speeds."
    },
    dimensions: {
      length: "4755 mm",
      width: "1850 mm",
      height: "1795 mm",
      wheelbase: "2850 mm",
      clearance: "185 mm",
      fuelCapacity: "52 L",
      weight: "1730 kg (Hybrid ZX)"
    },
    chassis: {
      frontSusp: "MacPherson Strut Front Suspension with coil springs",
      rearSusp: "Semi-Independent Torsion Beam rear suspension",
      chassisType: "TNGA-C Monocoque chassis structure",
      rideQuality: "Whisper quiet, smooth, and highly isolated. Passenger car comfort that minimizes body pitch and bounce.",
      handling: "Agile and light handling with a small turning radius of 5.4 m."
    },
    safety: {
      airbags: "6 SRS Airbags (Front, Side, and Curtain)",
      abs: "ABS with EBD and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) and Hill Start Assist",
      hillAssist: "Hill Start Assist Control (HAC) and Auto Hold",
      otherFeatures: ["360-degree Camera with Dynamic Guidelines", "Front & Rear Parking Sensors", "Electronic Parking Brake"],
      adas: {
        hasAdas: true,
        acc: "Dynamic Radar Cruise Control (DRCC) with Lane Trace",
        lka: "Lane Keep Assist (LKA) and Lane Departure Alert",
        preCollision: "Pre-Collision System (PCS) with active braking",
        bsm: "Blind Spot Monitor (BSM)",
        rcta: "Rear Cross Traffic Alert (RCTA)"
      }
    },
    colors: [
      { name: "Blackish Ageha Glass Flake", hex: "#0f172a" },
      { name: "Platinum White Pearl", hex: "#f3f4f6" },
      { name: "Attitude Black Mica", hex: "#111827" },
      { name: "Sparkling Black Pearl", hex: "#1e1b4b" }
    ],
    accessories: {
      exterior: ["Chrome door garnishes", "Tailgate chrome strip", "Premium car cover"],
      interior: ["Bespoke cushions set", "Wireless charger tray (for GX)", "Designer floor mats"],
      protection: ["Paint protection wrap", "Scuff plates set", "Mud flaps set"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km standard. Hybrid Battery: 8 Years / 160,000 km.",
      intervals: "10,000 km or 1 Year",
      schedule: "Standard oil change, AC filter checks, and hybrid diagnostics.",
      benefits: ["Toyota Express Service", "24/7 Roadside Assistance", "Bespoke service maintenance portal"]
    },
    comparison: {
      internalAlternative: "Toyota Innova Crysta (Lower price, diesel manual engine, traditional utility)",
      competitor: "Mahindra XUV700 / Tata Safari",
      comparisonPoints: [
        { feature: "Fuel Efficiency", thisCar: "21.1 km/l (Self-Charging Hybrid)", altCar: "12-14 km/l (Diesel)", compCar: "13-15 km/l (Diesel)" },
        { feature: "Rear Seat Luxury", thisCar: "Powered Ottoman Captain Chairs", altCar: "Manual captain seats", compCar: "Standard bench/bucket seats" },
        { feature: "Ride & Chassis", thisCar: "TNGA monocoque passenger ride", altCar: "Ladder frame utility ride", compCar: "Monocoque crossover ride" }
      ]
    }
  },
  crysta: {
    id: "crysta",
    hero: {
      title: "Innova Crysta",
      tagline: "The Unrivaled King of Comfort and Diesel Reliability",
      introduction: "The Innova Crysta is India's beloved MPV, synonymous with absolute comfort, massive cabin space, and robust diesel performance. Featuring the powerful 2.4L GD diesel engine, it delivers high torque and rugged durability that has served millions of happy Indian families.",
      highlights: [
        "Robust 2.4L GD Diesel engine with high low-end torque",
        "7 SRS Airbags and high impact-absorbing GOA body",
        "Silky-smooth ride over rough roads",
        "Premium cabin with wood-finish dashboard accents",
        "Spacious 7 or 8-seater layout options"
      ],
      imageSuggestion: "A front three-quarter studio shot of a bronze Innova Crysta highlighting its elegant chrome grille and modern posture."
    },
    overview: {
      category: "Premium Multi-Purpose Vehicle (MPV)",
      positioning: "The undisputed segment leader in comfort and long-distance travel. Heavily favored by large families, touring services, and political dignitaries who require fatigue-free travel over long distances.",
      strengths: ["Plush suspension setup", "Bulletproof diesel engine", "High durability under constant usage", "Generous cabin space", "Exceptional resale value"],
      targetCustomers: "Large families, tour operators, and corporate fleet services.",
      platform: "Rugged body-on-frame IMV platform, shared with the Fortuner. Built for extreme road durability and high load carriage."
    },
    variants: [
      {
        name: "GX (Base)",
        transmission: "5-Speed Manual",
        fuelType: "Diesel",
        seating: "7 / 8 Seater",
        features: ["16-inch alloy wheels", "8-inch touchscreen", "3 Airbags", "ABS with EBD", "AC manual controls"]
      },
      {
        name: "VX (Mid-Grade)",
        transmission: "5-Speed Manual",
        fuelType: "Diesel",
        seating: "7 / 8 Seater",
        features: ["Automatic LED headlamps", "Bespoke ambient lighting", "Backrest table", "7 Airbags", "VSC and Hill Assist"]
      },
      {
        name: "ZX (Flagship)",
        transmission: "5-Speed Manual",
        fuelType: "Diesel",
        seating: "7 Seater",
        features: ["Premium hazel brown leather seats", "8-Way power driver seat", "Premium wood-finish dashboard panel", "One-touch tumble 2nd row seats"]
      }
    ],
    exterior: {
      front: "Elegant front profile with a trapezoidal piano-black grille, chrome trim outlines, and stylish automatic LED projector headlamps.",
      side: "Wide and aerodynamically efficient side profile, chrome door handles, and classic 16-inch multi-spoke alloys.",
      rear: "Prominent L-shaped tail lamps, wide rear glass window, chrome tailgate garnishes, and parking sensors.",
      alloys: "16-inch multi-spoke high durability alloy wheels.",
      lighting: "LED Projector Headlamps, LED daytime running lights, and LED front fog lamps.",
      colors: ["Super White", "Silver Metallic", "Grey Metallic", "Attitude Black Mica", "Avant-Garde Bronze Metallic"]
    },
    interior: {
      dashboard: "Premium dashboard layout with wood-finish inserts, leather touch points, and center touchscreen display.",
      instrumentCluster: "Optitron meter cluster with a blue-lit 3D Multi-Information Display.",
      steering: "Multi-function leather-wrapped steering wheel with wood inserts (ZX).",
      seatingDesc: "ZX-Grade bespoke dual-tone hazel brown leather seats. Driver's seat is 8-way power-adjustable.",
      cabinSpace: "Generous legroom and headroom in all three rows. 2nd-row captain chairs feature folding seatback tables.",
      materials: "Plush leather-appointed seats, soft touch paneling, wood trim garnishes, and high insulation padding.",
      storage: "Dual glove boxes (upper is cooled), passenger seat-back pockets with trays, and slide-out dashboard cup holders."
    },
    comfort: {
      climate: "Fully Automatic Climate Control with digital display and rear ceiling cooling ducts.",
      sunroof: "Not available.",
      ventilation: "Not available.",
      wirelessCharge: "Wireless smartphone charger (available on higher grades).",
      poweredSeats: "8-Way power-adjustable driver's seat (ZX).",
      smartEntry: "Smart keyless entry and start button.",
      pushStart: "Smart push-start system.",
      rearComfort: "2nd-row seat-back foldable trays, rear armrest, and individual roof AC vents."
    },
    infotainment: {
      screenSize: "8-inch Touchscreen Display.",
      audio: "6-Speaker Audio System.",
      androidAuto: "Yes (Wired).",
      appleCarplay: "Yes (Wired).",
      connectedCar: "Toyota Connect with live location tracking and alerts.",
      voiceCommand: "Yes.",
      navigation: "Via smartphone connectivity."
    },
    performance: {
      engineType: "2.4L 4-Cylinder GD Diesel Engine (2GD-FTV)",
      displacement: "2393 cc",
      power: "150 PS @ 3400 rpm",
      torque: "343 Nm @ 1400-2800 rpm",
      transmission: "5-Speed Manual transmission with smooth gear shifts",
      drivetrain: "RWD (Rear-Wheel Drive)",
      efficiency: "Averages ~12-15 km/l",
      techExplanation: "Features the advanced 2.4L GD diesel engine with a Variable Nozzle Turbocharger (VNT) and intercooler, delivering massive low-end torque for effortless hill climbs and heavy passenger loads."
    },
    dimensions: {
      length: "4735 mm",
      width: "1830 mm",
      height: "1795 mm",
      wheelbase: "2750 mm",
      clearance: "178 mm",
      fuelCapacity: "55 L",
      weight: "1820 kg (ZX)"
    },
    chassis: {
      frontSusp: "Double Wishbone Front Suspension with coil springs and stabilizer",
      rearSusp: "4-Link Rear Suspension with coil springs and lateral control rod",
      chassisType: "Ladder frame body-on-frame chassis",
      rideQuality: "Silky-smooth, class-leading ride comfort over potholes, isolating the cabin effectively.",
      handling: "Steady, heavy steering feedback with highly stable high-speed cruising."
    },
    safety: {
      airbags: "7 SRS Airbags (ZX) / 3 SRS Airbags (GX/VX)",
      abs: "ABS with EBD and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) with Hill Start Assist",
      hillAssist: "Hill Start Assist Control (HAC) and Auto Lock",
      otherFeatures: ["GOA Impact Absorbing Body", "Front & Rear Parking Sensors", "Anti-Theft System"],
      adas: {
        hasAdas: false
      }
    },
    colors: [
      { name: "Super White", hex: "#f3f4f6" },
      { name: "Avant-Garde Bronze", hex: "#78350f" },
      { name: "Silver Metallic", hex: "#cbd5e1" },
      { name: "Attitude Black", hex: "#111827" }
    ],
    accessories: {
      exterior: ["Side chrome garnish", "Trunk lip chrome trim", "Roof rack bars"],
      interior: ["Bespoke designer floor mats", "Wireless charging pad", "Seat organizer pouches"],
      protection: ["Bumper scratch guards", "Underbody chassis coating", "Premium body cover"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km standard (Extendable up to 5 Years)",
      intervals: "10,000 km or 1 Year",
      schedule: "Engine oil changes, suspension inspection, and fuel filter replacements.",
      benefits: ["Toyota Express Service", "Roadside Assistance plan", "Express Maintenance coverage"]
    },
    comparison: {
      internalAlternative: "Toyota Innova Hycross (Monocoque hybrid petrol, higher price, more tech)",
      competitor: "Kia Carens / Mahindra Marazzo",
      comparisonPoints: [
        { feature: "Engine Output", thisCar: "2.4L Diesel with 343 Nm torque", altCar: "2.0L Hybrid with 206 Nm motor torque", compCar: "1.5L Diesel with 250 Nm torque" },
        { feature: "Ride Comfort", thisCar: "Silky-smooth leaf-less ladder-frame ride", altCar: "Monocoque car-like ride", compCar: "Standard passenger ride" },
        { feature: "Durability", thisCar: "Proven to run over 500,000 km", altCar: "High reliability, newer tech", compCar: "Average long-term durability" }
      ]
    }
  },
  hyryder: {
    id: "hyryder",
    hero: {
      title: "Urban Cruiser Hyryder",
      tagline: "The Sustainable Revolution of Compact SUV Performance",
      introduction: "The Urban Cruiser Hyryder is a pioneering compact SUV offering the unique choice of a self-charging Strong Hybrid engine. Combining high mileage, premium comfort, and smart design, it sets a new standard for urban commuting and weekend drives.",
      highlights: [
        "1.5L Self-Charging Strong Hybrid with ~27.97 km/l mileage",
        "All-Wheel Drive (AWD) option on NeoDrive MT",
        "Large Panoramic Sunroof with double sliding slide",
        "Head-Up Display (HUD) and 360-degree Camera",
        "6 SRS Airbags & high passive safety structure"
      ],
      imageSuggestion: "A front view of a grey Hyryder parked outside a modern glass-clad office building during sunset."
    },
    overview: {
      category: "Compact SUV",
      positioning: "A technologically advanced compact SUV designed to appeal to tech-savvy urban professionals and families who want extreme fuel efficiency, premium cabin tech, and high-riding capability.",
      strengths: ["Class-leading fuel efficiency", "Smooth electric mode drive", "AWD capability option", "Feature-rich cabin", "Aggressive pricing"],
      targetCustomers: "Urban executives, small families, and eco-conscious SUV buyers.",
      platform: "Global C platform, engineered for high structural rigidity, low cabin noise, and high impact safety."
    },
    variants: [
      {
        name: "NeoDrive S / G / V (Mild Hybrid)",
        transmission: "5-Speed MT / 6-Speed AT",
        fuelType: "Petrol / CNG",
        seating: "5 Seater",
        features: ["1.5L K-Series engine", "7-inch touchscreen", "Dual Airbags", "LED DRLs", "AWD Option (V MT)"]
      },
      {
        name: "Strong Hybrid S / G / V",
        transmission: "e-Drive",
        fuelType: "Strong Hybrid",
        seating: "5 Seater",
        features: ["Self-charging strong hybrid", "9-inch touchscreen", "6 Airbags", "Panoramic sunroof (G/V)", "HUD display (G/V)", "Ventilated seats (V)"]
      }
    ],
    exterior: {
      front: "Bespoke crystal acrylic grille with chrome garnish, unique split-type LED DRLs, and dynamic projector headlamps positioned in the bumper.",
      side: "Sporty side profile with high rooflines, black body cladding, premium roof rails, and multi-spoke 17-inch alloy wheels.",
      rear: "Horizontal split-LED tail lamps with a sleek chrome strip, sporty lower skid plates, and integrated rear spoiler.",
      alloys: "17-inch premium machine-finished alloy wheels.",
      lighting: "LED Projector Headlamps, split-type LED DRLs, and LED tail lights.",
      colors: ["Cafe White", "Enticing Silver", "Gaming Grey", "Sportin Red", "Cave Black", "Speedy Blue", "Midnight Black"]
    },
    interior: {
      dashboard: "Bespoke dual-tone dashboard in black and brown leather (Hybrid) / black (NeoDrive) with chrome highlights and a 9-inch screen.",
      instrumentCluster: "Full digital color instrument screen displaying hybrid drive metrics and battery charge.",
      steering: "Multi-function leather steering wheel with cruise, media, and telephony controls.",
      seatingDesc: "Bespoke dual-tone leatherette seats. Front driver and co-driver seats have ventilated function.",
      cabinSpace: "Comfortable seating for 5 adult occupants. Rear bench seats feature a 60:40 split fold.",
      materials: "Soft-touch leather on the dash and doors, dual-tone leatherette seats, and metallic outlines.",
      storage: "Glove compartment, front cup holders, door pockets, and a spacious trunk space."
    },
    comfort: {
      climate: "Automatic Climate Control with rear cooling vents.",
      sunroof: "Large Panoramic Sunroof with double slide opening.",
      ventilation: "Ventilated front driver & passenger seats.",
      wirelessCharge: "Wireless smartphone charger in the front console.",
      poweredSeats: "Manual seat height adjustment for driver.",
      smartEntry: "Smart keyless entry and start button.",
      pushStart: "Smart push-start system.",
      rearComfort: "Rear armrest with cup holders, rear charging ports, and rear individual AC ducts."
    },
    infotainment: {
      screenSize: "9-inch Smart Playcast display.",
      audio: "6-Speaker Audio System (4 Speakers + 2 Tweeters).",
      androidAuto: "Yes (Wireless).",
      appleCarplay: "Yes (Wireless).",
      connectedCar: "Toyota i-Connect with remote lock/unlock, AC control, and geofencing.",
      voiceCommand: "Yes (Hey Toyota).",
      navigation: "Yes."
    },
    performance: {
      engineType: "1.5L TNGA Petrol Hybrid / 1.5L K-Series Petrol NeoDrive",
      displacement: "1490 cc (Hybrid) / 1462 cc (NeoDrive)",
      power: "Hybrid: 115.56 PS Combined Power / NeoDrive: 103 PS @ 6000 rpm",
      torque: "Engine: 122 Nm / Motor: 141 Nm",
      transmission: "e-Drive (Hybrid) / 5-Speed MT / 6-Speed AT (NeoDrive)",
      drivetrain: "2WD / AWD (Optional on NeoDrive MT)",
      efficiency: "Incredible hybrid fuel efficiency of ~27.97 km/l",
      techExplanation: "Strong Hybrid features a 3-cylinder 1.5L Atkinson cycle engine linked to an electric motor and lithium-ion battery. Bypasses the petrol engine at low speeds for zero emissions and silent drive."
    },
    dimensions: {
      length: "4365 mm",
      width: "1795 mm",
      height: "1645 mm",
      wheelbase: "2600 mm",
      clearance: "210 mm",
      fuelCapacity: "45 L",
      weight: "1275 kg (Hybrid V)"
    },
    chassis: {
      frontSusp: "MacPherson Strut Front Suspension with coil springs",
      rearSusp: "Torsion Beam rear suspension",
      chassisType: "Monocoque chassis designed for high safety and low weight",
      rideQuality: "Firm and stable, absorbing city road joints easily and keeping cabin roll low.",
      handling: "Nimble steering with a very tight turning radius of 5.4 m."
    },
    safety: {
      airbags: "6 SRS Airbags (Front, Side, and Curtain)",
      abs: "ABS with EBD and Brake Assist",
      vsc: "Vehicle Stability Control (VSC) with Hill Start Assist",
      hillAssist: "Hill Hold Control and Downhill Assist Control (AWD)",
      otherFeatures: ["360-degree Camera", "Rear Parking Sensors", "Tire Pressure Monitoring System (TPMS)"],
      adas: {
        hasAdas: false
      }
    },
    colors: [
      { name: "Cafe White", hex: "#f3f4f6" },
      { name: "Enticing Silver", hex: "#9ca3af" },
      { name: "Speedy Blue", hex: "#2563eb" },
      { name: "Sportin Red", hex: "#b91c1c" }
    ],
    accessories: {
      exterior: ["Chrome grill garnishes", "Door visors", "Front and rear skid plates"],
      interior: ["3D floor mats", "Wireless charger mat", "Seat cushions"],
      protection: ["Body side molding", "Mud flaps set", "Car cover"]
    },
    ownership: {
      warranty: "3 Years / 100,000 km standard. Hybrid Battery: 8 Years / 160,000 km.",
      intervals: "10,000 km or 1 Year",
      schedule: "Standard oil changes, hybrid diagnostics, air filter replacements.",
      benefits: ["Toyota Express Service", "Roadside Assistance plan", "Express Maintenance coverage"]
    },
    comparison: {
      internalAlternative: "Toyota Glanza (Lower price, compact hatchback focus)",
      competitor: "Hyundai Creta / Maruti Grand Vitara",
      comparisonPoints: [
        { feature: "Fuel Efficiency", thisCar: "27.97 km/l (Hybrid)", altCar: "22.3 km/l (Mild Hybrid)", compCar: "16-18 km/l (Petrol)" },
        { feature: "Drivetrain Options", thisCar: "Front-Wheel Hybrid / All-Wheel Drive", altCar: "Front-Wheel Drive", compCar: "Front-Wheel Drive Only" },
        { feature: "Sunroof", thisCar: "Massive double-slide panoramic sunroof", altCar: "Single-pane sunroof", compCar: "Panoramic sunroof option" }
      ]
    }
  }
};
