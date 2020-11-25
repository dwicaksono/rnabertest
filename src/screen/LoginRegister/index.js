import React,{useState,useEffect} from 'react'
import { StatusBar, } from 'react-native'
import { Button, Gap, GradientBackground, ModalRegisterLogin } from '../../components'
import { baseColors,useForm ,getData, storeData} from '../../utils'
import Axios from 'axios'
import {showMessage} from 'react-native-flash-message'

const LoginRegister = ({navigation}) => {

    const [popUpModal,setPopUpModal] = useState({register:false,login:false})
    const [forms,setForms] = useForm({
        email:'',
        password:''
    })
    const [getLocal,setgetLocal] = useState('')
    const [getDataUser,setGetDatUser] = useState([])

    useEffect(() => {
        getData('email').then(res =>{
            setgetLocal(res)
        })
        Axios.get(`http://10.0.2.2:3000/users`).then(res =>{
            setGetDatUser(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }, [])

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

    const postData = (data) =>{
        let {email,password} = data
        let url = `http://10.0.2.2:3000/users`
        Axios.post(url,data).then(res => {
            if(res.status === 201){
                storeData('email',email)
                showMessage({
                    message: `welcome ${email}`,
                    type: "default",
                    backgroundColor:baseColors.blue, // background color
                    color: baseColors.white, 
                  });
                navigation.replace("Home")
            }
        }).catch(error => {console.log(error)})

    }

    const loginRegisterButtonHandler = () => {
        let cek = getDataUser.some(user =>{return user.email === forms.email}) 
        if(cek){
            showMessage({
                message: `welcome ${forms.email}`,
                type: "default",
                backgroundColor:baseColors.blue, // background color
                color: baseColors.white, 
              });
              storeData('email',forms.email)
              navigation.replace('Home')
            }else{
                showMessage({
                    message: `sorry email/password is wrong`,
                    type: "default",
                    backgroundColor:baseColors.black, // background color
                    color: baseColors.white, 
                  });
                navigation.replace('LoginRegister')
        }
        setPopUpModal({...popUpModal,login:false,register:false})
        postData(forms)
        setForms('reset')
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

