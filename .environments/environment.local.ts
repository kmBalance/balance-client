import { IEnvironment } from '../libs/types/environment'

export { IEnvironment } from '../libs/types/environment'
export const environment: IEnvironment = {
    name: 'LOCAL',
    auth: {
        clientId: 'a3b501d1-4ec9-46ab-8a24-5977d9908ecb',
        tenantId: 'https://login.microsoftonline.com/e2321027-807b-4a53-9a39-8042a66401b3',
        redirectUri: 'http://localhost:8100/'
    },
    applications: {},
    production: false
}