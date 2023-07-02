import {useState} from "react";
import {useCreateBlogMutation} from "../services/AuthApi.js";
import {useNavigate} from "react-router-dom";

const create = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blogTitle,setBlogTitle] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blogParagraph,setBlogParagraph] = useState('');
    const [titleError,setTitleError] = useState(true)
    const [paragraphError,setParagraphError] = useState(true)
    const [errMessage,setErrMessage] = useState('')
    const [errPaMessage,setErrPaMessage] = useState('')

    const [createBlog,{error}] = useCreateBlogMutation();
    const navigate = useNavigate();


    const submitHandler = (e)=>{
        e.preventDefault();
        if (blogTitle.length < 15){
            setErrMessage('Your blog title must be 15')
            setTitleError(false)
            navigate('/blog/create')
        }
        if (blogParagraph.length<150){
            setErrPaMessage('Your blog paragraph  must be 150')
            setParagraphError(false)
            navigate('/blog/create')
        }
        const newBlog = {title:blogTitle,paragraph:blogParagraph}
        createBlog(newBlog)
        setBlogTitle('')
        setBlogParagraph('')
        navigate('/blog/index')
    };
    return (
        <div className="container mx-auto min-h-screen flex justify-center items-start pt-[75px]">
            <form method='post' className='w-full' onSubmit={submitHandler}>
                <div className="mb-4 w-full">
                    <h4 className='text-center text-3xl font-semibold'>Create New Blog</h4>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <label htmlFor="blog_title"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title</label>
                    <input value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)} type="text" id="blog_title" name='blog_title'
                           className={`bg-gray-50 border ${titleError?"border-gray-300":"border-red-500"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
                    <div>
                        <p className={`${titleError?"hidden":'block'} mt-2 text-sm text-red-600 dark:text-red-500`}>
                            {errMessage}
                        </p>
                    </div>
                </div>

                <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <label htmlFor="editor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-whit">Blog Summary</label>
                    <input value={blogParagraph}  onChange={(e)=>setBlogParagraph(e.target.value)} id="editor" name='blog_description'
                              className={`block w-full ${paragraphError?"border-0":"border-red-500 border"} p-2 text-sm text-gray-800 bg-white  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400`}
                              placeholder="Write an article..." />
                    <div>
                        <p className={`${paragraphError?"hidden":'block'} mt-2 text-sm text-red-600 dark:text-red-500`}>
                            {errPaMessage}
                        </p>
                    </div>
                </div>
               <div className='px-4 py-2'>
                   <button type="submit"
                           className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                       Publish post
                   </button>
               </div>

            </form>
        </div>
    )
}

export default create;