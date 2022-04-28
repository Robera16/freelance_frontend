import React from 'react'
import FormContainer from '../../components/FormContainer'
import {Form, Button} from 'react-bootstrap'

export default function Scope({difficulty, setDifficulty, duration, setDuration, experience, setExperience, navigation}) {

  const {previous, next} = navigation
  
  return (
      <FormContainer>
        <Form.Group>
          <Form.Label>Project complexity</Form.Label>
            <Form.Check 
              id='large' 
              name="difficulty" 
              defaultChecked={difficulty==='Large' ? 'defaultChecked': ''}
              onChange={(e) => setDifficulty('Large')} 
              label="Large" 
              type="radio"
            />

            <Form.Check 
              id= 'medium' 
              name="difficulty" 
              defaultChecked={difficulty==='Medium' ? 'defaultChecked': ''}
              onChange={(e) => setDifficulty('Medium')} 
              label="Medium" 
              type="radio"
            />

            <Form.Check 
              id= 'small' 
              name="difficulty" 
              defaultChecked={difficulty==='Small' ? 'defaultChecked': ''}
              onChange={(e) => setDifficulty('Small')} 
              label="Small" 
              type="radio"
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>How long will your work take</Form.Label>
            <Form.Check 
              id='>6' 
              name="duration" 
              defaultChecked={duration==='>6' ? 'defaultChecked': ''}
              onChange={(e) => setDuration('>6')} 
              label="more than 6 month" 
              type="radio"
            />

            <Form.Check 
              id='3-6' 
              name="duration" 
              defaultChecked={duration==='3-6' ? 'defaultChecked': ''} 
              onChange={(e) => setDuration('3-6')} 
              label="3-6 month" 
              type="radio"
            />

            <Form.Check 
              id='1-3' 
              name="duration" 
              defaultChecked={duration==='1-3' ? 'defaultChecked': ''} 
              onChange={(e) => setDuration('1-3')} 
              label="1-3 month" 
              type="radio"
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>What level of experience will it need </Form.Label>
            <Form.Check 
              id='entry'
              name="experience" 
              defaultChecked={experience==='Entry' ? 'defaultChecked': ''} 
              onChange={(e) => setExperience('Entry')} 
              label="Entry" 
              type="radio"
            />

            <Form.Check 
              id='intermediate' 
              name="experience" 
              defaultChecked={experience==='Intermediate' ? 'defaultChecked': ''} 
              onChange={(e) => setExperience('Intermediate')} 
              label="Intermediate" 
              type="radio"
            />

            <Form.Check 
              id='expert' 
              name="experience" 
              defaultChecked={experience==='Expert' ? 'defaultChecked': ''} 
              onChange={(e) => setExperience('Expert')} 
              label="Expert" 
              type="radio"
            />
        </Form.Group> 
         
        <div className="d-flex justify-content-between">
            <Button variant="primary"  onClick={previous}>
              Back
            </Button>
            <Button 
              variant="primary"  
              onClick={next}
             className={difficulty&&duration&&experience ? '': 'disabled'}
            >
              Next: Budget
            </Button>
        </div>
      </FormContainer>
  )
}
