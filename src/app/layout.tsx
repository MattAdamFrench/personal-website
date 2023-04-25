import NavBar from '@/components/NavBar'
import './globals.css'

export const metadata = {
    title: 'Matt French | Software Engineer',
    description: 'Information about Matt French, a software engineer based in Bristol, UK.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </head>
            <body>
                {/* <NavBar /> */}
                {children}
            </body>
        </html>
    )
}
