"use client";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { AnimatedTooltip } from "./ui/animated-tooltip";

import eventsData from '../data/eventsData.json';

interface Team {
  name: string;
  logo: string;
}

interface Event {
  sport: string;
  event: string;
  teams: Team[];
  time: string;
  location: string;
}

interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export function TypewriterEffectSmoothDemo() {
  const [selectedSport, setSelectedSport] = useState("Football");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    const events = (eventsData as { events: Event[] }).events
      .filter((event) => event.sport === selectedSport)
      .filter((event) => {
        return selectedDate ? new Date(event.time).toDateString() === new Date(selectedDate).toDateString() : true;
      });
    setFilteredEvents(events);
  }, [selectedSport, selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // Prepare tooltip items
  const getTooltipItems = (teams: Team[]): TooltipItem[] => {
    return teams.map((team, index) => ({
      id: index, // Ensure this is a number
      name: team.name,
      designation: "", // Assuming no designation needed
      image: team.logo,
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[40rem] p-8 rounded-xl text-white">
        <p className="text-neutral-400 text-xs sm:text-base mb-6 text-center">
          Discover the magic of innovation with our <strong>exciting events</strong> listed below
        </p>
        <TypewriterEffectSmooth
          words={[
            { text: "Welcome" },
            { text: "To" },
            { text: "IITBHU" },
            { text: "SPARDHA 2024", className: "text-yellow-400" },
          ]}
          className="mb-6"
        />

        <div className="relative mb-6">
          <select
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 px-4 text-sm text-white transition-transform transform hover:scale-105 focus:outline-none"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
          >
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Cricket">Cricket</option>
          </select>
        </div>

        <div className="relative mb-6">
          <input
            type="date"
            className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2 px-4 text-sm text-white transition-transform transform hover:scale-105 focus:outline-none"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <TracingBeam className="w-full px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative w-full">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-white">No events available for this sport.</p>
          ) : (
            filteredEvents.map((event, index) => (
              <CardSpotlight
                key={`event-${index}`}
                className="mb-10 bg-gray-900 border border-yellow-400 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
                style={{ borderColor: 'rgba(255, 205, 0, 0.8)' }}
              >
                <h2 className="bg-yellow-500 text-black rounded-full text-xs sm:text-sm w-fit px-4 py-1 mb-4">
                  {event.sport}
                </h2>

                <p className={twMerge("text-2xl mb-4 text-yellow-300 font-semibold")}>
                  {event.event}
                </p>

                <div className="flex flex-col items-center text-sm text-gray-300">
                  <div className="flex items-center mb-2">
                    {event.teams.map((team, i) => (
                      <AnimatedTooltip
                        key={i}
                        items={getTooltipItems([team])}
                      >
                        <div className="relative flex items-center mx-2">
                          <img
                            src={team.logo}
                            alt={team.name}
                            className="w-8 h-8 rounded-full border border-white"
                          />
                          <span className="ml-2 text-white">{team.name}</span>
                        </div>
                      </AnimatedTooltip>
                    ))}
                  </div>
                  <p><strong>Time:</strong> {new Date(event.time).toLocaleString()}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                </div>
              </CardSpotlight>
            ))
          )}
        </div>
      </TracingBeam>
    </>
  );
}
