import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import styles from './Header.module.css';

const Header = ({ setBooks }) => { 

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => {
        setBooks(res.data.items || []); 
      })
      
  };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.header__text}>
          <p>My Book Searching App</p>
        </div>
        <div className={styles.input}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Find book"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <button onClick={handleSearch}>
            <BsSearch fontSize={'20px'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;






