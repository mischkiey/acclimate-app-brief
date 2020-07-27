import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Header from '../Header/Header';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import Dashboard from '../../routes/Dashboard/Dashboard'

class App extends React.Component {
    // state = {
    // }
    
    render() {
        return (
            <>
                <Header />
                <main className='App'>
                    <Switch>
                        <Route path={'/landingpage'} component={LandingPage} />                   
                        <Route path={'/loginpage'} component={LoginPage} />
                        <Route path={'/dashboard'} component={Dashboard} />
                    </Switch>
                </main>
            </>
        );
    };
};

export default App;