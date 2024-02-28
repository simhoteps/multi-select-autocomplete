
import {   createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacterType } from '../types/types';
import { BASE_URL } from '../utils/baseUrl/BaseUrl';



export const characterApi = createApi({
    reducerPath: 'CharacterApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    tagTypes: ['character'],
    endpoints: (builder) => ({
      getAlerts: builder.query<ICharacterType,void>({
        query:() => {
          return {
            url: `/character`,
            method:"GET"
          }
        },
      }),
    }),
  });
  
export const { useGetAlertsQuery } = characterApi;

