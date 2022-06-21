import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listJobs} from '../../actions/hirerJobActions'
import Job from './Job'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import {Row, Col, Container} from 'react-bootstrap'

export default function Dashboard() {
  const dispatch = useDispatch()
  const jobList = useSelector(state => state.jobList)

  const {error, loading, jobs} = jobList

  useEffect(() => {
    dispatch(listJobs())
  }, [dispatch]) 
  
  return ( 
    <div>
      <h2>Home for Hirer</h2>
      <h3>Posted Jobs list</h3>
      <Row>
        <Col md={8}>
          {loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message>:
            
            jobs?.map(job => (
                <Job key={job.id} job={job} />
            ))
          }
        </Col>

        <Col>
            hirer
        </Col>
      </Row> 
    </div>
  )
}
