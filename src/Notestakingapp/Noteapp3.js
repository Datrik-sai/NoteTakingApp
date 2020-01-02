import React, { Component } from 'react';
import NoteappsideNav from './NoteappsideNav'
import { Layout, Icon, Menu, Breadcrumb } from 'antd'
const { Header, Footer, Sider, Content } = Layout;




class Noteapp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      documents: []
    }
  }

  add=()=> {
    const documents = this.state.documents.concat(NoteappsideNav);
    this.setState({ documents });
  }

  delete = index => {
    let { documents } = this.state;
    console.log(index);
    documents.splice(index, 1);
    this.setState({ documents });
};

update = (index, newText) => {
  var arry = this.state.documents;
  arry[index] = newText;
  this.setState({documents:arry})
}
  render() {

    const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } />
    });

    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', width: '100%', padding: 20 }} >
            <Icon type="form" style={{
              fontSize: '20px',
              color: '#fff',
              float: 'right',
              marginRight: 80
            }}
              onClick={ this.add } />
            <Icon type="delete" style={{ fontSize: '20px', color: '#fff', float: 'right', marginRight: 30 }} 
            onClick={() => this.delete()}/>
          </Header>

          <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                paddingTop: 110
              }}
            >
              <NoteappsideNav updateHandle = {this.update}/>
              { documents }
            </Sider>
            <Content style={{ padding: '0 50px', marginTop: 64, marginLeft: 200 }} >
              <Breadcrumb style={{ margin: '50px ' }}>

              </Breadcrumb>
              <div style={{ background: '#fff', padding: 20, minHeight: 480 }}>
                <textarea
                  placeholder="Enter the text here"
                  ref={note => (this.theNote = note)}
                />
                {this.arry}

              </div>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    )
  }
}

export default Noteapp
