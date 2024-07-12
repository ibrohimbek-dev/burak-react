import React from 'react'
import Statistics from "./Statistics"
import PopularDishes from "./PopularDishes"
import NewDishes from "./NewDishes"
import Advertisement from "./Advertisement"
import ActiveUsers from "./ActiveUsers"
import Events from "./Events"


// Quyidagi component home screen sectional component hisoblanadi
const Home = () => {
  return (
    <div className="home-page">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events/>
    </div>
  )
}

export default Home