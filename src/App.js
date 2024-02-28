
import './App.css';
import Text from './components/text.js';
import Nav from './components/nav.js';
import Alert from './components/alert.js'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Nav mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Text headings="Enter the text below" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
