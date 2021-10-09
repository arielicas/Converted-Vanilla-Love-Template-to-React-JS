import React from 'react'
import { Helmet } from 'react-helmet'

   
    
function Footer() {
    
    return <div>
    <div>
  {/* Footer Section Start */}
  <footer id="footer" className="footer-area section-padding">
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="footer-logo mb-3">
              <img src="assets/img/logo.png" alt="logo" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam excepturi quasi, ipsam voluptatem.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
            <h3 className="footer-titel">Company</h3>
            <ul>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Strategy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
            <h3 className="footer-titel">About</h3>
            <ul>
              <li><a href="#">Career</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Clients</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
            <h3 className="footer-titel">Find us on</h3>
            <div className="social-icon">
              <a className="facebook" href="#"><i className="lni-facebook-filled" /></a>
              <a className="twitter" href="#"><i className="lni-twitter-filled" /></a>
              <a className="instagram" href="#"><i className="lni-instagram-filled" /></a>
              <a className="linkedin" href="#"><i className="lni-linkedin-filled" /></a>
            </div>
          </div>
        </div>
      </div>  
    </div>     
  </footer> 
  {/* Footer Section End */}
  <section id="copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>Copyright © 2018 UIdeck All Right Reserved</p>
        </div>
      </div>
    </div>
  </section>   
  {/* Go to Top Link */}
  <a href="#" className="back-to-top">
    <i className="lni-arrow-up" />
  </a>
  {/* Preloader */}

  {/* End Preloader */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
  
                 <Helmet>
                   
                  
                   
                 </Helmet>
</div>

    </div>

}

export default Footer