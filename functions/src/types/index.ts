import { Timestamp } from "firebase-admin/firestore";

// export enum Role {
//   MANAGER = "MANAGER",
//   CLIENT = "CLIENT"
// }

// export enum Status {
//   ACTIVE = "ACTIVE",
//   FINISHED = "FINISHED"
// }

export type Credentials = {
  email: string;
  password: string;
};

export type CreditCard = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

export type Entity = { // collection de pessoas
  name: string;
  document: string;
  phoneNumber: string;
  birthday: string;
  isManager: boolean;
  creditCard?: CreditCard;
};

export type CreateUserType = {
  entity: Entity;
  credentials: Credentials;
}

export type Account = {
  entityId: string;
  email:string;
  password:string;
}

export type Locker = {
  lockerId?: string;
  name: string;
  isAvailable: boolean;
};

export type RentalOption = {
  rentalOptionId?: string;
  time: number;
  price: number;
};

export type Unit = { // collection de unidades
  unitId?: string; // This is the ID of the unit in Firestore
  managerId?: string;
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
    latitude: number;
    longitude: number;
  };
  rentalOptions: RentalOption[];
  lockersQuantity: number;
  lockers?: string[];
  manager: {
    id: string;
    name: string;
  }
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
  isActive: boolean;
};
