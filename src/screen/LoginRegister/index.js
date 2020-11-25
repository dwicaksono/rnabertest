import React,{useState} from 'react'
import { StatusBar } from 'react-native'
import { Button, Gap, GradientBackground, ModalRegisterLogin } from '../../components'
import { baseColors,useForm } from '../../utils'


const LoginRegister = ({navigation}) => {

    const [popUpModal,setPopUpModal] = useState({register:false,login:false})
    const [forms,setForms] = useForm({
        email:'',
        password:''
    })

    const loginRegister = (type) => {
        if (type === 'register'){
            setPopUpModal({...popUpModal,register:!popUpModal.register})
            setForms('reset')
        }
        if (type === 'login'){
            setPopUpModal({...popUpModal,login:!popUpModal.login})
            setForms('reset')
        }
    }

    const loginRegisterButtonHandler = () => {
        setPopUpModal({...popUpModal,login:false,register:false})
        setForms('reset')
        navigation.replace("Home")   
    }
    

    return(
    <>
        <StatusBar barStyle="light-content" backgroundColor={baseColors.blue}/>
        <GradientBackground>
            <Button title="Register Account" onPress={()=>loginRegister('register')}/>
            <Gap height={44}/>
            <Button title="Login" onPress={()=>loginRegister('login')}/>
            <ModalRegisterLogin 
            register={popUpModal.register}
            title={popUpModal?.register ? "Register new account" : "Login"}
            visibleStatus={popUpModal.register === true ? popUpModal.register : popUpModal.login} 
            onPressRegister={()=>loginRegister('register')} 
            onPressLogin={()=>loginRegister('login')}
            onChangeTextEmail={(value)=>setForms('email',value)}
            onChangeTextPassword={(value)=>setForms('password',value)}
            valueEmail={forms.email}
            valuePassword={forms.password}
            onPressButton={loginRegisterButtonHandler}
            />
        </GradientBackground>
    </>
    )
}

export default LoginRegister

