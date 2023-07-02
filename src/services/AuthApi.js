// Need to use the React-specific entry point to import createApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const AuthApi = createApi({
    reducerPath:'AuthApi',
    tagTypes:['Blog'],
    baseQuery:fetchBaseQuery({baseUrl:"http://127.0.0.1:8000/api/v1"}),
    endpoints: (build) => ({
        getBlogs : build.query({
            query : () => '/blogs',
            providesTags:['Blog']
        }),
        getBlog : build.query({
            query : (slug) => `/blogs/${slug}`,
            providesTags:['Blog']
        }),
        createBlog : build.mutation({
            query : (blog) => ({
                url : '/blogs',
                method:'POST',
                body:blog
            }),
            invalidatesTags:['Blog']
        }),
        deleteBlog : build.mutation({
            query : (id) => ({
                url : `/blogs/${id}`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags:['Blog']
        }),
        updateBlog : build.mutation({
            query : (blog) =>({
                url: `/blogs/${blog.id}`,
                method:'PATCH',
                body:blog
            }),
            invalidatesTags:['Blog']
        })
    })
})

export  const {useGetBlogsQuery,useGetBlogQuery,useCreateBlogMutation,useDeleteBlogMutation,useUpdateBlogMutation} = AuthApi