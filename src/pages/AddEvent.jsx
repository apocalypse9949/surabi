import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    time: '',
    date: '',
    venue: 'KL University',
    image: null,
    imagePreview: null,
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Event Data:', eventData);
    // Reset form after submission
    setEventData({
      name: '',
      description: '',
      time: '',
      date: '',
      venue: 'KL University',
      image: null,
      imagePreview: null,
      category: ''
    });
  };

  return (
    <div className="add-event-container">
      <h1>Add New Event</h1>
      
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={eventData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="MUSIC">Music</option>
            <option value="DANCE">Dance</option>
            <option value="DRAMA">Drama</option>
            <option value="LITERATURE">Literature</option>
            <option value="FASHION">Fashion</option>
            <option value="PAINTING">Painting</option>
            <option value="FILM">Film</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Event Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {eventData.imagePreview && (
            <div className="image-preview">
              <img src={eventData.imagePreview} alt="Event preview" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-button">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent; 