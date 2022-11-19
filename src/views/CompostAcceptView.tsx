import React from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { RouterProps } from '../config/navigation'
import { Compost } from '../../types'
import { Button } from '../components/Button'


function fetchCompost(): Compost{
  return  {
    id: '123',
    ownerId: 'owner-1',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg'
  };
}

function accept(){}
function reject(){}


export const CompostListView = ({ navigation }: RouterProps) => {

  const compost: Compost = fetchCompost()

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tutaj oczekuja zdjecia kompostu do zaakceptowania</Text>
      <Image source={require(compost.photo)}/>
      <Button title="Akceptuj" onPress={accept}/>
      <Button title="Odrzuć" onPress={reject}/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      width: '100%'
    },
    title:{
      fontSize: 20,
    }
  });
