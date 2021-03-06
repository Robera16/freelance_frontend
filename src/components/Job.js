import React from 'react'
import {Card, Button, ListGroup, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styles from '../pages/freelancer/CreateProfile.module.css'
import moment from 'moment'


 
export default function Job({job}) {
  
  return (
    
    <Card style={{fontSize:'15.3px', marginTop:'10px', borderColor: 'white'}}>
      <Card.Body>
        <Card.Title>
        <Link to={`/job/${job.id}`} 
          style={{
            color: '#5658', 
            textDecoration: "none", 
            fontSize: '25px'
          }}
        >
          {job.headline}
          </Link>
          </Card.Title>
        <Card.Text>
          {job.difficulty} - Budget: {job.budget} birr - Posted {moment(job.posted).fromNow()} 
        </Card.Text>
        <Card.Text>
          {job.description}
        </Card.Text>
       
          <ul className={styles.container2}> {job.requiredSkill.map((skill) => (
                <li key={skill.id}>
                  <p className='bg-light'>{skill.name}</p>
                </li>
          ))}</ul>
        
      </Card.Body>
    </Card>
  )
}


