import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import { Location } from '@reach/router'
import { useInView } from 'react-intersection-observer';

import 'modern-normalize/modern-normalize.css'
import './Fonts.css'
import './globalStyles.css'

export default ({ children, meta, title }) => {

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
          allPosts: allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map(post => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
              <link href="" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="" />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />
            
            <div ref={ref} className="Nav--Sentinel"></div>

            <Nav inView={inView} subNav={subNav} />

            <Fragment>{children}</Fragment>

            <Footer />
          </Fragment>
        )
      }}
    />
  )
}

//If page is index, tell Nav to use sentinel 