import React from 'react'
import Create from './components/Create'
import Edit from './components/Edit'
import Show from './components/Show'
import { BrowserRouter, Route,Routes } from 'react-router-dom'


const App = () => {


  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App