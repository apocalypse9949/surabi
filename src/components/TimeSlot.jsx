function TimeSlot({ time, events }) {
    return (
      <div className="grid grid-cols-[200px_1fr] gap-4 mb-6">
        <div className="bg-purple-600 text-white p-4 rounded-lg text-center">{time}</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-purple-900/50 p-4 rounded-lg text-white hover:bg-purple-800/50 transition-colors"
            >
              <div className="font-medium">{event.name}</div>
              <div className="text-purple-300 text-sm">({event.category})</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default TimeSlot
  
  