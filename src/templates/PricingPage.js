import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import ClientLogos from '../components/ClientLogos'
import MidForm from '../components/MidForm'

import Check from '../../static/images/check.svg'
import Basic from '../../static/images/pricing-01.svg'
import Premium from '../../static/images/pricing-02.svg'
import Advanced from '../../static/images/pricing-03.svg'

import Tooltip from '../components/Tooltip'

import '../components/Pricing.css';

// Export Template for use in CMS preview
export const PricingPageTemplate = ({
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
    <h1 className="highlight highlight--center">Pricing plans and features</h1>
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
              <td>Advanced Dashboard <Tooltip>Stay in control of your daily operations, Showing real time revelvent data on one unique dashboard.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Job reporting <Tooltip>Wide range of reporting from Daily Reactive Jobs, Surveying or Quoting, Planned Prevention Maintenance on an Easy to use and user friendly job card.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Unlimited Job orders <Tooltip>With AiMS there are no limits with endless job reporting.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Asset Management <Tooltip>Manage the condition and the compliance status of the asset, saving you and your clients time and money.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>User Permissions <Tooltip>Manage the systems authorisation access given to each user to stay in line of the users job role or level of authority.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Email Notifications <Tooltip>AiMS can email your helpdesk, engineers, contractors and clients and inform them of a new job that has been raised, Send notes or request updates to another users, Email an engineer’s time sheet electronically, allow clients to approve a quotation, send purchase orders to your suppliers. With a wide range of system email notifications to choose from and that will fall in line with your current business practices.</Tooltip></td>	
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Cloud based Portal <Tooltip>AiMS is a cloud based management system that allows any user to log into their portal from any location, Work remotely and have full access to your files and information.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Compliance and PPM Management <Tooltip>Keep track on with your compliance services and when the are due, Bulk log your compliance jobs to save time. All your compliance certificates in one place with easy access to find the information you require, when required.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Work order Management <Tooltip>Stay in line with your current SLAs and Improve your business processes. AiMS enables you to streamline your jobs from start to finish with easy to use tools, filters and functions to keep on track of outstanding jobs.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Quotations <Tooltip>Create quotations and export them into a PDF format. Keep on track of what quotations have been approved or awaiting approval.  Easy to use format. Input material line items.  Allow your clients to review, approve quotations and speed up current processes with the client portal. Allow your contractor to submit quotations for review with the contractor panel.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Job survey <Tooltip>Carry out a site audit, inspections and surveys with an easy to use format making it quick and easy to carry out a report with descriptions and photos. Export the report to a PDF format or the report can be stored onto the AiMS system for safe keeping.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Purchase orders <Tooltip>Create Purchase orders and issue them to your suppliers via the AiMS portal or generate a PDF document. Manage your costs and stay in control with your material spend.</Tooltip></td> 	
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Customised table view <Tooltip>AiMS allows the user to customise the jobs page to manage your outstanding works more efficiently with the table view. For example if you wanted to change your table view to show how many jobs are outstanding for each engineer, Project manager, Client, Discipline or Visit status.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Engineers Mobile App <Tooltip>The engineer’s app has been designed to be simple and easy to use. Keep track of your engineers Check in and out times on site, take before and after pictures, View previous visit information and photos, Obtain an electronic signature for clients to sign of works and List materials use whilst on site. Electronic service sheets can be exported in a PDF format. 
The engineers app always has a wide range of services to support your current business process, for example, your engineers can complete a vehicle condition report via the app to confirm the current status of a company vehicle, Request annual leave and view time sheets.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Reporting <Tooltip>Endless reporting to show the information you require. All reports can be exported to Excel.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Unlimited File storage <Tooltip>With AiMS there are no limits with endless file storage</Tooltip></td>
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
              <td>24/7 Technical Helpdesk support <Tooltip>Our AiMS Technical advisers are available 24/7 to provide help and support.</Tooltip></td>	
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Client Portal <Tooltip>Allow your client to raised work orders, approve quotations, view the status of works orders and keep updated on outstanding jobs and compliance.</Tooltip></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Contractor Portal <Tooltip>Your contractors can access the portal to complete works orders, use the mobile app to check into sites and also invoice the jobs views the system speeding up time waiting for service reports and job updates.</Tooltip></td>
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
              <td>Time Sheet <Tooltip>Aims uses the visit information to calculate a time sheet for your engineers, time sheets can be exported to a PDF format and emailed to your engineers.</Tooltip></td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Materials and Equipment Inventory <Tooltip>All your Materials/Stock in one place with the buy and sell prices. The inventory Integrates with the work orders job card to show material costs to help with managing your budget. Save time quoting by auto selecting your materials prices from the inventory. Manage your engineers materials with a clear visibility of what materials each engineers has on their Van stock. Keep track of materials stock count</Tooltip></td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Unlimited Inventory Entrys <Tooltip>With AiMS there are no limits with endless Inventory items.</Tooltip></td>
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
    <section className="section">
      <div className="container">
        <h2 className="highlight highlight--center">Choose what works for you</h2>
        <div className="Pricing--choices">
          <div className="Pricing--selection__basic Pricing--selection">
            <div className="Pricing--selection--title">
              <h3><Basic /><span>Basic</span></h3>
              <p><span>Manage your assets and solve customer requests and problems</span></p>
            </div>
            <div className="Pricing--selection--price">
              <div>
                <p className="price">£35</p>
                <p><span>Per user per month</span></p>
              </div>
              <a className="button button--primary" href="">Book a demo</a>
            </div>
          </div>
          <div className="Pricing--selection__premium Pricing--selection">
            <div className="Pricing--selection--title">
              <h3><Premium /><span>Premium</span></h3>
              <p><span>All the features you need to manage complex workflows</span></p>
            </div>
            <div className="Pricing--selection--price">
              <div>
                <p className="price">£50</p>
                <p><span>Per user per month</span></p>
              </div>
              <a className="button button--primary" href="">Book a demo</a>
            </div>
          </div>
          <div className="Pricing--selection__advanced Pricing--selection">
            <div className="Pricing--selection--title">
              <h3><Advanced /><span>Advanced</span></h3>
              <p><span>Bespoke service plan for the best customer experience</span></p>
            </div>
            <div className="Pricing--selection--price">
              <p className="price">Get in touch</p>
            <a className="button button--secondary" href="">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ClientLogos />
    <MidForm />
  </main>
)

const ComponentsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PricingPageTemplate {...page} {...page.frontmatter} body={page.html} />
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
