import React, { useEffect, useReducer } from "react";
import { useLoadData } from "../../Hooks/useLoadData";
import { reduce_weather } from "./reducer_weather";
import { types_context_weather } from './types_context_weather'

export const ContextAppWeather = React.createContext()

export function ContextAppComponent({children}){
  const [state, dispatch] = useReducer(reduce_weather, {} )

  useLoadData(useEffect, dispatch, types_context_weather) // carrega os dados para o state
  return (
    <ContextAppWeather.Provider value={{state, dispatch}}>
      {children}
    </ContextAppWeather.Provider>
  )
}

