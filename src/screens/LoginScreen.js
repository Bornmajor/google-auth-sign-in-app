import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TextInput,Button } from 'react-native-paper'
import { GoogleSignin, GoogleSigninButton,statusCodes  } from '@react-native-google-signin/google-signin';
import { styles } from '../styles/styles';
import MyContext from '../context/context';
import { ActivityIndicator } from 'react-native';

const LoginScreen = () => {

    const [email,setEmail] = useState();
    const [pwd,setPwd] = useState();
    const [pwdVisible,setPwdVisible] = useState(false);
    const {appTheme,setIsLoggin,setUserDataInfo,showToast} = useContext(MyContext);
    const [signInProgress,setSignInProgress] = useState(false);



    const toggleVisiblePwd = () =>{
        setPwdVisible(!pwdVisible);
    }

    const signIn = async () =>{
        try {
            setSignInProgress(true)
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await setUserDataInfo({ userInfo });
            if(userInfo !== null || userInfo !== undefined){
                setIsLoggin(true);
                setSignInProgress(false)
            }
          } catch (error) {
            console.log(error.code)
            showToast('Google authentification failed!!Try again.If error persist try contacting the developer')
            setSignInProgress(false);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow

            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
    }

  return (
    <View style={styles.container}>
      <TextInput 
       style={styles.txtInput}
       activeUnderlineColor={appTheme}
      placeholder='Email'
       value={email}
       onChangeText={(t) => setEmail(t)}
       mode='flat'
      />

      <TextInput 
      style={styles.txtInput}
      activeUnderlineColor={appTheme}
      placeholder='Password'
      value={pwd}
      onChangeText={(t) => setPwd(t)}
      secureTextEntry={pwdVisible}
      right={<TextInput.Icon icon='eye' onPress={() => toggleVisiblePwd()}/>}
      />

      <Button
      textColor='white'
      buttonColor={appTheme}
      labelStyle={{fontSize:18}}
      style={[styles.btn]}
      onPress={() => signIn()}
      disabled={signInProgress}
      >
        Login
      </Button>

      {signInProgress ?
      <ActivityIndicator color={appTheme} size='100'/>
       : 
         <GoogleSigninButton
      style={{margin:10,alignSelf:'center'}}
      color={GoogleSigninButton.Color.Dark}
       size={GoogleSigninButton.Size.Wide}
       onPress={() => signIn()}
      />
      }
   

    </View>
  )
}

export default LoginScreen