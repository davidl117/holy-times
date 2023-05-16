import React, { useEffect, useState } from 'react'
import axios from "axios"

export const HebcalApi = () => {
  const [shabTime, setShabTime] = useState('')
  const [shabEnd, setShabEnd] = useState('')
  const [shabParsha, setShabParsha] = useState('')
  const [location, setLocation] = useState('')

  const options = {
    method: "get",
    url: `https://www.hebcal.com/shabbat?cfg=json&geo=zipgeonameid=3448439&M=on`,
  }
  

  useEffect(() => {
      axios(options).then(
        (response) => {
          let shabTime = response.data.items[1]
          let endTime = response.data.items[4]
          let shabParsha = response.data.items[3]
          let location = response.data.location
          setShabTime(shabTime)
          setShabEnd(endTime)
          setShabParsha(shabParsha)
          setLocation(location)
          console.log(location)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
        <ul>
          <li>{shabTime.title}</li>
          <li>{shabTime.date}</li>
          <li>{shabEnd.title}</li>
          <li>{shabEnd.date}</li>
          <li>{shabParsha.title}</li>
          <li>{location.city}</li>
          <li>{location.country}</li>
        </ul>
    </div>
  )
}
