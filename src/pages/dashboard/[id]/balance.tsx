import React, {useEffect, useState} from 'react';
import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layouts/dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import styles from './index.module.scss';
import { Button, Grid, GridItem, Spinner, Stack } from '@chakra-ui/react'

import { IoMdWallet } from 'react-icons/io';
import { FaCommentsDollar, FaEthereum } from "react-icons/fa";
import { SiBinance } from 'react-icons/si';
import { Icon } from '@iconify/react';
import maticIcon from '@iconify/icons-cryptocurrency/matic';
import { useWeb3 } from "@3rdweb/hooks";

import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';

import { CustomConnect } from "../../../components/misc/Appbar";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

import { fetchbob, fetchGuild, fetchPlease, fetchtest, fetchtest2, postminnow, postowner, postwhale } from '../../../utils/api';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


type Props = {
    guild: Guild;
  };


let minABI = [
    // balanceOf
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    // decimals
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
  ];


  
function loading() {
    return(
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='teal.500'
        size='xl'
        />
    )

}
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}



const getrelayethBalance = async (address: { address: string | undefined; }, idf: string) => {

    if (typeof address.address == 'undefined'){
        document.getElementById("balance")!.innerHTML = "Please connect wallet";
    };

    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);

    

    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/3bcaa0448d9349dc8e1dbef57e533189"))

    const ethtokenAddress = "0x5d843fa9495d23de997c394296ac7b4d721e841c";

    let contract = new web3.eth.Contract(minABI,ethtokenAddress);
    const balance = await contract.methods.balanceOf(address.address).call();
    const relayethbalance = web3.utils.fromWei(balance);
    console.log(relayethbalance );

    //const relayethbalance = 1;


    if(relayethbalance >= 0.001 && relayethbalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
        postowner(idf);
    };
    if(relayethbalance >= 500 && relayethbalance < 5000 ){
        console.log('minnow');
        postminnow(idf);
    };
    if(relayethbalance >= 5000){
        console.log('whale');
        postwhale(idf);
    };


    document.getElementById("balance")!.innerHTML = relayethbalance ;
    //console.log(bal)
    return(
        relayethbalance 
    )
    };
  };

// const ethbalance = async (address: { address: string | undefined; }, idf: string) => {
//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/3bcaa0448d9349dc8e1dbef57e533189"))

//     const bal = await web3.eth.getBalance(address.address);
//     const etherValue = Web3.utils.fromWei(bal, 'ether');

//     console.log(etherValue);
//     if(etherValue>0){
//         console.log(idf);
//         console.log("truuuu");
//         fetchtest2(idf);
//         //console.log(GetServerSidePropsContext)
//         //ethrole(GetServerSidePropsContext);
//     };

//     document.getElementById("balance").innerHTML = etherValue;
//     //console.log(bal)
//     return(
//         etherValue
//     )
// };


//137
const getrelapolyBalance = async (address: { address: string | undefined; }, idf: string) => {
    if (typeof address.address == 'undefined'){
        document.getElementById("balance")!.innerHTML = "Please connect wallet";
    };

    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);

    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-rpc.com/"))
    const polytokenAddress = "0x904371845Bc56dCbBcf0225ef84a669b2fD6bd0d";

    let contract = new web3.eth.Contract(minABI,polytokenAddress);
    const balance = await contract.methods.balanceOf(address.address).call();
    const relaypolybalance = web3.utils.fromWei(balance);
    console.log(relaypolybalance );


    if(relaypolybalance >= 0.001 && relaypolybalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
    };
    if(relaypolybalance >= 500 && relaypolybalance < 5000 ){
        console.log('minnow');
    };
    if(relaypolybalance >= 5000){
        console.log('whale');
    };

    document.getElementById("balance")!.innerHTML = relaypolybalance ;
    //console.log(bal)
    return(
        relaypolybalance 
    )
    };
  };

// const polybalance = async (address: { address: string | undefined; }) => {
//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-rpc.com/"))

//     const bal = await web3.eth.getBalance(address.address);
//     const polyValue = Web3.utils.fromWei(bal, 'ether');

