import React from 'react';
import Event from '../containers/Event';

const Eventcomp = () => {
  const eventData = {
    title: 'MAJOO TALK - Optimalkan Penjualan dengan Strategi Penjualan Yang Tepat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    date: '28 Februari 2024',
    time: '14.00-15.30 WIB',
    location: 'Online via zoom',
    registrationLink: 'bit.ly/daftar-majootalks',
    price: 'Rp. 0 (Free)',
    benefits: [
      'Sharing & Discussion Session',
      'Optimalkan Penjualan dengan Strategi Digital Tepat',
    ],
  };

  return (
    <div className="app">
      <Event event={eventData} />
    </div>
  );
};

export default Eventcomp;