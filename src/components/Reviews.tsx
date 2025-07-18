import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/hotel';

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied guests who have experienced the luxury and comfort of Mambo Yote Hotel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-amber-600 mr-3" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{review.guestName}</div>
                <div className="text-sm text-gray-500">{review.roomType}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}