import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () =>{
    return(
        <div className="wrapper-footer">
            <div className="row-alamat">
                <div className="about-us">
                    <h3>About Us</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa sapiente, non at corporis voluptatem sequi, illo autem cum dolor dolores similique reiciendis, dolorem molestias commodi nam praesentium sed vero quaerat.</p>
                </div>
                <div className="alamat-kantor">
                    <h3>Contact Us</h3>
                    <p>Mail: info@lorem.com Alamat: Jl. Boulevard Barat Raya No.27, RW. 9,Kelapa Gading Barat - Jakarta Utara14240</p>
                </div>
            </div>
            <div className="row-copyright">
                <div className="syarat-dann-ketentuan">
                   <Link> <p>Syarat & Ketentuan</p></Link>
                   <Link><p>Kebijakan Privasi</p></Link>
                   <Link> <p>Panduan Pembayaran</p></Link>
                </div>
                <div className="copyright">
                    <p>PT Jaya Abadi, 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;