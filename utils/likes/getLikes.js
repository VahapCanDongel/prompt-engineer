import { supabase } from "../supabaseClient";

export default async function getLikes({ id }) {
  let { data: user_liked_prompts, error } = await supabase
    .from("user_liked_prompts")
    .select("*", { count: "exact" })
    .eq("prompt_id", id);

  if (error) {
    console.log(`An error has occured when fetching likes ${error.message}`);
    return null;
  } else {
    return user_liked_prompts;
  }
}
