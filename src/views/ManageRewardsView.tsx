import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { RouterProps } from '../config/navigation'
import { Prize } from '../../types'

function fetchPrizes(): Prize[]{
  return  [
    {
      id: '123',
      name: 'Zniżka komunikacja miejska 15%'
    },
    {
      id: '234',
      name: 'Zniżka komunikacja miejska 25%'
    },
  ]
}


const Item = ({ name }: {name: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

export const ManageRewardsView = ({ navigation }: RouterProps) => {

  const prizes: Prize[] = fetchPrizes()

  const renderItem = ({ item }: {item: Prize}) => (
    <Item name={item.name}  />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tutaj oczekuja zdjecia kompostu do zaakceptowania</Text>
      <FlatList
        data={prizes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
