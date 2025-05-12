import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/initiatives`,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const initiativesApi = createApi({
  reducerPath: 'initiativesApi',
  baseQuery,
  tagTypes: ['Initiatives'],
  endpoints: (builder) => ({
    fetchAllInitiatives: builder.query({
      query: () => '/',
      providesTags: ['Initiatives'],
    }),

    fetchInitiativeById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Initiatives', id }],
    }),

    createInitiative: builder.mutation({
      query: (newInitiative) => ({
        url: '/create',
        method: 'POST',
        body: newInitiative,
      }),
      invalidatesTags: ['Initiatives'],
    }),

    updateInitiative: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Initiatives'],
    }),

    deleteInitiative: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Initiatives'],
    }),
  }),
})

export const {
  useFetchAllInitiativesQuery,
  useFetchInitiativeByIdQuery,
  useCreateInitiativeMutation,
  useUpdateInitiativeMutation,
  useDeleteInitiativeMutation,
} = initiativesApi

export default initiativesApi
