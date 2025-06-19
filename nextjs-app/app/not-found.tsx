"use client"
import { usePathname } from 'next/navigation';
export default function OnError(){
    const url = usePathname();
    return (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">An error occurred</h1>
        <p className="text-lg">Please try again later.</p>
        {/* url */}
        <p className="text-sm text-gray-500">URL: {url}</p>
    </div>)

}