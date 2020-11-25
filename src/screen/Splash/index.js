import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { IconLogoAbersoft } from '../../assets'
import { GradientBackground } from '../../components'
import { baseColors, getData } from '../../utils'

const Splash = ({navigation}) => {
  
    useEffect(()=>{
        getData('email').then(res => {
            if(res){
                navigation.replace('Home')
            }else{
                navigation.replace('LoginRegister')
            }
        })
    },[])
    
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor={baseColors.blue}/>
        <GradientBackground>
           <IconLogoAbersoft/>
        </GradientBackground>
        </>
    )
}

export default Splash


