import React,{useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {useParams, useHistory } from 'react-router-dom'
import Proposal from '../../components/Proposal'
import axios from 'axios'
export default function SubmittedProposals(){
  const{id} = useParams()
  const [proposals, setProposals] = useState()
  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(`http://localhost:8001/api/proposals/get-proposal/${id}/`)
      setProposals(data)
    }
    fetchData()
  }, [id]) 
//  console.log(proposals)
  return (
    <div style={{marginTop: '70px'}}>
    
        <Row>
        <Col md={8}>
        
          { proposals && (proposals?.map((proposal) => (
                <Proposal key={proposal.id} proposal={proposal} />
            )))
          }
        </Col>

        <Col>
           
        </Col>
      </Row> 
    </div> 

  )
}
