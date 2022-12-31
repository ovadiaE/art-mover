// middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const secret = 'HpvfCk3z/1lapfeLegdsFCB5Yp3KNkU/dSbM+fuuQPw='//FOR USE IN DEV ENVIRONEMNT ONLY

export function middleware(NextRequest:any) {  
    
    if(NextRequest.nextUrl.pathname.startsWith('/producer')){
        //I want to create a function that will run on succesfull login called verify token
        //If this function returns 200 a flag will be set in local storage, granting access to the producer panel
    }
}
