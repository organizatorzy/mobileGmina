import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { formatDistance, subDays } from 'date-fns'
import { RouterProps } from '../config/navigation'
import {Header} from '../components/Header'
import { COMPOST_DETAILS } from '../config/paths'
import { Compost } from '../../types'
import { Button } from '../components/Button'



const DATA: Compost[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    ownerId: '123',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg',
    date: 'Sat Nov 19 2022 22:03:11 GMT+0100 (Central European Standard Time)',
    ownerName: 'Maciej Kaszkowiak',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    ownerId: '324',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg',
    date: 'Sat Nov 19 2022 22:03:11 GMT+0100 (Central European Standard Time)',
    ownerName: 'Maciej Kaszkowiak',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    ownerId: '1234',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg',
    date: 'Sat Nov 19 2022 22:03:11 GMT+0100 (Central European Standard Time)',
    ownerName: 'Maciej Kaszkowiak',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    ownerId: '123',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg',
    date: 'Sat Nov 19 2022 22:03:11 GMT+0100 (Central European Standard Time)',
    ownerName: 'Maciej Kaszkowiak',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    ownerId: '324',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg',
    date: 'Sat Nov 19 2022 22:03:11 GMT+0100 (Central European Standard Time)',
    ownerName: 'Maciej Kaszkowiak',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    ownerId: '1234',
    photo: 'https://www.mojpieknyogrod.pl/media/cache/default_view/uploads/media/default/0001/50/zdj-fotolia-com_5.jpeg',
    date: 'Sat Nov 19 2022 22:03:11 GMT+0100 (Central European Standard Time)',
    ownerName: 'Maciej Kaszkowiak',
  },
];

export const CompostListView = ({ navigation }: RouterProps) => {


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

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.bigTitle}>Tutaj oczekuja zdjecia kompostu do zaakceptowania</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
