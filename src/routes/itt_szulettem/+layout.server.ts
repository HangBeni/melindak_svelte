import { supabase } from "$lib/utils/supabase";
import type { LayoutServerLoad } from "./$types";
export const load: LayoutServerLoad = async () => {
    const { data, error } = await supabase
        .from('stories')
        .select('id', { count: 'exact' });
    if (error) {
        console.error(error);
        return {
            count: 0
        }
    }
    return {
        count: data
    }
};