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
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listJobDetails(id))
  }, [dispatch, id]) 

  const submitProposalHandler= () => {
    history.push(`/proposal/job/${job.jobDetail.data.id}`)
  }
  // useEffect(() => {
  //   return ()=> job=null
  // }, [])

  return (
     
    <div>
      
      <Link to='/' className="btn btn-light my-3">Go Back</Link>
      {job &&
      // loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message>: 
      
      <Row>
        <Col md={9}>
          <ListGroup>
            <ListGroup.Item>
                <h4>{job.jobDetail.data.headline}</h4>
                {job.jobDetail.data.category}, {job.jobDetail.data.subcategory}
            </ListGroup.Item>
            <ListGroup.Item>
                {job.jobDetail.data.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Skills and Expertise</h6>
              <ul className={styles.container2}> {job.jobDetail.data.skills.map((skill) => (
                  <li key={skill}>
                    <p className='bg-light'>{skill}</p>
                  </li>
              ))}</ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Scope</h6>
              {job.jobDetail.data.difficulty}  {job.jobDetail.data.duration} {job.jobDetail.data.experience}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Budget</h6>
              {job.jobDetail.data.budget},  {job.jobDetail.data.fromHourlyRate} to {job.jobDetail.data.toHourlyRate} birr/hour
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
                <Button onClick={submitProposalHandler}>Submit a Proposal</Button>
                <Button className='mt-2'>Save job</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>About the client</h6>
              {/* {job.jobDetail.data.posterId} */}
              <div>
                Name- {job.hirerDetail.data.name}
              </div>
              <div>
                Email- {job.hirerDetail.data.email}
              </div>
              <div>
                Location- {job.hirerDetail.data.location}
              </div>
              
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      } 
    </div>
  )
}