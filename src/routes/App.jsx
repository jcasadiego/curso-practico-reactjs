import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../components/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return(
        <Layout>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='recovery-password' element={ <RecoveryPassword /> } />
                <Route path='*' element={ <NotFound /> } />
            </Routes>
        </Layout>
    );  
}

export default App;