import { supabase } from "../supabaseClient";
export default async function addComment({prompt_id, user_id, user_name, user_picture, user_comment}){
    const { data, error } = await supabase
  .from('comment')
  .insert([
    { prompt_id: prompt_id, user_id: user_id, user_name:user_name, user_picture: user_picture, user_comment: user_comment },
  ]).single()

  if(error){
    console.log(`An error has occured when inserting a comment ${error.message}`)
  }
  return data
}