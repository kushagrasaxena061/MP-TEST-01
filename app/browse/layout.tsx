import React from 'react';
import { Nunito } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar';
import ClientOnly from '@/components/ClientOnly';
import RegisterModal from '@/components/Modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import LoginModal from '@/components/Modals/LoginModal';
import getCurrentUser from '@/actions/getCurrentUser';


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});


export default async function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
          <ToasterProvider/>
          <RegisterModal />
          <LoginModal/>
          <Navbar currentUser={currentUser} />
        </ClientOnly>
          {children}
      </body>
    </html>
  )
}