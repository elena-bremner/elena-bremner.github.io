import React from "react"
import Work from "../components/work"
import style from "./index.module.css"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import Sketch from "react-p5";
// import SketchWrapper from '../components/sketchWrapper'
// import sketch from '../scripts/sketches/shai-hulud.js'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..



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
    alert("Elena's email copied to clipboard 💾");
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
};


export default ({data}) => {
  // var current_date = new Date()
  // var cday = current_date.getDay()
  // var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
  //                   "Thursday", "Friday", "Saturday");


      // <SketchWrapper sketch={sketch}/> 

       
  return (

  <Layout  >
    <div className={style.hero} >
      <div className={style.name}  data-aos="fade-up" data-aos-mirror="true" data-aos-offset="10"  >
         Hey, I'm <Link to="/about/" className={style.link} > Elena Bremner </Link>
      </div>
      <div className={style.introWrapper}>
          <div className={style.intro} data-aos="fade-up" data-aos-mirror="true" data-aos-offset="200"  >
             User experience designer currently a <a href ="https://fellows.kleinerperkins.com/" target="_blank">Kleiner Perkins fellow</a> while working at <a href="https://www.interos.ai/"target="_blank"> Interos</a> 
             <div className={style.experience}>
                <div> Past work experience: 3M, Deeplocal, and <a href="https://www.about.pangea.app/"target="_blank"> Pangea.app</a> </div>
            </div>
          </div>
      </div>
      <div className = {style.contact} data-aos="fade" data-aos-mirror="true" data-aos-offset="200" >
            <a onClick={() => {copyTextToClipboard("ebremner@risd.edu");}}>
               Email
            </a>
            <a href = "https://www.linkedin.com/in/elena-bremner-76ab8514b/" target="_blank" >Linkedln</a>
            <a href = "https://github.com/elena-bremner/elena-bremner.github.io/tree/master-source" target="_blank">GitHub</a>
        </div>
    </div>

    <div className={style.gridWrapper} > 
          {data.allMarkdownRemark.edges.map(({ node }) =>
            <div key={node.id} className={style.squareWrapper} >
              <Work
                tag={node.frontmatter.tag}
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
            tag
            title
            worktype
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



