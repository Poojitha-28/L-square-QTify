import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'; // Adjust the path according to your project structure

const SearchComponent = ({ placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <input
          className={styles.search}
          name="album"
          placeholder={placeholder}
        />
      </div>
      <div>
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
