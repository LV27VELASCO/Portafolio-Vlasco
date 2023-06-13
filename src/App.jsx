import React,{ Suspense, lazy, useEffect,useState} from 'react'
const Layout = lazy(()=>import('./components/Layout')) 
import Loading from './components/Loading'
import "./App.css"
import Preload from './components/Preload'
function App() {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 4800);
  }, [])
  
  return (
    <>
    {
      load
      ?
      <Preload/>
      :
      <Suspense fallback={<Loading/>}>
        <Layout/>
      </Suspense>
    }
    </>
  )
}

export default App
