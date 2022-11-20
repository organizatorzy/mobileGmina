import React from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { RouterProps } from '../config/navigation'
import { HOME_VIEW } from '../config/paths'
import { Button } from '../components/Button'


export const SuccessView = ({ navigation }: RouterProps) => {

  return (
    <SafeAreaView style={styles.container}>
        <Text>SUKCES!</Text>
        <Text>PRZYZNANO NAGRODE</Text>
        <Button title='Rozumiem' onPress={() => {navigation.navigate(HOME_VIEW)}}/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#5DB075',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
