import { jwtDecode } from "jwt-decode";
import { $authHost, $host } from ".";

export const signUp = async ( lastName, firstName, patronymic, login, email, password ) => {
    const { data } = await $host.post('api/v1/auth/sign-up', { lastName, firstName, patronymic, login, email, password } )
    localStorage.setItem('token', data.token)
    return jwtDecode( data.token )
}

export const signIn = async ( email, password ) => {
    const { data } = await $host.post('api/v1/auth/sign-in', { email, password } )
    localStorage.setItem('token', data.token)
    return jwtDecode( data.token )
}

export const check = async () => {
    const { data } = await $authHost.get('api/v1/auth/')
    localStorage.setItem('token', data.token)
    return jwtDecode( data.token )
}

export const getAll = async () => {
    const { data } = await $host.get('api/v1/user/')
    return data
}

export const changeRole = async ( payload ) => {
    const { data } = await $authHost.put('api/v1/user/role', payload)
    return data 
}