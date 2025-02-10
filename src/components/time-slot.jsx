import PropTypes from 'prop-types'

export function TimeSlot({ time, events, onEventSelect }) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">{time}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              event.selected ? 'bg-purple-100 border-purple-500' : 'hover:border-purple-300'
            }`}
            onClick={() => onEventSelect(event.id)}
          >
            <h3 className="font-medium">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

TimeSlot.propTypes = {
  time: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,
  onEventSelect: PropTypes.func.isRequired,
}