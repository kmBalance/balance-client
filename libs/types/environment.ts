interface IAppConfiguration {
    url: string
}

type APIS = "Balance" | 'File'
type API_MAP = {
    [K in APIS]?: IAppConfiguration
}

export interface IAuth {
    clientId: string,
    tenantId: string,
    redirectUri: string
}

export type ENVIRONMENT = "DEV" | "LOCAL" | 'PROD'
export interface IEnvironment {
    name: ENVIRONMENT,
    production: boolean;
    auth: IAuth;
    apis: API_MAP
}