import React from "react";
import "./Projects.css";

import Image from '../../assests/images/Fast_text.png'
/*import Spin from "react-reveal/Spin";*/
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
           PROJECTS
        </h2>
        <hr />
        
        {/* card design */}
        <div className="row" id="ads">
          
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://avatars.githubusercontent.com/u/64949957?v=4"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Portfolio Website
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href=""
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">API</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">News website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="http://surl.li/inbfp"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src={Image}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Text Manipulation Site</h5>
                  </div>
                  <a className="ad-btn" href="https://texthelpp.netlify.app/" target="_blank">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 abc">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">IoT</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCeC72m_ApzYq90CeXqi5VVlZWf9uYPXSYQ&s"
                    alt="project4"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Arduino</span>
                  <span className="card-detail-badge">Sensors</span>
                  <span className="card-detail-badge">RFID Module</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase xyz">Intrusion Detection System</h5>
                  </div>
                  <a className="ad-btn" href="">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 abc">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">IoT</span>
                  <img
                    src="https://www.netafimindia.com/contentassets/56b4db493ff74411823ec87b3230174c/smart-drip-irrigation-using-iot.png"
                    alt="project5"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Arduino</span>
                  <span className="card-detail-badge">Sensors</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Drip Irrigation System</h5>
                  </div>
                  <a className="ad-btn" href="">
                    View
                  </a>
                </div>
              </div>
            </div>
            </div>
      </div>
    </>
  );
};

export default Projects;