//     console.log(polyValue);

//     //var balance = Number(web3.fromWei(bal, "ether"));
//     //console.debug("Balance for address["+address+"]="+balance);

//     //var balance_element = document.getElementById("balance");
//     //balance_element.innerHTML = balance.valueOf();
//     document.getElementById("balance").innerHTML = polyValue;
//     //console.log(bal)
//     return(
//         polyValue
//     )
// };
    
//56
const getrelaybscBalance = async (address: { address: string | undefined; }, idf: string) => {
    if (typeof address.address == 'undefined'){
        document.getElementById("balance")!.innerHTML = "Please connect wallet";
    };

    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);

    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443"))
    const bsctokenAddress = "0xE338D4250A4d959F88Ff8789EaaE8c32700BD175";

    let contract = new web3.eth.Contract(minABI,bsctokenAddress);
    const balance = await contract.methods.balanceOf(address.address).call();
    const relaybscbalance = web3.utils.fromWei(balance);
    console.log(relaybscbalance );


    if(relaybscbalance >= 0.001 && relaybscbalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
    };
    if(relaybscbalance >= 500 && relaybscbalance < 5000 ){
        console.log('minnow');
    }
    if(relaybscbalance >= 5000){
        console.log('whale');
    };

    document.getElementById("balance")!.innerHTML = relaybscbalance ;
    //console.log(bal)
    return(
        relaybscbalance 
    )
    };
  };


// const bscbalance = async (address: { address: string | undefined; }) => {
//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443"))

//     const bal = await web3.eth.getBalance(address.address);
//     const bscValue = Web3.utils.fromWei(bal, 'ether');

//     console.log(bscValue);

//     //var balance = Number(web3.fromWei(bal, "ether"));
//     //console.debug("Balance for address["+address+"]="+balance);

//     //var balance_element = document.getElementById("balance");
//     //balance_element.innerHTML = balance.valueOf();
//     document.getElementById("balance").innerHTML = bscValue;
//     //console.log(bal)
//     return(
//         bscValue
//     )
// };
   

//43114
const getrelayavaxbalance = async (address: { address: string | undefined; }, idf: string) => {

    if (typeof address.address == 'undefined'){
        document.getElementById("balance")!.innerHTML = "Please connect wallet";
    };

    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);

    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://api.avax.network/ext/bc/C/rpc"))

    const avaxtokenAddress = "0x78c42324016cd91D1827924711563fb66E33A83A";

    let contract = new web3.eth.Contract(minABI,avaxtokenAddress);

    const balance = await contract.methods.balanceOf(address.address).call();
    const relayavaxbalance = web3.utils.fromWei(balance);
    console.log(relayavaxbalance);

    if(relayavaxbalance >= 0.001 && relayavaxbalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
    };
    if(relayavaxbalance >= 500 && relayavaxbalance < 5000 ){
        console.log('minnow');
    };
    if(relayavaxbalance >= 5000){
        console.log('whale');
    };


    //var balance = Number(web3.fromWei(bal, "ether"));
    //console.debug("Balance for address["+address+"]="+balance);

    //var balance_element = document.getElementById("balance");
    //balance_element.innerHTML = balance.valueOf();
    document.getElementById("balance")!.innerHTML = relayavaxbalance;
    //console.log(bal)
    return(
        relayavaxbalance
    )
    };
};

// const hecobalance = async (address: { address: string | undefined; }) => {
//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://http-mainnet.hecochain.com"))

//     const bal = await web3.eth.getBalance(address.address);
//     const hecoValue = Web3.utils.fromWei(bal, 'ether');

//     console.log(hecoValue);

//     //var balance = Number(web3.fromWei(bal, "ether"));
//     //console.debug("Balance for address["+address+"]="+balance);

//     //var balance_element = document.getElementById("balance");
//     //balance_element.innerHTML = balance.valueOf();
//     document.getElementById("balance").innerHTML = hecoValue;
//     //console.log(bal)
//     return(
//         hecoValue
//     )
// };
   
