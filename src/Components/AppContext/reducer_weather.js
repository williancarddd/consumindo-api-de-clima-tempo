import { types_context_weather } from "./types_context_weather"

export function reduce_weather(state, action){
  switch (action.type){
    case types_context_weather.LOAD_DATA:
      return {...state, ...action.payload}
    default:
      return {...state}
  }
}