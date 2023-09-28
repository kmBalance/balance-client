import { IResourcable } from "../../core/types";

export interface IUser extends IResourcable {
    firstName: string,
    lastName: string,
}