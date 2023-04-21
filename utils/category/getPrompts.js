import { supabase } from "../supabaseClient";

export default async function getPrompts({id}){
const { data: prompts, error } = await supabase
  .from('prompts')
  .select("*").eq('category_id', id)
  if(error){
    console.log(`An error has occured when fetching prompts for specific category ${error.message}`)
  }else{
    return prompts
  }
}