import React from 'react'
import {  StyleSheet, Text, TouchableOpacity } from 'react-native'
import { baseColors, baseFonts } from '../../../utils'


const Button = ({primary,title,onPress}) => {
    return (
        <TouchableOpacity style={styles.containerButton(primary)} onPress={onPress}>
            <Text style={styles.titleButton(primary)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    containerButton:primary => ({
        width: "100%",
        backgroundColor:primary ? baseColors.blue : baseColors.white,
        alignItems:'center',
        paddingVertical:7,
        borderRadius:25.5
    }),
    titleButton:primary => ({
        fontFamily:baseFonts.robotoMedium,
        fontSize:17,
        color:primary ? baseColors.white : baseColors.black
    })
})