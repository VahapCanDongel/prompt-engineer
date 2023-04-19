import { useRouter } from "next/router"

export default function Prompt(){
    const router = useRouter()
    const {id} = router.query
    return(
        <div>
            <div>
                {id}
            </div>
            This will render specific prompt, such as their content, comments by the users etc.
            
        </div>
    )
}