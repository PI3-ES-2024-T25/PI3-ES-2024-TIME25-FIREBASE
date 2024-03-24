import { Timestamp } from "firebase-admin/firestore";

export type Account = {
  email: string;
  password: string;
};

export type CreditCard = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: Date;
  cvv: string;
};

export enum Role {
  MANAGER = "MANAGER",
  CLIENT = "CLIENT"
}

export enum Status {
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED"
}

export type Entity = {
  entityId?: string; // This is the ID of the entity in Firestore
  name: string;
  document: string;
  phoneNumber: string;
  birthday: string;
  role: Role;
  credentials: Account;
  creditCard?: CreditCard;
};
Timestamp;
export type Locker = {
  name: string;
  available: boolean;
};

export type Unit = {
  unitId?: string; // This is the ID of the unit in Firestore
  name: string;
  description: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    zipCode?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  lockersQuantity: number;
  lockers: Locker[];
};

export type Rental = {
  rentalId?: string; // This is the ID of the rental in Firestore
  lockerId: string;
  clientId: string;
  startDate: Timestamp;
  expectedEndDate: Timestamp;
  actualEndDate?: Timestamp;
  rentalPrice: number;
  imageUrl: string[];
  status: Status;
};
