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
  const sumAll = () => { return good + bad + neutral };
  const calculateAverage = () => { return sumAll() / 3 };
  const calculateGoodPercent = () => {
    if (good == 0) {
      return 0;
    }
    return ((good / sumAll()) * 100)
  }
  return (
    <>
      <h2>Give feedback</h2>
      <Button handleClick={handleGoodCount} text='good' />
      <Button handleClick={handleBadCount} text='bad' />
      <Button handleClick={handleNeutralCount} text='neutral' />
      <h2>statistics</h2>
      <Display text='good' value={good} />
      <Display text='bad' value={bad} />
      <Display text='neutral' value={neutral} />
      <Display text='all' value={sumAll()} />
      <Display text='average' value={calculateAverage()} />
      <Display text='positive' value={calculateGoodPercent() + ' %'} />
    </>
  )
}

export default App
