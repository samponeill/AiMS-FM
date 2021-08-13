import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'

import Check from '../../static/images/check.svg'
import Basic from '../../static/images/pricing-01.svg'
import Premium from '../../static/images/pricing-02.svg'
import Advanced from '../../static/images/pricing-03.svg'

import '../components/Pricing.css';

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main className="Pricing">
    <h1 className="highlight hightlight--center">Pricing plans and features</h1>
    <section className="pricing section">
      <div className="container">
      <table rules="none">
          <tbody>
            <tr>
              <th>Features</th>
              <th><div><Basic /><span>Basic</span></div></th>
              <th><div><Premium /><span>Premium</span></div></th>
              <th><div><Advanced /><span>Advanced</span></div></th>
            </tr>
            <tr>
              <td>Advanced Dashboard</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Job reporting</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Unlimited Job orders</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Asset Management</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>User Permissions</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Email Notifications</td>	
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Cloud based Portal</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Compliance and PPM Management</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Work order Management</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Quotations</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Job survey</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Purchase orders</td> 	
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Customised table view</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Engineers Mobile App</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Reporting</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Unlimited File storage</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Data Security and Encryption</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>24/7 Technical Helpdesk support</td>	
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Client Portal</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Contractor Portal</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Finance</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Time Sheet</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Materials and Equipment Inventory</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Unlimited Inventory Entrys</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Customisable System</td>
              <td></td>
              <td></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>AWS Server</td>
              <td></td>
              <td></td>
              <td><Check /></td>
            </tr>
          </tbody>
      </table>
      </div>
    </section>
  </main>
)

const ComponentsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ComponentsPage

export const pageQuery = graphql`
  query ComponentsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        slug
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
