import React from 'react';
import "./MyComponent.css";
import img1 from "../image/5.png"
import img2 from "../image/7.png"
import img3 from "../image/15.png"
import img4 from "../image/16.png"
import { GrAd } from "react-icons/gr";
import Section2 from './section2/Section2';
import Monitor from './monitor/Monitor';
import Monitor2 from './monitor2/Monitor2';
import Aipos2 from './Aipos2/Aipos2';
import Automate from '../components4/Automate';
import { FaBridgeCircleCheck } from "react-icons/fa6";
import { PiAirplane } from "react-icons/pi";
import { PiPlanetLight } from "react-icons/pi";
import { CiFloppyDisk } from "react-icons/ci";


const MyComponent = () => {
  
  

    return (
    <div>
       
        <Aipos2/>
        
        <section className="ScienceLogic-SL1_grad1" >
            <div className="ScienceLogic-SL1_sec1 up">
                <h1>ScienceLogic SL1 Platform</h1>
                <p>SL1 offers a reliable, scalable, and secure foundation that lets you seamlessly
                    expand your IT operational capabilities as you grow and transform your business.</p>
            </div>
          
            <div className="ScienceLogic-SL1_sec2">

              <div className="ScienceLogic-SL1_sec2-con1 down1">
          
            <GrAd className="sciencelogic-img" />

            <h6>Hyperscale</h6>
            <p>Scale easily to match your growing business needs with the modern SL1 microservices-based,<a className='anchor'>containerized architecture.</a> </p>
              </div>

              <div className="ScienceLogic-SL1_sec2-con1 down2">
              <PiPlanetLight className="sciencelogic-img" />
            <h6>Multi-Tenant</h6>
            <p>Readily support a “shared services” model. SL1 natively supports multiple separate client organizations in a single platform. Data is fully partitioned and secure. Apply configurations to all, or a single user or organization, for consistency and efficiencies of scale.</p>
              </div>

              <div className="ScienceLogic-SL1_sec2-con1 down3">
           
            <PiAirplane className="sciencelogic-img" />
            <h6>Secure</h6>
            <p>ScienceLogic maintains a<a className='anchor'>security posture</a>  that is regularly validated against industry-standard security technologies and procedures to protect customer data. SL1 is listed on the US DoD Information Network (DoDIN) Approved Products List (APL) for conforming to their security and inter-operability standards for monitoring platforms.</p>
              </div>

              <div className="ScienceLogic-SL1_sec2-con1 down4">
          
            <CiFloppyDisk className="sciencelogic-img" />
            <h6>Deployment Models</h6>
            <p>Deploy SL1 in customer premises, in customer-managed public clouds, or the ScienceLogic-managed SaaS.</p>
              </div>
            </div>
        </section>
        <Section2/>
        <Monitor/>
        <Monitor2/>
       <Automate/>
        </div>
        )
}

export default MyComponent