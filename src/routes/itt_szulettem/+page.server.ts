import { supabase } from "$lib/utils/supabase";
import type { Stories } from "$lib/utils/types";
import type { Actions } from "./$types";

export const load = async () => {
	try {
		const { data, error } = await supabase.from("stories").select();

		if (error) {
			console.error(error);
			return { stories: [] as Stories[] };
		}

		return { stories: (data ?? []) as Stories[] };
	} catch (e) {
		console.error("[page.server] Supabase fetch failed", e);
		return { stories: [] as Stories[] };
	}
};

export const actions = {
	story: async ({ request }) => {
		try {
			const data = await request.formData();
			const payload = {
				created_at: new Date().toISOString(),
				name: (data.get("name") ?? null) as string | null,
				story: (data.get("story") ?? null) as string | null,
				email: (data.get("email") ?? null) as string | null,
				telephone: (data.get("telephone") ?? null) as string | null,
			};

			const { error } = await supabase.from("stories").insert(payload);

			if (error) {
				console.error(error);
				return { success: false };
			}

			return { success: true };
		} catch (e) {
			console.error("[actions.story] Supabase insert failed", e);
			return { success: false };
		}
	},
} satisfies Actions;
