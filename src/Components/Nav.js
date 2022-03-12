import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul>
            <Link to="/">  <li>Home</li></Link>
                   <Link to="/services"> <li>services</li></Link>
                    <Link to="/practice"><li>practice</li></Link>
                    <Link to="/header"><li>header</li></Link>
               <Link to="/footer">  <li>footer</li></Link>
                    </ul>

            </div>
        )
    }
}


export default Nav