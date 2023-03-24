import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, Typography} from "@mui/material"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Dashboard from './pages/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Box>
   <BrowserRouter>
   
   <Login/>
  
   
 
   
    
    </BrowserRouter>
    </Box>
   
   </>
  )
}

export default App
