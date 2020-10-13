import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1>My Crib</h1>
      <p>Welcome to my hood!</p>
      <Link to="/about">About Me &rarr;</Link>
    </Layout>
  )
}
