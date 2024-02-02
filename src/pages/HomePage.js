import React, { useCallback, useEffect, useState } from 'react'
import Tools from '../Tools.js';

import SimpleList from '../list/SimpleList.js'
import JustInfo from '../JustInfo.js'


const MyContex= React.createContext()
const MyNewContex= React.createContext(444)
function  HomePage(){


    const [data,setData]= useState([])
    const [activeState,setActiveState]= useState('all')
    const [showLabels,setShowLabels]= useState(true)
    const testVal=useCallback(()=>{
        console.log('hello its')
    },[])


    useEffect(()=>{
        console.log('componentDidMount called using useEffect for functional component')

        fetch('Data.json')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setData(data)
        })
    },[])

    const onListChange=(e)=>{
        const value=e.target.value
     
        setActiveState(value)

    }

    const handleDelete=(obj)=>{
       
        const newList= data.filter(item=>item.id!==obj.id)
        setData(newList)
    }
    
    const handleLabelClick=(value)=>{
        setActiveState(value)
    }

    const handleRefresh=()=>{
        fetch('Data2.json')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setData(data)
        })
    }
    const handleShowLabel=(e)=>{
        setShowLabels(e.target.checked)
    }
   

        const newList= data.filter((item)=>{

            if(activeState==='all'){
                return true
            }else if(activeState==='active'){
                return item.isActive===true
            }
            return item.isActive===false
            
        })

        return (
          
            <div>
                <input checked={showLabels} type='checkbox' onChange={handleShowLabel}/> show labels
                <MyNewContex.Provider value={100}>
                    <MyContex.Provider value={showLabels}>
                        <Tools onRefresh={handleRefresh} onAction ={onListChange} activeState={activeState} count={newList.length}>
                            <SimpleList data={newList} onLabelClick ={handleLabelClick} onAction={handleDelete}/>
                        </Tools>
                        <JustInfo val={testVal} />
                    </MyContex.Provider>
                </MyNewContex.Provider>
            </div>

          
        )
            
}
export default HomePage

export{
    MyContex,
    MyNewContex
}