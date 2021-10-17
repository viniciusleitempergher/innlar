import { AddressType } from "./address"
import { ImageType } from "./image"
import { UserType } from "./user"

export type PropertyType = {
  id: string;
  address: AddressType,
  description: string;
  hasGarage: boolean;
  hasPartyArea: boolean;
  hasGrill: boolean;
  hasPool: boolean;
  images: Array<ImageType>;
  name: string;
  numberBathRooms: number;
  numberBedRooms: number;
  numberKitchens: number;
  numberRooms: number;
  squareMeters: number;
  value: number;
  user: UserType;
}