"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';
import { SignIn, SignedIn } from '@clerk/nextjs';

function layout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    const [totalUsage,setTotalUsage]=useState<Number>(0)
    const [updateCreditUsage,setUpdatedCreditUsage]=useState<any>()
    return (
        <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
            <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdatedCreditUsage}}>
        <div className='bg-slate-200 h-screen'>
        <SignedIn>
        <div className='md:w-64 hidden md:block fixed '>
              <SideNav/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
        </SignedIn>
        </div>
        </UpdateCreditUsageContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default layout
