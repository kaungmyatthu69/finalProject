import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const authApi=createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://contact-app.mmsdev.site/api/v1"}),
    tagTypes:['auth'],
    endpoints:(builder)=>({
        registerUser:builder.mutation({
            query:(user)=>({
                url:"/register",
                method:'POST',
                body:user
            }),
            invalidatesTags:['auth']
        }),
        loginUser:builder.mutation({
            query:(user)=>({
                url:"/login",
                method:'POST',
                body:user
            }),
            invalidatesTags:['auth']

        }),
        logoutUser:builder.mutation({
            query:({token})=>({
                url:'/user-logout',
                method:'POST',
                headers:{authorization:`Bearer ${token}`}
            }),
            invalidatesTags:['auth']
        }),
        changePassword:builder.mutation({
            query:({token,newPassword})=>({
                url:'/change-password',
                method:"POST",
                body:newPassword,
                headers:{authorization:`Bearer ${token}`}
                
            }),
            invalidatesTags:['auth']
            
        })
    })


})
export const {useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation,useChangePasswordMutation}= authApi;