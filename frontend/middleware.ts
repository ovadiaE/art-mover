// middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const secret = 'HpvfCk3z/1lapfeLegdsFCB5Yp3KNkU/dSbM+fuuQPw='//FOR USE IN DEV ENVIRONEMNT ONLY

export function middleware(request:any) {  
    
    if(request.nextUrl.pathname.startsWith('/producer')){
    
    }
}
