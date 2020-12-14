
import React from "react"
import Work from "../components/work"
import Styles from "./UX.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"

/* this page is what you see in the UX page 
* including name image and link to each page
*/
export default ({data}) => (
  <Layout>
  <div className={Styles.intro}>
    <p> User Experience/User Interface Design </p>
  </div>

  <div className={Styles.wrapper}> 
  {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id} className={Styles.subwrapper}>
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
  query UXQuery {
          allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: { worktype: {eq: "ux"} } } ) {
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
