import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import './post.css';

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (

  <StaticQuery
    query={graphql`
      query ListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
              }
              excerpt(pruneLength: 250)
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
    }
    render={data => (
      <Layout>
        <SEO title="Page two" />
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Link to={node.fields.slug} className="link">
            <div className="post-list">
              <h2>{node.frontmatter.title}</h2>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}

      </Layout>
    )}
  />
)


export default SecondPage;