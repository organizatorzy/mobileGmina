import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { RouterProps } from '../config/navigation'
import { MANAGE_REWARDS_VIEW, COMPOST_LIST_VIEW, EXECUTE_REWARDS_VIEW } from '../config/paths'
import { Button } from '../components/Button'
import kompostonosz from '../../assets/kompostownikGmina.png'

export const HomeView = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={kompostonosz} resizeMode='cover' style={styles.image}></ImageBackground>
      <View style={styles.headings}>
        <Text style={styles.title}>Kompostonosz</Text>
        <Text style={styles.subtitle}>Witaj urzędniku gminy!</Text>
        <Text style={styles.subtitle}>w Panelu Administratora</Text>
      </View>
     <View style={styles.buttons}>
      <Button
          title="Zaakceptuj kompost mieszkańców"
          onPress={() => navigation.navigate(COMPOST_LIST_VIEW, { refresh: false })}
        />
        <Button
          title="Zarzadzaj nagrodami"
          onPress={() => navigation.navigate(MANAGE_REWARDS_VIEW)}
        />
        <Button
          title="Zrealizuj nagrodę użytkownika"
          onPress={() => navigation.navigate(EXECUTE_REWARDS_VIEW)}
        />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headings:{
    marginTop: 60,
  },
  buttons:{
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    left: 0,
  },
  subtitle:{
    fontSize: 20,
    textAlign: 'center'
  },
  title:{
    fontSize: 32,
    marginBottom: 10,
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    background:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    image:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

    }
  });