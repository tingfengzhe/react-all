import React from 'react'
//require('../../assets/less/header.less')

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <a href="javascript:void(0)" id="logo">AdminLTE</a>
                <ul className="menu-list">
                    <li className="hover"><a href="javascript:void(0)">测试1</a></li>
                    <li><a href="javascript:void(0)">测试2</a></li>
                    <li><a href="javascript:void(0)">测试3</a></li>
                    <li><a href="javascript:void(0)">测试4</a></li>
                    <li><a href="javascript:void(0)">测试5</a></li>
                </ul>
            </div>
        )
    }
}

export default Menu;