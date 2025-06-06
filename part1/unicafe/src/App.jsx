import { useState } from 'react'
import Button from './Button';
import Display from './Display';

function App() {
  const [good, setGoodCount] = useState(0)
  const [bad, setBadCount] = useState(0)
  const [neutral, setNeutralCount] = useState(0)
  const handleGoodCount = () => setGoodCount(good + 1);
  const handleBadCount = () => setBadCount(bad + 1);
  const handleNeutralCount = () => setNeutralCount(neutral + 1);


  return (
    <>
      <h2>Give feedback</h2>
      <Button handleClick={handleGoodCount} text='good'/>
      <Button handleClick={handleBadCount} text='bad'/>
      <Button handleClick={handleNeutralCount} text='neutral'/>
      <h2>statistics</h2>
      <Display text='good' value={goodCount}/>
      <Display text='bad' value={badCount}/>
      <Display text='neutral' value={neutralCount}/>
    </>
  )
}

export default App
