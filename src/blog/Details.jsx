import {useParams} from "react-router-dom";
import {useGetBlogQuery} from "../services/AuthApi.js";
import {BiWorld} from 'react-icons/bi'
import Loading from "./Loading.jsx";

const Details = () => {
  const {slug} = useParams();
  const {data,isLoading} = useGetBlogQuery(slug);
  let blog = data?.data
  return(
      <div className='min-h-screen container mx-auto flex justify-center items-start px-5 pt-[75px]'>
          {isLoading?<Loading/>:<div>
              <div className="w-full  flex justify-between items-end flex-wrap gap-y-2">
                  <div className="text-3xl font-semibold">{blog?.title}</div>
                  <div className="flex justify-between items-center">
                      <div className="me-1">
                          <BiWorld/>
                      </div>
                      <span
                      className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{blog?.created_at}</span>
                  </div>
              </div>
              <div className='py-3'/>
              <div>
                  <p>{blog?.description}</p>
              </div>
          </div>}
      </div>
  )
}
export default Details