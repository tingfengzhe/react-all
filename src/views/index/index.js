import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from './action'

class Index extends React.Component {
    constructor(){
        super()
        this.test = this.test.bind(this)
        this.state = {
            a: 123
        }
    }
    test(){
        //this.props.action.getUserList()
        console.log(this)
        // this.setState({
        //     a: 234
        // });
        this.props.action.getUserList()
    }
    render(){
        //console.log(this)
        return (
            <div onClick={this.test}>Hello World! {this.props.home.address} {this.state.a}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        home: state.index,
        //address: state.address
    }
};

const mapDispatchToProps = dispatch => {
    console.log(1, dispatch)
    return {
        action: bindActionCreators(Actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
