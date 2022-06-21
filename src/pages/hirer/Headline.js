import React from 'react'
import {Form, Button} from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'

export default function Headline({headline, setHeadline, description, setDescription, navigation}) {
    // {formData, setForm, navigation}
    // const {headline} = formData
    // const {next} = navigation
    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     console.log('inside submit handler: ', headline)
    //     navigation.next()
    // }
    const handleNext = () => {
        // console.log('inside handle next: ', headline)
        navigation.next()
    }
  return (
    
    <FormContainer >
        <h1 style={{marginTop: '40px'}}></h1>
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
            
            <Form.Group controlId="description">
                <Form.Label>Describe your job</Form.Label>
                <Form.Control 
                    as="textarea" 
                    maxLength={356}
                    rows={5} 
                    value={description}  
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Button 
                variant="primary" 
                onClick={handleNext}
                className={headline&&description ? '': 'disabled'}
                style={{marginTop: '20px'}}
                >
                Next: Skills
            </Button> 
        {/* </Form> */}
    </FormContainer>
  )
}
