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

function App() {
  return (
    <Fragment>
		<Router>
		<header>
			<Navbar />
		</header>
			<Route exact path="/" component={Landing} />
			<Route path="/about" component={About} />
			<Route path="/blog" component={Blog} />
			<Route path="/video" component={Video} />
			<Route path="/download" component={Download} />
		

		
		<Footer />
	  </Router>
    </Fragment>
  );
}

export default App;
