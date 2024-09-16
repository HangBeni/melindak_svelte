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
    telephone: string,
    public: boolean
}

export type Appointments = {
    id?: number,
    reserved_at?: string,
    name: string,
    weeks: number,
    appointment_time: string,
    email: string,
    phone: string,
    melinda: string
}

export type AppointmentTimes = {
    id: number,
    created_at: string,
    time: string
}