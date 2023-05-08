
import React from 'react';
import Card from './Card';
import styles from './Card.module.css';

const Content = ({ books }) => {
  return (
    <div className={styles.cards}>
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Content;