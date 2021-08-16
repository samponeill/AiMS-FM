import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import MidForm from '../components/MidForm'
import ClientLogos from '../components/ClientLogos'
import Buckets from '../components/Buckets'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  intro,
  body
}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    {body ? 
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
    : ""}
    {body ? 
    <Content source={body} />
    : ""}
    <Buckets />
    <MidForm />
    <ClientLogos />    
  </main>
)

const DefaultPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DefaultPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      sections {
        body
        image
      }
      frontmatter {
        slug
        title
        subtitle
        featuredImage
      }
    }, 
  }
`
