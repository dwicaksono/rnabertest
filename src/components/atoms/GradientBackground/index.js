
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ElipseTransparent from '../ElipseTransparent';

const GradientBackground = ({children}) => {
return (
    <LinearGradient style={styles.container} colors={['#3549FB', '#4ED2DA']}>
        <ElipseTransparent style={styles.postition1}/>
            {children}        
        <ElipseTransparent style={styles.postition2}/>
        <ElipseTransparent style={styles.postition3}/>
    </LinearGradient>
    )
}

export default GradientBackground
const {width,height} =Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:height/5,
        paddingHorizontal:width * 0.10,
        position:'relative',
        overflow:'hidden'
    },
    postition1:{
        top:0,
        left:-150,
    },
    postition2:{
        bottom:5,
        right:-150,
    },
    postition3:{
        bottom:150,
        right:-150,
    }
})