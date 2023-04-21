import { supabase } from "../supabaseClient";
export default async function getComments({prompt_id}){
    const { data: comments, error } = await supabase
    .from('comment')
    .select('*').eq('prompt_id', prompt_id)

    if(error){
        console.log(`An error has occured when retrieving a comment ${error.message}`)
    }else{
        return comments
    }
}