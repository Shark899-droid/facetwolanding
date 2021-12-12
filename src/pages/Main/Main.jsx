import React from 'react';
import './Main.css';
import { BsDot } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { RiTwitterLine } from 'react-icons/ri';
import { FiFacebook, FiYoutube } from 'react-icons/fi';
import { SiPivotaltracker } from 'react-icons/si';
function Main() {
  return (
    <>
      <hr className='line1' />
      <div className='Ball1'></div>
      <div className='Ball2'></div>

      <hr className='line2' />
      <div className='Ball3'></div>
      <div className='Ball4'></div>
      <hr className='line3' />
      <div className='Ball5'></div>
      <div className='Ball6'></div>
      <hr className='line4' />
      <div className='Ball7'></div>
      <div className='Ball8'></div>
      <hr className='line5' />
      <div className='Ball9'></div>
      <div className='Ball10'></div>
      <div className='accordion'>
        <h1>Employee Time Tracking App</h1>
        <span>
          Hassle-free presence marking with real-time data availability to serve
          business interestes. Make customized policies for all
          <br /> departments and locations to run them on a single platform
        </span>
        {/* ABSOLUTE SOCIAL ICONS */}
        <div className='iconsMainContainer'>
          <div className='singleIcon'>
            <FiFacebook />
          </div>
          <div className='singleIcon'>
            <RiTwitterLine />
          </div>
          <div className='singleIcon'>
            <FaWhatsapp />
          </div>
          <div className='singleIcon'>
            <FiYoutube />
          </div>
          <div className='singleIcon'>
            <AiOutlineInstagram />
          </div>
          <div className='singleIcon'>
            <FaTiktok />
          </div>
        </div>
      </div>
      {/* MOBILE ICONS */}
      <div className='mobileGetting'>
        <img
          src='https://th.bing.com/th/id/R.b6354d5d38bb0b38bb70bea1efe71f7e?rik=RRXHXZS%2fCeejOA&pid=ImgRaw&r=0'
          id='appStore'
        />
        <img
          src='https://th.bing.com/th/id/R.b7269f5fc9792e2c9298cb3ba3882f41?rik=iTiOMWpjCsaBzg&pid=ImgRaw&r=0'
          id='googlePlay'
        />
      </div>

      {/* CENTER SECTION */}
      <div className='centerSection'>
        <section>
          <div className='sectionContainer'>
            <div className='sectionLeft'>
              <h1>
                Address the envolving time keeping needs with cloud automation
              </h1>
              <span>
                Hassle-free presence marking with real-time data availability to
                serve business interests. Make customized policies for all
                departments and locations to run them on a single platform
              </span>
              <h4>Greate takaways</h4>
              <div className='mainListContainer'>
                <div className='listContainer'>
                  <ul>
                    <li>Automated Time Capturing</li>
                    <li>Extensive Customization</li>
                  </ul>
                </div>
                <div className='listContainer'>
                  <ul>
                    <li>Single window processing</li>
                    <li>Robust Security</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='sectionRight'>
              <img src='https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80' />
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className='sectionContainer'>
            <div className='sectionLeft'>
              <img src='https://images.unsplash.com/photo-1561494653-744c43aed0c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80' />
            </div>
            <div className='sectionRight secondColumn'>
              <h1>
                Schedule multiple shifts at multiple locations with centralized
                processing
              </h1>
              <span>
                Get tailored shift managment experience with our system.
                Automation will ensure accurate time keeping and simplify
                running multiple shifts without dedicated manpower.
              </span>
              <h4>Greate takaways</h4>
              <div className='mainListContainer'>
                <div className='listContainer'>
                  <ul>
                    <li>No Time & Phase Restrictions</li>
                    <li>Agigle Customization</li>
                  </ul>
                </div>
                <div className='listContainer'>
                  <ul>
                    <li>Compliance-friendly</li>
                    <li>Segmented Information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* LAST SECTION */}

      <div className='lastSectionContainer'>
        <div className='innerLastSection'>
          <h1>Features</h1>
          <div className='lastSectionRow'>
            <div className='lastSectionItem'>
              <div className='styleIcon'>
                <SiPivotaltracker className='lastSectionIcon' />
              </div>
              <h3>Punch + Selfie + Location</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                fuga optio officiis voluptatibus repellendus accusantium natus,
                cumque in expedita ducimus? Incidunt et impedit neque iste
                aliquam?
              </span>
            </div>
            <div className='lastSectionItem'>
              <div className='styleIcon'>
                <SiPivotaltracker className='lastSectionIcon' />
              </div>
              <h3>Punch + Selfie + Location</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                fuga optio officiis voluptatibus repellendus accusantium natus,
                cumque in expedita ducimus? Incidunt et impedit neque iste
                aliquam?
              </span>
            </div>
            <div className='lastSectionItem'>
              <div className='styleIcon'>
                <SiPivotaltracker className='lastSectionIcon' />
              </div>
              <h3>Punch + Selfie + Location</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                fuga optio officiis voluptatibus repellendus accusantium natus,
                cumque in expedita ducimus? Incidunt et impedit neque iste
                aliquam?
              </span>
            </div>
          </div>
          <div className='lastSectionRow'>
            <div className='lastSectionItem'>
              <div className='styleIcon'>
                <SiPivotaltracker className='lastSectionIcon' />
              </div>
              <h3>Punch + Selfie + Location</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                fuga optio officiis voluptatibus repellendus accusantium natus,
                cumque in expedita ducimus? Incidunt et impedit neque iste
                aliquam?
              </span>
            </div>
            <div className='lastSectionItem'>
              <div className='styleIcon'>
                <SiPivotaltracker className='lastSectionIcon' />
              </div>
              <h3>Punch + Selfie + Location</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                fuga optio officiis voluptatibus repellendus accusantium natus,
                cumque in expedita ducimus? Incidunt et impedit neque iste
                aliquam?
              </span>
            </div>
            <div className='lastSectionItem'>
              <div className='styleIcon'>
                <SiPivotaltracker className='lastSectionIcon' />
              </div>
              <h3>Punch + Selfie + Location</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                fuga optio officiis voluptatibus repellendus accusantium natus,
                cumque in expedita ducimus? Incidunt et impedit neque iste
                aliquam?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
