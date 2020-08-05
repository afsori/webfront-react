import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ContentHome from '../../container/ContentHome/ContentHome';
import DetailPage from '../../container/ContentHome/DetailPage/DetailPage';

class Home extends Component{
    render(){
        return(
            <Router>
                <Route path="/" exact component={ContentHome}/>
                <Route path="/detail/:detailPage" component={DetailPage}/>
            </Router>
        )
    }
}

export default Home;