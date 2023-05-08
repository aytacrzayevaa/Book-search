import React from 'react';
import styles from './Card.module.css'
const Card = ({ book }) => {
  return (
    
    <div className={styles.card} key={book.id}>
      <div className={styles.card__img}>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className={styles.card__body}>
        <h2>{book.volumeInfo.title}</h2>
        <h3>{book.volumeInfo.authors.join(', ')}</h3>
        <div className={styles.card__btns}>
          <button>
            <a href={book.volumeInfo.previewLink}>Preview</a>
          </button>
          <button>
            <a href={book.volumeInfo.infoLink}>Details</a>
          </button>
        </div>
      </div>
    </div>
  
  );
};

export default Card;
