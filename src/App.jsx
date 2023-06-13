import React,{lazy,Suspense} from 'react'
const Layout = lazy(()=>import('./components/Layout'))
import Loading from './components/Loading'
import "./App.css"
function App() {
  return (
    <>
    <Suspense fallback={<Loading/>} >
      <Layout/>
    </Suspense>
    </>
  )
}

export default App
