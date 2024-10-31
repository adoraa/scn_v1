import React from 'react'
import { Hero } from './Hero'
import { TopSellers } from './TopSellers'
import Recommended from './Recommended'

export const Home = () => {
  return (
    <>
      <Hero/>
      <TopSellers/>
      <Recommended/>
    </>
  )
}

export default Home