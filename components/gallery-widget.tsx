"use client"

import type React from "react"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Plus, Info } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
}

export default function GalleryWidget() {
  const [images, setImages] = useState<GalleryImage[]>([
    { id: "1", src: "/diagonal-stripes-pattern-1.jpg" },
    { id: "2", src: "/diagonal-stripes-pattern-2.jpg" },
    { id: "3", src: "/diagonal-stripes-pattern-3.jpg" },
  ])
  const [currentIndex, setCurrentIndex] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleAddImage = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const src = event.target?.result as string
        const newImage: GalleryImage = {
          id: Date.now().toString(),
          src,
        }
        setImages([...images, newImage])
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-700/30">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700/60 flex items-center justify-center border border-slate-600/30">
            <Info className="w-5 h-5 text-slate-400" />
          </div>
          <h2 className="text-white font-semibold text-lg">Gallery</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Add Image Button */}
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 bg-slate-700/60 hover:bg-slate-700 text-white px-6 py-2.5 rounded-full transition-all duration-200 text-sm font-medium border border-slate-600/30 hover:border-slate-600/50"
          >
            <Plus className="w-4 h-4" />
            ADD IMAGE
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full bg-slate-700/60 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 border border-slate-600/30 hover:border-slate-600/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-700/60 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 border border-slate-600/30 hover:border-slate-600/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
              index === currentIndex ? "ring-2 ring-blue-400 shadow-xl" : "opacity-70 hover:opacity-90"
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
    </div>
  )
}
