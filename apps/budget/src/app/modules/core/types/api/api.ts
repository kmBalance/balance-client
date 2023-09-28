import { SortDirection } from "@angular/material/sort";

/**
* used for typing api query and body parameters
* makes all keys of an object optional and allows arrays for searching multiple values
*/
export type ApiFilter<T> = Partial<T>

/**
 * 
 */
export type Paging = {
    skip?: number,
    take?: number,
    sortDirection?: SortDirection
}

/**
 * Paged result set
 */
export type Paged<T> = {
    total: number,
    data: T[]
}

export type URI<T extends string> = { url: T }
export type QUERY<T> = { query: { [K in keyof T]: T[K] | T[K][] } }
export type DATA<T> = { data: Required<{ [K in keyof T]: T[K] }> }
export type PATCHDATA<T> = { data: { [K in keyof T]: T[K] } }
export type PATH<T> = { path: { [K in keyof T]: T[K] } }
export type RESPONSE<T> = { response: { [K in keyof T]: T[K] } }
export type ENDPOINT = URI<any> & Partial<QUERY<any> & DATA<any> & PATCHDATA<any> & PATH<any> & RESPONSE<any>>;

export type GET<T extends ENDPOINT> = T extends ENDPOINT ? T : never

export type POST<T extends ENDPOINT & Partial<Record<keyof QUERY<any>, never>>> = T

export type DELETE<T extends ENDPOINT & Partial<Record<keyof QUERY<any> | keyof DATA<any>, never>>> = T