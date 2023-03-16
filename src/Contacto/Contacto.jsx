import  Header   from  '../header/Header'
import  Slyder   from  '../slyder/Slyder'
import  Footer   from  '../Piepagina/Footer'
import './contacto.css'
const Contacto = () => {
  return (
    <div>
      <Header/>
      <Slyder/> 
      <div className="contact-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="contact-map-wrapper">
                  <div className="contact-map mb-40">
                     <div id="hastech2"></div>
                  </div>
                  <div className="contact-message">
                       <div className="contact-title">
                            <h4>Informaciòn Contacto</h4>
                        </div>
                  <form id="contact-form" className="contact-form" action="assets/mail.php" method="post">
                    <div className="row">
                          <div className="col-md-6">
                              <div className="contact-input-style mb-30">
                                  <label>Name*</label>
                                  <input name="name" required="" type="text" />
                                </div>
                              </div>
                            <div className="col-md-6">
                               <div className="contact-input-style mb-30">
                                    <label>Email*</label>
                                  <input name="email" required="" type="email" />
                                </div>
                            </div>
                              <div className="col-md-6">
                                    <div className="contact-input-style mb-30">
                                      <label>Telephone</label>
                                        <input name="telephone" required="" type="text" />
                                     </div>
                               </div>
                                       
                               <div className="col-md-6">
                                    <div className="contact-input-style mb-30">
                                      <label>subject</label>
                                      <input name="subject" required="" type="text" />
                                    </div>
                                </div>
                                        
                                  <div className="col-md-12">
                                      
                                      <div className="contact-textarea-style mb-30">
                                          <label>Comment*</label>
                                              <textarea className="form-control2" name="message" required=""></textarea>
                                      </div>

                                            <button className="submit contact-btn btn-hover" type="submit">
                                                Eniar Memsaje
                                            </button>
                                    </div>
                                  </div>

                                </form>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info-wrapper">
                            <div className="contact-title">
                                <h4>Location & Details</h4>
                            </div>
                            <div className="contact-info">
                                <div className="single-contact-info">
                                    <div className="contact-info-icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <p><span>Address:</span>  1234 - Bandit Tringi lAliquam <br/> Vitae. New York</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-info-icon">
                                        <i className="pe-7s-mail"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <p><span>Email: </span> Support@plazathemes.com</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-info-icon">
                                        <i className="pe-7s-call"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <p><span>Phone: </span>  (800) 0123 456 789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/> 
    </div>
  )
}

export default Contacto