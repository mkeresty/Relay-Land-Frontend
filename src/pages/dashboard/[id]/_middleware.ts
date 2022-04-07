import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { fetchValidGuild } from "../../../utils/api";
import React from 'react';
import { createStore } from 'state-pool';



const validateMiddlewareCookies = (req: NextRequest) => {
    const sessionID = req.cookies['connect.sid'];
    return sessionID 
    ? {
        Cookie: `connect.sid=${sessionID}`
    }
    : false;
}
export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log('using middleware');


    const headers = validateMiddlewareCookies(req);
    if (!headers) return NextResponse.redirect('/');
    if (!req.page.params) return NextResponse.redirect('/menu');
    const { id } = req.page.params;
    const response = await fetchValidGuild(id, headers);
    return response.status === 200
      ? NextResponse.next()
      : NextResponse.redirect('https://joyful-pastelito-d4f9a3.netlify.app/');
  }