import { IEnvironment } from '../libs/types/environment'

export { IEnvironment } from '../libs/types/environment'
export const environment: IEnvironment = {
    name: 'PROD',
    auth: {
        clientId: '',
        tenantId: '',
        redirectUri: ''
    },
    applications: {},
    production: false
}