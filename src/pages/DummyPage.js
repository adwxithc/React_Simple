import React from 'react'
class DummyPage extends React.Component{
    componentDidMount(){
        console.log('componentDidMount',this.props.name);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate',this.props.name);
    }
    componentWillUnmount(){
        console.log('componentWillUnmount',this.props.name);
    }
    render(){
        return (
            <h4>Dummy Page {this.props.name}</h4>
        )
    }
}
export default DummyPage