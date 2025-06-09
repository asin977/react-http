import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <PostList /> */}
        <PostForm />
      </div>
    )
    
  }
}
export default App;
