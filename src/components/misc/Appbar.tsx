import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks" 
import styles from './index.module.scss'
import { RiMenu3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { HiChevronDown } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import dynamic from 'next/dynamic'
import { FC, useState } from "react";
import { getWalletAdapters } from "@solana/wallet-adapter-wallets";


import {
    Box,
    Button,
    Container,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from '@chakra-ui/react'
import ConnectToPhantom from "./MyWallet";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Guild } from "../../utils/types";
import { GuildContext } from "../../utils/contexts/GuldContext";
import { BsCoin } from "react-icons/bs";
/////
const routes = [
  // {
  //     name: 'dashboard',
  //     getPath: (id: string) => `/dashboard/${id}`,
  //     icon: <MdSpaceDashboard size={48} />
  // },
  {
      name: 'balance',
      getPath: (id: string) => `/dashboard/${id}/balance`,
      icon: <BsCoin size={48} />
  },
  ];

type Props = {
  guild?: Guild;
};


  const NetworkMetadata = (props: {
    icon: React.ComponentType | string
    chainName: string
    symbol: string
    isTestnet: boolean
  }) => {
    const { chainName } = props
    if (!props || !chainName) {
      return <></>
    }
    const { icon, symbol, isTestnet } = props
  
    const ChainIconElement = icon
    const iconSize = symbol === 'MATIC' ? 5 : 3
  
    return (
      <Flex gap={2}>
        <Box w={iconSize} h={iconSize}>
          <ChainIconElement />
        </Box>
        <Text>{chainName}</Text>
        {isTestnet && <Text color="grey">(testnet)</Text>}
      </Flex>
    )
  }
  



function getaddy(addy: string) {

}

  export const CustomConnect = () => {
    const web3 = useWeb3()
  
    const {
      address,
      chainId,
      connectWallet,
      disconnectWallet,
      getNetworkMetadata,
    } = web3
    const { switchNetwork } = useSwitchNetwork()
    console.log({ address} );
    
    
    
    let networkMetadata = null
  
    if (chainId) {
      networkMetadata = getNetworkMetadata(chainId);
      
    }
    
    // If a wallet is connected, show disconnect and switch network options
    return ( 
      <>
        {address ? 
        
        (        
          <Menu >
            
            
            <MenuButton color="black" background-color="teal" colorScheme="teal" minH={10} as={Button} rightIcon={<HiChevronDown />}>
              {networkMetadata && <NetworkMetadata {...networkMetadata} />}
            </MenuButton>
            
            <MenuList justifyContent="center">
            <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(1)}>
                Switch to Ethereum
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(137)}>
                Switch to Polygon
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(56)}>
                Switch to BSC
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(43114)}>
                Switch to AVAX
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(25)}>
                Switch to Cronos
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(1088)}>
                Switch to Metis
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(1285)}>
                Switch to MOVR
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={() => switchNetwork(128)}>
                Switch to HECO
              </MenuItem>
              <MenuItem justifyContent="center" color="black" onClick={disconnectWallet}>Switch Wallet</MenuItem>
              <MenuItem justifyContent="center" color="purple">{address}</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Button
            className={styles.eth}
              onClick={() => connectWallet('injected')}
              leftIcon={<IoMdWallet />}
              colorScheme="purple"
            >
              Connect MetaMask
            </Button>
          </>
        )}
      </>
    )
  }


export const Appbar: FC<Props> = ({ guild })=> {
    const router = useRouter();

    return (

        <div className={styles.appbar}>
            <div className={styles.icons}>
             </div>
             <a href="https://www.relaychain.com/">
                <img className={styles.relay} src="/relayicon.svg" height="48px" />
             </a>
            <div>
                <p> </p>
            </div>
            <div >
                <Container className={styles.eth}  colorScheme="teal" background-color="teal" maxW="container.md">
                    <Flex className={styles.eth} background-color="teal" flexDirection="column" w="100%" h="100%">
                        <Flex  cursor={"pointer"} background-color="teal" margin-right="2px" justifyContent="right" m={3.5}>
                            <CustomConnect />
                        </Flex>
                    </Flex>
                </Container>
            </div>
        </div>
        
    );
}