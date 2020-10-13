import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./GCal.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";



export default () => {
  return (
    <Layout>
        <Header
          name  = {"Google Management"}
          date  = {"September 2020 (1 WEEK)"}
          number  = {"Personal Project"}
          oneliner  = {"Coming soon..."}
        />
    </Layout>
  )
}