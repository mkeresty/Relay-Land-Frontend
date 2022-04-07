import { GetServerSidePropsContext } from "next";
import { Guild } from "./types";

export const validateCookies = (ctx: GetServerSidePropsContext)=> {
    const sessionID = ctx.req.cookies['connect.sid'];
    console.log('sessionid');
    console.log(sessionID);
    return sessionID ? 
    {
        Cookie: `connect.sid=${sessionID}`
        
    }
    : false;
};

export const getIcon = (guild?: Guild) => 
    !guild || !guild.icon 
    ? '/c2.png'
    :  `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;

