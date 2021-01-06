import React from 'react'
import style from './header.module.css'
import ImageLoader from "../components/imageLoader"
import Img from "gatsby-image"

const Header = props =>
<div> 
    <div> {props.imageLoader}</div>
    <div className={style.title}> {props.name} </div>
    <div className={style.oneliner}> {props.oneliner}</div>

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
        <td>{props.role}</td>
      </tr>
    </table>

    <div className={style.paragraph}> 
        <span> {props.p1} </span> 
        <br></br>
        <br></br>
        <span> {props.p2} </span> 
        <br></br>
        <br></br>
        <span> {props.p3} </span> 
    </div>



</div>

 

export default Header
