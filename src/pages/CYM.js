import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./CYM.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ImageLoader from "../components/imageLoader"
import Header from "../components/header";



export default () => {
  return (
    <Layout>
        <Header
          name  = {"Cover Your Mouth"}
          date  = {"March 2020 (2 WEEKS)"}
          number  = {""}
          oneliner  = {""}
        />
    <div className={style.section}> Intro </div>
    <div className={style.intro}>
        Back in March 2019, amid the ever-growing debate 
        about the efficacy of facemasks during the Coronavirus 
        crisis, Asian countries were quick to adapt widespread use of 
        face coverings in public. Even before the crisis, wearing a mask 
        during the flu season was quite common in China, Japan, and South 
        Korea. Western countries, in contrast, have been slower to embrace 
        facemasks. A few months ago, there was a political stigma to the 
        practice, with some people facing criticism and mockery for being 
        alarmist.  However, as the pandemic has killed nearly one million and 
        sickened nearly 30 million around the world, attitudes have changed. 
        Now, wearing a mask is a symbol of solidarity and considered a public 
        good. Interestingly, the wearing of face masks was mandatory during the 
        1918 pandemic. Thus, almost every image under the Google search 
        “1918 flu U.S.” captures adults, children, and even cats wearing facemasks. 
        <br></br><br></br>
        I collected around 700 images of people wearing masks from both the 
        1918 flu and COVID-19 and trained it through a machine learning model. 
        <b>  My goal was to capture the essence of the mask, creating a universal 
        symbol of humanity's long struggle against pathogens. </b>
    </div>
    <div className={style.section}> Data Collection </div>
    <p className={style.paragraph}> 
        A total of 700 images were collected through Google search and Instagram 
        scraping. To ensure the efficacy of the styleGAN model, I sorted images that 
        were in direct facial view, and edited them to black and white. 
    </p>
    <div className={style.subtitle}> 1918 Flu Data Set </div>
    <ImageLoader filename="runwayML/1918Grid.png" className={style.Himage}/>
    <div className={style.subtitle}> 2019 COVID Data Set </div>
    <ImageLoader filename="runwayML/2019Grid.png" className={style.Himage}/>
    <div className={style.section}> Results </div>
    <p className={style.paragraph}> 
        The model produced about a few hundred results. 
        I hope the ghost-like nature of these images  
        capture the eeriness of this current pandemic. 
    </p>
    <ImageLoader filename="runwayML/grid.png" className={style.introImage}/>
    </Layout>
  )
}
