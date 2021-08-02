import { TransactionType } from "./transaction-type.type";

interface BaseTransaction {
  id: number;
  type: TransactionType
  date: Date;
  value: number;
  cashflow: number;
}

interface HasSecurity {
  security: string;
}

interface HasShares {
  shares: number;
}

type HasType<T extends TransactionType> = { type: T }

export type DepositTransaction = HasType<'deposit'> & BaseTransaction;
export type WithdrawalTransaction = HasType<'withdrawal'> & BaseTransaction;
export type BuyTransaction =  HasType<'buy'> & HasSecurity & HasShares & BaseTransaction;
export type SellTransaction = HasType<'sell'> & HasSecurity & BaseTransaction

export type Transaction =
  DepositTransaction |
  WithdrawalTransaction |
  BuyTransaction |
  SellTransaction;


