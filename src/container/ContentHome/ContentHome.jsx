import React , {Component, Fragment} from 'react';
import axios from 'axios';
import './ContentHome.css';
import PartContentHome from '../PartContentHome/PartContentHome';
import Header from '../../container/Header/Header';
import Footer from '../Footer/Footer';

class ContentHome extends Component{
    state={
        getData:[],
        statepostData:{
            id:1,
            title:'',
            body:''
        }
    }

    // Get Dat api
    getDataAPI = () =>{
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then(result =>{
                this.setState({
                    getData:result.data
                })
            })
    }

    componentDidMount(){
        this.getDataAPI();
    }

    //post data API
    postDataAPI = () =>{
        axios.post('http://localhost:3004/posts', this.state.statepostData)
            .then(resultnya =>{
                this.getDataAPI();
                this.setState({
                    statepostData:{
                        title:'',
                        body:''
                    }
                }, (err) => console.log(err))
            })
    }


    // post data
    handleFormChange = (event) =>{
        let formstateNew = {...this.state.statepostData};

        formstateNew[event.target.name] = event.target.value;

        let timesmap = new Date().getTime();
        formstateNew['id'] = timesmap;

        this.setState({
            statepostData: formstateNew
        }, () => {
            console.log('form post data', this.state.statepostData);
        })
       
    }

    handleSubmit = () =>{
        this.postDataAPI();
    }
   

    //Edit DATA
    putDataAPI = () =>{
    axios.put(`http://localhost:3004/posts/${this.state.statepostData.id}`, this.state.statepostData)
        .then(result =>{
            console.log('data result', result);
            this.getDataAPI();
        })
    }

    handleSubmitEdit = () =>{
        this.putDataAPI()
    }
 
    handleUpdate = (data) =>{
        this.setState({
            statepostData:data
        })
        console.log('data update',data);
    }

    changeFormEdit = (event) =>{
        let formstatenew = {...this.state.statepostData};
        formstatenew[event.target.name] = event.target.value;

        this.setState({
            statepostData: formstatenew
        })
    }

// Detail PaGE
handleDetail = (id) =>{
    this.props.history.push(`/detail/${id}`)
}

//handle Remove
handleRemove = (id) =>{
    // console.log('ini id',id);
axios.delete(`http://localhost:3004/posts/${id}`)
    .then(res => {
        this.getDataAPI()
    })
}

    render(){
        return(
        <Fragment>
            <Header/>
            <div className="wrapper-form">
            <div className="form-post">
              <p>Tambah Data</p>
              <label htmlFor="title">Title</label>
              <input onChange={this.handleFormChange} name="title" type="text" placeholder="input title"/>
              <label htmlFor="body">Body</label>
              <input onChange={this.handleFormChange} name="body" type="text" placeholder="input description body"/>
              <button onClick={this.handleSubmit}>Send Data</button>
         
       </div>
       <div className="form-post">
               <p>Edit Data</p>
              <label htmlFor="title">Title</label>
              <input value={this.state.statepostData.title} onChange={this.changeFormEdit} name="title" type="text" placeholder="input title"/>
              <label htmlFor="body">Body</label>
              <input value={this.state.statepostData.body} onChange={this.changeFormEdit} name="body" type="text" placeholder="input description body"/>
              <button onClick={this.handleSubmitEdit}>Send Data</button>
         
       </div>
            </div>
            <div className="part-blogpost">
            {
                this.state.getData.map(hasil =>{
                return <PartContentHome key={hasil.id} data={hasil} update={this.handleUpdate} remove={this.handleRemove} goDetail={this.handleDetail}/>
                })
            }
            </div>
            <Footer/>
        </Fragment>
        )
    }
}

export default ContentHome;