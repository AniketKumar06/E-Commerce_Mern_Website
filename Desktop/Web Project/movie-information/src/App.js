import React from 'react'
import Movie from './components/movie/Movie'
import Header from './components/header/Header';
import Data from './data.json';
const App = () => {

  return (
    <>
      <Header />
      {
        Data.map((Element, index) => {
          return (

            <Movie key={index}
              image={Element.Poster}
              title={Element.Title}
              year={Element.Year} />

          )
        })
      }


    </>
  )
}

export default App