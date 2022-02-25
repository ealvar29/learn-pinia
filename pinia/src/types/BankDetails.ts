import type { Transaction } from "./Transaction";

export type BankDetails = {
  balance: number;
  transactions: Transaction[];
};
