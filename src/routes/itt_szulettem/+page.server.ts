import { supabase } from "$lib/utils/supabase";
import type { Stories } from "$lib/utils/types";
import type { Actions } from "./$types";

export const load = async () => {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .eq("public", true);

  if (error) {
    console.error(error);
    return {
      stories: [] as Stories[],
    };
  }

  return {
    stories: data as Stories[],
  };
};

export const actions = {
  story: async ({ request }) => {

    const data = await request.formData();
    const picture = data.get("picture") as File;
    const picExt = picture.name.trim().split(".").pop();
    const path = `baba/${Math.round(Math.random() * 100000)}.${picExt}`;
    const { error: picError } = await supabase.storage
      .from("story_pics")
      .upload(path, picture);
    if (picError) {
      throw picError;
    }

    const { data: downloadPicturePath} =
      await supabase.storage.from("story_pics").getPublicUrl(path);
 

    const { error } = await supabase.from("stories").insert({
      created_at: new Date().toISOString(),
      name: data.get("name"),
      story: data.get("story"),
      email: data.get("email"),
      phone: data.get("telephone"),
      baba_pic: downloadPicturePath.publicUrl,
    });

    if (error) {
      console.error(error);
    }
  },
} satisfies Actions;