//25
const getrelaycronosBalance = async (address: { address: string | undefined; }, idf: string) => {

    if (typeof address.address == 'undefined'){
        document.getElementById("balance")!.innerHTML = "Please connect wallet";
    };

    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);


    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://evm.cronos.org/"))
    const cronostokenAddress = "0x9C29650a1B273A031A35F3121914aae882B144A4";

    let contract = new web3.eth.Contract(minABI,cronostokenAddress);
    const balance = await contract.methods.balanceOf(address.address).call();
    const relaycronosbalance = web3.utils.fromWei(balance);
    console.log(relaycronosbalance);


    if(relaycronosbalance >= 0.001 && relaycronosbalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
    };
    if(relaycronosbalance >= 500 && relaycronosbalance < 5000 ){
        console.log('minnow');
    };
    if(relaycronosbalance >= 5000){
        console.log('whale');
    };


    document.getElementById("balance")!.innerHTML = relaycronosbalance ;
    //console.log(bal)
    return(
        relaycronosbalance 
    )
    };
  };


  //1088
  const getrelaymetisBalance = async (address: { address: string | undefined; }, idf: string) => {
    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);

    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://andromeda-explorer.metis.io/api"))
    // const metistokenAddress = "0xfe282Af5f9eB59C30A3f78789EEfFA704188bdD4";

    // let contract = new web3.eth.Contract(minABI,metistokenAddress);
    // const balance = await contract.methods.balanceOf(address.address).call();
    // const relaymetisbalance = web3.utils.fromWei(balance);
    // console.log(relaymetisbalance);

    const metisresp = await axios.get(`https://andromeda-explorer.metis.io/api?module=account&action=tokenbalance&contractaddress=0xfe282Af5f9eB59C30A3f78789EEfFA704188bdD4&address=${address.address}
    `);
    

    const balance = metisresp.data.result;

    const relaymetisbalance = web3.utils.fromWei(balance);
    
    console.log(relaymetisbalance);

    if(relaymetisbalance >= 0.001 && relaymetisbalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
    };
    if(relaymetisbalance >= 500 && relaymetisbalance < 5000 ){
        console.log('minnow');
    }
    if(relaymetisbalance >= 5000){
        console.log('whale');
    }

    document.getElementById("balance")!.innerHTML = relaymetisbalance;
    //console.log(bal)
    return(
        relaymetisbalance
    )
    }
  };

  //1285
  const getrelaymovrBalance = async (address: { address: string | undefined; }, idf: string) => {

    if (typeof address.address == 'undefined'){
        document.getElementById("balance")!.innerHTML = "Please connect wallet";
    };

    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);

    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://moonriver.blastapi.io/4ee78f43-3bf5-4aa1-9712-ab5b4fb06851"))
    const movrtokenAddress = "0xAd7F1844696652ddA7959a49063BfFccafafEfe7";

    let contract = new web3.eth.Contract(minABI,movrtokenAddress);
    const balance = await contract.methods.balanceOf(address.address).call();
    const relaymovrbalance = web3.utils.fromWei(balance);
    console.log(relaymovrbalance);



    if(relaymovrbalance >= 0.001 && relaymovrbalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
    };
    if(relaymovrbalance >= 500 && relaymovrbalance < 5000 ){
        console.log('minnow');
    };
    if(relaymovrbalance >= 5000){
        console.log('whale');
    };

    document.getElementById("balance")!.innerHTML = relaymovrbalance;
    //console.log(bal)
    return(
        relaymovrbalance
    )
    };
  };


