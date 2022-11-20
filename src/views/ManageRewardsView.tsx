import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { RouterProps } from '../config/navigation'
import { ADD_REWARD, REMOVE_REWARD_VIEW } from '../config/paths'
import { Reward } from '../../types'
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { MoneyCounter } from '../components/MoneyCounter';

function fetchPrizes(): Reward[]{
  return  [
    {
      id: '21-37',
      name: 'Zniżka komunikacja miejska 15%',
      price: 15
    },
    {
      id: '2-137',
      name: 'Zniżka komunikacja miejska 25%',
      price: 25
    },

    {
      id: '2137',
      name: 'Bilet autobusowy 20 minut',
      price: 10
    },
  ]
}

export const ManageRewardsView = ({ navigation }: RouterProps) => {

  const prizes = fetchPrizes();


  const renderItem = ({ item }: {item: Reward}) => {

    function removeItem(){
      //@ts-ignore
      navigation.navigate(REMOVE_REWARD_VIEW, {
        item
      })
    }

    return (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <MoneyCounter counter={item.price}/>
          <Button title="Usuń" onPress={removeItem} color="#BB5858"/>
        </View>
      );

      };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.bigTitle}>Tutaj oczekuja zdjecia kompostu do zaakceptowania</Text>
      <FlatList
        data={prizes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{
          width: '100%',
          marginTop: 20,
        }}
      />
      <Button onPress={()=>{navigation.navigate(ADD_REWARD)}} title="Dodaj nową nagrodę"/>
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