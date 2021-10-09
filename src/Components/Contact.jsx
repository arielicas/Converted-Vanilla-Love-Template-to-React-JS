import React from 'react'

function Contact() {
    return <div>
        <div>
  {/* Contact Section Start */}
  <section id="contact" className="section-padding">    
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Contact</h2>
          </div>
        </div>
      </div>
      <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">          
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="contact-block">
            <h2>Contact Form</h2>
            <form id="contactForm">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                    <div className="help-block with-errors" />
                  </div>                                 
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                    <div className="help-block with-errors" />
                  </div> 
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group"> 
                    <textarea className="form-control" id="message" placeholder="Your Message" rows={5} data-error="Write your message" required defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="submit-button">
                    <button className="btn btn-common" id="form-submit" type="submit">Send Message</button>
                    <div id="msgSubmit" className="h3 text-center hidden" /> 
                    <div className="clearfix" /> 
                  </div>
                </div>
              </div>            
            </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="contact-right-area wow fadeIn">
            <h2>Get In Touch</h2>
            <div className="contact-right">
              <div className="single-contact">
                <div className="contact-icon">
                  <i className="lni-map-marker" />
                </div>
                <p>Skopje, Macedonia</p>
              </div>
              <div className="single-contact">
                <div className="contact-icon">
                  <i className="lni-envelope" />
                </div>
                <p><a href="#">email@gmail.com</a></p>
                <p><a href="#">tomsaulnier@gmail.com</a></p>
              </div>
              <div className="single-contact">
                <div className="contact-icon">
                  <i className="lni-phone-handset" />
                </div>
                <p><a href="#">+42 374 5967</a></p>
                <p><a href="#">+99 123 5967</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </section>
  {/* Contact Section End */}
  {/* Map Section Start */}
  <div className="map">
    <div className="containre-fulid">
      <div id="conatiner-map" /> 
    </div>
  </div>
  {/* Map Section End */}
</div>

    </div>

}

export default Contact