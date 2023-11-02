import { createContext,useState } from "react";

const MyContext = createContext();

export const MyContextProvider = (props) => {
    const [appTheme,setAppTheme] = useState('#4285F4');
    const [isLoggin,setIsLoggin] = useState(false);
    const [userDataInfo,setUserDataInfo] = useState();

    const showToast = (msg) => {
        ToastAndroid.show(msg, ToastAndroid.LONG);
      };

    return(
        <MyContext.Provider value={{
            appTheme,setAppTheme,
            isLoggin,setIsLoggin,
            userDataInfo,setUserDataInfo,
            showToast
        }}>
            {props.children}
        </MyContext.Provider>
    )

}

export default MyContext;