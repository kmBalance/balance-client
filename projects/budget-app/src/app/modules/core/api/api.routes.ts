import { SortDirection } from "@angular/material/sort";
import { IPatient } from "../../patient/models/patient.model";
import { environment } from "projects/budget-app/src/environments/environment.development";

/**
* used for typing api query and body parameters
* makes all keys of an object optional and requires them to be type T or T[]
*/
export type ApiFilter<T> = Partial<{[key in keyof T]: string | number | boolean | (string | number | boolean)[]}>
export type Paging = {
    skip?: number,
    take?: number,
    sortDirection?: SortDirection
}

export type Paged<T> = {
    total: number,
    data: T[]
}
/**
 * Domain Filters
 */
export type PatientFilter = ApiFilter<IPatient> & Paging


const patientEndpoint = `${environment.budget_api}/patient`

const API_ROUTES = {
    Patient: {
        Get: () => patientEndpoint,
        Update: (id: number) => `${patientEndpoint}/${id}`,
        UploadCsv: () => `${patientEndpoint}/csv`,
        Delete: (id: number) => `${patientEndpoint}/${id}`
    }
  }