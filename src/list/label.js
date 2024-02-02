import { MyContex } from "../pages/HomePage"
import { useContext, useRef, useState, useLayoutEffect } from "react"
import './label.css'
import Tooltip from "./Tooltip"

function Label(props){
    
    const{
        isActive,
        onAction
    }=props

    const val=useContext(MyContex)
    const [showLabel, setShowLabel]= useState(false)
    const refObj= useRef()
    const labelRef= useRef()

    useLayoutEffect(()=>{
        if(showLabel){
            const width1=refObj.current.getBoundingClientRect().width
            const width2=labelRef.current.getBoundingClientRect().width
            
            refObj.current.style.left=`${-(width1-width2)/2}px`
        }

    },[showLabel])


    const handleMouseEnter=(e)=>{

        setShowLabel(true)
    

    }
    const handleMoseLeave=()=>{
        setShowLabel(false)
    }
   
    

    const style=isActive?{backgroundColor:'green'}:{backgroundColor:'orange'}
    const label=isActive?'play ':'wait...'
    if(!val) return null
    return(
        <div className="label">
            <label ref={labelRef} className='options' style={style} onClick={()=>{
                onAction(isActive?'active':'in-active')
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMoseLeave}
                >
                    {label} 
            </label>
            <Tooltip isActive={isActive} showLabel={showLabel} ref={refObj}/>
        </div>
    )
}
export default Label