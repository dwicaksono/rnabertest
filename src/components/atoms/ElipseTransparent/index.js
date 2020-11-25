import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ElipseTransparent = (props) => {
    return (
        <View style={{...styles.squareOpacity, ...props.style}}/>
    )
}

export default ElipseTransparent
const styles = StyleSheet.create({
    squareOpacity:{
        position:'absolute',
        width:414,
        height:166,
        backgroundColor:'rgba(246, 246, 246, 0.05)',
        transform:[{rotate:'-51deg'}],
        borderRadius:150,
    },
})
