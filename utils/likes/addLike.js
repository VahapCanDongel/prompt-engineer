import { supabase } from "../supabaseClient";

export default async function addLike({ id, singedUserId }) {
  const { data, error } = await supabase.from("user_liked_prompts").upsert(
    { user_id: singedUserId, prompt_id: id },
    {
      onConflict: {
        columns: ["user_id", "prompt_id"],
        constraint: "unique_user_prompt",
      },
    }.toString()
  );

  if (error) {
    console.log(`An error has occured when inserting a like ${error.message}`);
    if (error.message.includes("violates unique constraint")) {
      const { data, error } = await supabase
        .from("user_liked_prompts")
        .delete()
        .eq("prompt_id", id);
      if (error) {
        console.log(
          `An error occured when deleting a comment ${error.message}`
        );
      }
    }
  }
}
