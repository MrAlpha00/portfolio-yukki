import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import Home from '@/pages/Home'
import Hire from '@/pages/Hire'

function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (done) return null

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0a0a0f] flex items-center justify-center">
      <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 30 h40 l10 -15 l10 30 l10 -20 l10 20 l10 -15 l10 15 h40"
          stroke="#7c3aed"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="200"
          strokeDashoffset={done ? 0 : 200}
          className="preloader-path"
        />
        <circle cx="20" cy="30" r="4" fill="#7c3aed" className="preloader-node" />
        <circle cx="50" cy="15" r="3" fill="#06b6d4" className="preloader-node" />
        <circle cx="60" cy="45" r="3" fill="#06b6d4" className="preloader-node" />
        <circle cx="80" cy="25" r="3" fill="#06b6d4" className="preloader-node" />
        <circle cx="100" cy="35" r="3" fill="#06b6d4" className="preloader-node" />
        <circle cx="120" cy="20" r="3" fill="#06b6d4" className="preloader-node" />
        <circle cx="140" cy="40" r="3" fill="#06b6d4" className="preloader-node" />
        <circle cx="160" cy="30" r="3" fill="#06b6d4" className="preloader-node" />
        <circle cx="200" cy="30" r="4" fill="#7c3aed" className="preloader-node" />
      </svg>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Preloader />}
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
      <Footer />
    </>
  )
}
