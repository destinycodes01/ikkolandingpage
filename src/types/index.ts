export interface Product {
  id: string;
  name: string;
  category: 'cylinders' | 'appliances' | 'accessories';
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge?: string;
  sizesAvailable?: string[];
  specs?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'supply' | 'equipment' | 'specialized';
  highlight: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceNeeded: string;
  message: string;
  quantity?: string;
  deliveryAddress?: string;
}

export interface GasOrderData {
  gasSize: string;
  cylinderOption: 'refill' | 'new_cylinder';
  deliveryAddress: string;
  customerName: string;
  customerPhone: string;
  notes?: string;
}
