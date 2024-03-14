import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';

import './App.css';

const App = () => (
  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route  element={<NotFound />} />
  </Routes>
);

export default App;
