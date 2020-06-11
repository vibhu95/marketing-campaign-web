import React from 'react';
import {Textfield} from 'react-mdl';
import {post} from 'axios';
import G from '../globals';

class Form extends React.Component{

    state = {
        file : null,
        check : null,
        email : null,
        subject : null,
        schedule : null,
        mode : null
    }

    _setFile(file){
        console.log(file);
        this.setState({file});
    }

    uploadFile = e => {
        console.log('clicked');
        if(this.state.file){
            const url = `${G.serverHost}/upload/csv`;
            let formData = new FormData();
            formData.append('recipients',this.state.file);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            post(url,formData, config).then((res)=>{
                console.log(res);
                this.setState({check: 'Uploaded Successfully !!!', file : null});
                setTimeout(()=>{
                    this.setState({check: null});
                }, 8000);
            });;
        }else{
            alert('File not selected yet !!!');
        }
    }

    _submitForm = ()=>{
        const temp = this.state;
        if(temp.email && temp.mode && temp.schedule && temp.subject){
            const url = `${G.serverHost}/add/campaign`;
            let formData = {
                mail : temp.email,
                subject : temp.subject,
                scheduler : temp.schedule,
                mode : temp.mode
            };
            const config = {
                headers: {
                    'content-type': 'application/json'
                }
            }
            post(url,formData,config).then(res=>{
                this.setState({
                    email : null,
                    subject: null,
                    schedule: null,
                    mode: null,
                    check: 'Campaign Added Successfully !!!'
                });
                setTimeout(()=>{
                    this.setState({check: null});
                }, 8000);
            });
        }else{
            alert('All text fields are required !!!');
        }
    }

    render(){
        return(
            <div style={{margin:'10px 20px'}}>
                {this.state.check ? <p style={{color:'red'}}>{this.state.check}</p> : null}
                <input className={"customButton ripple"} type="file" name="file" onChange={(e)=>{this._setFile(e.target.files[0])}} />
                <button className={"customButton ripple"} onClick={this.uploadFile}>Upload CSV</button>
                <br/><hr/>
                <br/>
                <div style={{padding:'10px 40px', fontSize: '24px'}}>
                    <h3>Enter Campaign Details</h3>
                    <Textfield
                        onChange={(e) => {this.setState({subject:e.target.value})}}
                        label="Subject..."
                        floatingLabel
                        style={{width: '200px'}}
                    />
                    <br/>
                    <Textfield
                        onChange={(e) => {this.setState({schedule:e.target.value})}}
                        label="Schedule... (Sun,Mon)"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                    <br/>
                    <Textfield
                        onChange={(e) => {this.setState({mode:e.target.value})}}
                        label="Mode... (Iterative or Single)"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                    <br/>
                    <Textfield
                        onChange={(e) => {this.setState({email:e.target.value})}}
                        label="Email Message..."
                        rows={3}
                        style={{width: '200px'}}
                        floatingLabel
                    />
                    <br/>
                    <button className={"customButton ripple"} onClick={this._submitForm}>Add Campaign</button>
                </div>
            </div>
        );
    }
}

export default Form;