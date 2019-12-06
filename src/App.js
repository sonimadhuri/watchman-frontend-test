import React from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import SimpleError from './components/SimpleError'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <p>Holy moly!</p>
          <SimpleError />
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
