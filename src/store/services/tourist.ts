import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const touristApi = createApi({
  reducerPath: "touristApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://biroperjalanan.datacakra.com/api",
    prepareHeaders: async (headers) => {
      const token = Cookies.get("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (builds) => ({
    GetAllTourist: builds.query({
      query: (params) => `/Tourist?page=${params.page}`,
    }),
  }),
});

export const { useGetAllTouristQuery } = touristApi;
