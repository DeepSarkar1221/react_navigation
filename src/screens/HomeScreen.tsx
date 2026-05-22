import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

  const navigator = useNavigation<any>();
  return (
    
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={()=>navigator.navigate("Detail",{username:"Deep"})}>Go to Details</Button>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})