
import React from 'react';
import { Service } from './types';

export const SERVICES: Service[] = [
  { id: 'refrigerators', name: 'Refrigerators', icon: 'fa-snowflake', description: 'Expert cooling system diagnostics and compressor repairs.' },
  { id: 'washing-machines', name: 'Washing Machines', icon: 'fa-soap', description: 'Fixing leaks, drum issues, and electronic control boards.' },
  { id: 'dishwashers', name: 'Dishwashers', icon: 'fa-sink', description: 'Repairing pump failures, drainage issues, and spray arms.' },
  { id: 'ovens', name: 'Ovens & Stoves', icon: 'fa-fire', description: 'Heating element replacements and thermostat calibration.' },
  { id: 'dryers', name: 'Dryers', icon: 'fa-wind', description: 'Venting cleanup and heating component restoration.' },
  { id: 'ac', name: 'Air Conditioners', icon: 'fa-temperature-low', description: 'Refrigerant refills and HVAC system maintenance.' },
];

export const INITIAL_MARKETING_CONTENT = {
  businessDescription: "At HomeGuard Appliance Repair, we believe a broken appliance shouldn't break your day. We are a team of certified, local technicians dedicated to bringing life back to your essential home equipment with honesty and precision. From warm fridges to noisy washers, we handle every repair with the care and expertise your home deserves.",
  slogan: "Expert Care for the Heart of Your Home.",
  googleAd: {
    headline: "Same-Day Appliance Repair | Certified Experts & Low Prices",
    description: "Don't wait! Fast, reliable repairs for all major brands. Same-day service, original parts, and full warranty included. Book your expert technician online now!"
  },
  homepageIntro: "Reliable Repairs When You Need Them Most. HomeGuard provides fast, affordable, and certified repair services for all your major household appliances. We combine years of experience with genuine spare parts to ensure your appliances run better, for longer.",
  chatbotGreeting: "Hi there! I'm your HomeGuard Assistant. I'm sorry to hear you're having trouble. To get started, could you tell me which appliance is currently giving you issues? (e.g., Refrigerator, Washing Machine, Oven)"
};
