export type Links = {
    name: string,
    url: string
}

export type Stories = {
    id: number
    created_at: string,
    name: string,
    story: string,
    email: string,
    telephone: string
}

export type Appointments = {
    id: number
    reserved_at: string,
    name: string,
    weeks: number,
    appointment_date: string,
    contact: string

}