import React from 'react'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Exhibitions.css'

function Exhibitions() {

  const [exhibits, setExhibits] = useState([])

  useEffect(() => {
    fetch('/exhibitions')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setExhibits(data)
      })
      
  }, [])
  return (
    <>
    <Navbar />
    <div>
      <div>
        <h1>Exhibitions</h1>
      </div>
      <div>
        {exhibits.map(exhibit => (
          <div key={exhibit.id} className="exhibit-div">
            <h3>{exhibit.title}</h3>
            <p>{`${exhibit.date}   | |  ${exhibit.venue} | |
            ${exhibit.time}`}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Exhibitions