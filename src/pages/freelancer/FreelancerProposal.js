import React,{useEffect, useState} from 'react'
import {Row, Col, ListGroup, Button} from 'react-bootstrap'
import {useParams, useHistory } from 'react-router-dom'
import Proposal from '../../components/Proposal'
import axios from 'axios'
import styles from './CreateProfile.module.css'
import moment from 'moment'

export default function FreelancerProposal() {
  const{id} = useParams()
  const [proposal, setProposal] = useState()
  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(`http://localhost:8001/api/proposals/get-freelancer-proposal/${id}/`)
      setProposal(data)
    }
    fetchData()
  }, [id]) 
  console.log(proposal)
  return (
    <div style={{marginTop: "50px"}}>
      
        {proposal && 
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col md={9}>
                            <h4>{proposal.user.first_name}  {proposal.user.Last_name}</h4>
                            <h6>{proposal.user.location}</h6>
                        </Col>
                        <Col className='mt-1' style={{marginLeft: "40px"}}>
                            <Button  variant='primary'> 
                            Hire Freelancer</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item className="p-0">
                    <Row>
                      <Col md={4}>
                        <ListGroup.Item style={{borderTop: "none", borderLeft: "none"}}>
                          <h6>Applicant</h6>
                          <p>{proposal.user.about}</p>
                        </ListGroup.Item>
                        <ListGroup.Item style={{borderLeft: "none", borderBottom: "none"}}>
                          <h6>Skills</h6>
                          <ul 
                            className={styles.container2} 
                            style={{marginLeft: "-7px"}}
                          > {proposal.user.skill.map((skill) => (
                          <li key={skill.id}>
                            <p className='bg-light'>{skill.name}</p>
                          </li>
                        ))}</ul>

                        {proposal.paymentBy=="byMilestone" && 
                        <h1 style={{marginTop: '370px'}}> </h1>}

                        </ListGroup.Item>
                      </Col>
                      <Col md={8} className='mt-2'>
                        <Row>
                          <Col>
                            <h4>Proposal Details</h4>
                          </Col>
                          <Col style={{marginLeft: "300px"}}>
                            <h5>{proposal.paymentBy=="byProject"? proposal.bid:proposal.totalPrice} birr</h5>
                          </Col>
                        </Row>
                        <h6 style={{marginTop: "20px"}}>Cover letter</h6>
                        <p>{proposal.coverLetter}</p>

                        <h6 style={{marginTop: "20px"}}>Duration</h6>
                        <p>{proposal.duration}</p>

                        {proposal.paymentBy=="byMilestone" && 
                          <Row>
                            <h6 style={{marginTop: "20px"}}>Milestones</h6>
                            <ul
                              className={styles.container3}
                              style={{marginTop: "10px"}}
                            > 
                              {proposal.milestone.map((mile) => (
                          <li key={mile.id}>
                            <div className='bg-light'
                              style={{
                                width: "700px", 
                                borderRadius: "10px",
                                marginTop: "9px"
                              }}
                            >
                            <div style={{
                              marginLeft: '10px',
                              padding: "3px"}}>
                              <p>{mile.description}</p>
                              <p>{moment(mile.dueDate).fromNow()}</p>
                              <p >{mile.amount} birr</p>
                            </div>
                            </div>
                          </li>
                        ))}</ul>
                          </Row>
                        }
                      </Col>
                    </Row>

                </ListGroup.Item>
            </ListGroup>
        }
    </div>
  )
}