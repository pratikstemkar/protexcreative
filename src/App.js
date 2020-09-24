import React, {Fragment} from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Landing from './components/pages/Landing';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Video from './components/pages/Video';
import Download from './components/pages/Download';

import FirstBlog from './components/posts/2020-07-20-First-Blog';
import WhyUPSC from './components/posts/2020-07-23-Why-UPSC';
import PadmanabhaswamyTemple from './components/posts/2020-07-26-Padmanabhaswamy-Temple';

function App() {
  return (
    <Fragment>
		<Router>
		<header>
			<Navbar />
		</header>
			{/* PAGE URL */}
			<Route exact path="/" component={Landing} />
			<Route path="/about" component={About} />
			<Route exact path="/blog" component={Blog} />
			<Route path="/video" component={Video} />
			<Route path="/download" component={Download} />
		
			{/* POSTS URL */}
			<Route path="/blog/the-start" component={FirstBlog} />
			<Route path="/blog/why-i-am-preparing-for-upsc-cse" component={WhyUPSC} />
			<Route path="/blog/padmanabhaswamy-temple" component={PadmanabhaswamyTemple} />
		
		<Footer />
	  </Router>
    </Fragment>
  );
}

export default App;
