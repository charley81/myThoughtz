import React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <>
      <h1>My Crib</h1>
      <p>Welcome to my hood!</p>
      <Link to="/about">About Me &rarr;</Link>
    </>
  )
}
