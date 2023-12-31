import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local';

const libertine = localFont({
    src: [
        {
            path: '../fonts/LibertinusSerif-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../fonts/LibertinusSerif-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../fonts/LibertinusSerif-Italic.woff2',
            weight: 'normal',
            style: 'italic',
        },
        {
            path: '../fonts/LibertinusSerif-BoldItalic.woff2',
            weight: 'bold',
            style: 'italic',
        },
        {
            path: '../fonts/LibertinusSerif-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/LibertinusSerif-SemiboldItalic.woff2',
            weight: '600',
            style: 'italic',
        },
    ],
});

export const metadata: Metadata = {
    title: 'Project Showcase',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={libertine.className}>{children}</body>
        </html>
    );
}
