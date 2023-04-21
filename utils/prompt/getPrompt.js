import { supabase } from "../supabaseClient";

export default async function getPrompts(){
    const { data: prompts, error } = await supabase
  .from('prompts')
  .select('*')

    if(error){
        console.log(`An error has occured when fetching promopts ${error.message}`)
    }else{
        return prompts
    }

}