import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";
import style from "./GCal.module.css"


export default () => {
  return (
    <Layout>
        <Header
          imageLoader = {<ImageLoader filename="godiva/image.png" />}
          name  = {"Rethinking Godiva"}
          date  = {"December 2018 (1 month)"}
          number  = {"Collaboration with Jiaju Ma and Anya Liu "}
          role  = {"Visual designer and package designer"}
          p1 = {"As part of a team project, we repackaged Godiva’s chocolate-covered strawberries. Thinking about efficient space usage, structure, and the unpackaging experience, we designed a hexagonal box that is more interactive and appropriate for the brand."}
        />
        <div className={style.margin}>
          <ImageLoader filename="godiva/scroll.png" className={style.Himage}/>
        </div>
    </Layout>
  )
}