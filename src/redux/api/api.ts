import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://bideex-backend-node.vercel.app
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bideex-backend-node.vercel.app",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => {
        console.log(email);
        return {
          url: `/api/user`,
          method: "GET",
          params: email,
        };
      },
      providesTags: ["user"],
    }),
    verifyUser: builder.mutation({
      query: (data) => {
        return {
          url: "/api/user",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/api/user",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["user"], // Invalidate the cache to refresh `getUser`
    }),
  }),
});
export const { useGetUserQuery, useVerifyUserMutation, useUpdateUserMutation } =
  baseApi;
