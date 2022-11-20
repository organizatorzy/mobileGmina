import React, { useState } from 'react'
import 'react-native-get-random-values'
import { StyleSheet, TextInput, SafeAreaView, Text  } from 'react-native';
import { RouterProps } from '../config/navigation'
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { setDoc, doc } from "firebase/firestore";
import {db, storage} from '../firebase/config'
import { v4 as uuidv4 } from 'uuid';


export const AddRewardView = ({ navigation }: RouterProps) => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  function isValid(){
    return Number(price) > 0 && name.length > 0
  }

  async function addReward(){
    if(isValid()){
      await setDoc(doc(db, 'award', uuidv4() ), {
        password: uuidv4(),
        name,
        price,
        id: uuidv4()
      })
      navigation.goBack()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.label}>Nazwa nagrody</Text>
      <TextInput
          style={styles.textInputStyle} onChangeText={setName} placeholder="darmowy bilet 15 minutowy"/>


      <Text style={styles.label}>Koszt nagrody</Text>
      <TextInput
          onChangeText={setPrice}
          style={styles.textInputStyle}
          placeholder="0"
          keyboardType={'numeric'}
        />

      <Button onPress={addReward} title="Dodaj nagrodę" disabled={!isValid()} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  label:{
    width: 300,
    textAlign: 'left',
  },
  textInputStyle: {
    backgroundColor: '#ffffff',
    width: 300,
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    margin: 10,
    padding: 16,
  },
});