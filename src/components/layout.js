import React from 'react'
import { Link } from "gatsby"
import resume from './websiteResume.pdf'
import style from './layout.module.css'

/* sidebar 
* includes linke to each page + resume
* wrapper contains grid
*/
const linkStyle = {
  color: '#CACCCE',
  textDecoration: 'none',
}
const linkActiveStyle = {
  color: "#70FFCE",  //5AC3FF
}

export default ({ children }) => {
    return (

      <div className={style.container} >      
        <div className={style.sidebar}>
      
          <div className={style.ElenaBremner}>
           Elena Bremner 
          </div>
          <div className = {style.work}>
          	<Link to="/" style={linkStyle} activeStyle={linkActiveStyle}>
              Work
            </Link>
          </div>
          <br/>
          <div className = {style.dropdown}>
            <Link to="/UX/" className = {style.UX} style={linkStyle} activeStyle={linkActiveStyle}>
              UX/UI
            </Link>
            <Link to="/CAD/" className = {style.CAD} style={linkStyle} activeStyle={linkActiveStyle}>
              Physical 
            </Link>
            <Link to="/sketch/" className = {style.CAD} style={linkStyle} activeStyle={linkActiveStyle}>
              Explorations
            </Link>
          </div>
          <Link to="/about/" style={linkStyle} activeStyle={linkActiveStyle}>
          About me
          </Link>

          <br/>

          <Link to="/contact/" style={linkStyle} activeStyle={linkActiveStyle}>
          Contact
          </Link>

          <br/> 

          <a href={resume} style={linkStyle}>Resume</a>
          <br/>
          <div className = {style.copyright}>
            <p> © BY ELENA BREMNER</p>
          </div>
        </div>
        <div className={style.maincontent}>
          { children }
        </div>
      </div>
    ) 
}

