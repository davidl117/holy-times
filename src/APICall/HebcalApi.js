import React, { useEffect, useState } from 'react'
import axios from "axios"
import Button from '@mui/material/Button'

export const HebcalApi = () => {
  const [shabTime, setShabTime] = useState('')
  const [shabEnd, setShabEnd] = useState('')
  const [shabParsha, setShabParsha] = useState('')
  const [location, setLocation] = useState('')
  const [zipCode, setZipCode] = useState(10451)

  const options = {
    method: "get",
    url: `https://www.hebcal.com/shabbat?cfg=json&zip=${zipCode}&M=on`,
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
          console.log(response.data)
        }).catch(err => {
          console.log(err)
        })
      },[zipCode])

  return (
    <div className='api-call-section'>
      <h1 className='main-title'>Holy Times</h1>
      <h4 className='app-descrp'>Helping the tribe keep to the traditions and the good old ways.</h4>
      <label htmlFor="zip" className='label-style'>
        <p>Enter your zip code</p>
        <input name='zip' type='number' onChange={(e) => setZipCode(e.target.value)}/>
        {/* <Button variant="contained" >Submit</Button> */}
      </label>
        <table className='table-style'>
          <tbody>
            <tr>
              <td>Location: <b>{location.city}</b></td>
              {/* <td>{location.country}</td>  */}
            </tr>  
              <td>{shabTime.title}</td>
            <tr>
              {/* <td>Date: <b>{shabTime.date ? shabTime.data.slice[1,10] : "N/A"}</b></td> */}
            </tr>
            <tr>
              <td>Shababt Ends: <b>{shabEnd.title}</b></td>
            </tr>
            <tr>
              <td>Torah Portion: <b>{shabParsha.title}</b></td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
