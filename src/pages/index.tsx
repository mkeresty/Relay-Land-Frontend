import type { NextPage } from 'next'
import styles from '../utils/styles/home.module.scss';
import {FaDiscord} from 'react-icons/fa';
import axios from 'axios';

const API_URL = 'https://backend.relayalpha.com/api';
//const API_URL = 'http://localhost:3001/api';

const Home: NextPage = () => {
  const handleLogin = ()=> {
    //window.location.href = 'https://sage-seahorse-ba4f36.netlify.app/api/auth/discord';
    window.location.href = `${API_URL}/auth/discord`;

    //window.location.href = 'http://localhost:3001/api/auth/discord';
  }

  const login = async () => {
    const response = await axios.get(
      `${API_URL}/auth/discord`,
      {
        withCredentials: true
      }
    );
  
    return response;
  }


  return(
    <div className=" page aligned-center">
      <div>
        <button className={styles.button} onClick={handleLogin}>
          <FaDiscord size={50} color="white"/>
          <span><div style={{ color:"white", border:"", cursor: "pointer"}} >Login with Discord</div></span>
        </button>
      </div>
    </div>
  );

};

export default Home;
