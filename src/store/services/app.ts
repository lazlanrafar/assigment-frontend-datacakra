import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://biroperjalanan.datacakra.com/api",
    prepareHeaders: async (headers) => {
      const token = Cookies.get("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (builds) => ({
    GetUserById: builds.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = appApi;
