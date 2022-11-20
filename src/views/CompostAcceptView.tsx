import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { RouterProps } from '../config/navigation'
import { Compost } from '../../types'
import {Header} from '../components/Header'
import { Button } from '../components/Button'
import { updateDoc, increment, deleteDoc, doc } from "firebase/firestore";
import {db, storage} from '../firebase/config'
import { ref, getDownloadURL } from "firebase/storage";
import { COMPOST_LIST_VIEW } from '../config/paths';


export const CompostAcceptView = ({ navigation, route }: RouterProps) => {
  //@ts-ignore
  const { item } = route.params;

  const compost: Compost = item as Compost;

  console.log('compost')
  console.log(compost)

  const [img, setImg] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  function accept(){
    const userRef = doc(db, 'user', String(compost.ownerId))
    updateDoc(userRef, {
      points: increment(1)
    });
    reject();
  }

  function reject(){
    deleteDoc(doc(db, 'compostToAccept', compost.ref))
    navigation.navigate(COMPOST_LIST_VIEW, { refresh: true })
  }


  useEffect(() => {

    setIsLoading(true)
    const fetchImage = async () => {
      console.log(`/${compost.photo}`)
      const storageref= (ref(storage, `/${compost.photo}`))
      await getDownloadURL(storageref).then(url => { console.log('url'); console.log(url); setImg(url)})
      setIsLoading(false)
    }
    fetchImage()
  }, [])

  console.log('img');
  console.log(img);

  if(isLoading || !img.length){

    <SafeAreaView style={styles.container}>
    <Text>ŁADOWANIE</Text>
    </SafeAreaView>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.bigTitle}>Czy jest to poprawne zdjęcie kompostu?</Text>
      <Image source={{uri: img}} resizeMode='cover' style={styles.image}/>
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
