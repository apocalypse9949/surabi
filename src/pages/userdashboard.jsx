"use client"

import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Profile from "./Profile"
import QR from "../components/QR"
import '../pages/UserProfile.css'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />
      case "QR":
        return <QR />
      case "register":
        // Handle register event tab
        window.location.href = "/events"
        return null
      case "schedule":
        // Handle schedule tab
        window.location.href = "/schedule"
        return null
      case "mySchedule":
        // Handle my schedule tab
        window.location.href = "/my-schedule"
        return null
      default:
        return <Profile />
    }
  }

  return (
    <div className="flex min-h-screen bg-purple-950">
      <div className="fixed left-0 top-0 h-screen z-50">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <main className="flex-1 p-4 md:p-8 ml-64 mt-20">
        <div className="max-w-4xl mx-auto bg-purple-900/50 rounded-xl p-4 md:p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
