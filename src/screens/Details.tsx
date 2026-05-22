import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements';

const Details = () => {
  // const navigator=useNavigation<any>();
  // const {username} =route.params;

  // useLayoutEffect(()=>{
  //   navigator.setOptions({
  //     title:"Deeps Details"
  //   })
  // },[navigator])
  return (
    <View>
      <Text>Details</Text>
      {/* <Button onPressIn={()=>navigator.navigate("Profiles")}>Go to Profile of {username}</Button> */}
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})