import axios from 'axios'
import React, {useState, useRef} from 'react'
import FormContainer from '../../components/FormContainer'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import styles from './CreateProfile.module.css'
import {Link, useHistory} from 'react-router-dom'

export default function CreateProfile() {

    let[newSkill, setNewSkill] = useState('')
    const[skills, setSkills] = useState([])
    const[category, setCategory] = useState('Manual')
    const[subCategory, setSubCategory] = useState('Painter')
    let[bio, setBio] = useState('')
    const[photo, setPhoto] = useState('')
    const skillInput = useRef(null) 

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const history = useHistory()
    
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
    })}
   
    const handleChange = (e) => {
      setCategory(e.target.value)
      e.target.value === 'Manual' ?  setSubCategory('Painter') : setSubCategory('Web Development')  
    }

    const submitHandler = async(e) => {
      e.preventDefault()

      const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
     await axios.put(
        'http://localhost:8001/api/users/profile/update/',
        { 'skills': skills, 'about': bio,'offered_service': category, 'offered_service_type': subCategory },
        config
    )

     let form_data = new FormData();
     form_data.append('photo', photo)
     form_data.append('idd', userInfo.id)
    const config2 = {
      headers: {
          'Content-type': "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`
      }
  }
    await axios.post(
      'http://localhost:8001/api/users/profile/photo-update/',
      form_data,
      config2
  )
    console.log(photo)
    history.push('/')
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

        <Form.Group controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            value={bio}  
            onChange={(e) => setBio(e.target.value)}/>
        </Form.Group>

        
        <Form.Group controlId="photo" className='mt-3'>
          <Form.Label>Photo</Form.Label>
          <Form.Control 
            type="file"  
            onChange={(e) => setPhoto(e.target.files[0])}/>
        </Form.Group>

        {/* <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
          /> */}

        {/* <Form.Group>
        <Form.File
          label="select"
          custom
          // type="file"
          // className="custom-file-label"
          // id="inputGroupFile01"
          // onChange={(e) => setPhoto(e.target.files[0])}
          // custom
        />
      </Form.Group> */}

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
