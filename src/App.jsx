import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const fullName='Harrison Maina';
  const educationBackground='Bachelors Degree in Agriculture and Enterprise Development';
  const professionalBackground='Front-End Development at Azubi Africa'
  const skills=['HTML','CSS','JavaScript','ReactJs']


  return (
    <>
      <h1>Hello World</h1>
      <h1>{fullName}</h1>
      <h2>Education Background</h2>
        <p>{educationBackground}</p>
        <h2>Professional Background</h2>
        <p>{professionalBackground}</p>
        <h2>Skills</h2>
     <ul>
     {skills.map((skill,index)=>(
      <li key={index}>{skill}</li>
     
))}
</ul>
    </>
  )
}

export default App
