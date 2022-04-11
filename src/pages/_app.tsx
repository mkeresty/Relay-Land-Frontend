import { ThirdwebProvider } from '@3rdweb/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { GuildContext } from '../utils/contexts/GuldContext';
import '../utils/styles/globals.scss';
import { AppPropsWithLayout, Guild, IdDec } from '../utils/types';
import { MoralisProvider } from "react-moralis";
import { fetchPlease } from '../utils/api';
import { IdContext } from '../utils/contexts/UserContext';
import axios from 'axios';
import https from 'https';

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});


function MyApp({ Component, pageProps }: AppPropsWithLayout<any>) {
  const [guild, setGuild] = useState<Guild>();

  const[id, setId] = useState<string>();
  console.log('LOOOOK');
  console.log(id);

  const getLayout = Component.getLayout ?? ((page)=> page);
  const supportedChainIds = [1, 4, 56, 137, 43114, 25, 1088, 1285, 128 ];
  const connectors = {injected: {}};    


    
  
  //return getLayout(<Component {...pageProps} />)
  return (
    <ThirdwebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
      <ChakraProvider>
  <GuildContext.Provider value={{ guild, setGuild }}>
    <IdContext.Provider value ={{ id, setId }}>
    {getLayout(<Component {...pageProps} />)}
    </IdContext.Provider>
  </GuildContext.Provider>
  </ChakraProvider>
  </ThirdwebProvider>
  );
}

export default MyApp;
