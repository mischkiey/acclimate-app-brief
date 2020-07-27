import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Header from '../Header/Header';
import LoginPage from '../../routes/LoginPage/LoginPage';

class App extends React.Component {
    // state = {
    // }
    
    render() {
        return (
            <>
                <Header />
                <main className='App'>                    
                    <Route path='/login' component={LoginPage} />
                </main>
            </>
        );
    };
};

export default App;