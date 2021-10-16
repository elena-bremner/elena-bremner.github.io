import React from "react";
import style from "./sidebar.module.css";
import { Link } from "gatsby"
import resume from './resume.pdf'
import ImageLoader from "../components/imageLoader"



const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  
}
const linkActiveStyle = {
  color: "white", 
  borderBottom: '3px solid white',  
}



const Sidebar = props =>
  <div className = {style.gridWrapper}>
        <div className = {style.grid}>
              <Link to="/UX/" style={linkStyle} className={style.optionalWork}  >
                 <span > UX/UI </span>
              </Link>
              <Link to="/physical/"  style={linkStyle}  className={style.optionalWork}  >
                <span>PRODUCTS</span>
              </Link>

              <Link to="/sketch/" style={linkStyle} className={style.optionalWork}   >
                <span> PLAY </span>
              </Link>
              <div className = {style.work}>
                <Link to="/" style={linkStyle} activeStyle={linkActiveStyle}  >
                  <span > WORK </span>
                </Link>
              </div>
        </div>
        <div className = {style.grid}>
          <div className = {style.work}>
            <Link to="/about/" style={linkStyle} activeStyle={linkActiveStyle} >
              <span > ABOUT </span>
            </Link>
          </div>
          <div className = {style.work} >
              <a href={resume} style={linkStyle} activeStyle={linkActiveStyle}><span> RESUME </span></a>
          </div>
        </div>
  </div>



export default Sidebar


    /*
    <h className={style.ElenaBremner}>
        Elena Bremner 
    </h>
*/