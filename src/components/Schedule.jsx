import TimeSlot from "./TimeSlot"

function Schedule() {
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

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-purple-300 mb-8">Event Schedule</h1>

      <h2 className="text-3xl font-bold text-center text-purple-300 mb-12">DAY 1</h2>

      <div className="space-y-8">
        {scheduleData.slice(0, 2).map((slot, index) => (
          <TimeSlot key={index} {...slot} />
        ))}

        <div className="py-8">
          <h3 className="text-2xl font-bold text-center text-purple-300 tracking-widest">L U N C H B R E A K</h3>
        </div>

        {scheduleData.slice(2).map((slot, index) => (
          <TimeSlot key={index} {...slot} />
        ))}
      </div>
    </div>
  )
}

export default Schedule

