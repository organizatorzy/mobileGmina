import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { RouterProps } from '../config/navigation'
import { Header } from '../components/Header';
import { MoneyCounter } from '../components/MoneyCounter';
import { Button } from '../components/Button';


export const RemoveRewardView = ({ navigation, route }: RouterProps) => {


  //@ts-ignore
  const {item} = route.params;

  function removeReward(){
      //call api to remove a reward
      navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <MoneyCounter counter={item.price}/>
        </View>
      <Button onPress={removeReward} title="Usuwam" color="#BB5858"/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
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
  title:{
    fontSize: 20,
    width: '74%',
    marginVertical: 8,
  },
});