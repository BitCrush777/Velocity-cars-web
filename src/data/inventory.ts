export interface VehicleSpecs {
  engine: string;
  horsepower: number;
  torque: string;
  transmission: string;
  fuel_type: string;
  drivetrain: string;
  top_speed: string;
  acceleration_0_100: string;
  range?: string;
  weight: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  category: string;
  price: number;
  specs: VehicleSpecs;
  image: string;
  colors: string[];
  features: string[];
}

export const INVENTORY: Vehicle[] = [
  {
    id: "lamborghini-revuelto-2024",
    brand: "Lamborghini",
    model: "Revuelto",
    variant: "V12 Hybrid",
    year: 2024,
    category: "Hypercars",
    price: 608358,
    specs: {
      engine: "6.5L V12 + 3 Electric Motors",
      horsepower: 1001,
      torque: "725 Nm (Engine) + Electric",
      transmission: "8-Speed Dual-Clutch",
      fuel_type: "Hybrid",
      drivetrain: "AWD",
      top_speed: "350 km/h",
      acceleration_0_100: "2.5s",
      range: "10 km (EV Mode)",
      weight: "1772 kg"
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXyVmIGJCtv2rgE1jnkD9nbEXV3gDit99Gkf_xgYtBfmsaE8X3X4dkVNPinbyKrGq-zGLp-5ta1P01gHfH12f1hfGWs4QP2nOqhHnuBHPKvi8Y_ERqaQ8k9Ae_0z-8aiXpIm4bCDETNV0IZQRwrsXwFXes7mSqQLuqY3v-tbMrhE09Xf8wy_mDnWS89McMQv4SPl59p5KoW3DCZiRITUCuMAlpqDINu_9xizlnooBRwAHnTUphEDMQCccHXHc3fY0YOnrLqaDFABw",
    colors: ["Arancio Apodis", "Bianco Monocerus", "Nero Noctis", "Giallo Auge"],
    features: ["Carbon Fiber Chassis", "Active Aerodynamics", "LDVI 2.0"]
  },
  {
    id: "porsche-911-gt3rs-2023",
    brand: "Porsche",
    model: "911 GT3 RS",
    variant: "992 Generation",
    year: 2023,
    category: "Sports Cars",
    price: 223800,
    specs: {
      engine: "4.0L Flat-6",
      horsepower: 518,
      torque: "465 Nm",
      transmission: "7-Speed PDK",
      fuel_type: "Petrol",
      drivetrain: "RWD",
      top_speed: "296 km/h",
      acceleration_0_100: "3.2s",
      weight: "1450 kg"
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByEhVa56RikpvyHCYHhdVtUNCkgDWYsI8hjnbuO2hEuQgwmS32L1GPWw4CzBkATZVdG4rR_m4woXnLu42-0VeG7h6zQ3CCSM6KUFEXEVfW2eNW_qbaYFibwf2qmsxpRqgyf3clRJvfKOsudJTThtQXriYjCDvzBp_65zP3NSH1kch9Qgj6d0sp2sH5AEq1KSLGyENzYDmXL4wU9_owX8cChsL6DGK94pxrjO36khdG_lrL9HvOkB1QeSsmNfFFIST77ya-_s_E27U",
    colors: ["Guards Red", "Racing Yellow", "Shark Blue", "GT Silver"],
    features: ["DRS System", "Adjustable Suspension", "Carbon Bucket Seats"]
  },
  {
    id: "tesla-model-s-plaid-2024",
    brand: "Tesla",
    model: "Model S",
    variant: "Plaid",
    year: 2024,
    category: "Electric Vehicles (EVs)",
    price: 89990,
    specs: {
      engine: "Tri-Motor Setup",
      horsepower: 1020,
      torque: "1420 Nm",
      transmission: "Single Speed",
      fuel_type: "Electric",
      drivetrain: "AWD",
      top_speed: "322 km/h",
      acceleration_0_100: "2.1s",
      range: "637 km",
      weight: "2162 kg"
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_tmUdHHktMR8YTcg-CWD9b7LWqzeTqlgb-g7P1_tI8KzW2A8zaCFCiqhRoShCTHXhT_CKUm7XP4e1HbSo0Gz-zXks-hkyqn5mvldv5yehlGs09yPuIgcg0dGXKsLt9-C55i3B94Qd0Q8Vp06ge59vIOySIU9u6KbNOPrJOR28vu2tcfDuBkEtUS4JoSa8SsLDuJQlurrQ5AtCUNRNm24Y1YNsc8fTTovD4fqiWjmJlc9qf_Gc9s2Y0ODHkWaZAoMS7Z9_qooqpdU",
    colors: ["Ultra Red", "Solid Black", "Stealth Grey", "Pearl White"],
    features: ["Autopilot", "Yoke Steering", "22-Speaker Audio"]
  },
  {
    id: "ferrari-purosangue-2024",
    brand: "Ferrari",
    model: "Purosangue",
    variant: "V12 Luxury SUV",
    year: 2024,
    category: "SUVs",
    price: 398350,
    specs: {
      engine: "6.5L V12",
      horsepower: 715,
      torque: "716 Nm",
      transmission: "8-Speed Dual-Clutch",
      fuel_type: "Petrol",
      drivetrain: "AWD",
      top_speed: "310 km/h",
      acceleration_0_100: "3.3s",
      weight: "2033 kg"
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-XPBl5M0R6LJQbWHBVuv93huRePfq8waOnvn8u0_J1TS1oJg7dm_8Bl43kYeDy95ea56dfbN0Pl1wKNAkLlaoQ34iMOMVdsVy57jn5avqZPWDfSRDW127hl5bw-oxHIKLACBmGDwJnAcSQ272l6PcXRhn210itdL6GkTp5tWxoPxM-eDZdnNjj58A7GhBcPVdwX1OvnSpT-dbaIAs6LGyL_eJE21fKn_XE_G4n45Q4hsqvM1nCoRBBGvZKc2Z30DMuIBjL8Cse_E",
    colors: ["Rosso Corsa", "Blu Pozzi", "Grigio Titanio", "Nero Daytona"],
    features: ["Active Suspension", "Suicide Doors", "Massaging Seats"]
  },
  {
    id: "mercedes-amg-eqs-2024",
    brand: "Mercedes-Benz",
    model: "EQS Sedan",
    variant: "AMG 53 4MATIC+",
    year: 2024,
    category: "Electric Vehicles (EVs)",
    price: 147550,
    specs: {
      engine: "Dual Electric Motors",
      horsepower: 649,
      torque: "950 Nm",
      transmission: "Single Speed",
      fuel_type: "Electric",
      drivetrain: "AWD",
      top_speed: "250 km/h",
      acceleration_0_100: "3.4s",
      range: "560 km",
      weight: "2580 kg"
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc8ehQT0wN7aTSdDPqBcj-69nrc5XJrPND4uBG008MaB_pwL6YIgq-5Ndeagiwl5HsA5rbN6xsOOG9QqI6ydcM42g-HNo4ZEhpByfhwPzdhs9SzTjWNRW3GjPL2rIFEBoNUEsfrEH-7KVO5IpdIEbw5E3RH68Amz8ByW-PPVtTnC6wRiOBTDIk24qZag-XEYJ7JElfySHGl0cUX4lekbpQS1sN6fKvvHZ9-b3nXXbwSLrPcwjtoCZ1gwTJa2ExYCzd165DxbwqPr0",
    colors: ["Obsidian Black", "Selenite Grey", "Diamond White", "Spectral Blue"],
    features: ["Hyperscreen", "Rear Axle Steering", "Burmester 4D Sound"]
  }
];
