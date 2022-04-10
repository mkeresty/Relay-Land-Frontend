import type { NextPage } from 'next'
import styles from '../utils/styles/home.module.scss';
import {FaDiscord} from 'react-icons/fa';
import axios from 'axios';



const Home: NextPage = () => {
  const handleLogin = ()=> {
    window.location.href = 'https://api-relay-mern.herokuapp.com/api/auth/discord'
    //window.location.href = 'https://api-relay-mern.herokuapp.com/api/auth/discord';
    //window.location.href = 'http://localhost:3001/api/auth/discord';
  }

  const login = async () => {
    const response = await axios.get(
      `https://api-relay-mern.herokuapp.com/api/auth/discord`,
      {
        withCredentials: true
      }
    );
  
    return response;
  }


  return(
    <div className=" page aligned-center">
      <div>
        <button className={styles.button} onClick={login}>
          <FaDiscord size={50} color="white"/>
          <span><div style={{ color:"white", border:"", cursor: "pointer"}} >Login with Discord</div></span>
        </button>
      </div>
    </div>
  );

};

export default Home;
