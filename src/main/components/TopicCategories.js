import React from 'react';
import styles from './TopicCategories.css';

const TopicCategories = ({ onSelect, categories }) => {

  return (
    <div className={styles.category}>
    {
      categories.map(category => {
        return (
          <div key={category.id} onClick={() => onSelect(category.id)} className={styles.categoryItem}>
            <img src={category.cover} />
            <div>{category.name}</div>
          </div>
        )
      })
    }
    </div>
  )
}

export default TopicCategories;
