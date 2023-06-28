import { HttpClient } from "@angular/common/http";

type URI<T extends string> = {
    url: T
}

type QUERY<T> = { query: { [Property in keyof T]: T[Property] } }

type GET<T extends URI<string>> = Extract<URI<any>, 'url'>;

type GET_USER = GET<URI<'/user/:id'> & QUERY<{userId: string}>>
type GET_USERS = URI<'/user'>
    & QUERY<{ userId: string | number }>;

 type GETS = GET_USER | GET_USERS

 type USER_ENDPOINTS = GETS



// type ENDPOINT<T> = Extract<GETS, { url: T }>;

// var t: ENDPOINT<'hell'> = {
//     url: 'hellp',
//     query: {

//     }
// }