import { supabase } from "../supabaseClient";
export default async function deleteComment({id}){
    const { data, error } = await supabase
  .from('comment')
  .delete()
  .eq('id', id)

  if(error){
    console.log(`An error has occured when deleting a comment ${error.message}`)
  }
}