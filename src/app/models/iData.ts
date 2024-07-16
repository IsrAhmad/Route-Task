interface ICustomer {
  id: number;
  name: string;
}

// Define the Transaction interface
interface ITransaction {
  id: number;
  customer_id: number;
  date: string;
  amount: number;
}

// Define the main interface that includes customers and transactions
interface IData {
  customers: ICustomer[];
  transactions: ITransaction[];
}
