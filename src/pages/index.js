import React from "react"
import Work from "../components/work"
import style from "./index.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Sketch from "react-p5";
import SketchWrapper from '../components/sketchWrapper'
import sketch from '../scripts/sketches/shai-hulud.js'


function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } 
    catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

  document.body.removeChild(textArea);
};


function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
  alert("Elena's email copied to dashboard 💾");
};


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



   // <p>Happy {weekday[cday]}! </p> // put this inside layout if you want it back
  // var copyCodeToClipboard = () => {
  //   const el = this.textArea
  //   el.select()
  //   document.execCommand("copy")
  // }

       
  return (

  <Layout className={style.indexContainer} >
    <SketchWrapper sketch={sketch}/> 
      <div className={style.intro}>
         4th year industrial designer with a concentration in computation at the <a href = "https://www.risd.edu/">Rhode Island School of Design. </a>
      </div>
      <div className = {style.contact}>
        <a onClick={() => {copyTextToClipboard("ebremner@risd.edu");}}>
           email
        </a>
        <a href = "https://www.linkedin.com/in/elena-bremner-76ab8514b/">Linkedln</a>
        <a href = "https://github.com/elena-bremner/elena-bremner.github.io/tree/master-source">Github</a>
      </div>

      <div className={style.gridWrapper}> 
          {data.allMarkdownRemark.edges.map(({ node }) =>
            <div key={node.id} className={style.squareWrapper}>
              <Work
                name={node.frontmatter.title}
                date={node.frontmatter.date}
                picture= {node.frontmatter.square.childImageSharp.fluid}
                link={node.fields.slug}
              />
            </div>
          )}
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
            date
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



