import React, { useState, useEffect} from 'react';
import './index.css';
import './App.css';
import Photo from './Photo';
import search from './Images/searchicon.png';


const clientID = `?client_id=p1cATSWM7nGnCQDJrx-fyCkGbyIpp6mQRezQvwu7FD0`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const Kidpage=()=> {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const [newImages, setNewImages] = useState(false);
  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setNewImages(false);
      setLoading(false);
    }
     catch (error) {
      setNewImages(false);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newImages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  };

  return (
    <main>
        <section className='search'>
            <form className='search-form'>
            <input
                type='text'
                placeholder='search'
                value={query}
                onChange={(e) => {
                setQuery(e.target.value)
                setPhotos([])
                }}
                className='form-input'
            />

            
            <button type='submit' className='submit-btn' onClick={handleSubmit}>
                <img src={search} alt='search' className='search-icon' />
            </button>
            
            
            </form>
        </section>
    
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  );
}

export default Kidpage;