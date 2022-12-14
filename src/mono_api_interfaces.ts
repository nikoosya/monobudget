interface paymentInterface {
  id: string;
  time: number;
  description: string;
  mcc: number;
  originalMcc: number;
  amount: number;
  operationAmount: number;
  currencyCode: number;
  commissionRate: number;
  cashbackAmount: number;
  balance: number;
  hold: boolean;
  receiptId: string;
}

interface paymentPreparedInterface {
  paymentDescription: string;
  time: number;
  sumCardCurrency: number;
  sumOperationCurrency: number;
  currency: string;
  balance: number;
  category: string;
  id: string;
}

interface accountInterface {
  balance: number;
  cashbackType: string;
  creditLimit: number;
  currencyCode: number;
  iban: string;
  id: string;
  maskedPan: Array<string>;
  sendId: string;
  type: "black" | "white" | "eAid";
}

interface clientInfoInterface {
  accounts: Array<accountInterface>;
  clientId: string;
  name: string;
  permissions: string;
  webHookUrl: string;
}

export type { paymentInterface, paymentPreparedInterface, clientInfoInterface, accountInterface };
