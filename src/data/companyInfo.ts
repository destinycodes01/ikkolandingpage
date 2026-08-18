import { Product, Service, StatItem } from '../types';

// Import photorealistic generated marketing images
import heroLpgStationImg from '../assets/images/hero_station_v2_1786097586806.jpg';
import heroBgEnergyImg from '../assets/images/hero_bg_ikko_energy_1786238783264.jpg';
import lpgDeliveryTruckImg from '../assets/images/about_ikko_truck_fleet_1786098167245.jpg';
import lpgCylindersSetImg from '../assets/images/ikko_lpg_cylinders_brand_1786100322968.jpg';
import gasAccessoriesImg from '../assets/images/gas_accessories_1786028479825.jpg';
import kitchenFamilyImg from '../assets/images/kitchen_family_1786028493673.jpg';

export const COMPANY_INFO = {
  name: 'IK.KO Energy Ltd',
  shortName: 'IK.KO Energy',
  tagline: 'Reliable LPG Supply & Cooking Gas Delivery in Owerri',
  description:
    'IK.KO Energy Ltd supplies cooking gas (LPG), sells LPG cylinders, burners, regulators, hoses and other gas accessories. The company also provides gas equipment maintenance, home delivery services, wholesale supply, retail supply, CNG products, and petrol-to-gas engine conversion services.',
  location: {
    address: 'MCC Road, Golden Gate, Umuoba Uratta, Owerri, Imo State, Nigeria.',
    shortAddress: 'MCC Road, Golden Gate, Owerri',
    state: 'Imo State',
    city: 'Owerri',
    country: 'Nigeria',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.261234!2d7.0267!3d5.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042593b4dd6b811%3A0x62c0b00c9213123!2sOwerri%2C%20Imo!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng',
  },
  phone: '07073333969',
  phoneFormatted: '+234 707 333 3969',
  email: 'contact@ikkoenergyltd.com',
  mainEmail: 'contact@ikkoenergyltd.com',
  supportEmail: 'support@ikkoenergyltd.com',
  emails: {
    main: 'contact@ikkoenergyltd.com',
    support: 'support@ikkoenergyltd.com',
  },
  businessHours: '7:00 AM - 8:00 PM (Monday - Sunday)',
  images: {
    heroStation: 'https://i.ibb.co/ch378Hnk/IKKOHEROIMG.jpg',
    heroBg: 'https://i.ibb.co/ch378Hnk/IKKOHEROIMG.jpg',
    deliveryTruck: 'https://i.ibb.co/GQz0bMfH/aboutikko.jpg',
    cylindersSet: lpgCylindersSetImg,
    accessories: gasAccessoriesImg,
    kitchenFamily: kitchenFamilyImg,
  },
};

