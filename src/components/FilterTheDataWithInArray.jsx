import React, { Component } from 'react'

export default class FilterTheDataWithInArray extends Component {
    
    render() {
        const job = ['c','Experience','d','Intermediate','Beginner'];
        const res=[];
        var res1=[];
        for(var i=0;i<job.length;i++)
        {
            if(job[i]==='Beginner'){
                res[0]=job[i];
            }else if(job[i]==='Intermediate'){
                res[1]=job[i];
            }else if(job[i]==='Experience'){
                res[2]=job[i];
            }else{
                res1[i]=job[i];
            }
        }
        
        res1=res1.filter(arvind=>{return(arvind!='empty')})
    
       
        res1=res.concat(res1);
        console.log(res1);
        // const swap = (job, i, j) => [job[i], job[j]] = [job[j], job[i]];
        // swap(job, 1, 2)
        
        return (
            <div>
               
            </div>
        )
    }
}
