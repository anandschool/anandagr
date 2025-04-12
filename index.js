
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div style={{textAlign: "center", marginTop: "50px"}}>
    <h1>Welcome to Anand School</h1>
    <p>React App deployed using Vercel</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
