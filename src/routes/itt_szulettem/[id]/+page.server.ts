import { supabase } from "$lib/utils/supabase";
import type { Stories } from "$lib/utils/types";
import type { Actions } from "../$types";

export const load = async ({params}) => {
    let now: number = parseInt(params.id);
    const { data, error } = await supabase
    .from('stories')
    .select('*').in('id', [now-1, now, now+1]);
    if (error) {
        console.error(error);
        return {
            data: null
        }
    }
    return {
        stories: data as Stories[]
    }
};


export const actions = {
    story: async ({ request }) => {
        const data = await request.formData();

        const { error } = await supabase.from('stories').insert({
            created_at: new Date().toISOString(),
            name: data.get('name'),
            story: data.get('story'),
            email: data.get('email'),
            phone: data.get('telephone'),
            public: false
        });

        if (error) {
            console.error(error);
        }
    }
} satisfies Actions