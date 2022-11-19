import React from 'react';
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export const Header = () => {

  const navigation = useNavigation();

    function goBack(){
      navigation.goBack()
    }

    return (
        <Button title="Wróć" onPress={goBack}/>
    )
}