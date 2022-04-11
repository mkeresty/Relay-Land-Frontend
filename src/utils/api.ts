import { GetServerSidePropsContext } from "next"
import axios from 'axios';
import { validateCookies } from "./helpers";
//const API_URL = 'https://api-relay-mern.herokuapp.com/api';
import { Guild } from './types'; 
import { FaCommentsDollar } from "react-icons/fa";
import { middleware } from "../pages/dashboard/[id]/_middleware";
import { NextFetchEvent, NextRequest } from "next/server";






//const API_URL = 'http://localhost:3001/api';
const API_URL= 'https://backend.relayalpha.com/api'

//const API_URL = 'http://www.alphaland.space/api';
//const API_URL = process.env.API_URL;

export const postowner = async (id: string) => {
    //statuscurrent();
    //console.log('middleware cookies');

    //const [globalid, setCount] = store.useState("globalid");
    //const data = 'dog';
    console.log('fetching...');
    const params = id;
    await axios.get(`${API_URL}/auth/owner`, { params, withCredentials: true
    })
    //const z = fetch(`${API_URL}/guilds/final`);
    //console.log(z);

};

export const postminnow = async (id: string) => {
    //statuscurrent();
    //console.log('middleware cookies');

    //const [globalid, setCount] = store.useState("globalid");
    //const data = 'dog';
    console.log('fetching...');
    const params = id;
    await axios.get(`${API_URL}/auth/minnow`, { params, withCredentials: true
    })
    //const z = fetch(`${API_URL}/guilds/final`);
    //console.log(z);

};

export const postwhale = async (id: string) => {
    //statuscurrent();
    //console.log('middleware cookies');

    //const [globalid, setCount] = store.useState("globalid");
    //const data = 'dog';
    console.log('fetching...');
    const params = id;
    await axios.get(`${API_URL}/auth/whale`, { params, withCredentials: true
    })
    //const z = fetch(`${API_URL}/guilds/final`);
    //console.log(z);

};



export const statuscurrent = async () =>{
    console.log('statusid');
    const statusid = axios.get(`${API_URL}/auth/status`, { withCredentials: true });
    console.log('statusid');
    console.log(statusid);
}

export const fetchtest = async (id: string) => {
    //console.log('middleware cookies');

    //const [globalid, setCount] = store.useState("globalid");
    //const data = 'dog';
    console.log('fetching...');
    const params = id;
    await axios.post(`${API_URL}/auth/tester`, { params, withCredentials: true, credentials: 'include', 
    })
    //const z = fetch(`${API_URL}/guilds/final`);
    //console.log(z);

};

export const fetchbob = async (ctx: GetServerSidePropsContext)=> {
    console.log("ummmmm")
    console.log(ctx)
}

export const fetchtest2 = async (id: string) => {
    statuscurrent();
    //console.log('middleware cookies');

    //const [globalid, setCount] = store.useState("globalid");
    //const data = 'dog';
    console.log('fetching...');
    const params = id;
    await axios.post(`${API_URL}/auth/testercoin`, { params, withCredentials: true, credentials: 'include', 
    })
    //const z = fetch(`${API_URL}/guilds/final`);
    //console.log(z);

};


export const fetchfinal = async (context: GetServerSidePropsContext)=> {
    const headers = validateCookies(context);
    //console.log(`HEADERS ARE ${headers}`)
    if (!headers) return { redirect: {destination: '/' } };
    try{
        const userid = await axios.get(`${API_URL}/guilds/final`, { headers, withCredentials: true, 
         });
        console.log('PLEASE');
        console.log(userid);
        return userid;

    } catch(err){
        console.log(err);
        return { redirect: {destination: '/' } };
    }
};

export const sendrole = async (context: GetServerSidePropsContext)=> {
    const headers = validateCookies(context);
    //const data = guild.duserid;
    console.log(`HEADERS ARE `)
    if (!headers) return { redirect: {destination: '/' } };
    try{
        const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${context.query.id}`, { headers, withCredentials: true, 
        });
        const info = guild.duserid;
        await axios.get(`${API_URL}/guilds/final`, { headers, 
         });
        console.log('PLEASE');
        console.log(info);
        return info;

    } catch(err){
        console.log(err);
        return { redirect: {destination: '/' } };
    }
};



export const fetchMutualGuilds = async (context: GetServerSidePropsContext)=> {
    console.log('fetchmutguildsflag');
    const headers = validateCookies(context);
    console.log(`HEADERS ARE `);

    
    if (!headers) return { redirect: {destination: '/' } };
    console.log("ugh func2");
    const ugh2 = await axios.get(`${API_URL}/guilds`, {headers});
    console.log(ugh2);
    try{
        const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, { headers,
         });
         console.log("ugh func");
         const ugh = await axios.get(`${API_URL}/guilds`, {headers});
         console.log(ugh);
        //  const {data: guilds} = await axios.get(`${API_URL}/guilds`, { headers,
        //  });
        console.log(guilds);
        return { props: { guilds } };
        //return guilds;

    } catch(err){
        console.log('mutguilds');
        console.log(err);
        return {  };


    }
};

export const fetchPlease = async (ctx: GetServerSidePropsContext)=> {
    //console.log(ctx);
    const headers = validateCookies(ctx);
    console.log(`headerssss pls ${headers}`)
    if (!headers) return { redirect: {destination: '/' } };
    try{
        const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${ctx.query.id}`, { headers, 
        });
        //console.log(guild);
        return {props: { guild } };
    } catch (err) {
        console.log(err);
        return { redirect: {destination: '/' } };


    }
};



export const fetchGuild = async (ctx: GetServerSidePropsContext)=> {
    //console.log(ctx);
    const headers = validateCookies(ctx);
    console.log(`headerssss ${headers}`)
    if (!headers) return { redirect: {destination: '/' } };
    try{
        const { data: guild } = await axios.get<Guild>(`${API_URL}/guilds/${ctx.query.id}`, { headers, 
        });
        //console.log(guild);
        return {props: { guild } };
    } catch (err) {
        console.log(err);
        return { redirect: {destination: '/' } };


    }

};



export const fetchValidGuild = (id: string, headers: HeadersInit) => {
    return fetch(`${API_URL}/guilds/${id}/permissions`, {
        headers,
    });
};

