"use client"

import { useState } from "react"
import { Info } from "lucide-react"

type TabType = "about" | "experiences" | "recommended"

interface TabContent {
  [key: string]: string
}

const tabContent: TabContent = {
  about:
    "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
  experiences:
    "With over 15 years of experience in sales and business development, I've had the opportunity to work with some of the most innovative companies in the industry. My expertise spans across enterprise solutions, client relationship management, and strategic partnerships.",
  recommended:
    "Based on your profile and interests, I'd recommend exploring our latest product offerings and connecting with our team for a personalized demo. We have some exciting updates coming soon that align perfectly with your needs.",
}

export default function TabsWidget() {
  const [activeTab, setActiveTab] = useState<TabType>("about")

  const tabs: { id: TabType; label: string }[] = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-700/30">
      {/* Header with icon */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700/60 flex items-center justify-center border border-slate-600/30">
            <Info className="w-5 h-5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-8 bg-slate-900/40 rounded-full p-1.5 w-fit border border-slate-700/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
              activeTab === tab.id ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content - Scrollable */}
      <div className="max-h-48 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800/30">
        <p className="text-slate-300 leading-relaxed text-sm font-light whitespace-pre-wrap">{tabContent[activeTab]}</p>
      </div>
    </div>
  )
}
