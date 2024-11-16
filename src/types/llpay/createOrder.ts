
export type ReqCreateOrderType = {
  cardToken: string
  cardName: string
  token: string
  method: string
  orderId: string
}


interface PaymentData {
  payment_currency_code: string;
  payment_amount: string;
  exchange_rate: string;
  payment_status: string;
  settlement_currency_code: string;
  settlement_amount: string;
  installments: string;
}

interface Order {
  ll_transaction_id: string;
  merchant_transaction_id: string;
  payment_data: PaymentData;
  "3ds_status": string;
  payment_url: string;
  key: string;
}

interface ApiData {
  return_code: string;
  return_message: string;
  trace_id: string;
  Order: Order;
}

export interface ApiResponse {
  code: number;
  data: ApiData;
  msg: string;
}
