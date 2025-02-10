import React from 'react'

function MySchedule() {
  // Mock registered events - in real app, this would come from user data/API
  const registeredEvents = [
    "Street Dance Group",
    "Glass Painting",
    "Mono Action"
  ]

  const scheduleData = [
    {
      time: "9:20 AM - 11:20AM",
      events: [
        { name: "Inaguratio", category: "" },
        { name: "Street Dance Group", category: "Dance" },
        { name: "Embroidery & Stitching", category: "Fashion" },
        { name: "World Wide Web", category: "Literature" },
      ],
    },
    {
      time: "11:30 AM - 1:30PM",
      events: [
        { name: "Cine Beats Solo", category: "Dance" },
        { name: "Metaphor Mania", category: "Literature" },
        { name: "Glass Painting", category: "Painting" },
        { name: "Classical Group Dance", category: "Dance" },
      ],
    },
    {
      time: "2:00 PM - 4:00PM",
      events: [
        { name: "Thematic Group Dance", category: "Dance" },
        { name: "Mono Action", category: "Drama" },
        { name: "Designing", category: "Fashion" },
        { name: "Cine Beats Group", category: "Dance" },
      ],
    },
    {
      time: "4:10 PM - 5:30PM",
      events: [
        { name: "Western Group", category: "Music" },
        { name: "Mimicry", category: "Drama" },
        { name: "Ad Film Contest", category: "Film" },
        { name: "Short Film Contest", category: "Film" },
      ],
    },
  ]

  // Filter schedule data to only include registered events
  const filteredSchedule = scheduleData.map(slot => ({
    time: slot.time,
    events: slot.events.filter(event => registeredEvents.includes(event.name))
  })).filter(slot => slot.events.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4 tracking-wide">
            My Schedule
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-500/80">
            DAY 1
          </h2>
        </div>

        {filteredSchedule.length === 0 ? (
          <div className="bg-gray-800/50 rounded-lg p-8 text-center backdrop-blur-sm border border-purple-500/10">
            <p className="text-purple-400 text-lg">No events registered yet.</p>
          </div>
        ) : (
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-purple-500/10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-purple-500/10">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-400 uppercase tracking-wider">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/10">
                  {filteredSchedule.map((slot, index) => (
                    <React.Fragment key={index}>
                      {slot.events.map((event, eventIndex) => (
                        <tr 
                          key={`${index}-${eventIndex}`}
                          className="hover:bg-purple-500/5 transition-colors duration-150 ease-in-out"
                        >
                          {eventIndex === 0 && (
                            <td 
                              rowSpan={slot.events.length} 
                              className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-purple-400 font-medium"
                            >
                              {slot.time}
                            </td>
                          )}
                          <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-purple-400">
                            {event.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                              {event.category || 'General'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Optional: Add a legend or additional information */}
        <div className="mt-8 text-center text-purple-400/60 text-sm">
          <p>Click on an event to view more details</p>
        </div>
      </div>
    </div>
  )
}

export default MySchedule 