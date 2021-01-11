import React from "react"
import Work from "../components/work"
import Styles from "./index.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"

/* this page is what you see in the UX page 
* including name image and link to each page
*/
export default ({data}) => (
  <Layout>
  <div className={Styles.title} >
    <p> Play </p>
  </div>
  <div className={Styles.gridWrapper2}> 
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id} className={Styles.squareWrapper}>
        <Work
          name={node.frontmatter.title}
          picture= {node.frontmatter.square.childImageSharp.fluid}
          link={node.fields.slug}
        />
      </div>
    )}
 </div>
 </Layout>

)

export const query = graphql`
  query SQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: { worktype: {eq: "sketch"} } } ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            square{
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            worktype
            title
      
            order
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;