import React, {useState, useEffect} from 'react'
import FormContainer from '../../components/FormContainer'
import {Link, useHistory} from 'react-router-dom'
import {Form ,Button, Row, Col} from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions'

export default function Signup() {
    const history = useHistory()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [applyAs, setApplyAs] = useState('')
    const [location, setLocation] = useState('Akaki Kality')
    const [agreement, setAgreement] = useState('')
    const [message, setMessage] = useState('')
    
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            if (applyAs==='freelancer'){
                history.push('/create-profile')
            } else {
                history.push('/multi-step')
            }
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !==  confirmPassword){
            setMessage('Passwords do not match')
        }else{
            setMessage('')
            dispatch(register(firstName, lastName, email, password, applyAs, location))
        }
    }

  return (
    <FormContainer>
     <h1>Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
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
            
            <Form.Group controlId='appliedAs'>
                <Form.Label>Apply as</Form.Label>
                <Form.Check id='freelancer' name="applyAs" onChange={(e) => setApplyAs('freelancer')} label="Freelancer" type="radio"/>
                <Form.Check id='hirer' name="applyAs" onChange={(e) => setApplyAs('hirer')} label="Hirer" type="radio"/>
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

            <Form.Group className="mt-3" controlId="agreement">
                <Form.Check required type="checkbox" onChange={(e) => setAgreement(e.target.value)} label="Yes, I understand and agree to the Ethio-Freelance Terms of Service, including the User Agreement and Privacy Policy." />
            </Form.Group>

            <Button type='submit' variant='primary' className = 'my-3'> 
                Sign Up
            </Button>
        </Form>

        <Row className = 'py-3'>
            <Col>
                Already have an account ? <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
            </Col>    
        </Row>
    </FormContainer>
  )
}
