import React from 'react'
import Header from './components/header'
import DummyPage from './pages/DummyPage'
import Play from './pages/Play.js'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer'

import HomePage from './pages/HomePage';

class  MyApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedPage:'home'
        }
    }
    onMenuSelect=(value)=>{
       
        this.setState({
            selectedPage:value
        })
       
    }
    getCurrentPage=()=>{
        const {
            selectedPage
        }=this.state
        switch(selectedPage)
        {
            case 'home':
                return <HomePage key={'home'}/>
                
            case 'play':
                return <Play name={'play'} key={'play'}/>
            case 'tryout':
                return <DummyPage name={'tryout'} key={'tryout'}/>
            case 'pre-book':
                return <DummyPage name={'pre-book'} key={'pre-book'}/>
            default:
                
        }
    }

    render(){
        return(

            <div className='app'>
            <Header onMenuSelect={this.onMenuSelect}/>

            <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/play' element={<Play name={'play'} />}></Route>
            <Route path='/tryout' element={<DummyPage name={'tryout'} />}></Route>
            </Routes>

            {/* {this.getCurrentPage()} */}

            
           
            <Footer />
            
            </div>
        )
    }
}

export default MyApp