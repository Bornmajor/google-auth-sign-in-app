import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { styles } from '../styles/styles'
import MyContext from '../context/context'
import { Button } from 'react-native-paper'
import { Image } from 'react-native'
import {GoogleSignin} from '@react-native-google-signin/google-signin'

const HomeScreen = () => {
   const {appTheme,userDataInfo,setUserDataInfo,setIsLoggin,showToast} = useContext(MyContext);

   useEffect(()=>{
   console.log(userDataInfo);
   },[]);

   const signOutSession = async() =>{
    try {
        await GoogleSignin.signOut();
        await setUserDataInfo(null);
        setIsLoggin(false);
       
       // Remember to remove the user from your app's state as well
      } catch (error) {
        console.error(error);
        showToast('Something went wrong try again')
      }
   }

  return (
    <View style={[styles.container,{alignItems:'center'}]}>
        {userDataInfo && 
        <> 
      <Text style={styles.headings}>Welcome, {userDataInfo.userInfo.user.name} </Text>
      <Image source={{uri: userDataInfo.userInfo.user.photo }} style={{width:100,height:80}}/>
      <Button
      textColor='white'
      buttonColor={appTheme}
      labelStyle={{fontSize:18}}
      style={[styles.btn]}
      onPress={() => signOutSession()}
      >
        LogOut
      </Button>
        </>
    
        }
     

    </View>
  )
}

export default HomeScreen