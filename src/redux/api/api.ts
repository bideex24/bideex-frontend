import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => {
        console.log(email);
        return {
          url: "/api/user",
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
  }),
});
export const { useGetUserQuery, useVerifyUserMutation } = baseApi;
