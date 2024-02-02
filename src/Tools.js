import React from 'react'
import './Tools.css'

class Tools extends React.Component{
   
    render(){
        const {
            children,
            onAction,
            count,
            activeState,
            onRefresh
        }=this.props

        // const count= React.Children.count(children.props.children)

        return (

            <div className='tools'>
                <div className='list-header'>
                  
                    <select value={activeState} name='status' onChange={onAction}>
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="in-active">In-Active</option>
                    </select>

                </div>
                <button onClick={onRefresh}>Refresh</button>
                {children}
                <div className='list-footer'>
                    Total games {count}
                </div>
            </div>
        )
    }
}
export default Tools