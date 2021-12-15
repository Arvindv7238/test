import React, { Component } from 'react'

export default class ListsAndKeys extends Component {

    
    render() {
      let number = [1,2,3,4,5,6,7,8]
      //number.filter((data)=>{return data>3}).map(res=>console.log(res));
      //number.filter((data)=>data>3).map((res)=>console.log(res));
      number.filter((data)=>{return data%2==0}).map((res)=>console.log(res));

      return (
            <div>
            </div>
        )
    }
}
