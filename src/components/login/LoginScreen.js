import React from 'react'


export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/') //manda a la url pero deja hisotrial para volver atras
        history.replace('/') // manda a la url pero no deja historial para hacer back
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