//128
  const getrelayhecoBalance = async (address: { address: string | undefined; }, idf: string) => {

    if (typeof address.address == 'undefined'){
        document.getElementById("balance")!.innerHTML = "Please connect wallet";
    };

    if (typeof address.address !== 'undefined'){
    document.getElementById("balance")!.innerHTML ="<img src=\"/loading (1).svg\" width=\"50px\" height=\"50px\">";
    await delay(300);

    const Web3 = require("web3")

    const web3 = new Web3(new Web3.providers.HttpProvider("https://http-mainnet.hecochain.com"));
    const hecotokenAddress = "0xf1361d97a1b134ebf96a9aa482bc005d4f41177e";

    let contract = new web3.eth.Contract(minABI,hecotokenAddress);
    const balance = await contract.methods.balanceOf(address.address).call();
    const relayhecobalance = web3.utils.fromWei(balance);
    console.log(relayhecobalance);



    if(relayhecobalance >= 0.001 && relayhecobalance < 500){
        console.log(idf);
        console.log("truuuu");
        //fetchtest2(idf);
        //console.log(GetServerSidePropsContext)
        //ethrole(GetServerSidePropsContext);
    };
    if(relayhecobalance >= 500 && relayhecobalance < 5000 ){
        console.log('minnow');
    };
    if(relayhecobalance >= 5000){
        console.log('whale');
    };

    document.getElementById("balance")!.innerHTML = relayhecobalance;
    //console.log(bal)
    return(
        relayhecobalance
    )
    };
  };


//   const getrelayharmBalance = async (address: { address: string | undefined; }, idf: string) => {

//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://api.s0.t.hmny.io"));
//     const hecotokenAddress = "0xf1361d97a1b134ebf96a9aa482bc005d4f41177e";

//     let contract = new web3.eth.Contract(minABI,hecotokenAddress);
//     const balance = await contract.methods.balanceOf(address.address).call();
//     const relayhecobalance = web3.utils.fromWei(balance);
//     console.log(relayhecobalance);



//     if(relayhecobalance >0){
//         console.log(idf);
//         console.log("truuuu");
//         //fetchtest2(idf);
//         //console.log(GetServerSidePropsContext)
//         //ethrole(GetServerSidePropsContext);
//     };

//     document.getElementById("balance").innerHTML = relayhecobalance;
//     //console.log(bal)
//     return(
//         relayhecobalance
//     )
//   };

//   const getrelayiotBalance = async (address: { address: string | undefined; }, idf: string) => {

//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/iotex"));
//     const hecotokenAddress = "0xf1361d97a1b134ebf96a9aa482bc005d4f41177e";

//     let contract = new web3.eth.Contract(minABI,hecotokenAddress);
//     const balance = await contract.methods.balanceOf(address.address).call();
//     const relayhecobalance = web3.utils.fromWei(balance);
//     console.log(relayhecobalance);



//     if(relayhecobalance >0){
//         console.log(idf);
//         console.log("truuuu");
//         //fetchtest2(idf);
//         //console.log(GetServerSidePropsContext)
//         //ethrole(GetServerSidePropsContext);
//     };

//     document.getElementById("balance").innerHTML = relayhecobalance;
//     //console.log(bal)
//     return(
//         relayhecobalance
//     )
//   };


// const cronosbalance = async (address: { address: string | undefined; }) => {
//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://evm.cronos.org/"))

//     const bal = await web3.eth.getBalance(address.address);
//     const cronosValue = Web3.utils.fromWei(bal, 'ether');

//     console.log(cronosValue);

//     //var balance = Number(web3.fromWei(bal, "ether"));
//     //console.debug("Balance for address["+address+"]="+balance);

//     //var balance_element = document.getElementById("balance");
//     //balance_element.innerHTML = balance.valueOf();
//     document.getElementById("balance").innerHTML = cronosValue;
//     //console.log(bal)
//     return(
//         cronosValue
//     )
// };
   

// const harmbalance = async (address: { address: string | undefined; }) => {
//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://api.s0.t.hmny.io"))

//     const bal = await web3.eth.getBalance(address.address);
//     const harmValue = Web3.utils.fromWei(bal, 'ether');

//     console.log(harmValue);

//     //var balance = Number(web3.fromWei(bal, "ether"));
//     //console.debug("Balance for address["+address+"]="+balance);

//     //var balance_element = document.getElementById("balance");
//     //balance_element.innerHTML = balance.valueOf();
//     document.getElementById("balance").innerHTML = harmValue;
//     //console.log(bal)
//     return(
//         harmValue
//     )
// };


// const fantbalance = async (address: { address: string | undefined; }) => {
//     const Web3 = require("web3")

