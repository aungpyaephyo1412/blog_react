import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetBlogQuery, useUpdateBlogMutation} from "../services/AuthApi.js";
import Loading from "./Loading.jsx";

const Edit = () => {
    const nav = useNavigate()
    const {slug} = useParams()
    console.log(slug)
    const {data,isLoading} = useGetBlogQuery(slug);
    let blog = data?.data
    console.log(blog)
    const [blogTitle, setBlogTitle] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blogParagraph, setBlogParagraph] = useState('');
    const [updateBlog] = useUpdateBlogMutation()
    const submitHandler = (e) => {
        e.preventDefault()
        const newData = {id: blog.id, title: blogTitle, paragraph: blogParagraph}
        console.log(newData)
        updateBlog(newData)
        nav('/blog/index')
    }
    return (
        <div className="container mx-auto min-h-screen flex justify-center items-start pt-[75px]">

            {isLoading?<Loading/> : (
                <form method='post' className='w-full' onSubmit={submitHandler}>
                    <div className="mb-4 w-full">
                        <h4 className='text-center text-3xl font-semibold'>Edit your Blog</h4>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="blog_title"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title</label>
                        <input value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} type="text" id="blog_title"
                               name='blog_title'
                               className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>

                    </div>

                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-whit">Blog
                            Summary</label>
                        <input value={blogParagraph} onChange={(e) => setBlogParagraph(e.target.value)} id="editor"
                               name='blog_description'
                               className={`block w-full border-0 p-2 text-sm text-gray-800 bg-white  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400`}
                               placeholder="Write an article..."/>

                    </div>
                    <div className='px-4 py-2'>
                        <button type="submit"
                                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Update post
                        </button>
                    </div>

                </form>
            )}
        </div>

    )
}
export default Edit