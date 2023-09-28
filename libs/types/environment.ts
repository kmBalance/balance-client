type PROJECT_NAME = "BUDGET" | "LOGIN"
interface IAppConfiguration {
    url: string
}
type APPLICATION_MAP = {
    [K in PROJECT_NAME]?: IAppConfiguration
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
    applications: APPLICATION_MAP
}