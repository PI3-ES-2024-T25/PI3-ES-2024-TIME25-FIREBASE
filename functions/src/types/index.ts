import { Timestamp } from "firebase-admin/firestore";

export enum Role {
  MANAGER = "MANAGER",
  CLIENT = "CLIENT"
}

export enum Status {
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED"
}

export type Account = { // Vai para a autenticação
  email: string;
  password: string;
  // entityId: string; // This is the ID of the entity in Firestore
};

export type CreditCard = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: Date;
  cvv: string;
};

export type Entity = { // collection de pessoas
  entityId?: string; // This is the ID of the entity in Firestore
  name: string;
  document: string;
  phoneNumber: string;
  birthday: string;
  role: Role;
  credentials: Account;
  creditCard?: CreditCard;
};

export type Locker = {
  lockerId?: string;
  name: string;
  available: boolean;
};

export type RentalOption = {
  rentalOptionId?: string;
  time: number;
  price: number;
};

export type Unit = { // collection de unidades
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
  rentalOptions: RentalOption[];
  lockersQuantity: number;
  lockers: Locker[];
};

export type Rental = { // collection de alugueis/locações
  rentalId?: string; // This is the ID of the rental in Firestore
  clientId: string;
  startDate: Timestamp;
  expectedEndDate: Timestamp;
  actualEndDate?: Timestamp;
  rentalDetails: {
    unitId: string;
    lockerId: string;
    rentalOptionId: string;
  };
  imageUrl: string[];
  status: Status;
};
