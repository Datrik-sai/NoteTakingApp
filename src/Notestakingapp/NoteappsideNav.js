import React, { Component } from 'react'
import { Layout, Icon, Menu, Breadcrumb } from 'antd'
const { Header, Footer, Sider, Content } = Layout;

const  NoteappsideNav =(props)=>{
    return(
        <div>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                    <Menu.Item key="1">
                        <Icon type="edit" theme="filled" onClick = {() => props.updateHandle} />
                        <span className="nav-text" >
                            Note 1
                    </span>
                    </Menu.Item>

                </Menu>
            </div>
    )
} 

export default NoteappsideNav