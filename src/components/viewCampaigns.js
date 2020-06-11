import React from 'react';
import axios from 'axios';
import G from '../globals';
import {DataTable , TableHeader} from 'react-mdl';

class ViewCampaigns extends React.Component{
    
    state = {
        campaigns : []
    }

    componentDidMount(){

        axios.get(`${G.serverHost}/all/campaigns`)
        .then((res)=>{
            this.setState({campaigns:res.data});
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
                <h1>View Campaign</h1>
                <DataTable
                    shadow={0}
                    rows={this.state.campaigns}>
                    <TableHeader name="mail" tooltip="Message of the Campaign">Mail</TableHeader>
                    <TableHeader name="subject" tooltip="Subject of the Campaign">Subject</TableHeader>
                    <TableHeader name="scheduler" tooltip="Scheduler of the Campaign">Scheduler</TableHeader>
                    <TableHeader name="mode" tooltip="Mode of the Campaign">Mode</TableHeader>
                </DataTable>
            </div>
        );
    }
}

export default ViewCampaigns;