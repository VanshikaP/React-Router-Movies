import React, { useState } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    console.log(savedList);
    if(savedList.find(m => movie.id === m.id)){
      // console.log('movie found');
      alert(`${movie.title} is already saved`);
    } else {
      // console.log('movie not found');
      setSavedList( [...savedList, movie] );
    }
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route exact path='/movies/:movieID'>
        <Movie addToSavedList={addToSavedList}/>
      </Route>

    </div>
  );
};

export default App;
