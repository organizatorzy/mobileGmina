import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { formatDistance, subDays } from 'date-fns'
import { RouterProps } from '../config/navigation'
import {Header} from '../components/Header'
import { COMPOST_DETAILS } from '../config/paths'
import { Compost } from '../../types'
import { Button } from '../components/Button'

import { useIsFocused } from '@react-navigation/native';

import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export const CompostListView = ({ navigation, route }: RouterProps) => {

  const isFocused = useIsFocused()
//@ts-ignore
  const {refresh} = route.params;
  const [composts, setComposts] = useState<Compost[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchComposts();
  }, []);

  useEffect(() => {
    setIsLoading(true)
    fetchComposts();
  }, [isFocused, refresh]);

  async function fetchComposts() {
    const querySnapshot = await getDocs(collection(db, "compostToAccept"));
    let temp: Compost[]  = []
    querySnapshot.forEach((doc) => {
      temp.push({...doc.data(), ref: doc.id} as Compost)
    })
    setComposts(temp);
    setIsLoading(false);
  }


  console.log('composts')
  console.log(composts)


  const renderItem = ({ item }: {item: Compost}) => {
    function goToTheDetails(){
      navigation.navigate(COMPOST_DETAILS, {item})
    }

    return (
        <View style={styles.itemContainer}>
          <Text style={styles.smallText}>{formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })}</Text>
          <Text style={styles.title}>{item.ownerName}</Text>
          <Button title="Zatwierdź" onPress={goToTheDetails}/>
        </View>

      );

  };

  if(isLoading){
    <SafeAreaView style={styles.container}>
      <Text>LOADING</Text>
    </SafeAreaView>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.bigTitle}>Tutaj oczekuja zdjecia kompostu do zaakceptowania</Text>
      <FlatList
        data={composts}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        style={{
          width: '100%',
          marginTop: 20,
        }}
      />
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  itemContainer:{
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 10,
    marginHorizontal: '10%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  smallText:{
    color: 'gray',
    width: '74%',
  },
    container: {
      flex: 1,
      backgroundColor: '#dfdfdf',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      width: '100%'
    },
    title:{
      fontSize: 20,
      width: '74%',
      marginVertical: 8,
    },
    bigTitle: {
      fontSize: 22,
    }
  });
