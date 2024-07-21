import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { StyledEngineProvider } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [albumData, setAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [newSongsData, setNewSongsData] = useState([]);
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    (async () => {
      const topalbumData = await fetchalbumData();
      const newAlbData= await fetchnNewAlbumData();
      const newSongsData= await fetchnSongsData();
      const {data}= await filteredSource();

      setAlbumData(topalbumData);
      setNewAlbumData(newAlbData);
      setNewSongsData(newSongsData);
      setGenres(data);
    })();
  }, []);

  const fetchalbumData = async () => {
    const albumData = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    return albumData.data;
  }
  const fetchnNewAlbumData = async () => {
    const albumData = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
    return albumData.data;
  }
  const fetchnSongsData = async () => {
    const albumData = await axios.get('https://qtify-backend-labs.crio.do/songs');
    return albumData.data;
  }
  const filteredSource = async () => {
    const albumData = await axios.get('https://qtify-backend-labs.crio.do/genres');
    return albumData.data;
  }
  

  return (
    <StyledEngineProvider injectFirst>
      <NavBar />
      <Outlet context={{ "albumData": albumData,"newAlbumData":newAlbumData,"songsData":newSongsData,"filteredSource":genres}} />
    </StyledEngineProvider>
  );
}

export default App;
