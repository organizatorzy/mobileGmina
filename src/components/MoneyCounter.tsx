import React from 'react';
import { View, Image, Text } from 'react-native'
import money from '../../assets/money.png'

interface MoneyCounterProps{
    counter: number
}

export const MoneyCounter: React.FC<MoneyCounterProps> = ({counter}) => {
    return (
        <View style={{flexDirection: 'row', margin: 10, justifyContent: 'flex-start', width: '70%'}}>
            <Image source={money} resizeMode='cover' style={{width: 30, height: 20}}/>
            <Text>{counter}</Text>
        </View>
    )
}