import React from "react"
import Work from "../components/work"
import style from "./index.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Sketch from "react-p5";
import SketchWrapper from '../components/sketchWrapper'
import sketch from '../scripts/sketches/shai-hulud.js'

/* this page is what you see in the home page 
* including name image and link to each page
*/

/* looping all nodes from md files */
/* each node --> each md file */
/* <work/> is a tage */

   


export default ({data}) => {
  var current_date = new Date()
  var cday = current_date.getDay()
  var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday");
 
  return (

  <Layout >
  <SketchWrapper sketch={sketch} />
     
    <div className = {style.indexContainer}>
      <div className={style.intro}>
        <p>Happy {weekday[cday]}! </p>
       I study <a className = {style.mark}> industrial design </a> with a concentration in computation at the <a className = {style.mark}> Rhode Island School of Design</a>.
       <br></br>
       <br></br>
       <br></br>
      </div>


      <div className = {style.contact}>
        <Link to="/"  >
              E-mail
        </Link> 

        <a href = "https://www.linkedin.com/in/elena-bremner-76ab8514b/">Linkedln</a>
        <a href = "https://github.com/elena-bremner/elena-bremner.github.io/tree/master-source">Github</a>
      </div>
      <div className={style.gridWrapper}> 

        {data.allMarkdownRemark.edges.map(({ node }) =>
            <div key={node.id} className={style.squareWrapper}>
              <Work
                name={node.frontmatter.title}
                picture= {node.frontmatter.square.childImageSharp.fluid}
                link={node.fields.slug}
              />
            </div>
          )}
       </div>
   </div>
   
 </Layout>

)
}



export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: { content: {eq: "index"} } } ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            square{
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            content
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



