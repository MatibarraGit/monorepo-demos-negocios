export type ProductType = {
  product_id: number;
  product_name: string;
  sell_price: number; // unidades enteras (ej. 61500), sin decimales
  stock?: number; // 0 = sin stock. Ausente en el dataset actual → se asume disponible
  product_description: string | null; // puede venir vacío ("") o directamente null (~17 productos)
  category_id: number;
  category_name: string;
  images: string[];
};
