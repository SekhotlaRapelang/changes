import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

export default function Display({image}) {
  return (
    <View style={styles.Photo}>
     <Image style={styles.Photo} source = {image} />
    </View>
  )
}

const styles = StyleSheet.create({
    Photo: {
       height: "100%",
        width: "100%",
        borderRadius: 5,
    }
})
