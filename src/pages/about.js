import React from 'react'
import Layout from '../components/layout'
import Styles from './about.module.css'
// import Img from "gatsby-image"

const About = () => (
  	<Layout> 
		<div id="main-content2" >  
		    <h1 className={Styles.hello}>Hello! - <br></br> I'm Elena.</h1>
		    <h2 className={Styles.introduction}> 
            I am an Industrial designer originally from Tokyo, Japan.  
            <br></br><br></br>
            I remember approaching my first design project. I was thrilled - “So.. I can make this hand mixer look like whatever I want?!”. 
            What I loved even more was that I had a set of constraints that I had to design around. I still approach my projects with the same excitement, 
            ready to solve the next puzzle. 
            <br></br><br></br>
           My intrigue for UX/UI really began with my fascination with how you can create a whole experience through a 5in screen. 
           With great power comes great responsibility. A designer must think about each transition, flow, and visual aspects of an 
           interface that can have a great impact on a person’s daily life - which is why I find it to be such an exciting process.  
 
            <br></br><br></br>
            Despite the obvious differences, I view traditional product design and UX/UI to be quite collegial. Something I always ask myself is, 
            “what would UIUX look like if screens are no longer our main source of information?” At the core of design, 
            there will always be solving challenges and creating for the users’ needs - why I try not to limit myself to solely designing phone apps. 

            <br></br><br></br>
            I try to branch out to different kinds of design and am constantly curious about the possible tools that I can use in my work. 
            For the past two years, I’ve been taking computer science classes at Brown, which has helped me widen my design language. 
            Oddly enough, sometimes I feel the most inspired when I take myself out of the design bubble. 

                </h2>
            <h2 className={Styles.introduction}>  </h2>
		</div>
 	</Layout>
)

export default About



// export default () => {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       file(relativePath: { eq: "images/corgi.jpg" }) {
//         childImageSharp {
//           # Specify the image processing specifications right in the query.
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
// Return(
//     <Layout> 
//             <div id="main-content2" >  
            
//             <h1 className={Styles.hello}>Hello! - <br></br> I'm Elena.</h1>
//             <h2 className={Styles.introduction}> 
//             I am an Industrial designer originally from Tokyo, Japan. I’ve spent 2 years in Hong Kong, and 6 years in Connecticut.  
//             <br></br><br></br>
//             Past story:
//             <br></br><br></br>
//             My intrigue for UX/UI really began with my fascination with how you can create a whole experience through a 5in screen. 
//             With great power comes great responsibility. A designer must think about each transition, flow, and visual aspects of an 
//             interface that can have great effects on a person’s daily life - which is why I find it to be such an exciting process.  
//             <br></br><br></br>
//             Despite the obvious differences, I view physical product design and UX/UI to be quite collegial. Something I always ask myself is, 
//             “what would UIUX look like if screens are no longer our main source of information?” At the core of design, 
//             there will always be solving challenges and creating for the users’ needs - one of the reasons why I try not to 
//             limit myself to solely designing phone apps. 
//             <br></br><br></br>
//             I try to branch out to different kinds of design and am constantly curious about the possible tools that I can use in my work. 
//             For the past two years, I’ve been taking computer science classes at Brown, which has helped me widen my design language. 
//             Oddly enough, sometimes I feel most inspired when I take myself out of the design bubble. 

//                 </h2>
//             <h2 className={Styles.introduction}>  </h2>
//         </div>
//     </Layout>
//     )
// }