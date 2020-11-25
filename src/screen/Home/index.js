import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import {StatusBar, Text,View,StyleSheet, Dimensions,Image} from 'react-native'
import { UndrawPng } from '../../assets'
import { Gap } from '../../components'
import { baseColors, baseFonts } from '../../utils'
  

const Home = () =>{
    
    return(
        <>
            <StatusBar barStyle="dark-content" backgroundColor={baseColors.white}/>
            <View style={styles.container}>
                {/* <View style={styles.containerContentHome}> */}
                    {/* <View style={{backgroundColor:'green'}}> */}
                    
                        <Image source={require(`../../assets/images/undraw.png`)} resizeMode="contain"/>
                    {/* </View> */}
                    <Gap height={Math.round(height/15)}/>
                    <Text style={styles.title}>Welcome to the app</Text>
                    <Gap height={height /20}/>
                    <Text style={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas scelerisque porttitor turpis viverra lobortis convallis. Libero tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes. Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s
                    </Text>
                {/* </View> */}
            </View>
        </>
    )
}

export default Home
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        // alignItems:"center",
        padding:width * 0.07,
        backgroundColor:baseColors.white
    },
    containerContentHome:{
        // flex:1,
        justifyContent:"center",
        width:'100%'
    },
    title:{
        textAlign:'center',
        fontSize:25,
        fontFamily:baseFonts.robotoBold,
        color: baseColors.black
    },
    paragraph:{
        textAlign:'center',
        fontSize:12,
        fontFamily:baseFonts.robotoRegular,
        color: baseColors.black
    }

})