import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useContext } from "react";
import { ReactNode } from "react";
import { Alert, CameraRollAssetType } from "react-native";
import { Loading } from "../components/loading";
import { api } from "../services/api";
import { socket } from "../services/chat";
import { ChatType } from "../types/chat";
import { MessageType } from "../types/message";
import { useAuth } from "./auth";

type PropertyFormContextData = {
    name: string; setName: React.Dispatch<React.SetStateAction<string>>;
    description: string; setDescription: React.Dispatch<React.SetStateAction<string>>;
    state: string; setState: React.Dispatch<React.SetStateAction<string>>;
    number: string; setNumber: React.Dispatch<React.SetStateAction<string>>;
    numberBedRooms: string; setNumberBedRooms: React.Dispatch<React.SetStateAction<string>>;
    numberRooms: string; setNumberRooms: React.Dispatch<React.SetStateAction<string>>;
    numberBathRooms: string; setNumberBathRooms: React.Dispatch<React.SetStateAction<string>>;
    numberKitchens: string; setNumberKitchens: React.Dispatch<React.SetStateAction<string>>;
    squareMeters: string; setSquareMeters: React.Dispatch<React.SetStateAction<string>>;
    hasPartyArea: boolean; setHasPartyArea: React.Dispatch<React.SetStateAction<boolean>>;
    hasGrill: boolean; setHasGrill: React.Dispatch<React.SetStateAction<boolean>>;
    hasPool: boolean; setHasPool: React.Dispatch<React.SetStateAction<boolean>>;
    hasGarage: boolean; setHasGarage: React.Dispatch<React.SetStateAction<boolean>>;
    propertyValue: string; setPropertyValue: React.Dispatch<React.SetStateAction<string>>;
    city: string; setCity: React.Dispatch<React.SetStateAction<string>>;
    district: string; setDistrict: React.Dispatch<React.SetStateAction<string>>;
    street: string; setStreet: React.Dispatch<React.SetStateAction<string>>;
    cep: string; setCep: React.Dispatch<React.SetStateAction<string>>;
    registerProperty: (images: any[]) => void;
}

type PropertyFormProviderProps = {
    children: ReactNode,
}

export const PropertyFormContext = createContext({} as PropertyFormContextData)

export function PropertyFormDataProvider({ children }: PropertyFormProviderProps) {

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [state, setState] = useState("");
    const [number, setNumber] = useState("");
    const [squareMeters, setSquareMeters] = useState("");
    const [numberBedRooms, setNumberBedRooms] = useState("");
    const [numberRooms, setNumberRooms] = useState("");
    const [numberBathRooms, setNumberBathRooms] = useState("");
    const [numberKitchens, setNumberKitchens] = useState("");
    const [hasPartyArea, setHasPartyArea] = useState(false);
    const [hasGrill, setHasGrill] = useState(false);
    const [hasPool, setHasPool] = useState(false);
    const [hasGarage, setHasGarage] = useState(false);
    const [propertyValue, setPropertyValue] = useState("");
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");
    const [cep, setCep] = useState("");

    async function registerProperty(images: any[]) {
        setLoading(true);

        try {

            const response = await api.post("/properties/create", {
                name,
                value: propertyValue,
                numberBathRooms,
                numberBedRooms,
                numberKitchens,
                numberRooms,
                squareMeters,
                hasPool,
                hasPartyArea,
                hasGrill,
                hasGarage,
                description,
                number,
                street,
                district,
                cep,
                city,
                state
            });

            const propertyId = response.data.propertyId;

            let formData = new FormData();


            formData.append("images", images[0].uri);

            formData.append("propertyId", propertyId);

            await api.post("/properties/images", formData, {
                headers: {
                    'Content-Type': `multipart/form-data`
                },
            })

            if (response.status == 201) {
                Alert.alert("Propriedade Criada!")
            }
        } catch (e) {
            throw e;
        } finally {
            setLoading(false);
        }
    }

    return (
        <PropertyFormContext.Provider value={{
            name, setName,
            description, setDescription,
            state, setState,
            number, setNumber,
            squareMeters, setSquareMeters,
            numberBedRooms, setNumberBedRooms,
            numberRooms, setNumberRooms,
            numberBathRooms, setNumberBathRooms,
            numberKitchens, setNumberKitchens,
            hasPartyArea, setHasPartyArea,
            hasGrill, setHasGrill,
            hasPool, setHasPool,
            hasGarage, setHasGarage,
            propertyValue, setPropertyValue,
            city, setCity,
            district, setDistrict,
            street, setStreet,
            cep, setCep,
            registerProperty
        }}>
            {
                loading
                    ?
                    <Loading />
                    :
                    children
            }
        </PropertyFormContext.Provider>
    )
}

export function usePropertyFormData() {
    const context = useContext(PropertyFormContext)
    return context
}
