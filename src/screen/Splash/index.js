import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { IconLogoAbersoft } from '../../assets'
import { GradientBackground } from '../../components'
import { baseColors } from '../../utils'

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{            
            navigation.replace('LoginRegister')            
        },3000)
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


