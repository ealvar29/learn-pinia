export type Transaction = {
  id: number;
  type: "charge" | "refund" | "payment";
  amount: number;
  status: "pending" | "processed";
};
