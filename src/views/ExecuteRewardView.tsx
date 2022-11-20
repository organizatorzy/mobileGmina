import React, { useState } from 'react'
import { StyleSheet, TextInput, SafeAreaView, Text  } from 'react-native';
import { RouterProps } from '../config/navigation'
import { ERROR_VIEW, SUCCESS_VIEW } from '../config/paths'
import { Header } from '../components/Header';
import { Button } from '../components/Button';


export const ExecuteRewardView = ({ navigation }: RouterProps) => {

  const [code, setCode] = useState('')

  function isValid(){
    return code.length > 0
  }

  function executeReward(){
    try{
      isValid()
      navigation.navigate(SUCCESS_VIEW)
    }
    catch{
      navigation.navigate(ERROR_VIEW)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title}>Zrealizuj nagrodę użytkownika</Text>
      <Text style={styles.label}>Zrealizowanie nagrody spowoduje usunięcie jej z konta użytkownika. Po pomyślnym zatwierdzeniu należy wydać nagrodę użytkownikowi.</Text>
      <Text style={styles.label}>Identyfikator nagrody (kod)</Text>
      <TextInput
          style={styles.textInputStyle} onChangeText={setCode} placeholder="podaj kod nagrody (od użytkownika)"/>
      <Button onPress={executeReward} title="Zrealizuj nagrodę" disabled={!isValid()} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  title:{
    fontSize: 32,
    marginBottom: 10,
    width: 300,
    textAlign: 'left',
  },
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