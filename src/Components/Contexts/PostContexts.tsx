import React, { createContext, useContext, useState } from 'react';
import { allPosts, createPost, deletePost } from '../../axiosFolder/axiosFunctions/postAxios/postAxios';


interface PostContextInterface {
    blogPosts : any[];
    setBlogPosts: React.Dispatch<React.SetStateAction<any[]>>;
    addPosts: (post:any) => void | undefined | any;
    getPosts: () => void | undefined | any;
    deleteUserPost: (id:string) => void | undefined | any;
}


const BlogPostContext = createContext<PostContextInterface | undefined>(undefined);

export const useBlog = () => {
    const context = useContext(BlogPostContext);
    if(!context){
        throw new Error('useBlog must be used within a BlogPostProvider')
    }
    return context
}
export const BlogPostProvider = ({ children }: { children: React.ReactNode } ) => {
    const [blogPosts, setBlogPosts] = useState<any[]>([])

    const getPosts = async () => {
        const data = await allPosts()
        console.log(data)
       return setBlogPosts(data.data.postsWithOwners)
    }

    const addPosts = async(post: any) => {
        const data = await createPost(post)
        return data
    }

    const deleteUserPost = async(id: string) => {
        const data = await deletePost(id)
        return data
    }

    return (
        <BlogPostContext.Provider value={{ blogPosts, deleteUserPost, setBlogPosts, addPosts, getPosts }}>
            {children}
        </BlogPostContext.Provider>
    )
}
