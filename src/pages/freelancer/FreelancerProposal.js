import React,{useEffect, useState} from 'react'
import {Row, Col, ListGroup, Button} from 'react-bootstrap'
import {useParams, useHistory } from 'react-router-dom'
import Proposal from '../../components/Proposal'
import axios from 'axios'
import styles from './CreateProfile.module.css'

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
    <div>
        <h2>FreelancerProposal</h2>
        {proposal && 
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col md={9}>
                            <h4>{proposal.user.first_name}  {proposal.user.Last_name}</h4>
                            <h6>{proposal.user.location}</h6>
                        </Col>
                        <Col className='mt-1'>
                            <Button  variant='primary'> 
                            Hire Freelancer</Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item className="p-0">
                    <Row>
                      <Col>
                        <ListGroup.Item style={{borderTop: "none", borderLeft: "none"}}>
                          <h6>Applicant</h6>
                          <p>{proposal.user.about}</p>
                        </ListGroup.Item>
                        <ListGroup.Item style={{borderLeft: "none", borderBottom: "none"}}>
                          <h6>Skills</h6>
                          <ul className={styles.container2}> {proposal.user.skill.map((skill) => (
                          <li key={skill.id}>
                            <p className='bg-light p-1'>{skill.name}</p>
                          </li>
                        ))}</ul>
                        </ListGroup.Item>
                      </Col>
                      <Col>
                        col2
                      </Col>
                    </Row>

                </ListGroup.Item>
            </ListGroup>
        }
    </div>
  )
}

