import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import PageLayout from './Pages/PageComponents/PageLayout';


ReactDOM.render(

    <BrowserRouter>
        <PageLayout>
            <Router />
        </PageLayout>
    </BrowserRouter>,

    document.getElementById('root'));