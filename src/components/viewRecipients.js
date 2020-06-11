import React from 'react';
import axios from 'axios';
import G from '../globals';
import {DataTable , TableHeader} from 'react-mdl';

class ViewRecipients extends React.Component{
    
    state = {
        recipients : []
    }

    componentDidMount(){

        axios.get(`${G.serverHost}/all/recipients`)
        .then((res)=>{
            this.setState({recipients:res.data});
        }).catch(err=>{
            console.log("Error ... ");
            console.error(err);
        }).finally(()=>{
            console.log("Ruun ... ");
        });
    }

    render(){
        return(
            <div>
                <h1>View Recipients</h1>
                <DataTable
                    shadow={0}
                    rows={this.state.recipients}>
                    <TableHeader name="_Name" tooltip="Name of the Recipient">Name</TableHeader>
                    <TableHeader name="_Email" tooltip="Email of the Recipient">Email</TableHeader>
                    <TableHeader name="_Status" tooltip="Status of the Recipient">Status</TableHeader>
                </DataTable>
            </div>
        );
    }
}

export default ViewRecipients;