import React from 'react'
import { FormGroup } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import {Form, Button, Row, Col} from 'react-bootstrap'

export default function Budget({
  budget, setBudget, 
  fromHourlyRate,setFromHourlyRate,
  toHourlyRate, setToHourlyRate,
  navigation}) {

  const {previous, next} = navigation

  return (
    <FormContainer>
      <FormGroup controlId='budget'>
        <Row>
          <Col md={9}>
            <Form.Label>Project Budget(Birr)</Form.Label>
              <Form.Control 
                  type="number" 
                  name='budget'
                  placeholder="Enter project maximum budget" 
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
           
            <Form.Label>Hourly Rate</Form.Label>
              <Row>
                <Col>
                  From
                </Col>
                <Col>
                  To
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Form.Control 
                          type="number" 
                          name='fromHourlyRate'
                          placeholder="" 
                          value={fromHourlyRate}
                          onChange={(e) => setFromHourlyRate(e.target.value)}
                      />
                    </Col>
                    <Col className='mt-2'>
                      <p>birr/hour</p>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Col>
                      <Form.Control 
                          type="number" 
                          name='toHourlyRate'
                          placeholder="" 
                          value={toHourlyRate}
                          onChange={(e) => setToHourlyRate(e.target.value)}
                      /> 
                    </Col>
                    <Col className='mt-2'>
                      <p>birr/hour</p>
                    </Col>
                  </Row>
                </Col>

              </Row>

            <div className="d-flex justify-content-between mt-3">
              <Button variant="primary"  onClick={previous}>
                  Back
              </Button>
              <Button 
                variant="primary"  
                onClick={next}
                // className={skills.length > 0 ? '': 'disabled'}
                >
                  Review Job Post
              </Button>
            </div>
          </Col>
        </Row>
      </FormGroup>
      
    </FormContainer>
  )
}
