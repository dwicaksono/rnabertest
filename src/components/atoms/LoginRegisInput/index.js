import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { baseColors, baseFonts } from '../../../utils'

const LoginRegisInput = (props) =>{
    return(
        <>
        <TextInput {...props} style={styles.input}/>
        
        </>
    )
}

export default LoginRegisInput

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:baseColors.blue,
        padding:0,
        fontFamily:baseFonts.robotoRegular,
        color:baseColors.black,
        marginBottom:34
    }
})