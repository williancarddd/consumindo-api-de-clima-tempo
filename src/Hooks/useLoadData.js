import {api} from '../services/api'
export function useLoadData(useEffect, dispatch, types_context_weather){
  useEffect(()=>{
    load_data()
    console.log('ok useLoad')
 }, [])
 async function load_data(){
   const response = await api.get('current?access_key=5180ad1c324597b8a0c1beb9c4c0a8cb',
   {params:{
     query: 'Porto velho-ro'
   }})
   const data = response.data
   console.log(data)
  dispatch({type: types_context_weather.LOAD_DATA, payload: data})
 }
}