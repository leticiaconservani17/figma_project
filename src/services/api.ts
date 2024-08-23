import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../Pages/Home'

type Product = {
  id: number
  price: number
}

type PurchaseLoad = {
  products: Product[]
  billing: {
    name: string
    adress: string
    city: string
    CEP: string
    number: string
    complement: string
  }
  payment: {
    card: {
      owner?: {
        name: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
  }
}

type PurchaseResponse = {
  id: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://project-figma-data.onrender.com'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => '/restaurants'
    }),
    purchase: builder.mutation<PurchaseResponse, PurchaseLoad>({
      query: (body) => ({
        url: '/Checkout',
        method: 'POST',
        body
      }),
      transformResponse: (response: PurchaseResponse) => {
        return {
          id: `#${response.id.toUpperCase()}`,
          message: 'Pedido realizado com sucesso!'
        }
      }
    })
  })
})

export const { useGetRestaurantsQuery, usePurchaseMutation } = api

export default api
