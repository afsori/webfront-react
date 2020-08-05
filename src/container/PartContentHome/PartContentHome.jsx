import React, {Fragment} from 'react';
import './PartContentHome.css'

const PartContentHome =(props) =>{
    // console.log(props.dataAPI)
    return(
        <Fragment>
            <div className="wrapper">
        <div className="card">
        <div className="gambar">
        <img src="http://placeimg.com/200/150/tech" alt="dumy-imag" />
        </div>
        <div className="component-card">
    <p>{props.data.title}</p>
    <p>{props.data.body}</p>
            <button className="hapus" onClick={()=> props.remove(props.data.id)}>Hapus</button>
            <button className="detail" onClick={() => props.goDetail(props.data.id)}>Detail</button>
            <button className="edit-data" onClick={()=> props.update(props.data)}>Edit Data</button>
        </div>
    </div>
    </div>
    </Fragment>
    )
}

export default PartContentHome;