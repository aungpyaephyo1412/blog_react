import {Link} from "react-router-dom";
import {useState} from "react";
import {useDeleteBlogMutation} from "../services/AuthApi.js";
import {BiWorld} from "react-icons/bi";

const Card = ({blog}) => {
    const [open, setOpen] = useState(false);
    const [deleteBlog] = useDeleteBlogMutation();
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     deleteBlog(blog.id)
    //     console.log('delete')
    // }
    return (
        <div 
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
            <div className="p-5">
                <div className="flex justify-between items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate w-[90%]">{blog.title}</h5>
                    <div className="flex justify-end relative">
                        <button id="dropdownButton" onClick={() => setOpen(!open)}
                                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>
                        </button>

                        <div id="dropdown"
                             className={`z-10 ${open ? "inline-block" : 'hidden'} absolute right-[41px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Bookmark</a>
                                </li>

                                <li>
                                <a href={`/blog/edit/${blog.slug}`}
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>

                                <li>
                                    <button form="delete" onClick={()=>deleteBlog(blog.id)}
                                            className="w-full text-start px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center pb-3">
                    <div className="">
                        <BiWorld/>
                    </div>
                    <span
                        className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{blog?.created_at}</span>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.excerpt}</p>
                <Link to={`/blog/detail/${blog.slug}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </Link>
            </div>
        </div>

    )
}
export default Card