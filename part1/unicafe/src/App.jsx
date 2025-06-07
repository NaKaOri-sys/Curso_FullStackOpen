import { useState } from 'react'
import Button from './Button';
import Statistic from './Statistic';

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
      <Button handleClick={handleGoodCount} text='good' />
      <Button handleClick={handleBadCount} text='bad' />
      <Button handleClick={handleNeutralCount} text='neutral' />
      <h2>statistics</h2>
      <Statistic good={good} bad={bad} neutral={neutral} />
    </>
  )
}

export default App
