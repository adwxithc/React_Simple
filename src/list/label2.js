import React from 'react';
import { MyContex,MyNewContex } from '../pages/HomePage';
import './label.css';

class Label2 extends React.Component{

    render(){
        const{
            isActive,
            onAction
        }=this.props
        const style=isActive?{backgroundColor:'green'}:{backgroundColor:'orange'}
        const label=isActive?'play ':'wait...'
        return(
            <MyNewContex.Consumer>
                {
                    (val2)=>{
                        console.log('*******',val2);
                        return(
                            <MyContex.Consumer>
                            {
                            (val)=>{
                                if(!val) return null
                                return(
                                    <div className='label'>
                                        <label className='options' style={style} onClick={()=>{
                                            onAction(isActive?'active':'in-active')
                                            }}> {label} 
                                        </label>
                                        
                                        <label className={'tooltip' }>this is an {isActive?'active':'in-active'} label</label>
                                    </div>
                                )
                            }
                        }
                        </MyContex.Consumer>
                        )
                    }
                }
            </MyNewContex.Consumer>
        )
    }
}


export default Label2