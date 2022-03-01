import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Gallery from './components/gallery';
import Testmonials from './components/Testmonials/testimonials'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page"> 
        <div id="container-wrap">
         	<Sidebar></Sidebar> 
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Testmonials></Testmonials>
          <Gallery></Gallery>
          	</div>
      	</div>
      </div>
    );
  }
}
  
export default App;
