import React,{useState, useEffect} from 'react'
import FormContainer from '../../components/FormContainer'
import {Link, useHistory} from 'react-router-dom'
import {Form ,Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { login } from '../../actions/userActions'


export default function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
        if(userInfo.is_admin){
            
            // history.replace('http://localhost:3000','http://localhost:8001/admin')
            // history.push('http://localhost:8001/admin')
            history.push('/')
        }
        else if(userInfo.applyAs==='hirer') {
            history.push('/dashboard')
        }
        else{
            history.push('/')
        }
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  console.log(userInfo)
  return (
    <FormContainer>
     <h1>Log In</h1>
     {error && <Message variant='danger'>{error}</Message>}
     {loading && <Loader />}
        <Form onSubmit = {submitHandler} autoComplete="off">
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button type='submit' variant='primary' className = 'my-3'> 
                Log In
            </Button>
        </Form>

        <Row className = 'py-3'>
            <Col>
                Do not have an account ? <Link to="/signup" style={{ textDecoration: 'none' }}>Register</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}
