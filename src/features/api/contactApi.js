import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: ({ token }) => ({
        url: "/contact",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    getSingleContact: builder.query({
      query: ({ id, token }) => ({
        url: `/contact/${id}`,
        method:"GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    createContact: builder.mutation({
      query: ({ newContact, token }) => ({
        url: "/contact",
        method: "POST",
        body: newContact,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: ({ id, token }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation({
      query: ({ id, token,editedContact }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        headers: { authorization: `Bearer ${token}` },
        body:editedContact,
      }),
      invalidatesTags:["contact"]
    }),
  }),
});
export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useGetSingleContactQuery,
  useUpdateContactMutation
} = contactApi;
