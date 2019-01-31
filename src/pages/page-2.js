import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Blog Page</h1>
    <p>Welcome to my blog</p>
    <Link to="/">Return to home</Link>
  </Layout>
)

export default SecondPage
