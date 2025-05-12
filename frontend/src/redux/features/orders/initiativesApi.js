import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const initiativesApi = createApi({
  reducerPath: "initiativesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/initiatives`,
    credentials: "include",
  }),
  tagTypes: ["Initiatives"],
  endpoints: (builder) => ({
    // Добавить новую инициативу
    createInitiative: builder.mutation({
      query: (newInitiative) => ({
        url: "/",
        method: "POST",
        body: newInitiative,
        credentials: "include",
      }),
      invalidatesTags: ["Initiatives"],
    }),

    // Получить инициативы по email или всем (если нужно)
    getInitiativesByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
      }),
      providesTags: ["Initiatives"],
    }),

    // Получить все инициативы (например, для администратора)
    getAllInitiatives: builder.query({
      query: () => ({
        url: `/`,
      }),
      providesTags: ["Initiatives"],
    }),

    // Удалить инициативу
    deleteInitiative: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Initiatives"],
    }),

    // Обновить инициативу
    updateInitiative: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Initiatives"],
    }),
  }),
});

export const {
  useCreateInitiativeMutation,
  useGetInitiativesByEmailQuery,
  useGetAllInitiativesQuery,
  useDeleteInitiativeMutation,
  useUpdateInitiativeMutation,
} = initiativesApi;

export default initiativesApi;
