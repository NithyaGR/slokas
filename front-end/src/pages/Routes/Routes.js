
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import SriBhagavadGita from '../Books/SriBhagavadGita/SBG';
import Chapter from '../Books/SriBhagavadGita/Chapter';
import Login from '../Login/Login';
import About from '../../components/About/About';
import Register from '../Register/Register';
// import Register from '../Register/Register';

export default class Routes extends Component {
    render() {
        console.log(sessionStorage.getItem('selectedChapterNo'));
        return (
            
        <Switch>
                 <Route path='/' exact component={Home} />

                 <Route path='/home' exact component={Home} />

                 <Route path='/book/bg' exact component={SriBhagavadGita} />

                 <Route path='/chapter' component={Chapter} />
                
                 <Route path='/login' exact component={Login} /> 

                 <Route path='/about' exact component={About} /> 

                 <Route path='/register' component = { Register } />

                {/* <Route path='/register' component={Register} />

                <Route path='/profile' component={ProfilePage} /> */} 
                        
        </Switch>           
          
        )
    }
}
// we can add <Route path='/userHome:/name' component={UserHomePage} /> and the userHomePage
//can use this.props.match.params.name in the welcome message.