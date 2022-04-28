import React, {useState} from 'react'
import {useStep } from 'react-hooks-helper'

import Headline from './Headline'
import Skill from './Skill'
import Scope from './Scope'
import Budget from './Budget'
import Review from './Review'

const steps = [
    {id: 'headline'},
    {id: 'skill'},
    {id: 'scope'},
    {id: 'budget'},
    {id: 'review'}
]

export default function MultiStepForm() {
    const[headline, setHeadline] = useState('')
    const[description, setDescription] = useState('')
    const[skills, setSkills] = useState([])
    const[difficulty, setDifficulty] = useState('')
    const[duration, setDuration] = useState('')
    const[experience, setExperience] = useState('')
    const[budget, setBudget] = useState('')
    const[fromHourlyRate, setFromHourlyRate] = useState('')
    const[toHourlyRate, setToHourlyRate] = useState('')

   
    const{step, navigation} = useStep({initialStep: 0, steps})
    const {id} = step;
   

    const props = {
        headline, setHeadline,
        description, setDescription,
        skills, setSkills, 
        difficulty, setDifficulty, 
        duration, setDuration, 
        experience, setExperience,
        budget, setBudget,
        fromHourlyRate, setFromHourlyRate,
        toHourlyRate, setToHourlyRate, 
        navigation
    }

  switch(id){
      case 'headline':
          return <Headline {...props} />
      case 'skill':
          return <Skill {...props}/>
      case 'scope':
          return <Scope {...props}/>
      case 'budget':
          return <Budget {...props}/>
      case 'review':
          return <Review {...props}/>
      default:
          return null;
  }
}
