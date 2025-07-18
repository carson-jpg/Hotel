import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import { hotelInfo } from '../data/hotel';

export default function About() {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '15+' },
    { icon: Users, label: 'Happy Guests', value: '50K+' },
    { icon: Clock, label: '24/7 Service', value: 'Always' },
    { icon: MapPin, label: 'Prime Location', value: 'Downtown' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Mambo Yote Hotel</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {hotelInfo.description}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Since our establishment, we have been committed to providing exceptional hospitality 
              services that exceed our guests' expectations. Our dedicated team of professionals 
              ensures that every aspect of your stay is carefully attended to, from the moment 
              you arrive until your departure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Award Winning</div>
                  <div className="text-sm text-gray-600">Luxury Hotel 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}