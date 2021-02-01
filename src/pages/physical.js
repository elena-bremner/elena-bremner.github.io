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
  <div className={Styles.margin}>
    <div className={Styles.title}>
      <p>Products</p>
    </div>
  </div>

  <div className={Styles.gridWrapper2}> 
  {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id} className={Styles.squareWrapper}>
        <Work
          tag={node.frontmatter.tag}
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
  query PhysicalQuery {
          allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: { worktype: {eq: "physical"} } } ) {
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
            tag

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