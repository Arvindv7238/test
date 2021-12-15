import React, { Component } from 'react'
import axios from 'axios';
export default class Customer extends Component {
    constructor(props){
        super(props);
        this.state={
            result:[],
        }

    }

    componentDidMount(){
        axios.get('http://localhost:8080/SpringBootRestProj03-SendingJSONDataAsResponse/customer/showData').then(res=>{
            console.log(res.data);
           const result=res; 
           this.setState({
               result:result,
           });
       })
       
    }

    render() {
        return (
            <div>
             
            </div>
        )
    }
}
