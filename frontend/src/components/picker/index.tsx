import React, { ReactText, useState } from 'react';
import { Picker } from '@react-native-community/picker';
import { Text } from 'react-native';

type Props = {
    items: Array<string>;
}

export function ItemPicker({ items }: Props) {
    const [selectedItem, setSelectedItem] = useState("" as ReactText);

    return (
        <Picker
            selectedValue={selectedItem}
            onValueChange={(itemValue) =>
                setSelectedItem(itemValue)
            }
        >
            {
                
            }
        </Picker>
    )
}