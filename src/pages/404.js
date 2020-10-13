import React from 'react'
import { Link } from 'gatsby'

export default function Page404() {
  return (
    <div>
      <h1>You must be lost!</h1>
      <Link to="/">&larr; Home Page</Link>
    </div>
  )
}
