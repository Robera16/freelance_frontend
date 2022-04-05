import React, {useState, useRef} from 'react'
import FormContainer from '../../components/FormContainer'
import {Form, Button, Row, Col} from 'react-bootstrap'

import styles from './CreateProfile.module.css'
 
export default function CreateProfile() {

    let[newSkill, setNewSkill] = useState('')
    const[skills, setSkills] = useState([])
    const[category, setCategory] = useState('Manual')
    const[subCategory, setSubCategory] = useState('Painter')
    let[bio, setBio] = useState('')
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
      setSkills((prevSkills) => {
        return prevSkills.filter(ski => ski !== skill)
      // console.log(skill, skills)
    })}
   
    const handleChange = (e) => {
      setCategory(e.target.value)
      e.target.value === 'Manual' ?  setSubCategory('Painter') : setSubCategory('Web Development')  
    }

    const submitHandler= (e) => {
      e.preventDefault()
      console.log(skills, bio, category, subCategory)
    }
    
  return (
    <FormContainer>

      <Form onSubmit = {submitHandler} autoComplete="off">

        <Form.Group controlId='username'>
          <Form.Label>Skill</Form.Label>
          <Row>
            <Col md={9}>
              <Form.Control
                  // required
                  onKeyPress={handleAddFromInput} 
                  type='text'
                  placeholder='Enter skills'
                  value={newSkill}
                  ref={skillInput}
                  onChange={(e) => setNewSkill(e.target.value)}
              />
            </Col>
            <Col md={3}>
              <Button className='btn btn-secondary' onClick={handleAdd}>Add  Skill</Button>
            </Col>
          </Row>
        </Form.Group>
        <p className='mt-3'>Added skills: </p> 
        
        <ul className={styles.container}> {skills.map((skill) => (
          <li key={skill}>
            <p className='bg-light'>{skill} <em className='btn' onClick={() => deleteSkill(skill)}>X</em></p>
          </li>
        ))}</ul>

        <Form.Group controlId="Bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            value={bio}  
            onChange={(e) => setBio(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId='category' className='mt-3'>
                <Form.Label>Service you offer</Form.Label>
                <Form.Select 
                    className="mb-3"
                    onChange={handleChange} 
                    placeholder="Select Category"
                >
                    <option value='Manual'>Manual</option>
                    <option value='Digital'>Digital</option>
                </Form.Select>

                <Form.Select 
                    onChange={(e) => setSubCategory(e.target.value)} 
                >
                   {category === 'Manual' && 
                    <>
                      <option value='Painter'>Painter</option> 
                      <option value='Welder'>Welder</option> 
                      <option value='Technician'>Technician</option>
                      <option value='Construction worker'>Construction worker</option> 
                      <option value='Custodian'>Custodian</option> 
                    </>
                   }

                   {category === 'Digital' && 
                    <>
                      <option value='Web Development'>Web Development</option>
                      <option value='Desktop Applicatoin Development'>Desktop Applicatoin Development</option>
                      <option value='Game Design'>Game Design</option>
                      <option value='Product Management'>Product Management</option>
                      <option value='Ecommerce Development'>Ecommerce Development</option>
                    </>
                  }
                </Form.Select>
            </Form.Group>

            <Button type='submit' variant='secondary' className = 'my-3'> 
                Create Profile
            </Button>

      </Form>
    </FormContainer>
  )
}
