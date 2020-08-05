import React , {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import './DetailPage.css';

class DetailPage extends Component{
    state = {
        detailpage:{
            title:'',
            body:''
        }
    }
    componentDidMount(){
        // console.log(this.props);
        let param = this.props.match.params.detailPage
        axios.get(`http://localhost:3004/posts/${param}`)
            .then(resultnya =>{
                // console.log('ini hail',resultnya);
                this.setState({
                    detailpage:{
                        title: resultnya.data.title,
                        body: resultnya.data.body
                    }
                })
            })
    }
    render(){
        // console.log(this.props);
        return(
           <Fragment>
               <div className="wrapper-detail-gae">
                    <Link to="/">Back</Link>
                   <div className="card-detail-page">
                   <p className="detail-headline">{this.state.detailpage.title}</p>
                    <p>{this.state.detailpage.body}</p>
                   </div>
               </div>
           
        </Fragment>
        )
    }
}

export default DetailPage;