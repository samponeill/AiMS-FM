import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Buckets from '../components/Buckets'
import USP from '../components/Usp'
import ClientLogos from '../components/ClientLogos'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, button, brochure, featuredImage, bucketsHeading, buckets, body }) => (
  <main className="Home">
    <PageHeader
      large
      className="home"
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      button={button}
      brochure={brochure}
      bucketsHeading={bucketsHeading}
      buckets={buckets}
    />
    <Buckets source={buckets} />
    {/* <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section> */}
    <USP></USP>
    <ClientLogos />
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        slug
        title
        subtitle
        featuredImage
        button {
          text
          link
        }
        brochure {
          text
        }
        bucketsHeading
        buckets {
          heading
          linkText
          image
          link
        }
      }
    }
  }
`
