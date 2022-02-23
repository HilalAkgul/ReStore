
import { ContactPage } from '@mui/icons-material';
import { Container, createTheme, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../features/about/AboutPage';
import Cataloge from '../../features/catalog/Cataloge';
import ProductDetails from '../../features/catalog/ProductDetails';
import HomePage from '../../features/home/HomePage';
import '../layout/styles.css';
import Header from './Header';



function App() {

  const [darkMode,setDarkMode]=useState(false);
const  palette=darkMode?"dark":"light";

const theme=createTheme({
palette:{
  mode:palette,
  background:{
    default:darkMode?"":"eaeaea"
  }
}

});

function handleChange(){

  setDarkMode(!darkMode);
  
  }


  return (
   
    <ThemeProvider theme={theme}>
    
    <CssBaseline />
    <Header  darkMode={darkMode} handleChange={handleChange}  />
    
    <Container>
    <Routes>
      <Route  path="/" element={<HomePage />} />
        <Route  path="/cataloge" element={<Cataloge />} />
        <Route  path="/cataloge/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
    </Routes>
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
