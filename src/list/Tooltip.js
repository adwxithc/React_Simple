import React   from "react"
function Tooltip(props,ref){
    const {
        isActive,
        showLabel
    }=props    
    // useImperativeHandle(ref,()=>{
    //     return{
    //         forwardedFunc:()=>{
    //             console.log('hello i am a function in a child passed to the parent');
    //         }
    //     }
    // })
 
    if(!showLabel) return null
    return(
        <label
       ref={ref}
             className={`tooltip `}>this is an {isActive?'active':'in-active'} label</label>
    )
}

export default React.forwardRef(Tooltip)