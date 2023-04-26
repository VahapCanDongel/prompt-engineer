import CommentCard from "@/components/comment/CommentCard";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import addComment from "../../../utils/comment/addComment";
import { useEffect, useState } from "react";
import getComments from "../../../utils/comment/getComments";
import PromptCard from "@/components/prompt/PromptCard";

export default function Prompt() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = router.query;

  let parsedData = {};

  try {
    parsedData = JSON.parse(data);
  } catch (e) {
    console.error("Error parsing JSON:", e);
  }

  const currentSignedInUser = useUser();

  const prompt_id = id;

  const [user_comment, setUserComment] = useState("");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      if (!prompt_id) {
        return;
      }
      const comments = await getComments({ prompt_id });
      setComments(comments);
    };
    fetchComments();
  }, [prompt_id, comments]);

  const handleAddComment = async () => {
    if (!currentSignedInUser) {
      router.push("/login");
    } else {
      const user_id = currentSignedInUser.id;
      const user_name = currentSignedInUser.user_metadata.full_name;
      const user_picture = currentSignedInUser.user_metadata.picture;
      const newComment = await addComment({
        prompt_id,
        user_id,
        user_name,
        user_picture,
        user_comment,
      });
      setComments([...comments, newComment]);
    }
  };

  return (
    <div className="flex flex-col mt-3 items-center">
      <div className="mr-auto mt-6">Prompt</div>
      <PromptCard user={parsedData.user} user_icon={parsedData.user_icon} title={parsedData.title} content={parsedData.content} post_likes={parsedData.post_likes} id={parsedData.id}/>

      <div className="mr-auto mt-6">Comments</div>
      <div className="overflow-auto  mb-3 w-[500px] flex items-center flex-col overflow-x-hidden">
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map(
            (data, index) =>
              data && (
                <CommentCard
                  user_name={data.user_name}
                  user_comment={data.user_comment}
                  user_picture={data.user_picture}
                  id={data.id}
                  user_id={data.user_id}
                  key={index}
                />
              )
          )
        ) : (
          <div>No comments yet.</div>
        )}
      </div>
    </div>
  );
}
