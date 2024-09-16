import { supabase } from "$lib/utils/supabase";
import type { Appointments, AppointmentTimes } from "$lib/utils/types";
import type { Action, Actions } from "./$types";


export const load = async () => {
  const { data:booked, error:booked_error } = await supabase.from('appointments').select('*');
  const { data:available, error:available_error } = await supabase.from('appointments').select('*');
  if (booked_error || available_error) {
    console.error("Booked: "+ booked_error);
    console.error("Available: "+ available_error);
    return {
      booked_appointments: [] as Appointments[],
    appointment_times: [] as AppointmentTimes[]
    }
  }
  return {
    booked_appointments: booked as Appointments[],
    appointment_times: available as AppointmentTimes[]
  }
};


export const actions: Actions = {

  book: async ({ request }) => {

    const data = await request.formData();

    const { error } = await supabase.from('appointments').insert({
      name: data.get('name'),
      weeks: data.get('weeks'),
      appointment_time: data.get('time'),
      email: data.get('email'),
      phone: data.get('phone'),
      melinda: data.get('melinda')
    });
    if (error) {
      console.error(error);
    }
  }
};