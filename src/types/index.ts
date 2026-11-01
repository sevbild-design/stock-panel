// src/types/index.ts

// Доменная сущность приложения — «товар на складе».
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

// Причина (вид) поступления товара.
export type TReceiptReason = 'supplier' | 'customer-return';