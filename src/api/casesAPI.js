import { $authHost } from ".";

export const getAllCases = async () => {
    const { data } = await $authHost.get('api/v1/case/')
    return data
}

export const getTagsCase = async ( caseId ) => {
    const { data } = await $authHost.get(`api/v1/case/${caseId}`)
    return data
}