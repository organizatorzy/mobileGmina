import React from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { RouterProps } from '../config/navigation'
import { Compost } from '../../types'
import {Header} from '../components/Header'
import { Button } from '../components/Button'


function fetchCompost(): Compost{
  return  {
    id: '123',
    ownerId: 'owner-1',
    date: 'Sat Nov 19 2022 22:03:11 GMT+0100 (Central European Standard Time)',
    ownerName: 'Maciej Kaszkowiak',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg'
  };
}

function accept(){}
function reject(){}


export const CompostAcceptView = ({ route }: RouterProps) => {


  //@ts-ignore
  const { item } = route.params;

  const compost: Compost = item as Compost;

  console.log(item);

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.bigTitle}>Czy jest to poprawne zdjęcie kompostu?</Text>
      <Image source={{uri: compost.photo}} resizeMode='cover' style={styles.image}/>
      <Button title="Tak, to kompost!" onPress={accept}/>
      <Button title="X" onPress={reject} color="#BB5858"/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  image:{
    width: 300,
    height: 400,
  },
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
    },
    bigTitle: {
      fontSize: 22,
      marginBottom: 10,
    }
  });
