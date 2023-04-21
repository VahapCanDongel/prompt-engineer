export default function CommentCard(){
    return (
        <div className="w-[500px] min-h-[80px] border-[1px] border-gray-300 rounded-sm p-2 my-2">
            <div className="flex gap-2 font-semibold">
                <img src="" className="w-12 h-12 rounded-full border-indigo-400 border-[1px] p-1"/>
                <div>User</div>
            </div>
            <div className="ml-14 mt-[-18px]">This is a comment, ti will be about this particular prompt and people can see and comment back. People can discuss few things about the promp</div>
        </div>
    )
}