//     const web3 = new Web3(new Web3.providers.HttpProvider("https://rpcapi.fantom.network"))

//     const bal = await web3.eth.getBalance(address.address);
//     const fantValue = Web3.utils.fromWei(bal, 'ether');

//     console.log(fantValue);

//     //var balance = Number(web3.fromWei(bal, "ether"));
//     //console.debug("Balance for address["+address+"]="+balance);

//     //var balance_element = document.getElementById("balance");
//     //balance_element.innerHTML = balance.valueOf();
//     document.getElementById("balance").innerHTML = fantValue;
//     //console.log(bal)
//     return(
//         fantValue
//     )
// };


// const solbalance = async ({ publicKey }) => {

//     //const web3s = useWallet();
//     //const { publicKey } = web3s;
//     console.log({ publicKey });

//     const web3 = require("@solana/web3.js");

//     const solana = new web3.Connection("https://api.mainnet-beta.solana.com");

//     const bal = await solana.getBalance(publicKey);

//     console.log(bal);
//     const bal2 = bal / 1000000000;

//     //var balance = Number(web3.fromWei(bal, "ether"));
//     //console.debug("Balance for address["+address+"]="+balance);

//     //var balance_element = document.getElementById("balance");
//     //balance_element.innerHTML = balance.valueOf();
//     document.getElementById("balance2").innerHTML = bal2;
//     //console.log(bal)
//     return(
//         bal2
//     )
// };

const BalancePage: NextPageWithLayout<Props> = ({ guild }) => {

    const idf = guild.duserid;

    const web3 = useWeb3();
    
  
    const {
      address,
      chainId,
      connectWallet,
      disconnectWallet,
      getNetworkMetadata,
    } = web3



    return( 
    
    
    <div color="white" className="page" align-items='center' >
        <Stack align='center' height="100">
            <div className={styles.words}>Balance</div>
        </Stack>
        <Stack align='center' height="100">
        <div className={styles.words2} id="balance"></div>
        </Stack>
        <div className={styles.container}>
        <Stack h={200} direction='row' spacing={8} align='center' alignContent={'center'} >
        <Button onClick={()=> getrelayethBalance({ address }, idf)   } colorScheme='teal' variant='outline' h={140} w={130}>
            <FaEthereum color="white" size={50} />
        </Button>
        <Button onClick={()=> getrelaybscBalance({ address }, idf)} colorScheme='teal' variant='outline' h={140} w={130}>
            <SiBinance color="white" size={50} />
        </Button>
        <Button onClick={()=> getrelapolyBalance({ address }, idf)} colorScheme='teal' variant='outline' h={140} w={130}>
            <Icon icon={maticIcon} color="white" height="50px"/>
        </Button>
        <Button onClick={(()=> getrelayavaxbalance({ address }, idf))} colorScheme='teal' variant='outline' h={140} w={130}>
            <img color="white" src="/avax.svg" width="60px"></img>
        </Button>
        </Stack>
        <Stack h={200} direction='row' spacing={8} align='center' >
        <Button onClick={()=> getrelayhecoBalance({ address }, idf)} colorScheme='teal' variant='outline' h={140} w={130}>
            <img color="white" src="/heco.svg"></img>
        </Button>
        <Button onClick={()=> getrelaycronosBalance({ address }, idf)} h={140} w={130} colorScheme='teal' variant='outline'>
            <img className={styles.img} color="white" src="/cronos.svg" ></img>
        </Button>
        <Button onClick={()=> getrelaymetisBalance({ address }, idf)} colorScheme='teal' variant='outline' h={140} w={130}>
            <img color="white" src="/slider-metis-logo(2).png"></img>
        </Button>
        <Button onClick={()=> getrelaymovrBalance({ address }, idf)} colorScheme='teal' variant='outline' h={140} w={130}>
            <img color="white" src="/movr.svg"></img>
        </Button>
        </Stack>
        </div>

    </div>
    
        
    )
};

BalancePage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export async function plsprops(ctx: GetServerSidePropsContext) {
    return(fetchPlease(ctx))
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return fetchGuild(ctx);
  }

export default BalancePage;

