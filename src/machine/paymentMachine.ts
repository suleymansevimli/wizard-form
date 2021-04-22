import { createMachine } from "xstate";

/**
 * Types
 */

type Account = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};

type Address = {
  address: string;
  county: string;
  city: string;
  country: string;
};

type Payment = {
  cardHolder: string;
  cardNumber: string;
  month: string;
  year: number;
  cvc: string;
};

/**
 * Context
 */
type PaymentContext = {
  account: Account;
  address: Address;
  payment: Payment;
};

/**
 * Events
 */
type PaymentEvents = { type: "NEXT" } | { type: "PREV" };

/**
 *  States
 */
type PaymentState =
  | { value: "account"; context: PaymentContext }
  | { value: "address"; context: PaymentContext }
  | { value: "payment"; context: PaymentContext }
  | { value: "review"; context: PaymentContext };

export const paymentMachine = createMachine<
  PaymentContext,
  PaymentEvents,
  PaymentState
>({
  id: "PaymentMachine",
  initial: "account",
  context: {
    account: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
    address: {
      address: "",
      county: "",
      city: "",
      country: "",
    },
    payment: {
      cardHolder: "",
      cardNumber: "",
      month: "",
      year: 2021,
      cvc: "",
    },
  },
  states: {
    account: {
      on: {
        NEXT: "address",
      },
    },
    address: {
      on: {
        NEXT: "payment",
        PREV: "account",
      },
    },
    payment: {
      on: {
        NEXT: "review",
        PREV: "address",
      },
    },
    review: {
      type: "final",
      on: {
        PREV: "payment",
      },
    },
  },
});
