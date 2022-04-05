import React from 'react'
import {Form, Button} from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'

export default function Headline({headline, setHeadline, navigation}) {
    // {formData, setForm, navigation}
    // const {headline} = formData
    // const {next} = navigation
    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     console.log('inside submit handler: ', headline)
    //     navigation.next()
    // }
    const handleNext = () => {
        console.log('inside handle next: ', headline)
        navigation.next()
    }
  return (
    <FormContainer>
        {/* <Form onSubmit = {submitHandler} autoComplete='off'> */}
            <Form.Group className="mb-3" controlId="headline">
                <Form.Label>Headline</Form.Label>
                <Form.Control 
                type="text" 
                name='headline'
                placeholder="Enter headline" 
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                />
            </Form.Group>

            <Button 
                variant="primary" 
                onClick={handleNext}
                className={headline ? '': 'disabled'}
                >
                Next: Skills
            </Button> 
        {/* </Form> */}
    </FormContainer>
  )
}
