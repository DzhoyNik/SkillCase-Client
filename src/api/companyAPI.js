import { $authHost } from ".";

export const sendApplication = async ( payload ) => {
    const { data } = await $authHost.post('api/v1/company/', payload)
    return data
}

export const findApplication = async ( userId ) => {
    const { data } = await $authHost.get(`api/v1/company/${userId}`)
    return data
}

export const acceptApplication = async ( appId ) => {
    const { data } = await $authHost.post(`api/v1/company/${appId}`)
    return data
}

export const rejectApplication = async ( appId ) => {
    const { data } = await $authHost.delete(`api/v1/company/${appId}`)
    return data
}

export const getCompanyInfo = async ( userId ) => {
    const { data } = await $authHost.get(`api/v1/company/info/${userId}`)
    return data
}

export const getAllRoles = async () => {
    const { data } = await $authHost.get('api/v1/user/roles')
    return data
}

export const getAllApplications = async () => {
    const { data } = await $authHost.get('api/v1/company/')
    return data
}

export const getApplication = async ( applicationId ) => {
    const { data } = await $authHost.get(`api/v1/company/${applicationId}`)
    return data
}

export const createCase = async ( payload ) => {
    const { data } = await $authHost.post('api/v1/case/', payload)
    return data
}

export const updateCase = async ( caseId, payload ) => {
    const { data } = await $authHost.put(`api/v1/case/${caseId}`, payload)
    return data
}

export const deleteCase = async ( caseId ) => {
    const { data } = await $authHost.delete(`api/v1/company/case/${caseId}`)
    return data
}

export const getAllCases = async ( companyId ) => {
    const { data } = await $authHost.get(`api/v1/company/${companyId}/cases`)
    return data
}

export const getCase = async ( companyId, caseId ) => {
    const { data } = await $authHost.get(`api/v1/company/${companyId}/case/${caseId}`)
    return data
}

export const getAllTags = async () => {
    const { data } = await $authHost.get('api/v1/tag/')
    return data
}

export const checkCompany = async ( userId ) => {
    const { data } = await $authHost.get(`api/v1/company/check/${userId}`)
    return data
}