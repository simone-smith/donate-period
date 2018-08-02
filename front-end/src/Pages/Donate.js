import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {faCcAmex, faCcPaypal, faCcAmazonPay , faApplePay} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Donate extends Component {
  render() {
    return (
      <div>
          <p className="p-4 text-monospace text-left text-secondary">
              <button className="btn btn-primary active" type="button">BACK</button>
          </p>
          <div className="pageContainer">
              <div className="d-flex justify-content-around">
                  <div className="p-2 item-hl"><FontAwesomeIcon className={"ml-4 text-secondary"} size='6x' icon={faApplePay}/></div>
                  <div className="p-2 item-hl"><FontAwesomeIcon className={"ml-4 text-secondary"} size='6x' icon={faCcPaypal}/></div>
                  <div className="p-2 item-hl"><FontAwesomeIcon className={"ml-4 text-secondary"} size='6x' icon={faCcAmazonPay}/></div>
              </div>
              <div className="d-flex">
                  <div className="mr-auto p-2">
                      <img src={'./static/img/page/spacer.gif'} height={1} width={375}/>
                      <div className="text-left text-secondary">
                          <h4 className={"mb-4"}>Billing Info</h4>
                          <div className="form-group">
                              <input className="form-control form-control-m" type="text" id="fullname" placeholder="Full Name"/>
                          </div>
                          <div className="form-group">
                              <input className="form-control form-control-m" type="text" id="address" placeholder="Address"/>
                          </div>
                          <div className="form-inline">
                              <input className="form-control form-control-m mr-4" type="text" id="city" placeholder="City"/>
                              <input className="form-control form-control-m" type="text" id="postcode" placeholder="Post Code"/>
                          </div>
                          <br></br>
                          <div className="form-inline">
                          <select className="form-control form-control-m" id="country">
                              <option value="AT">Austria</option>
                              <option value="BE">Belgium</option>
                              <option value="BG">Bulgaria</option>
                              <option value="HR">Croatia</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="EE">Estonia</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                              <option value="GR">Greece</option>
                              <option value="HU">Hungary</option>
                              <option value="IE">Ireland</option>
                              <option value="IT">Italy</option>
                              <option value="LV">Latvia</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MT">Malta</option>
                              <option value="NL">Netherlands</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="RO">Romania</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="ES">Spain</option>
                              <option value="SE">Sweden</option>
                              <option value="GB">United Kingdom</option>
                            </select>
                          </div>
                      </div>
                  </div>
                  <div className="p-2 text-secondary">
                      <img src={'./static/img/page/spacer.gif'} height={1} width={375}/>
                      <div className="text-left">
                          <h4 className={"mb-4"}>Credit Card Info</h4>
                          <div className="form-group">
                              <input className="form-control form-control-m" type="text" id="fullname" placeholder="Card Number"/>
                          </div>
                          <div className="form-group">
                              <input className="form-control form-control-m" type="text" id="address" placeholder="Cardholder Name"/>
                          </div>
                          <div className="form-inline">
                              <input className="form-control form-control-m mr-4" type="text" id="city" placeholder="MM / YY"/>
                              <input className="form-control form-control-m" type="text" id="postcode" placeholder="CVV"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <p className="p-4 text-monospace text-right text-secondary">
          <Link to={'/CharitiesBuilder'}>
                <button className="btn btn-primary active" type="button">CANCEL</button>
          </Link>
              {" "}
          <Link to={'/ThankYou'}>
                <button className="btn btn-primary active" type="button">DONATE NOW</button>
          </Link>
          </p>
      </div>
    );
  }
}

export default Donate;
