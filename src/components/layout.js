import React from 'react'
import { Link } from "gatsby"
import resume from './websiteResume.pdf'
import style from './layout.module.css'

/* sidebar 
* includes linke to each page + resume
*/
const linkStyle = {
  color: '#CACCCE',
  textDecoration: 'none',
}
const linkActiveStyle = {
  color: "#5AC3FF", 
}

export default ({ children }) => {
    return (

      <div className={style.container} >      
    
        <div className={style.sidebar}>
      
          <div className={style.ElenaBremner}>
           Elena Bremner 
           <Link to="/"style={linkStyle} activeStyle={linkActiveStyle}> :)</Link>
          </div>
        	<Link to="/" style={linkStyle} activeStyle={linkActiveStyle}>
            Work
          </Link>

       	  <br/>

          <Link to="/about/" style={linkStyle} activeStyle={linkActiveStyle}>
          About me
          </Link>

          <br/>

          <Link to="/contact/" style={linkStyle} activeStyle={linkActiveStyle}>
          Contact
          </Link>

          <br/> 

          <a href={resume} style={linkStyle}>Resume</a>
        </div>

        <div className={style.maincontent}>
          { children }
        </div>

      </div>
    ) 
}

