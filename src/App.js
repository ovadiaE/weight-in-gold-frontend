import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Active from '../src/components/Active'
import Listener from './components/Listener' 

const App = () => {
  const [goldValue, setGoldValue] = useState(0)
  const [showWeightInGold, setShowWeightInGold] = useState(false)

  console.log('show weight in gold', showWeightInGold)
  useEffect(() => {
    if (showWeightInGold) {
      setTimeout(() => setShowWeightInGold(false), 8000)
    }
  }, [showWeightInGold])
  return (
    <>
      <Listener setShowWeightInGold={setShowWeightInGold} shouldShow={!showWeightInGold} setGoldValue={setGoldValue} goldValue={goldValue}/>
      <Active goldValue={goldValue}/>
    </>
  )
}

export default App;
