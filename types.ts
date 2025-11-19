import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum DesignStyle {
  MODERN = 'Modern',
  TRADITIONAL = 'Traditional',
  TRANSITIONAL = 'Transitional',
  FARMHOUSE = 'Farmhouse'
}