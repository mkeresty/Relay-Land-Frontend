import type { NextPage } from 'next'
import styles from '../utils/styles/home.module.scss';
import {FaDiscord} from 'react-icons/fa';

const Home: NextPage = () => {
  const handleLogin = ()=> {
    window.location.href = 'https://api-relay-mern.herokuapp.com/api/auth/discord';
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
