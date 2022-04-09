import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { fetchValidGuild } from "../../../utils/api";
import React from 'react';
import { createStore } from 'state-pool';



const validateMiddlewareCookies = (req: NextRequest) => {
    const sessionID = req.cookies['connect.sid'];
    console.log(sessionID);
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
    console.log(req);
    console.log('headers');
    console.log(headers);
    if (!headers) return NextResponse.redirect('/');
    if (!req.page.params) return NextResponse.redirect('/menu');
    const { id } = req.page.params;
    const response = await fetchValidGuild(id, headers);
    return response.status === 200
      ? NextResponse.next()
      : NextResponse.redirect('http://www.alphaland.space');
  }