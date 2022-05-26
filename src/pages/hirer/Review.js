import React from 'react'
import {Form, Button, ListGroup, Row, Col} from 'react-bootstrap'
import styles from '../freelancer/CreateProfile.module.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

export default function Review({
    headline, setHeadline,
    description, setDescription,
    skills, setSkills, 
    difficulty, setDifficulty, 
    duration, setDuration, 
    experience, setExperience,
    budget, setBudget,
    fromHourlyRate, setFromHourlyRate,
    toHourlyRate, setToHourlyRate, 
    navigation
}) {

  const history = useHistory()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const submitHandler = async(e) => {
    e.preventDefault()

    const config = {
      headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
      }
    }
     await axios.post(
      'http://localhost:8001/api/jobs/create-job/',
      {"category": "Digital", "subCategory": "web developer",
        "headline": headline,
        "description": description,
        "difficulty": difficulty,
        "duration": duration,
        "experience": experience,
        "budget": budget,
        "fromHourlyRate": fromHourlyRate,
        "toHourlyRate": toHourlyRate,
        "requiredSkill": skills
    },
      config
      )

    // console.log( headline, description, skills, 
    //   difficulty, 
    //   duration, 
    //   experience, 
    //   budget, 
    //   fromHourlyRate, 
    //   toHourlyRate)

      history.push('/')

  }

  const { go, previous} = navigation

  return (
      
      <Form onSubmit = {submitHandler} autoComplete='off'> 
        <ListGroup className="mt-5">

          <ListGroup.Item>
            <h2>Now just review and finish your job post.</h2>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col md={9}>
                <Form.Label><h6>Headline</h6></Form.Label>
                <Form.Control 
                  type="text" 
                  
                  name='headline'
                  placeholder="Enter headline" 
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                />
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col md={9}>
                <Form.Label><h6>Describe your job</h6></Form.Label>
                <Form.Control 
                  as="textarea" 

                  rows={5} 
                  value={description}  
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item >
            <h6>Required Skills</h6>
            <div className='d-flex flex-row'>
              <ul className={styles.container}> {skills.map((skill) => (
                <li key={skill}>
                  <p className='bg-light'>{skill}</p>
                </li>
              ))}</ul>
              
              <svg className='mt-1 mx-3' onClick={() => go("skill")} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <h6>Scope</h6>
            <div className='d-flex flex-row'>
              {difficulty}, {duration}, {experience}

              <svg className='mt-1 mx-3' onClick={() => go("scope")} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </div>
          </ListGroup.Item>
          
          <ListGroup.Item >
            <h6>Budget</h6>
            <div className='d-flex flex-row'>
              {fromHourlyRate}.00 birr - {toHourlyRate}.00birr /hr

              <svg className='mt-1 mx-3' onClick={() => go("budget")} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </div>
            
          </ListGroup.Item>
          <ListGroup.Item>
              <div className="d-flex justify-content-between">
                  <Button variant='primary' type='button' onClick={previous}>
                    Back
                  </Button>
                  <Button 
                    variant="primary"  
                    type='submit'
                    // onClick={submitHandler}
                  >
                    Post Your Job Now
                  </Button>
              </div>
          </ListGroup.Item>

        </ListGroup>
      </Form>
  )
}
