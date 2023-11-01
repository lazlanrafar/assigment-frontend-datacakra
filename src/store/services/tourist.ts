import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { TouristForm } from "../../types";

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
  tagTypes: ["touristTag"],
  endpoints: (builds) => ({
    GetAllTourist: builds.query({
      query: (params) => `/Tourist?page=${params.page}`,
      providesTags: ["touristTag"],
    }),
    GetTouristById: builds.query({
      query: (id) => `/Tourist/${id}`,
    }),
    CreateTourist: builds.mutation({
      query: (body: TouristForm) => ({
        url: "/Tourist",
        method: "POST",
        body: body as TouristForm,
      }),
      invalidatesTags: ["touristTag"],
    }),
    UpdateTourist: builds.mutation({
      query: ({ id, body }: { id: string; body: TouristForm }) => ({
        url: `/Tourist/${id}`,
        method: "PUT",
        body: body as TouristForm,
      }),
      invalidatesTags: ["touristTag"],
    }),
    DeleteTourist: builds.mutation({
      query: (id: string) => ({
        url: `/Tourist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["touristTag"],
    }),
  }),
});

export const {
  useGetAllTouristQuery,
  useGetTouristByIdQuery,
  useCreateTouristMutation,
  useUpdateTouristMutation,
  useDeleteTouristMutation,
} = touristApi;
