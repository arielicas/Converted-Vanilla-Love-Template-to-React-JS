import React from 'react'

function Pricing() {
    return <div>
    {/* Pricing section Start */} 
<section id="pricing" className="section-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="table wow fadeInLeft" data-wow-delay="1.2s">
          <div className="title">
            <h3>Basic</h3>
          </div>
          <div className="pricing-header">
            <p className="price-value">$12.90<span>/ Month</span></p>
          </div>
          <ul className="description">
            <li>Up to 5 projects </li>
            <li>Up to 10 collabrators</li>
            <li>2gb of storage</li>
          </ul>
          <button className="btn btn-common">Get It</button>
        </div> 
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 active">
        <div className="table wow fadeInUp" id="active-tb" data-wow-delay="1.2s">
          <div className="title">
            <h3>Profesional</h3>
          </div>
          <div className="pricing-header">
            <p className="price-value">$49.90<span>/ Month</span></p>
          </div>
          <ul className="description">   
            <li>Up to 10 projects</li>
            <li>Up to 20 collabrators</li>
            <li>10gb of storage</li>
            <li>Real-time collabration</li>
          </ul>
          <button className="btn btn-common">Get It</button>
        </div> 
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="table wow fadeInRight" data-wow-delay="1.2s">
          <div className="title">
            <h3>Expert</h3>
          </div>
          <div className="pricing-header">
            <p className="price-value">$89.90<span>/ Month</span></p>
          </div>
          <ul className="description">
            <li>unlimited projects </li>
            <li>Unlimited collabrators</li>
            <li>Unlimited of storage</li>
            <li>Real-time collabration</li>
            <li>24x7 Support</li>
          </ul>
          <button className="btn btn-common">Get It</button>
        </div> 
      </div>
    </div>
  </div>
</section>
{/* Pricing Table Section End */}


    </div>

}
export default Pricing