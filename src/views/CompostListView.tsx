import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { RouterProps } from '../config/navigation'
import {Header} from '../components/Header'
import { HOME_VIEW } from '../config/paths'



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const Item = ({ title }: {title: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const CompostListView = ({ navigation }: RouterProps) => {

  const renderItem = ({ item }: {item: { title: string}}) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Tutaj oczekuja zdjecia kompostu do zaakceptowania</Text>
      <FlatList
        data={DATA}
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
