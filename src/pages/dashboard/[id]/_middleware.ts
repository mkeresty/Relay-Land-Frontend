import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { fetchValidGuild } from "../../../utils/api";
import React from 'react';
import { createStore } from 'state-pool';

const FRONTEND_URL= 'https://frontend.relayalpha.com';
//const FRONTEND_URL='http://localhost:3000';



const validateMiddlewareCookies = (req: NextRequest) => {
    const sessionID = req.cookies['connect.sid'];
    console.log('sessionID');
    console.log(sessionID);
    return sessionID 
    ? {
        Cookie: `connect.sid=${sessionID}`
    }
    : false;
}
export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log('using middleware');


    const headers = validateMiddlewareCookies(req);
    //console.log(req);
    console.log('validatemiddleware');
    //console.log(headers);
    if (!headers) return NextResponse.redirect('/');
    if (!req.page.params) return NextResponse.redirect('/menu');
    const { id } = req.page.params;
    //const response = await fetchValidGuild(id, headers);
    const response = 200;
    return response=== 200
      ? NextResponse.next()
      : NextResponse.redirect(FRONTEND_URL);
  }