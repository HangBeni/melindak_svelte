import { supabase } from "$lib/utils/supabase";
import type { Stories } from "$lib/utils/types";
import type { LayoutServerLoad } from "./$types";
export const load: LayoutServerLoad = async () => {
    const { data, error } = await supabase
        .from('stories')
        .select('id');
    if (error) {
        console.error(error);
        return {
            count: 0,
            data:null
        }
    }
    return {
        count: data.length,
        data: data as Stories[],
    }
};