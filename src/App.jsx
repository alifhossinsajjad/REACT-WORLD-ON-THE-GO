
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {


  return (
    <>
      
      <h1 className='text-center font-bold text-5xl'> React</h1>
     
      
    <Suspense fallback={<p>Counteries are loading.....</p>}>
       <Countries countriesPromise = {countriesPromise}/>
    </Suspense>

    </>
  )
}

export default App
