import { supabase } from "../supabaseClient";
export default async function addPrompt({
  category_id,
  user_id,
  user_name,
  user_picture,
  title,
  description,
  content,
}) {
  console.log(
    category_id,
    user_id,
    user_name,
    user_picture,
    title,
    description,
    content
  );

  console.log(`Category: ${category_id}`);

  const { data, error } = await supabase.from("prompts").insert([
    {
      user_id: user_id,
      user_name: user_name,
      user_picture: user_picture,
      category_id: category_id,
      title: title,
      description: description,
      content: content,
      likes: 0,
    },
  ]);

  if (error) {
    console.log(`An error has occured when inserting promt ${error.message}`);
  }
}
