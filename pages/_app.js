import { from } from 'form-data';
import React from 'react';
import {If,Then,Else} from 'react-if'
import Link from 'next/link'
import axios from'axios';
import _ from 'lodash';
import moment from 'moment';

class Tweet extends React.Component{
    static getInitialprops({query:{id}}){
        return{id};
    }

    constructor(props){
        super(props);
        this.state={
            loading:true,
            user:null,
            tweet:null,
        };
        this.fecthData=this.fecthData.bind(this);
        this.gettweet=this.gettweet.bind(this);
        this.duration=this.duration.bind(this)
        }
    componentDidMount(){
        this.fecthData();
    }
    fecthData(){
        this.setState({loading:true}),()=>
        axios.get('api/status/'+this.props.id)
        .Then((reponse)=>{
        this.setState({
            user:reponse.data.user[0],
            tweet :response.data,
            loading:false
        });
    })
    .catch((error)=>{
        this.setState({loading:false})
    })
    }
getTweet(){
    var jsonRes=JSON.parse.serializeObject(response)
    return _.get(this.state.tweet,jsonRes)
}
asDuration(millisecond){
    const min=moment.duration(millisecond).get('minutes');
    const sec=moment.duration(millisecond).get('seconds');
    return _.padStart(min,2,0)+":"+_.padStart(sec,2,0)
}