import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../../components/FormContainer'
import { listJobDetails } from '../../actions/jobActions'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Row, Col, ListGroup, Button} from 'react-bootstrap'
import styles from '../freelancer/CreateProfile.module.css'

export default function JobDetail() {
  const{id} = useParams()
  const history = useHistory()
  const jobDetails = useSelector(state => state.jobDetails)
  const {error, loading, job} = jobDetails
  
  const [hirerName, setHirerName] = useState('')
  const [hirerEmail, setHirerEmail] = useState('')


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listJobDetails(id))
    if(job){
      fetch(`http://127.0.0.1:8000/hirerUsers/${job.posterId}`)
      .then(res => res.json())
      .then(hirerData => {
        setHirerName(hirerData.name)
        setHirerEmail(hirerData.email)
      })
    }
  }, [dispatch, id, job]) 


  return (
     
    <div>
       
      <Link to='/' className="btn btn-light my-3">Go Back</Link>
      {job &&
      // loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message>: 
      
      <Row>
        <Col md={9}>
          <ListGroup>
            <ListGroup.Item>
                <h4>{job.headline}</h4>
                {job.category}, {job.subcategory}
            </ListGroup.Item>
            <ListGroup.Item>
                {job.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Skills and Expertise</h6>
              <ul className={styles.container}> {job.skills.map((skill) => (
                  <li key={skill}>
                    <p className='bg-light pr-10px'>{skill}</p>
                  </li>
              ))}</ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Scope</h6>
              {job.difficulty}  {job.duration} {job.experience}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Budget</h6>
              {job.budget},  {job.fromHourlyRate} to {job.toHourlyRate} birr/hour
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
                <Button>Submit a Proposal</Button>
                <Button className='mt-2'>Save job</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>About the client</h6>
              {/* {job.posterId} */}
              <div>
                Name- {hirerName}
              </div>
              <div>
                Email- {hirerEmail}
              </div>
              
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      } 
    </div>
  )
}
