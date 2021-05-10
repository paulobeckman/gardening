import React, {createContext, useState, useEffect, useContext} from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage'

interface User {
    id: number;
    gardener: boolean;
}

interface AuthContextData {
    signed: boolean;
    user: User | null; 
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            // const storagedUser = await  AsyncStorage.getItem('@gardening:user')
            // const storagedToken = await  AsyncStorage.getItem('@gardening:token')

            // if(storagedUser && storagedToken){
            //     api.defaults.headers['Autorization']=`Bearer ${storagedToken}`


            //     setUser(JSON.parse(storagedUser))
                setLoading(false)
            //
        }
        loadStoragedData()
    }, [])

    async function signIn() {
        const response = await api.get('/users/registered')
        
        setUser(response.data);

        // api.defaults.headers['Autorization']=`Bearer ${response.token}`

        // await AsyncStorage.setItem('@gardening:user', JSON.stringify(response.user))
        // await AsyncStorage.setItem('@gardening:token', response.token)
    }

    function signOut() {
        AsyncStorage.clear().then(()=>{
            setUser(null)
        })
    }


    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}