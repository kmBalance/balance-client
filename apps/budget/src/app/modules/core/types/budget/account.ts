import { IResourcable } from "../resource/resource"

export interface IAccount extends IResourcable {
    status: ACCOUNT_STATUS
}

export type ACCOUNT_STATUS = 'ACTIVE' | 'INACTIVE'