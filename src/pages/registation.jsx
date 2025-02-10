import React, { useState } from 'react';
import { Plus, Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  category: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
}

interface TimeSlot {
  time: string;
  events: Event[];
}

interface DaySchedule {
  date: string;
  timeSlots: TimeSlot[];
}

function App() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const schedule: DaySchedule[] = [
    {
      date: "March 15, 2024",
      timeSlots: [
        {
          time: "9:20 AM - 11:20AM",
          events: [
            {
              id: 1,
              title: "Street Dance Group",
              category: "Dance",
              time: "9:20 AM - 11:20AM",
              location: "Studio A",
              capacity: 30,
              registered: 18
            },
            {
              id: 2,
              title: "Embroidery & Stitching",
              category: "Fashion",
              time: "9:20 AM - 11:20AM",
              location: "Workshop Room",
              capacity: 20,
              registered: 12
            },
            {
              id: 3,
              title: "World Wide Web",
              category: "Literature",
              time: "9:20 AM - 11:20AM",
              location: "Lecture Hall",
              capacity: 40,
              registered: 25
            }
          ]
        },
        {
          time: "11:30 AM - 1:30PM",
          events: [
            {
              id: 4,
              title: "Classical Group Dance",
              category: "Dance",
              time: "11:30 AM - 1:30PM",
              location: "Main Hall",
              capacity: 25,
              registered: 15
            },
            {
              id: 5,
              title: "Modern Poetry",
              category: "Literature",
              time: "11:30 AM - 1:30PM",
              location: "Room 101",
              capacity: 30,
              registered: 20
            }
          ]
        },
        {
          time: "2:00 PM - 4:00PM",
          events: [
            {
              id: 6,
              title: "Photography Basics",
              category: "Art",
              time: "2:00 PM - 4:00PM",
              location: "Studio B",
              capacity: 15,
              registered: 10
            }
          ]
        }
      ]
    },
    {
      date: "March 16, 2024",
      timeSlots: [
        {
          time: "9:20 AM - 11:20AM",
          events: [
            {
              id: 7,
              title: "Hip Hop Workshop",
              category: "Dance",
              time: "9:20 AM - 11:20AM",
              location: "Studio A",
              capacity: 25,
              registered: 20
            }
          ]
        },
        {
          time: "11:30 AM - 1:30PM",
          events: [
            {
              id: 8,
              title: "Creative Writing",
              category: "Literature",
              time: "11:30 AM - 1:30PM",
              location: "Library",
              capacity: 20,
              registered: 15
            }
          ]
        }
      ]
    }
  ];

  const handleRegister = (eventId: number) => {
    setSelectedEvent(eventId);
    // Add registration logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-950 text-white">
      {/* Main container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Responsive heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center sm:text-left">
          Event Schedule
        </h1>
        
        {schedule.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-8 sm:mb-12 lg:mb-16">
            {/* Date header with responsive spacing and sizing */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4">
              <Calendar className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-300">
                {day.date}
              </h2>
            </div>
            
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {day.timeSlots.map((slot, slotIndex) => (
                <div key={slotIndex} className="relative">
                  {/* Time slot header with responsive sizing */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4 lg:mb-5 px-2 sm:px-4">
                    <Clock className="text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-purple-200">
                      {slot.time}
                    </h3>
                  </div>
                  
                  {/* Responsive grid for event cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {slot.events.map((event) => (
                      <div 
                        key={event.id}
                        className="bg-purple-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 lg:p-6 border border-purple-700/50 hover:border-purple-500 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl"
                      >
                        <div className="flex justify-between items-start mb-3 sm:mb-4">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-2">
                              {event.title}
                            </h3>
                            <span className="text-sm sm:text-base text-purple-300">
                              {event.category}
                            </span>
                          </div>
                          <button
                            onClick={() => handleRegister(event.id)}
                            className={`p-2 rounded-full transition-colors ${
                              selectedEvent === event.id
                                ? 'bg-purple-500 text-white'
                                : 'bg-purple-800 hover:bg-purple-700'
                            }`}
                            aria-label="Register for event"
                          >
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>

                        <div className="space-y-2 text-sm sm:text-base text-purple-200">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {event.registered} / {event.capacity} registered
                            </span>
                          </div>
                        </div>

                        {/* Progress bar with smooth animation */}
                        <div className="mt-4 w-full bg-purple-950 rounded-full h-1.5 sm:h-2">
                          <div 
                            className="bg-purple-500 h-full rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;