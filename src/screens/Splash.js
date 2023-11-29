import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FireBase Chat App</Text>
    </View>
  )
}

export default Splash
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontSize: 30,
        color: 'white'
    }
})