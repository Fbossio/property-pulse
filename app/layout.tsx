import '@/assets/styles/globals.css';
import { ReactNode } from "react";

export const metadata = {
    title: 'Property Pulse | Find the Perfect Rental',
    description: 'Find the perfect rental property with Property Pulse. Search for apartments, houses, and condos for rent in your area.',
    keywords: 'rental, apartment, house, condo, property, real estate',
}


interface MainLayoutProps {
    children: ReactNode;
  }
  
const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <html lang="en">
        <body>
        <div>{children}</div>
        </body>        
    </html>
    
  )
}

export default MainLayout