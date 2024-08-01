import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeProvider from './components/common/ThemeProvider';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Donate from './components/donate/Donate';
import Chatbot from './components/chatbot/Chatbot';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PasswordReset from './components/auth/PasswordReset';
import UserProfile from './components/profile/UserProfile';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/donate" component={Donate} />
          <Route path="/chatbot" component={Chatbot} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password-reset" component={PasswordReset} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/testimonials" component={Testimonials} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
