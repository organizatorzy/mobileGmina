import React from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { RouterProps } from '../config/navigation'
import { HOME_VIEW } from '../config/paths'
import { Button } from '../components/Button'


export const ErrorView = ({ navigation }: RouterProps) => {

  return (
    <SafeAreaView style={styles.container}>
        <Text>BŁĄD!</Text>
        <Text>KOD JEST BŁĘDNY LUB ZOSTAŁ JUŻ WYKORZYSTANY</Text>
        <Button title='Rozumiem' onPress={() => {navigation.navigate(HOME_VIEW)}}/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#BB5858',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
