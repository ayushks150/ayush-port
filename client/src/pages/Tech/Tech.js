import React from 'react'
import './Tech.css'
import { TechList } from '../../Utils/TechList'
const Tech = () => {
  return (
    <>
        <div className="container tech" id ="techstack">
            <h2 className='col-12 mt-3 mb-1 text-center'>SKILLS</h2>
            <hr></hr>
            <p className='pb-3 text-center'>
              👉 incuding languages , frameworks, database, frontend and back end and api
            </p>
            <div className="row">
              {TechList.map((tech) => (
                <div key={tech._id} className="col-md-3">
                  <div className="card m-2">
                    <div className="card-content">
                        <div className="card-body">
                          <div className="nedia d-flex justify-content-center">
                            <div className="align-self-center">
                              <tech.icon className='tech-icon'/>
                            </div>
                            <div className="media-body">
                              <h5>{tech.name}</h5>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        </div>
        
    </>
  )
}

export default Tech
