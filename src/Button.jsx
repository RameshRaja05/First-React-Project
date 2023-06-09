import { useState } from "react"
// eslint-disable-next-line react/prop-types
function Button({color}){
    const[count,SetCount]=useState(0)
    let className="button"
    if(color==='red'){
        className+=" is-danger"
    }else if(color==="green"){
        className+=' is-success'
    }else{
        className+=' is-warning'
    }
    return (
        <div className="is-flex is-justify-content-center is-align-items-center">
              <button className={className} onClick={()=>SetCount(count+1)} >Count:{`you clicked ${count}`}</button>
        </div>
    )
}

export default Button