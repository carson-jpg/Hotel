import React from 'react';
import { Users, Maximize, Wifi, Car, Coffee, Star } from 'lucide-react';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onBookClick: (room: Room) => void;
}

export default function RoomCard({ room, onBookClick }: RoomCardProps) {
  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('parking')) return <Car className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('coffee')) return <Coffee className="h-4 w-4" />;
    return <Star className="h-4 w-4" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            room.available 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {room.available ? 'Available' : 'Booked'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
          <span className="text-sm text-gray-500">Room {room.roomNumber}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Room Details */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>Up to {room.maxGuests} guests</span>
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1" />
            <span>{room.size}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded-md text-xs">
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-amber-600">${room.price}</span>
            <span className="text-gray-500 text-sm">/night</span>
          </div>
          <button
            onClick={() => onBookClick(room)}
            disabled={!room.available}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              room.available
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {room.available ? 'Book Now' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}