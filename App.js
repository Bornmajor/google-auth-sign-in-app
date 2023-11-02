import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './src/navigation/StackNav';
import { MyContextProvider } from './src/context/context';
import { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function App() {
  useEffect(()=>{
    GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/user.gender.read'],
      webClientId:'980840966851-j5g0taboctph8lpp6171ud4qap445pqu.apps.googleusercontent.com',
      // androidClientId: '980840966851-vi2gm2qa5fhs0t6lm3tsn3csvhvj7vpf.apps.googleusercontent.com',
      offlineAccess: true,
    });
  },[])
  return (
    <MyContextProvider>
       <StackNav />
    </MyContextProvider>
   
  );
}

