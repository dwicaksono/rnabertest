import React from 'react'
import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import { baseColors, baseFonts } from '../../../utils'
import { Button, Gap, HeaderArrow, LoginRegisInput } from '../../atoms'

const ModalRegisterLogin = (props) => {
    const {visibleStatus,
        onPressRegister,
        onPressLogin,
        onPressButton,
        title,
        register,
        onChangeTextPassword,
        onChangeTextEmail,
        valueEmail,
        valuePassword} = props
    
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={visibleStatus}
        onRequestClose={()=>alert('close')}
        >
            <View style={styles.containerModal}>
                <HeaderArrow onPress={register ? onPressRegister : onPressLogin}/>
                <View style={styles.containerForm}>
                    <Text style={styles.title}>{title}</Text>

                    <Gap height={height/30}/>

                    <LoginRegisInput 
                    placeholder="Email" 
                    keyboardType="email-address"
                    onChangeText={onChangeTextEmail}
                    value={valueEmail}
                    />

                    <LoginRegisInput 
                    placeholder="Password" 
                    secureTextEntry 
                    onChangeText={onChangeTextPassword}
                    value={valuePassword}
                    />

                    <Button title={register ? "Create account" : "Login"} primary onPress={onPressButton}/>
                </View>
            </View>

        </Modal>
    )
}

export default ModalRegisterLogin
const {width,height} = Dimensions.get('window')
const styles = StyleSheet.create({
    containerModal:{
        flex:1,
        justifyContent:"space-between"
    },
    containerForm:{
        width:width,
        height:height/1.8,
        backgroundColor:baseColors.white,
        borderTopStartRadius:51,
        borderTopEndRadius:51,
        paddingHorizontal:width * 0.14,
        paddingVertical:height * 0.10
    },
    title:{
        fontSize:23,
        fontFamily:baseFonts.robotoBold,
        color:baseColors.black
    }
})
