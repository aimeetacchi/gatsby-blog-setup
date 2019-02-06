import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Metatags from '../components/Metatag'
import { Link, graphql } from 'gatsby'

function BlogPost(props) {

    // setting props.data.markdownRemark to post; then using that to get frontmatter and pulling out title
    const post = props.data.markdownRemark;
    const url = props.data.site.siteMetadata.siteUrl
    const { title, description, date } = post.frontmatter;
    const thumbnail = post.frontmatter.image.childImageSharp.resize.src;

    return (
        <Layout>
            <Metatags
                title={title}
                description={description}
                thumbnail={url + thumbnail}
                url={url}
                pathname={props.location.pathname}
            />
            <div>
                <h1>{title}</h1>
                <h2>{date}</h2>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                {/* using post variable to get .html from graphql */}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <Link to="/page-2/">Return to Blog</Link>
            </div>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                description
                image {
                    childImageSharp {
                        resize(width: 1500, height: 1500) {
                            src
                        }
                        fluid(maxWidth: 786) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }

        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`