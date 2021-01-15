import React from 'react'
import style from './header.module.css'
import ImageLoader from "../components/imageLoader"
import Img from "gatsby-image"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const Header = props =>

<div> 

    <div className={style.introImage} data-aos="fade-up" data-aos-duration="1000"> {props.imageLoader}  </div>
    <div  className={style.title} data-aos="fade-up"> {props.name} </div>
    <div  className={style.oneliner} data-aos="fade-up"> {props.oneliner}</div>
    <div  className={style.grid} data-aos="fade-up">

        <div className={style.paragraph}> 
            <span> {props.p1} </span> 
            <br></br>
            <br></br>
            <span> {props.p2} </span> 
            <br></br>
            <br></br>
            <span> {props.p3} </span> 
        </div>
        <table className={style.table} >
          <tr>
            <th>Duration</th>
            <td>{props.date}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{props.number}</td>
          </tr>
          <tr>
            <th>Role</th>
            <td className={style.role}>{props.role}</td>
          </tr>
        </table>
    </div>

</div>

 

export default Header
