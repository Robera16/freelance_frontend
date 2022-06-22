import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listJobs} from '../../actions/jobActions'
import Job from '../../components/Job'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import {Row, Col, Container, Card, Button} from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function Home() {
  const dispatch = useDispatch()
  const jobList = useSelector(state => state.jobList)
  const[imageUrl, setImageUrl]=useState(null)
  const history = useHistory()
  const {error, loading, jobs} = jobList

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const fetchData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get( 
      "http://localhost:8001/api/users/proPi/",
      config
    );
    setImageUrl("http://localhost:8001" + data.photo);
    //  console.log(imageUrl)
  };

  useEffect(() => {
    if (userInfo.applyAs=="hirer"){
      history.push('/dashboard')
    }else{
      dispatch(listJobs())
      fetchData()
    }
  }, [dispatch]) 
  
  return ( 
    <div style={{marginTop: '100px'}}>
      
      <Row>
        <Col md={8}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            jobs?.map((job) => <Job key={job.id} job={job} />)
          )}
        </Col>

        <Col style={{ marginTop: "9px" }}>
          <Card style={{ width: "15rem", height: "16rem" }}>
            {/* <Avatar
            className="table_avatar"
            src={imageUrl}
            style={{ width: '176px', height: '176px' }}
          /> */}
            <Card.Img
              variant="top"
              src={imageUrl}
              style={{ height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>
                {userInfo.first_name} {userInfo.Last_name}
              </Card.Title>
              <Card.Text>
                {userInfo.location}
                <div>{userInfo.offered_service_type}</div>
              </Card.Text>
              {/* <Button variant="primary">Update Profile</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
