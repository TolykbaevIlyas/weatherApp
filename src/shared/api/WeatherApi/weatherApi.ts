import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { ITaskApi } from "./types";

// export function GetTaskApi(){
//     axios.get('http://localhost:3001/tasks')
//     .then(res => console.log(res))
// }

export const taskApi = createApi({
    reducerPath: 'taskApi',
    tagTypes: ['Tasks'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
      getWeather: builder.query<ITaskApi | any , string>({
        query: () => `tasks`,
        providesTags: (result) => result
          ? [
              ...result.map(({ id }:any) => ({ type: 'Tasks' as const, id })),
              { type: 'Tasks', id: 'LIST' },
            ]
          : [{ type: 'Tasks', id: 'LIST' }],
      }),
    }),
  })

export default taskApi.reducer
export const { useGetWeatherQuery} = taskApi;
