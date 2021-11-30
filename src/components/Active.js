import { useEffect} from 'react'
import './Active.css'

const Active = ({goldValue, setIsNew}) => {  
  console.log('active gold value', goldValue)

  const formatValue = (goldValue) => { return goldValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }

  const display = () => (
    <>
      <div className = 'wrapper'> 
        <div className='value'>${formatValue(goldValue)}</div>
      </div>
    </>
  )
   return (display())
}

export default Active
