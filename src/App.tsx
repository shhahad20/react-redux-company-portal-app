import { useDispatch, useSelector } from 'react-redux'
import { Button, Box, Grid, Typography } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootState } from './types'
import './App.css'

import Companies from './components/Companies'
import Home from './components/Home'
import Error from './components/Error'
import Nav from './components/Navbar'
import SingleCompany from './components/SingleCompany'

// import { Route } from '@mui/icons-material';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<SingleCompany />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
