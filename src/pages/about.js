import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"

export default function About() {
  return (
    <Layout>
      <h1>Bout Me</h1>
      <p>This is a little sumpin about me! </p>
      <Link to="/">&larr; Back Home</Link>
    </Layout>
  )
}
