import { CreateUserType, Entity, Locker, Unit } from "../types";

type Options = {
  id: string;
  time: number;
  price: number;
}

const options: Options[] = [
  {
    id: "1",
    time: 60,
    price: 10,
  },
  {
    id: "2",
    time: 120,
    price: 20,
  },
  {
    id: "3",
    time: 180,
    price: 25,
  },
  {
    id: "4",
    time: 240,
    price: 30,
  },
  {
    id: "5",
    time: 300,
    price: 35,
  },
  {
    id: "6",
    time: 30,
    price: 5,
  },
  {
    id: "18",
    time: 360,
    price: 300,
  },
];

const willUserManager: Entity = {
  name: "Willian Silva Ferreira",
  document: "123.123.123-12",
  phoneNumber: "(11) 22334-2233",
  birthday: "29/08/2003",
  isManager: true,

};

const willUserClient: Entity = {
  name: "Willian Silva Ferreira",
  document: "122.122.122-13",
  phoneNumber: "(11) 22334-2233",
  birthday: "29/08/2003",
  isManager: false,
};

export const willUserManagerRequest : CreateUserType = {
  entity: willUserManager,
  credentials: {
    email: "willsferreir@gmail.com",
    password: "senha",
  },
};

export const willUserClientRequest : CreateUserType = {
  entity: willUserClient,
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
  rentalOptions: options,
  manager: {
    id: "1",
    name: "Gerente da unidade 1",
  },
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
  rentalOptions: options,
  manager: {
    id: "2",
    name: "Gerente da unidade 2",
  },
};

export const unitOkaVistaQuiosqueRj: Unit ={
  name: "Oka Vista",
  description:
  "Quiosque Oka Vista, Mirante do Leblon",
  address: {
    street: "Av. Niemeyer",
    number: "3",
    neighborhood: "Vidigal",
    city: "Rio de Janeiro",
    state: "RJ",
    country: "Brasil",
  },
  coordinates: {
    latitude: -22.989872261188637, longitude: -43.227308764927024,
  },
  lockersQuantity: 3,
  rentalOptions: options,
  manager: {
    id: "3",
    name: "Gerente da unidade 3",
  },
};

export const unitMackenzie: Unit = {
  name: "Mackenzie",
  description: "Universidade Presbiteriana Mackenzie, Campus Campinas",
  address: {
    street: "Av. Brasil",
    number: "1220",
    neighborhood: "Jardim Guanabara",
    city: "Campinas",
    state: "SP",
    country: "Brasil",
  },
  coordinates: {
    latitude: -22.88555397081755,
    longitude: -47.068508020990265,
  },
  lockersQuantity: 3,
  rentalOptions: options,
  manager: {
    id: "4",
    name: "Gerente da unidade 4",
  },
};

export const lockersModel : Locker[] = [
  {
    name: "Armário 1",
    isAvailable: true,
  },
  {
    name: "Armário 2",
    isAvailable: true,
  },
  {
    name: "Armário 3",
    isAvailable: true,
  },
];

export const testC: Unit = {
  name: "home C",
  description: "home c Test",
  address: {
    street: "Test ",
    number: "Test ",
    neighborhood: "Test ",
    city: "Test ",
    state: "Test ",
    country: "Test ",
  },
  coordinates: {
    latitude: -22.91841325,
    longitude: -47.1025378,
  },
  lockersQuantity: 3,
  rentalOptions: options,
  manager: {
    id: "5",
    name: "Caio da unidade 5",
  },
};


export const mzcTest: Unit = {
  name: "MZC Test",
  description: "MZC Test",
  address: {
    street: "Test ",
    number: "Test ",
    neighborhood: "Test ",
    city: "Test ",
    state: "Test ",
    country: "Test ",
  },
  coordinates: {
    latitude: -22.693850,
    longitude: -46.984288,
  },
  lockersQuantity: 3,
  rentalOptions: options,
  manager: {
    id: "6",
    name: "Caio da unidade 6",
  },
};
