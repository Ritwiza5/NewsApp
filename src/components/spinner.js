import React/*, { Component }*/ from 'react'
// eslint-disable-next-line
import loading from  './loading.gif'
//export class spinner extends Component { class based
const spinner=()=>{ //function  based
  //render() {
    return (
      <div className="text-center"><img className="my-3" src={loading} alt="loading" /></div>
    )
 // }
}

export default spinner