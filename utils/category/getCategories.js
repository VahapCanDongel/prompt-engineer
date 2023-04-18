import { supabase } from "../supabaseClient";
export default async function getCategories() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.log(
      `An error has occured when retrieving categories ${error.message}`
    );
  } else {
    return categories;
  }
}
