import { Entity, Unit } from "../types";

export const willUserManager: Entity = {
  name: "Willian Silva Ferreira",
  document: "123.123.123-12",
  phoneNumber: "(11) 22334-2233",
  birthday: "29/08/2003",
  isManager: true,
  credentials: {
    email: "willsferreir@gmail.com",
    password: "senha",
  },
};

export const willUserClient: Entity = {
  name: "Willian Silva Ferreira",
  document: "122.122.122-13",
  phoneNumber: "(11) 22334-2233",
  birthday: "29/08/2003",
  isManager: false,
  credentials: {
    email: "williansilva9434@gmail.com",
    password: "senha",
  },
};

export const unit1Puccampinas: Unit = {
  name: "PUC Campinas H15",
  description: "Pontifícia Universidade Católica de Campinas - Bloco H15",
  address: {
    street: "Av. Reitor Benedito José Barreto Fonseca",
    number: "H15",
    neighborhood: "Parque dos Jacarandás",
    city: "Campinas",
    state: "SP",
    country: "Brasil",
  },
  coordinates: {
    latitude: -22.8342006,
    longitude: -47.0525424,
  },
  lockersQuantity: 3,
  lockers: [
    {
      name: "Locker 1",
      isAvailable: true,
    },
    {
      name: "Locker 2",
      isAvailable: true,
    },
    {
      name: "Locker 3",
      isAvailable: true,
    },
  ],
  rentalOptions: [
    {
      time: 1,
      price: 10,
    },
    {
      time: 2,
      price: 20,
    },
    {
      time: 3,
      price: 25,
    },
    {
      time: 4,
      price: 30,
    },
    {
      time: 5,
      price: 35,
    },
  ],
};

export const unit2Puccampinas: Unit = {
  name: "PUC Campinas - Odonto",
  description:
  "Pontifícia Universidade Católica de Campinas - Bloco de Odontologia",
  address: {
    street: "Av. John Boyd Dunlop",
    number: "1001",
    neighborhood: "Jardim Ipaussurama",
    city: "Campinas",
    state: "SP",
    country: "Brasil",
  },
  coordinates: {
    latitude: -22.9214685,
    longitude: -47.1219991,
  },
  lockersQuantity: 3,
  lockers: [
    {
      name: "Locker 1",
      isAvailable: true,
    },
    {
      name: "Locker 2",
      isAvailable: true,
    },
    {
      name: "Locker 3",
      isAvailable: true,
    },
  ],
  rentalOptions: [
    {
      time: 1,
      price: 10,
    },
    {
      time: 2,
      price: 20,
    },
    {
      time: 3,
      price: 25,
    },
    {
      time: 4,
      price: 30,
    },
    {
      time: 5,
      price: 35,
    },
  ],
};


