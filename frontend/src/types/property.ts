import { AddressType } from "./address"
import { UserType } from "./user"

export type PropertyType = {
  id: string;
  address: AddressType,
  description: string;
  hasGarage: boolean;
  hasPartyArea: boolean;
  hasGrill: boolean;
  hasPool: boolean;
  images: Array<string>;
  name: string;
  numberBathRooms: number;
  numberBedRooms: number;
  numberKitchens: number;
  numberRooms: number;
  squareMeters: number;
  value: number;
  user: UserType;
}