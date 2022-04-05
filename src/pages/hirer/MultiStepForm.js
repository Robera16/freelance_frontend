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
    const[skills, setSkills] = useState([])
    const[difficulty, setDifficulty] = useState('')
    const[duration, setDuration] = useState('')
    const[experience, setExperience] = useState('')
    // const defaultData = {
    //     headline,
    //     skills: [],
    // }
//   const [formData, setForm] = useForm(defaultData);
    const{step, navigation} = useStep({initialStep: 0, steps})
    const {id} = step;
   
//   const props = {formData, setForm, navigation}
    const props = {headline, setHeadline,skills, setSkills, difficulty, setDifficulty, duration, setDuration, experience, setExperience, navigation}
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
