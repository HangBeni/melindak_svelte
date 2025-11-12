import { supabase } from "$lib/utils/supabase";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
	try {
		const { data, error } = await supabase
			.from("stories")
			.select("*")
			.eq("public", true)
			.order("created_at", { ascending: false });

		if (error) {
			console.error(error);
			return { count: 0 };
		}

		return { count: (data ?? []).length };
	} catch (e) {
		console.error("[layout.server] Supabase fetch failed", e);
		return { count: 0 };
	}
};
