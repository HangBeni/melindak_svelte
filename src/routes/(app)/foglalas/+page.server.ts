import { supabase } from "$lib/utils/supabase";
import type { Appointments } from "$lib/utils/types";


export const load = async () => {
  const { data, error } = await supabase.from('appointments').select('*');
  if (error) {
    console.error(error);
    return {
      appointments: [] as Appointments[]
    }
  }
  return {
    appointments: data as Appointments[]
  }
};