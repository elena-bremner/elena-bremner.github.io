import React from 'react'
import Layout from "../components/layout"
import Styles from "./contact.module.css"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
/* eslint-disable */
export default () => (
  <Layout>
  
  <div className={Styles.contact}>


    <a className={Styles.contactlink} > <h3>ebremner@risd.edu</h3> </a> 
    <a className={Styles.contactlink} href="https://www.linkedin.com/in/elena-bremner-76ab8514b/" target="_blank">  <h3>linkedin</h3> </a>
    <a className={Styles.contactlink} href="https://github.com/elena-bremner" target="_blank">  <h3>github</h3> </a>
    <a className={Styles.contactlink} href="https://www.are.na/elena-bremner" target="_blank">  <h3>are.na</h3> </a>
   	<a className={Styles.contactlink} href="https://www.behance.net/elenabremner" target="_blank"> <h3>behance</h3> </a>
    <a className={Styles.contactlink2} href="https://www.instagram.com/dopey.grumpy/" target="_blank">  <h3>Side hustle</h3>
   </a>
  </div>

  </Layout>
)

