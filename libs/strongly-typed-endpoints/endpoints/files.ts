type user = {user_id: string, lvl: number }
// type GET_ACCOUNT = GET<DATA<{}> & URI<'account/:id'> & QUERY<{ userId: string }> & RESPONSE<{}>>
// type GET_ACCOUNTS = GET<URI<'accounts'> & QUERY<{ firstName: string, lastName: string }> & RESPONSE<{ id: string, firstname: string, lastName: string }>>

type PAYCHECK_GET = GET<URI<'paychecks'> & QUERY<GetPaycheckQueryParameters> & RESPONSE<Array<File>>>

type PAYCHECK_UPLOAD = POST<URI<':userId/paychecks'> & DATA<{}> & RESPONSE<{}>>

type PAYCHECK_PATCH = PATCH<URI<':userId/paychecks/:paycheckId'> & PATCHDATA<user> & RESPONSE<{}>>



type GETS = PAYCHECK_GET
type POSTS = PAYCHECK_UPLOAD 

// type ACCOUNT_ENDPOINTS = GETS | POSTS

export type FILE_ENDPOINTS = POSTS | GETS

