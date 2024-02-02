import { useReducer } from 'react'
import './Play.css'
const usageReducer=(state,action)=>{
        switch (action.type) {
            case 'change-val':
                
                return{
                    ...state,
                    value:state.value+action.payload
                }
                case 'change-color':
                
                return{
                    ...state,
                    color:action.payload
                }
             
            default:
                return state;
        }
}
function Play(){
 
    const [state, dispatch]=useReducer(usageReducer,{value:0,color:"white"})
  
   

    return(

        <div>
            <div className='play'>
                
                <div className="play-items" style={{backgroundColor:state.color}}>
                    <button className='changeButton'onClick={(state)=>{dispatch({
                        type:'change-val',
                        payload:1
                    })}}>INCREMENT</button>
                    <label >{state.value}</label>
                    <button className='changeButton' onClick={()=>{dispatch({
                        type:'change-val',
                        payload:-1
                    })}}>DECREMENT</button>
                </div>
                <button className='change-color' onClick={()=>{
                    dispatch({
                        type:'change-color',
                        payload:'red'
                    })
                }}>red</button>
                <button className='change-color' onClick={()=>{
                    dispatch({
                        type:'change-color',
                        payload:'green'
                    })
                }}>green</button>


            </div>
           
 
        </div>

          
 



    )
}
export default Play