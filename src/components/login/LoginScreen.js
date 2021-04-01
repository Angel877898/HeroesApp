import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'



export const LoginScreen = ({ history }) => {
    const {dispatch} = useContext(AuthContext)
    
    const handleLogin = () => {
        // history.push('/') //manda a la url pero deja hisotrial para volver atras
        // history.replace('/') // manda a la url pero no deja historial para hacer back
        dispatch({
            type: types.login,
            payload: {
                name: 'Angel'
            }
        })
        history.replace('/')
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