export const STATS_DATA: StatItem[] = [
  {
    value: '500+',
    label: 'Happy Customers',
    description: 'Homes, restaurants, and corporate clients served across Owerri.',
    iconName: 'Users',
  },
  {
    value: '100%',
    label: 'Safe LPG Supply',
    description: 'Guaranteed odorized, unadulterated high-purity cooking gas.',
    iconName: 'ShieldCheck',
  },
  {
    value: 'Fast',
    label: 'Home Delivery',
    description: 'Prompt doorstep delivery to your location in Imo State.',
    iconName: 'Truck',
  },
  {
    value: 'Trusted',
    label: 'Professional Service',
    description: 'Certified technicians and experienced gas handling staff.',
    iconName: 'Award',
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'lpg-supply',
    title: 'LPG Supply',
    description:
      'Continuous, bulk and retail supply of top-grade liquefied petroleum gas (cooking gas) for residential and commercial usage.',
    iconName: 'Flame',
    category: 'supply',
    highlight: 'Pure, high-burn efficiency cooking gas',
  },
  {
    id: 'lpg-refilling',
    title: 'LPG Refilling',
    description:
      'Precision weight refilling using calibrated digital scales to guarantee exact gas volume for every cylinder filled.',
    iconName: 'Gauge',
    category: 'supply',
    highlight: 'Calibrated digital weight accuracy',
  },
  {
    id: 'cylinder-sales',
    title: 'LPG Cylinder Sales',
    description:
      'Brand new certified steel and composite LPG cylinders in various sizes (3kg, 6kg, 12.5kg, 25kg, and 50kg) with safety valves.',
    iconName: 'Package',
    category: 'equipment',
    highlight: 'SON certified explosion-resistant cylinders',
  },
  {
    id: 'gas-burners',
    title: 'Gas Burners',
    description:
      'High-performance cast iron and stainless steel single, double, and triple-head gas burners for household and industrial cooking.',
    iconName: 'Zap',
    category: 'equipment',
    highlight: 'Fuel-efficient blue flame combustion',
  },
  {
    id: 'gas-regulators',
    title: 'Gas Regulators',
    description:
      'Automatic safety gas regulators equipped with pressure gauges and auto-shutoff safety mechanisms to prevent gas leaks.',
    iconName: 'Sliders',
    category: 'equipment',
    highlight: 'Auto-shutoff leak protection',
  },
  {
    id: 'gas-hoses',
    title: 'Gas Hoses',
    description:
      'Reinforced multi-layer rubber and stainless steel braided gas pipes designed to withstand high pressure and weather exposure.',
    iconName: 'Activity',
    category: 'equipment',
    highlight: 'High pressure burst-proof rubber',
  },
  {
    id: 'gas-accessories',
    title: 'Gas Accessories',
    description:
      'Complete range of adapters, brass valves, hose clips, ignition lighters, cylinder stands, and safety caps.',
    iconName: 'Wrench',
    category: 'equipment',
    highlight: 'Heavy-duty brass fittings',
  },
  {
    id: 'equipment-maintenance',
    title: 'Equipment Maintenance',
    description:
      'Professional inspection, leak detection testing, valve repairs, burner cleaning, and safety checks for all gas appliances.',
    iconName: 'ShieldAlert',
    category: 'specialized',
    highlight: 'Certified safety check & repair',
  },
  {
    id: 'home-delivery',
    title: 'Home Delivery',
    description:
      'Convenient doorstep delivery service across Owerri. Order via call or WhatsApp and get your gas delivered right to your kitchen.',
    iconName: 'Truck',
    category: 'supply',
    highlight: 'Doorstep cylinder swap & installation',
  },
  {
    id: 'wholesale-supply',
    title: 'Wholesale Supply',
    description:
      'Bulk gas logistics for hotels, bakeries, hospitals, schools, eateries, and reseller stations with scheduled tanker delivery.',
    iconName: 'Building2',
    category: 'supply',
    highlight: 'Bulk rate pricing for commercial clients',
  },
  {
    id: 'retail-supply',
    title: 'Retail Supply',
    description:
      'Friendly walk-in refilling experience at our golden gate plant with zero waiting time and expert handling.',
    iconName: 'Store',
    category: 'supply',
    highlight: 'Fast walk-in refill service',
  },
  {
    id: 'petrol-gas-conversion',
    title: 'Petrol-to-Gas Conversion',
    description:
      'Innovative conversion service for petrol generators, tricycles, and vehicles to dual-fuel CNG/LPG, saving up to 60% on fuel costs.',
    iconName: 'Cpu',
    category: 'specialized',
    highlight: 'Cut fuel costs by up to 60%',
  },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: '3kg-lpg-cylinder',
    name: '3kg LPG Cylinder',
    category: 'cylinders',
    shortDescription: 'Ultra-compact and portable 3kg cooking gas cylinder ideal for students, single individuals, and outdoor camping.',
    fullDescription:
      'Lightweight 3kg cylinder crafted for portability and ease of handling. Perfect for single occupants, students, or emergency backup cooking with sturdy carry handles.',
    image: lpgCylindersSetImg,
    badge: 'Compact & Portable',
    sizesAvailable: ['3kg'],
    specs: ['Ultra-portable design', 'Precision leak-proof valve', 'SON Safety Certified'],
  },
  {
    id: '6kg-lpg-cylinder',
    name: '6kg LPG Cylinder',
    category: 'cylinders',
    shortDescription: 'Convenient 6kg gas cylinder for small families, bachelors, and compact apartment kitchens.',
    fullDescription:
      'Handy 6kg cylinder offering an ideal balance of compact size and extended burn time. Fits conveniently under kitchen countertops.',
    image: lpgCylindersSetImg,
    badge: 'Small Family Choice',
    sizesAvailable: ['6kg'],
    specs: ['Space-saving footprint', 'Coated anti-rust steel', 'High-pressure safety valve'],
  },
  {
    id: '9kg-lpg-cylinder',
    name: '9kg LPG Cylinder',
    category: 'cylinders',
    shortDescription: 'Ideal compact cylinder size for medium families, outdoor catering, and apartments.',
    fullDescription:
      'Versatile 9kg cylinder providing the perfect balance between capacity and portability. Fits easily into kitchen cabinets and features ergonomic handles for easy movement.',
    image: lpgCylindersSetImg,
    badge: 'Popular Family Choice',
    sizesAvailable: ['9kg'],
    specs: ['Compact footprint', 'Rust-resistant finish', 'Precision safety valve'],
  },
  {
    id: 'orange-lpg-cylinder',
    name: 'Orange LPG Cylinder (12.5kg)',
    category: 'cylinders',
    shortDescription: 'Standard household 12.5kg cylinder with bright safety orange high-visibility casing.',
    fullDescription:
      'Nigeria’s favorite household size. Premium 12.5kg cylinder coated in high-visibility protective enamel. Designed for smooth gas flow, high durability, and maximum safety.',
    image: lpgCylindersSetImg,
    badge: 'Best Seller (#1 Household Size)',
    sizesAvailable: ['12.5kg'],
    specs: ['Standard 12.5kg size', 'High-heat resistant coating', 'Double safety valve seal'],
  },
  {
    id: '25kg-lpg-cylinder',
    name: '25kg LPG Cylinder',
    category: 'cylinders',
    shortDescription: 'High-capacity 25kg cylinder designed for large households, frequent caterers, and canteens.',
    fullDescription:
      'Heavy-duty 25kg cylinder built for large families, commercial catering, and fast-food outlets requiring extended refill intervals.',
    image: lpgCylindersSetImg,
    badge: 'Large Household & Catering',
    sizesAvailable: ['25kg'],
    specs: ['High capacity steel body', 'Heavy-duty valve assembly', 'SON Certified'],
  },
  {
    id: 'large-lpg-cylinder',
    name: 'Large LPG Cylinder (50kg)',
    category: 'cylinders',
    shortDescription: 'Industrial & heavy commercial grade 50kg steel gas cylinder designed for heavy cooking needs.',
    fullDescription:
      'Heavy-duty 50kg cylinder engineered for restaurants, bakeries, hotels, and large commercial kitchens. Features reinforced steel casing, high-flow valve, and corrosion-resistant powder coating.',
    image: lpgCylindersSetImg,
    badge: 'Commercial Grade',
    sizesAvailable: ['50kg'],
    specs: ['Explosion-proof steel', 'High-flow industrial valve', 'SON Safety Certified'],
  },
  {
    id: 'gas-burner',
    name: 'Heavy-Duty Stainless Gas Burner',
    category: 'appliances',
    shortDescription: 'Stainless steel double burner stove with auto-ignition and high efficiency blue flame.',
    fullDescription:
      'Premium double burner cooker crafted from rust-free stainless steel. Designed with whirlwind blue flame burners that reduce gas consumption while providing instant intense heat.',
    image: gasAccessoriesImg,
    badge: 'High Efficiency',
    specs: ['Rust-proof stainless body', 'Automatic piezo ignition', 'Energy-saving blue flame'],
  },
  {
    id: 'gas-hose',
    name: 'High-Pressure Reinforced Gas Hose',
    category: 'accessories',
    shortDescription: '3-layer reinforced flexible rubber gas hose built for max pressure and durability.',
    fullDescription:
      'Heavy-duty 2-meter gas tube constructed with synthetic inner lining, fiber braid mesh reinforcement, and weather-resistant outer coat. Safe against pinholes, rodents, and heat.',
    image: gasAccessoriesImg,
    badge: 'Safety First',
    specs: ['3-Layer reinforced', 'Flame resistant outer skin', 'Includes 2 stainless steel clamps'],
  },
  {
    id: 'gas-regulator',
    name: 'Automatic Safety Gas Regulator',
    category: 'accessories',
    shortDescription: 'Low pressure gas regulator with built-in pressure gauge and safety leak shutoff.',
    fullDescription:
      'Top-tier gas regulator featuring a live pressure gauge to monitor gas level and automatic flow cutoff if a line rupture occurs. Essential for every safe kitchen.',
    image: gasAccessoriesImg,
    badge: 'Auto Shut-Off',
    specs: ['Live pressure dial gauge', 'Instant leak auto-cut off', 'Fits standard 12.5kg/50kg valves'],
  },
  {
    id: 'gas-valves',
    name: 'Precision Brass Gas Valves & Adapters',
    category: 'accessories',
    shortDescription: 'Certified heavy brass control valves, quick-connect fittings, and cylinder adaptors.',
    fullDescription:
      'Solid brass valves engineered for leak-free connections. Precision-machined threads fit seamlessly on standard Nigerian LPG cylinders and commercial manifolds.',
    image: gasAccessoriesImg,
    badge: 'Heavy Brass',
    specs: ['100% Solid brass build', 'High pressure seal rings', 'Corrosion free'],
  },
  {
    id: 'gas-accessories-kit',
    name: 'Complete Kitchen Safety Gas Kit',
    category: 'accessories',
    shortDescription: 'All-in-one safety bundle: regulator, 2m hose, stainless clamps, and lighter.',
    fullDescription:
      'The ultimate convenience kit for new gas setups or complete kitchen system upgrades. Includes 1 high-safety regulator, 2 meters reinforced hose, 2 brass clamps, and a long gas lighter.',
    image: gasAccessoriesImg,
    badge: 'Complete Value Bundle',
    specs: ['Everything needed for setup', 'Factory quality tested', 'Save 15% vs individual items'],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Safe Supply',
    description:
      'We strictly adhere to international safety protocols. Every cylinder undergoes strict leak testing and weight verification before dispatch.',
    iconName: 'ShieldCheck',
    color: '#18A84E',
  },
  {
    title: 'Fast Delivery',
    description:
      'Our dedicated delivery fleet ensures prompt, hassle-free doorstep gas delivery anywhere in Owerri within minutes of ordering.',
    iconName: 'Truck',
    color: '#1FA1EC',
  },
  {
    title: 'Affordable Prices',
    description:
      'Competitive wholesale and retail pricing with zero hidden charges. Get maximum value for your money with full, unadulterated weight.',
    iconName: 'Tag',
    color: '#DD3F39',
  },
  {
    title: 'Quality Products',
    description:
      'All our cylinders, burners, regulators, and accessories are SON-certified and built from high-grade explosion-resistant materials.',
    iconName: 'Award',
    color: '#18689B',
  },
];

