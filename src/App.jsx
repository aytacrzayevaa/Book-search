import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer'

import React, { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="app">
      <Header setBooks={setBooks} />
      <Content books={books} />
      <Footer/>

    </div>
  );
}

export default App;
