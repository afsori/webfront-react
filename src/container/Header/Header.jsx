import React,{Fragment} from 'react';
import {
    Link
} from "react-router-dom";

import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <Fragment> 
                <div className="header-wrapper">
                    <div className="container-header">
                        <div className="header-logo">
                         <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
                            
                        </div>
                        <div className="header-menu">
                            <ul>
                               <li><Link to="#"> Home</Link></li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Pricing</li>
                                <Link to="#">
                                  <li>Blog</li>
                                </Link>
                                <li>Contact</li>
                                <li>
                                    <button>Masuk</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
             </Fragment>  

              
          
        )
    }
}

export default Header;