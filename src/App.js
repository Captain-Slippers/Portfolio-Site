import React from 'react';
import './App.css';
import SideBar from './SideBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { number } from 'prop-types';


class ApiCall extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      data: []
    };
  }  

  fetchRef(){
    var that = this;

    fetch('https://adam-hall-portfolio.cdn.prismic.io/api/v2')
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      let response = result

      if (sessionStorage.getItem('refKey') == null){
        sessionStorage.setItem('refKey', response.refs[0].ref)
      }

      that.fetchData(sessionStorage.getItem('refKey'));
    })
  }

  fetchData(refKey) {
    var that = this;
    
    if (true) {
      fetch('https://adam-hall-portfolio.cdn.prismic.io/api/v2/documents/search?ref=' + refKey)
      .then(function (response) {
        return response.json()
      })
      .then(function (result) { 
        let response = result
        
        that.setState({data: response.results})
      });
    }
  }

  componentWillMount() {
    this.fetchRef();
  }

  

  render() {
    return (
      <div className="Main-Cards">
        {this.state.data.map(post =>
        <a href={post.data.project_link.url}>
          <Card>
            <CardContent>
              <h2>{post.data.name[0].text}</h2>
              <p>{post.data.description[0].text}</p>
              <p>Skills Used</p>
              <strong>{post.data.technology_used[0].text}</strong>
            </CardContent>
          </Card>
        </a>
        )}
      </div>
    )
  }
}

function App() {

  return (

    <div className="App">
      <SideBar />
      <div className="Main-Content">
        <h1>Work.</h1>
        <ApiCall />

      </div>

      
    </div>
    
  );
}

export default App;
