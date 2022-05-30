import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { listJobDetails } from '../../actions/jobActions'
import {Form, Row, Col, ListGroup, Button, FormLabel} from 'react-bootstrap'

export default function Proposal() {

  const{id} = useParams()
  const history = useHistory()
  const jobDetails = useSelector(state => state.jobDetails)
  const {error, loading, job} = jobDetails

  const [paymentBy, setPaymentBy] = useState('byProject')
  const [milestoneList, setMilestoneList] = useState([{Description: "", Duedate: "", Amount: ""}])
  const [bid, setBid] = useState('')
  const [bidServiceFee, setBidServiceFee] = useState('')
  const [bidReceive, setBidReceive] = useState('')

  const [totalPrice, setTotalPrice] = useState('')
  const [serviceFee, setServiceFee] = useState('')
  const [receive, setReceive] = useState('')
  const [duration, setDuration] = useState('more than 6 months')
  const [coverLetter, setCoverLetter] = useState('')
  
  const handleMilestoneAdd = () => {
      setMilestoneList([...milestoneList, {Description: "", Duedate: "", Amount: ""}])
      calculateTotalPrice()
  }

  const calculateTotalPrice = () => {
    let tp=0
    milestoneList.map((singleMilestone, index) => {
        
        if (isNaN(parseInt(singleMilestone.Amount))==true) {
            tp+=0
        }
        else {
            tp+=parseInt(singleMilestone.Amount)
        }
  })
    setTotalPrice(tp)
    setServiceFee(tp<=500 ? tp*0.15:tp<=10000? tp*0.10:tp*0.05)
    setReceive(tp-(tp<=500 ? tp*0.15:tp<=10000? tp*0.10:tp*0.05))
  }

  const handleMilestoneRemove = (index) => {
      const list = [...milestoneList]
      list.splice(index, 1)
      setMilestoneList(list)
  }
  const handleMilestoneChange = (e, index) => {
      const {name, value} = e.target
      const list = [...milestoneList]
      list[index][name] = value
      setMilestoneList(list)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listJobDetails(id))
    calculateTotalPrice()
  }, [dispatch, id, milestoneList]) 
 
  useEffect(() => {
    setBidServiceFee(bid<=500 ? bid*0.15:bid<=10000? bid*0.10:bid*0.05)
    setBidReceive(bid-(bid<=500 ? bid*0.15:bid<=10000? bid*0.10:bid*0.05))
  }, [bid])


  const submitHandler= (e) => {
    e.preventDefault()
    console.log(paymentBy, milestoneList, bid, bidServiceFee, bidReceive, totalPrice, serviceFee, receive, duration, coverLetter)
  }


  return (
    <div>
        <h3>Submit a proposal</h3>
        {job &&
            <div>
            <Form onSubmit = {submitHandler} autoComplete="off">
            <ListGroup>
                <ListGroup.Item>
                 <Row>
                     <Col md={9}>
                       <h4>Terms</h4>
                     </Col>
                     <Col className='mt-1'>
                       <p>Client's budget: {job.jobDetail.data.budget} birr</p>
                     </Col>
                 </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Form.Group controlId="paymentBy">
                        <Form.Label>How do you want to be paid</Form.Label>
                        <Form.Check id='milestone' name="paymentBy" onChange={(e) => setPaymentBy('byMilestone')} label="By milestone" type="radio"/>
                        <em> Divide the project into smaller segments, called milestones. You'll be paid for milestones as they are completed and approved.</em>
                        <Form.Check defaultChecked className='mt-2' id='project' name="paymentBy" onChange={(e) => setPaymentBy('byProject')} label="By project" type="radio"/>
                        <em>Get your entire payment at the end, when all work has been delivered.</em>
                    </Form.Group> 

                    {paymentBy === 'byProject' && 
                    <>
                    <Form.Group className='mt-4' controlId="bid">
                        <Row>
                            <Col md={5}>
                                <Form.Label>What is the full amount you'd like to bid for this job ?</Form.Label>
                                <br/>
                                <Form.Label>Bid</Form.Label>
                                <br/>
                                <em className='text-secondary'>Total amount the client will see on your proposal</em>
                            </Col>

                            <Col md={3} className='mt-4'>
                                <Form.Control
                                    className='mt-2'
                                    required
                                    type='number'
                                    placeholder='0.00'
                                    value={bid}
                                    onChange={(e) => setBid(e.target.value)}
                                />
                            </Col>
                        </Row>  
                    </Form.Group>

                    <hr/>
                    <Form.Group className='mt-4' controlId="bidServiceFee">
                        <Row>
                            <Col md={5}>
                                
                                <Form.Label>Ethio-Freelance Service Fee</Form.Label>
                                <br/>
                                <em className='text-secondary'>Total amount we get from this project</em>
                            </Col>
                            <Col md={3}>
                                <Form.Control
                                    disabled
                                    required
                                    type='number'
                                    placeholder='0.00'
                                    value={bidServiceFee} 
                                />
                            </Col>
                        </Row>  
                    </Form.Group>


                    <hr/>
                    <Form.Group className='mt-4' controlId="bidReceive">
                        <Row>
                            <Col md={5}>
                                
                                <Form.Label>You'll Receive</Form.Label>
                                <br/>
                                <em className='text-secondary'>The estimated amount you'll receive after service fees</em>
                            </Col>
                            <Col md={3}>
                                <Form.Control
                                    disabled
                                    required
                                    type='number'
                                    placeholder='0.00'
                                    value={bidReceive}
                                />
                            </Col>
                        </Row>  
                    </Form.Group>
                    </>
                }


                {paymentBy === 'byMilestone' && 
                    <>

                    <Form.Group className='mt-4' controlId='milestoneList'>
                        
                        <Form.Label>How many milestone do you want to include ?</Form.Label>

                        {
                            
                            milestoneList.map((singleMilestone, index) => (
                                
                                <div key={index}>
                                    <Row className='mb-2'>
                                        <Col md={5}>
                                            Description
                                        </Col>
                                        <Col md={3}>
                                            Due date
                                        </Col>
                                        <Col md={3}>
                                            Amount
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col md={5}>
                                            <Form.Control 
                                                type="text" 
                                                name='Description'
                                                value={singleMilestone.Description}
                                                onChange={(e) => handleMilestoneChange(e, index)}
                                            />
                                        </Col>
                                        <Col md={3}>   
                                            <Form.Control 
                                                type="date" 
                                                name='Duedate'
                                                value={singleMilestone.Duedate}
                                                onChange={(e) => handleMilestoneChange(e, index)}
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control 
                                                type="number" 
                                                name='Amount'
                                                value={singleMilestone.Amount}
                                                onChange={(e) => handleMilestoneChange(e, index)}
                                            />
                                        </Col>
                                        {milestoneList.length > 1 && (
                                        <Col md={1} className='mt-2'>
                                            <p onClick={() => handleMilestoneRemove(index)}>X</p>
                                        </Col>
                                        )}
                                    </Row>
                                </div>
                            ))
                            
                        }
                        <Row className="mt-3">
                            <Col md={2}>
                                <p onClick={handleMilestoneAdd}>+ Add milestone</p>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className='mt-4' controlId='totalPrice'>
                        <Row>
                            <Col md={5}>
                                <Form.Label>Total price of project</Form.Label>
                                <br/>
                                <em className='text-secondary'>This includes all milestones, and is the amount your client will see</em>
                            </Col>

                            <Col md={3} className='mt-4'>
                                <Form.Control
                                    disabled
                                    className='mt-2'
                                    required
                                    type='number'
                                    placeholder='0.00'
                                    value={totalPrice}
                                />
                            </Col>
                        </Row>  
                    </Form.Group>

                    <hr/>
                    <Form.Group className='mt-4' controlId='serviceFee'>
                        <Row>
                            <Col md={5}>
                                
                                <Form.Label>Ethio-Freelance Service Fee</Form.Label>
                                <br/>
                                <em className='text-secondary'>Total amount we get from this project</em>
                            </Col>
                            <Col md={3}>
                                <Form.Control
                                    disabled
                                    required
                                    type='number'
                                    placeholder='0.00'
                                    value={serviceFee} 
                                />
                            </Col>
                        </Row>  
                    </Form.Group>


                    <hr/>
                    <Form.Group className='mt-4' controlId='receive'>
                        <Row>
                            <Col md={5}>
                                
                                <Form.Label>You'll Receive</Form.Label>
                                <br/>
                                <em className='text-secondary'>The estimated amount you'll receive after service fees</em>
                            </Col>
                            <Col md={3}>
                                <Form.Control
                                    disabled
                                    required
                                    type='number'
                                    placeholder='0.00'
                                    value={receive}
                                />
                            </Col>
                        </Row>  
                    </Form.Group>
                    </>
                }
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className='mt-5'>
                <ListGroup.Item className='p-4'>
                    <Row>
                        <Col md={3}>
                            <Form.Group controlId='duration'>
                                <FormLabel>How long will this project take ?</FormLabel>
                                <Form.Select 
                                 onChange={(e) => setDuration(e.target.value)} 
                                >
                                    <option value='more than 6 months'>More than 6 months</option>
                                    <option value='3 to 6 months'>3 to 6 months</option>
                                    <option value='1 to 3 months'>1 to 3 months</option>
                                    <option value='Less than 1 month'>Less than 1 month</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className='mt-5'>
                <ListGroup.Item className='p-4'>
                    <Form.Group controlId='coverLetter'>
                        <Form.Label>Cover Letter</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            maxLength={300}
                            rows={3} 
                            value={coverLetter}  
                            onChange={(e) => setCoverLetter(e.target.value)}
                        />
                    </Form.Group>
                </ListGroup.Item>
            </ListGroup>

            <Button type='submit' variant='secondary' className = 'my-3'> 
                submit proposal
            </Button>
            </Form>
            </div>
        }
    </div>
  )
}
