import React, { Dispatch, ReactText, SetStateAction, useState } from 'react';
import { Picker } from '@react-native-community/picker';
import { PickerProps, Text } from 'react-native';

type Props = PickerProps & {
    items: Array<string>;
    item: string;
    setItem: Dispatch<SetStateAction<string>>;
}

export function ItemPicker({ items, item, setItem, ...rest }: Props) {

    return (
        <Picker
            selectedValue={item}
            onValueChange={(itemValue) => {
                setItem(itemValue + "");
            }}
            mode="dropdown"
            {...rest}
        >
            {
                items.map(item => (
                    <Picker.Item label={item} value={item} key={item} />
                ))
            }
        </Picker>
    )
}