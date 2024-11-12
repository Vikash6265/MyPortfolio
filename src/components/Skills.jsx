import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="skills-section">
      <h1>My <span>Skills</span></h1>
        <div className="skill">
            <li><h3>HTML</h3>
                <span className='bar'><span className='html'></span><p>90%</p></span>
            </li>
            <li><h3>CSS</h3>
                <span className='bar'><span className='css'></span><p>78%</p></span>
            </li>
            <li><h3>Javascript</h3>
                <span className='bar'><span className='javascript'></span><p>70%</p></span>
            </li>
            <li><h3>React Js</h3>
                <span className='bar'><span className='react'></span><p>75%</p></span>
            </li>
            <li><h3>Bootstrap</h3>
                <span className='bar'><span className='bootstrap'></span><p>75%</p></span>
            </li>
            <li><h3>Material UI</h3>
                <span className='bar'><span className='material'></span><p>55%</p></span>
            </li>
        </div>
      </div>
    </>
  )
}

export default Skills
