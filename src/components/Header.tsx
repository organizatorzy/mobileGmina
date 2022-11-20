import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export const Header = () => {

  const navigation = useNavigation();

    function goBack(){
      navigation.goBack()
    }

    return (
        <Pressable style={styles.container} onPress={goBack}>
          <Text style={styles.text}>{"< Wróć"}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    marginTop: 20,
    marginLeft: 40,
    marginBottom: 10,
},
text:{
  fontSize: 20,
  fontWeight: 'bold',
  color: 'gray'
}
});