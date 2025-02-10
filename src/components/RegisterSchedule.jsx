import { useState } from 'react'

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '0',
  },
  title: {
    color: '#E8DAB2',
    marginBottom: '2rem',
    fontSize: '2rem',
    letterSpacing: '2px',
  },
  scheduleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  daySection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '0.5rem',
    padding: '1.5rem',
  },
  dayTitle: {
    color: '#E8DAB2',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    letterSpacing: '1px',
  },
  timeSlot: {
    marginBottom: '1.5rem',
  },
  timeTitle: {
    color: '#9a27a8',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  eventsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
  },
  eventCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.5rem',
    padding: '1rem',
    border: '1px solid rgba(154, 39, 168, 0.3)',
    transition: 'all 0.3s ease',
  },
  eventCardSelected: {
    backgroundColor: 'rgba(154, 39, 168, 0.2)',
    border: '1px solid rgba(154, 39, 168, 0.8)',
  },
  eventTitle: {
    color: '#E8DAB2',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  eventCategory: {
    color: '#9a27a8',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  eventDetails: {
    color: '#E8DAB2',
    fontSize: '0.9rem',
    opacity: '0.8',
  },
  submitButton: {
    padding: '1rem',
    backgroundColor: '#9a27a8',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
    marginTop: '1.5rem',
  }
}

function RegisterSchedule() {
  const [selectedEvents, setSelectedEvents] = useState(new Set())

  const schedule = [
    {
      date: "March 15, 2024",
      timeSlots: [
        {
          time: "9:20 AM - 11:20AM",
          events: [
            { id: 1, title: "Street Dance Group", category: "Dance", location: "Studio A" },
            { id: 2, title: "Embroidery & Stitching", category: "Fashion", location: "Workshop Room" },
            { id: 3, title: "World Wide Web", category: "Literature", location: "Lecture Hall" }
          ]
        },
        {
          time: "11:30 AM - 1:30PM",
          events: [
            { id: 4, title: "Classical Group Dance", category: "Dance", location: "Main Hall" },
            { id: 5, title: "Modern Poetry", category: "Literature", location: "Room 101" }
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
            { id: 6, title: "Hip Hop Workshop", category: "Dance", location: "Studio A" }
          ]
        }
      ]
    }
  ]

  const toggleEventSelection = (eventId) => {
    const newSelected = new Set(selectedEvents)
    if (newSelected.has(eventId)) {
      newSelected.delete(eventId)
    } else {
      newSelected.add(eventId)
    }
    setSelectedEvents(newSelected)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add API call to submit selected events
    console.log('Selected events:', Array.from(selectedEvents))
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register for Events</h1>
      
      <form onSubmit={handleSubmit} style={styles.scheduleContainer}>
        {schedule.map((day, dayIndex) => (
          <div key={dayIndex} style={styles.daySection}>
            <h2 style={styles.dayTitle}>{day.date}</h2>
            
            {day.timeSlots.map((slot, slotIndex) => (
              <div key={slotIndex} style={styles.timeSlot}>
                <h3 style={styles.timeTitle}>{slot.time}</h3>
                
                <div style={styles.eventsGrid}>
                  {slot.events.map((event) => (
                    <div
                      key={event.id}
                      style={{
                        ...styles.eventCard,
                        ...(selectedEvents.has(event.id) ? styles.eventCardSelected : {})
                      }}
                      onClick={() => toggleEventSelection(event.id)}
                    >
                      <h4 style={styles.eventTitle}>{event.title}</h4>
                      <p style={styles.eventCategory}>{event.category}</p>
                      <p style={styles.eventDetails}>{event.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <button type="submit" style={styles.submitButton}>
          Register for Selected Events
        </button>
      </form>
    </div>
  )
}

export default RegisterSchedule 