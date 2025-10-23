"use client"
import TabsWidget from "@/components/tabs-widget"
import GalleryWidget from "@/components/gallery-widget"
import Button from '@/components/button'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="flex h-screen">
        <div style={{ background: '#222', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Step 2: Component ko use kiya */}
      <Button /> 
      
    </div>
        {/* Left half - Empty */}
        <div className="hidden md:flex md:w-1/2" />

        {/* Right half - Widgets */}
        <div className="w-full md:w-1/2 p-8 flex flex-col gap-8 overflow-y-auto">
          {/* Top Widget - Tabs */}
          <TabsWidget />

          {/* Bottom Widget - Gallery */}
          <GalleryWidget />
        </div>
      </div>
    </div>
  )
}
