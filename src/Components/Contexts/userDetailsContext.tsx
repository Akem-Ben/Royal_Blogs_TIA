import React, {createContext, useContext, useEffect, useState} from 'react';
import { loginUser } from '../../axiosFolder/axiosFunctions/userAxios/userAxios';


interface UserDetails {
    user: Record<any, any>
    setUser: React.Dispatch<React.SetStateAction<Record<any, any>>>
    login: () =>void | any | undefined
}

const UserContext = createContext<UserDetails | undefined | any>(undefined)

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error('useBlog must be used within a BlogPostProvider')
    }
    return context
}

export const UserProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any | undefined >({})

    let result;
    const login = async(data:any)=>{
         result = await loginUser(data)
        return result
    }
    useEffect(() => {
        const checkUser = localStorage.getItem('user');
        if(checkUser){
            const newUser = JSON.parse(checkUser)
            setUser(newUser)
        }
    },[])


    return (
        <UserContext.Provider value={{ user, setUser, login }}>
            {children}
        </UserContext.Provider> 
    )
}
