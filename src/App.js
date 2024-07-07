import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import './App.css'; // Optional: for styling

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
