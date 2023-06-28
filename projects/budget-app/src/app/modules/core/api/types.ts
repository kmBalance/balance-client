type URI<T extends string> = { url: T }
type QUERY<T> = { query: { [K in keyof T]: T[K] | T[K][] } }
type DATA<T> = { data: Required<{ [K in keyof T]: T[K] }> }
type PATCHDATA<T> = { data: { [K in keyof T]: T[K] } }
type RESPONSE<T> = { response: { [K in keyof T]: T[K] } }
type ENDPOINT = URI<any> & Partial<QUERY<any> & DATA<any> & PATCHDATA<any> & RESPONSE<any>>;

type GET<T extends Pick<ENDPOINT, Exclude<keyof ENDPOINT, 'data'>>> = T
type POST<T extends ENDPOINT> = T;

type GET_ACCOUNT = GET<DATA<{}> & URI<'account/:id'> & QUERY<{ userId: string }> & RESPONSE<{}>>
type GET_ACCOUNTS = GET<URI<'accounts'> & QUERY<{ firstName: string, lastName: string }> & RESPONSE<{ id: string, firstname: string, lastName: string }>>

type CREATE_ACCOUNT = POST<QUERY<{}> & URI<'accounts'> & DATA<{}> & RESPONSE<{}>>

type GETS = GET_ACCOUNT | GET_ACCOUNTS
type POSTS = CREATE_ACCOUNT 

type ACCOUNT_ENDPOINTS = GETS | POSTS

function A(a: USER_ENDPOINTS) {
}