export const OWERRI_DELIVERY_AREAS = [
  'MCC Road / Golden Gate',
  'Umuoba Uratta',
  'Ikenegbu Layout',
  'Aladinma Housing Estate',
  'World Bank Estate',
  'Akwakuma & Orji',
  'Nekede & Ihiagwa',
  'Umuguma & Owerri West',
  'Trans-Egbu Layout',
  'Amakohia & New Owerri',
];

export const FAQS = [
  {
    question: 'How do I order home delivery for cooking gas in Owerri?',
    answer:
      'Simply click the "Get Gas Delivered" button on our website, call us directly at 07073333969, or send a WhatsApp message. State your cylinder size and location in Owerri, and our team will dispatch a delivery van immediately.',
  },
  {
    question: 'How do I know I am getting full gas weight?',
    answer:
      'At IK.KO Energy Ltd, transparency is our guarantee. All refilling is done on calibrated digital electronic scales. You can request our delivery personnel to weigh your cylinder right in your presence upon delivery.',
  },
  {
    question: 'What is Petrol-to-Gas Conversion and how does it save money?',
    answer:
      'Our petrol-to-gas conversion service modifies petrol generators, tricycles, and vehicles to run on LPG or CNG (Compressed Natural Gas). Cooking gas burns cleaner, extends engine life, and reduces fuel expenses by 50% to 60%.',
  },
  {
    question: 'Where is IK.KO Energy Ltd located?',
    answer:
      'Our head station is located at MCC Road, Golden Gate, Umuoba Uratta, Owerri, Imo State, Nigeria. You are welcome to visit our walk-in refilling plant anytime during business hours.',
  },
];
