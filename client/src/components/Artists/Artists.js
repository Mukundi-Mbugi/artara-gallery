import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {useEffect, useState} from 'react'
import "./Artists.css"



function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch('/artists')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArtists(data)
      }
      )
  }, [])

  return (
    <>
    <Navbar />
    <div className='grid-container'>
      {artists.map(artist => (
        <div key={artist.id} className="artist-div">
          <h3>{artist.name}</h3>
          <p>{artist.email}</p>
          <button><a href={`mailto:${artist.email}`}>Contact me</a> </button>
          </div>
      ))}
    </div>
    <Footer />
    </>
  )
}

export default Artists