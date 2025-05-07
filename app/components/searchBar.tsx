import { View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants/icons';
interface SearchBarProps {
    onPress: () => void;
    placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image
                source={icons.search}
                className='size-5'
                resizeMode='contain'
                tintColor="#ab8bff"
            />
            <TextInput
                placeholder={placeholder}
                value={searchText}
                onPress={onPress}
                onChangeText={(text) => setSearchText(text)}
                placeholderTextColor={'#A8B5DB'}
                className='flex-1 ml-4 text-base text-white font-semibold'
            />
        </View>
    );
};

export default SearchBar;