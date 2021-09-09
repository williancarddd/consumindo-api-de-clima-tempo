import React, { useEffect, useState } from "react"
 export function CurrentTime(){
   const [time, setTime] = useState('')
   useEffect(() =>{
     setInterval(()=> {
       const date = new Date()
      setTime(`${date.getHours()}:${date.getMinutes()}`)
     }, 1000)
   })
  return (
    <>
    {time}
    </>
  )
}
