"use client"

import { useState } from "react"

const scheduleData = [
  {
    time: "09:20AM-11:20AM",
    activities: ["Battle of bands", "Skit (Drama)", "Rangoli", "Dance Duet"],
  },
  {
    time: "09:20AM-11:20AM",
    activities: ["Battle of bands", "Skit (Drama)", "Rangoli", "Dance Duet"],
  },
  {
    time: "LUNCH BREAK",
    activities: [],
  },
  {
    time: "09:20AM-11:20AM",
    activities: ["Battle of bands", "Skit (Drama)", "Rangoli", "Dance Duet"],
  },
  {
    time: "09:20AM-11:20AM",
    activities: ["Battle of bands", "Skit (Drama)", "Rangoli", "Dance Duet"],
  },
]

const DynamicSchedule = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#1a0721",
      padding: "8rem 2rem 2rem",
      fontFamily: "Arial, sans-serif",
    },
    scheduleContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gap: "1rem",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "1rem",
    },
    timeSlot: {
      backgroundColor: "#7e22ce",
      borderRadius: "0.75rem",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      transition: "transform 0.2s ease-in-out",
      fontSize: "1.2rem",
    },
    activity: {
      backgroundColor: "rgba(88, 28, 135, 0.2)",
      borderRadius: "0.75rem",
      padding: "1rem",
      color: "#c084fc",
      textAlign: "center",
      transition: "all 0.2s ease-in-out",
      position: "relative",
      overflow: "hidden",
      fontSize: "1.1rem",
    },
    lunchBreak: {
      gridColumn: "1 / -1",
      backgroundColor: "rgba(88, 28, 135, 0.2)",
      borderRadius: "0.75rem",
      padding: "1rem",
      color: "#c084fc",
      textAlign: "center",
      fontSize: "1.5rem",
      letterSpacing: "0.1em",
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.scheduleContainer}>
        {scheduleData.map((slot, index) => (
          <div key={index} style={slot.time === "LUNCH BREAK" ? {} : styles.row}>
            {slot.time === "LUNCH BREAK" ? (
              <div style={styles.lunchBreak}>{slot.time}</div>
            ) : (
              <>
                <div style={styles.timeSlot}>{slot.time}</div>
                {slot.activities.map((activity, actIndex) => (
                  <div
                    key={actIndex}
                    style={{
                      ...styles.activity,
                      transform: hoveredItem === `${index}-${actIndex}` ? "scale(1.05)" : "scale(1)",
                    }}
                    onMouseEnter={() => setHoveredItem(`${index}-${actIndex}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {activity}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                        opacity: hoveredItem === `${index}-${actIndex}` ? 1 : 0,
                        transition: "opacity 0.2s ease-in-out",
                      }}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DynamicSchedule

