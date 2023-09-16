import { HttpClient } from "@angular/common/http";
import { GET, URI, QUERY, POST, DATA, RESPONSE, ApiFilter } from "./api";
import { IUser } from "../../../user/types/user";

type GET_USER = GET<URI<'/users'> & QUERY<ApiFilter<IUser>>>
//type GET_USERS = URI<'/user'> & QUERY<{ userId: string | number }>;

type CREATE_USER = POST<URI<'accounts'> & DATA<{}> & RESPONSE<{}>>


type USER_GETS = GET_USER // | GET_USERS
type USER_POSTS = CREATE_USER

export type USER_ENDPOINTS = USER_GETS | USER_POSTS
 
