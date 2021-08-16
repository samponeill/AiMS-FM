import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import MidForm from '../components/MidForm'
import ClientLogos from '../components/ClientLogos'
import Buckets from '../components/Buckets'
import ContentSections from '../components/ContentSections'
import Testimonials from '../components/Testimonials'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  intro,
  body,
  sections
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
    {sections ? 
    <ContentSections items={sections} />
    : ""}
    <Buckets />
    <Testimonials />
    <MidForm />
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
      frontmatter {
        slug
        title
        subtitle
        featuredImage
        sections {
          content
          image
        }        
      }
    }, 
  }
`
