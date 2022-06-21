import React,{useState} from 'react'
import FormContainer from '../../components/FormContainer'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {Form ,Button, Row, Col} from 'react-bootstrap'
import axios from 'axios'

export default function UpdateProfile() {
  
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const history = useHistory()

    const dispatch = useDispatch()
   
    
    const [firstName, setFirstName] = useState(userInfo.first_name)
    const [lastName, setLastName] = useState(userInfo.Last_name)
    const [email, setEmail] = useState(userInfo.email)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('Akaki Kality')

    // console.log(userInfo)
    
    const submitHandler = async(e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
          }
        const { data } = await axios.put(
            `http://localhost:8001/api/users/update/${userInfo.id}/`,
            { 'firstName': firstName, 'lastName': lastName, 'email': email, 'password': password, "location": location },
            config
        )

        history.push('/')
        // console.log(firstName, lastName, email, password, location)
    }
  return (
    <FormContainer>
    <Form onSubmit = {submitHandler} autoComplete="off">

            <Form.Group controlId='firstName'>
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId='lastName'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>


            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Re-Enter Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId='location'>
                <Form.Label>Enter Location</Form.Label>
                <Form.Select 
                    onChange={(e) => setLocation(e.target.value)} 
                >
                    <option value='Akaki Kality'>Akaki Kality</option>
                    <option value='Nifas Silk'>Nifas Silk</option>
                    <option value='Bole'>Bole</option>
                    <option value='Gulele'>Gulele</option>
                    <option value='Yeka'>Yeka</option>
                    <option value='Gerji'>Gerji</option>
                    <option value='Sululta'>Sululta</option>
                    <option value='Kirkos'>Kirkos</option>
                    <option value='Arada'>Arada</option>
                    <option value='Addis Ketema'>Addis Ketema</option>
                    <option value='Jemo'>Jemo</option>
                    <option value='Kolfe-Keranio'>Kolfe-Keranio</option>
                </Form.Select>
            </Form.Group>

            <Button type='submit' variant='primary' className = 'my-3'> 
                Update Profile
            </Button>
        </Form>
        </FormContainer>
  )
}
