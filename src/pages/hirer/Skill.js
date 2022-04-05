import React, {useState, useRef} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import styles from '../freelancer/CreateProfile.module.css'

export default function Skill({skills, setSkills, navigation}) {
    const {previous, next} = navigation

    let[newSkill, setNewSkill] = useState('')
    const skillInput = useRef(null) 

    const handleAdd = (e) => { 
      e.preventDefault()
      newSkill = newSkill.charAt(0).toUpperCase() + newSkill.slice(1).toLowerCase();
      if(newSkill && !skills.includes(newSkill)){
        setSkills(prevSkills => [...prevSkills, newSkill])
      } 
      
      setNewSkill('')
      skillInput.current.focus()
    }
  
    const handleAddFromInput = (e) => {
      if(e.key === "Enter"){
        handleAdd(e)
      }
    }

    const deleteSkill = (skill) => {
      setSkills(prevSkills =>  prevSkills.filter(ski => ski !== skill)
    )}

  return (
    <FormContainer>
      <Form.Group controlId='skills'>
        <Form.Label>Required Skill</Form.Label>
        <Row>
          <Col>
            <Form.Control
                // required
                onKeyPress={handleAddFromInput} 
                type='text'
                name='skills'
                placeholder='Enter skills'
                value={newSkill}
                ref={skillInput}
                onChange={(e) => setNewSkill(e.target.value)}
            />
          </Col>
          {/* <Col md={3}>
            <Button className='btn btn-secondary' onClick={handleAdd}>Add  Skill</Button>
          </Col> */}
        </Row>
      </Form.Group>
      <p className='mt-3'>Added skills: </p> 
      
      <ul className={styles.container}> {skills.map((skill) => (
        <li key={skill}>
          <p className='bg-light'>{skill} <em className='btn' onClick={() => deleteSkill(skill)}>X</em></p>
        </li>
      ))}</ul> 

      <div className="d-flex justify-content-between">
        <Button variant="primary"  onClick={previous}>
            Back
        </Button>
        <Button 
          variant="primary"  
          onClick={next}
          className={skills.length > 0 ? '': 'disabled'}
          >
            Next: Scope
        </Button>
      </div>

  </FormContainer>
  )
}
