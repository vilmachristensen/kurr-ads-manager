import React, { useState } from 'react';
import { useAdContext } from '../state/Context';
//import { useNavigate } from 'react-router-dom';

const AdForm: React.FC = () => {
  const { setAd } = useAdContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const newAd = { title, description /* add more properties as needed */ };
  //const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create an ad object with the form values
    
    // Set the ad using the context function
    setAd(newAd);
    console.log('newAd', newAd)
  };  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      {/* Add more form fields as needed */}
      <button type="submit">Create Ad</button>
    </form>
  );
};

export default AdForm;