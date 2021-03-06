import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
// import Content from '../components/Content'
import Layout from '../components/Layout'
import Buckets from '../components/Buckets'
import HomePageContent from '../components/HomePageContent.js'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, white, subtitle, button, brochure, featuredImage, bucketsHeading, buckets, body }) => (
  <main className="Home">
    <PageHeader
      large
      className="home"
      title={title}
      white={white}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      button={button}
      brochure={brochure}
    />
    <Buckets />
    {/* <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section> */}
    <HomePageContent />
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
        white
        subtitle
        featuredImage
        button {
          text
          link
        }
        brochure {
          text
        }
      }
    }
  }
`
