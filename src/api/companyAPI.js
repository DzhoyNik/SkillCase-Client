import { $authHost } from ".";

export const sendApplication = async ( payload ) => {
    const { data } = await $authHost.post('api/v1/company/', payload)
    return data
}

export const findApplication = async ( userId ) => {
    const { data } = await $authHost.get(`api/v1/company/${userId}`)
    return data
}

export const getAllApplications = async () => {
    const { data } = await $authHost.get('api/v1/company/')
    return data
}