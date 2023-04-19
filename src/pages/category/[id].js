import { useRouter } from "next/router"

export default function Category(){
    const router = useRouter()
    const { id } = router.query
    return(
        <div>
            {id}
            <div>This will render all the prompts within this Category</div>
        </div>
    )
}