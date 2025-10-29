
export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  title: string;
  date: string; // ISO Date string for filtering
  timestamp: string; // Formatted string for display
  amount: number;
}

export interface FishPrice {
  id: string;
  name: string;
  avgWeight: string;
  size: string;
  stock: string;
  price: number;
  change: number;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  price: string;
  productUrl?: string;
}

// FIX: Added missing InventoryItem interface
export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  imageUrl?: string;
  location?: string;
}

// FIX: Added missing InvoiceItem interface
export interface InvoiceItem {
  id: number;
  fishType: string;
  quantity: number;
  pricePerMaund: number;
}