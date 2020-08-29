import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./VirtualOffice.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";


export default () => {
  return (
    <Layout>
      <div>
        <Header
          name  = {"Virtual Office"}
          date  = {"July 2020 (4 weeks)"}
          number  = {"Team: 3"}
          oneliner  = {"Digital and Social activation that vizualizes company achievements, activity, and culture"}
        />
        <ImageLoader filename="VirtualOffice/dayMode.png"/>
      </div>
    </Layout>
  )
}