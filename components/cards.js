import React from "react";

const cardDetails = [
    {
        "name": "Community",
        "description": "The power of community is when enthusiastic people come together and share what they know and don't know - thus growing from their collective knowledge!",
        "keywords": [`DataEngBytes`, `ServerlessDays`, `Meetups`, `Conferences`],
        "images": '<img className="w-full h-48" src="/images/bytes_center.svg" alt="Community" />',
        "image": "/images/dataenglogo.jpg"
    },
    {
        "name": "Consulting",
        "description": "Often time I hear businesses just wanting that new dashboard created, or that data source onboarded or to clean up their infrastracture - we can help with that!",
        "keywords": [`Data Engineering`, `Serverless`, `AWS`, `Cloud`],
        "images": '<img className="w-full h-48" src="/images/undraw_developer.svg" alt="Consulting" />',
        "image": "/images/undraw_developer.png"
    },
    {
        "name": "Teaching",
        "description": "Invariably the missing ingredient in consulting engagements is the lack of 'how-to' knowledge within a business to enable its employees - this covers that!",
        "keywords": [`Mentoring`, `Workshops`, `Walk-throughs`],
        "images": '<img className="w-full h-48" src="/images/undraw_teaching.svg" alt="Teaching" />',
        "image": "/images/undraw_teaching.png"
    },
]

export default function Cards() {
    return (
        <>
          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Services
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  The three core pillars of the company
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                {cardDetails.map(data => 
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={data.image} alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {data.name}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {data.description}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                )}

          </div>
        </div>
      </div>
    </>
  )
}
