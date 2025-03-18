import {postAPI} from "../services/PostService";
import React from 'react'
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(55)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts?.map(post =>
                    <PostItem
                        key={post.id}
                        post={post}
                        remove={handleRemove}
                        update={handleUpdate}
                    />
                )}
            </div>
        </div>
    )
}

export default PostContainer