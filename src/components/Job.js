import React from 'react'
import {Card, Button, ListGroup, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styles from '../pages/freelancer/CreateProfile.module.css'

export default function Job({job}) {
  return (
    // <ListGroup className="">
    //       <ListGroup.Item>
    //       <Link to={`/jobd/${job.id}`} >
    //         <p>{job.id}</p>
    //         <h4>{job.headline}</h4>
    //         </Link>
    //         <p>{job.description}</p>
    //         <p>{job.skills}</p>
    //       </ListGroup.Item>  
    // </ListGroup>

    <Card style={{fontSize:'15px'}}>
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
       
          <ul className={styles.container}> {job.skills.map((skill) => (
                <li key={skill}>
                  <p className='bg-light pr-10px'>{skill}</p>
                </li>
          ))}</ul>
        
      </Card.Body>
    </Card>
  )
}


