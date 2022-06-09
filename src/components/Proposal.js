import React from 'react'
import {Card, Button, ListGroup, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styles from '../pages/freelancer/CreateProfile.module.css'
import moment from 'moment'

export default function Proposal({proposal}) {
  
  return (
    <div>     
        <Card style={{fontSize:'15.3px', marginTop:'10px', borderColor: 'white'}}>
      <Card.Body>
        <Card.Title>
        <Link to={`/freelancer-proposal/${proposal.id}`} >
          {proposal.user.username}
          </Link>
          </Card.Title>
        <Card.Text>
          {proposal.user.offered_service}
          {proposal.user.offered_service_type}
        </Card.Text>
        <Card.Text>
            {proposal.user.about}
        </Card.Text>
       
          <ul className={styles.container2}> {proposal.user.skill.map((skill) => (
                <li key={skill.id}>
                  <p className='bg-light'>{skill.name}</p>
                </li>
          ))}</ul>
        
      </Card.Body>
    </Card>
    </div>
  )
}

