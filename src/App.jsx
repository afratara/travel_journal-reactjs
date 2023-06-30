import { Component, useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import './style.css';
import data from './components/data';
import FooterEl from './components/Footer';

function App() {
    const context = data.map(item => {
    return (
        <Content
            img={item.contentImage}
            location={item.location}
            locationDetails={item.locationDetails}
            heading={item.heading}
            description={item.description}

        />
    )
}) 

  return (
    <>
      <Navbar />
      <Hero />
      <section>
        {context}
      </section>
      <FooterEl />

    </>
  )
}

export default App
