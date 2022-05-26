import React from 'react'
import {Card, Button, ListGroup, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styles from '../pages/freelancer/CreateProfile.module.css'

export default function Job({job}) {
  console.log(job)
  return (
    
    <Card style={{fontSize:'15.3px', marginTop:'10px', borderColor: 'white'}}>
      <Card.Body>
        <Card.Title>
        <Link to={`/jobd/${job.id}`} >
          {job.headline}
          </Link>
          </Card.Title>
        <Card.Text>
          {job.difficulty} Budget: {job.budget} Posted {job.posted}
        </Card.Text>
        <Card.Text>
          {job.description}
        </Card.Text>
       
          <ul className={styles.container2}> {job.requiredSkill.map((skill) => (
                <li key={skill}>
                  <p className='bg-light'>{skill}</p>
                </li>
          ))}</ul>
        
      </Card.Body>
    </Card>
  )
}


