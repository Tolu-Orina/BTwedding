
import { FAQItem, WeddingPartyMember, GalleryItem } from './types';

export const COLORS = {
  primary: '#FFFFFF',
  blush: '#FFF5F5',
  burgundy: '#800020',
};

export const WEDDING_DATE_TRADITIONAL = new Date('2026-04-10T12:00:00');
export const WEDDING_DATE_WHITE = new Date('2026-04-11T10:30:00');

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is the dress code?",
    answer: "Formal and traditional attire in line with wedding colors (Baby Pink and Royal Blue for White Wedding ceremony)."
  },
  {
    question: "Can I bring a plus one?",
    answer: "Attendance is by invitation."
  },
  {
    question: "What time should I arrive?",
    answer: "Time is stated in the invitation."
  },
  {
    question: "Are children allowed?",
    answer: "We love your little ones, and we would love for them to be looked after by you during the wedding party."
  }
];

export const WEDDING_PARTY: WeddingPartyMember[] = [
  {
    id: 'b1',
    name: 'Sarah Adeyemi',
    role: 'Bridesmaid',
    description: 'Blessyn\'s childhood best friend and partner in crime.',
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=400&h=500&auto=format&fit=crop'
  },
  {
    id: 'g1',
    name: 'David Okafor',
    role: 'Groomsman',
    description: 'Tolu\'s close college friend and fellow tech enthusiast.',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&h=500&auto=format&fit=crop'
  }
];

// Gallery items using local images
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', category: 'Engagement', url: '/gallery-1.jpeg' },
  { id: '2', category: 'Engagement', url: '/gallery-2.jpeg' },
  { id: '3', category: 'Traditional', url: '/gallery-3.jpeg' },
  { id: '4', category: 'Casual', url: '/gallery-4.jpeg' },
  { id: '5', category: 'Engagement', url: '/gallery-5.jpeg' },
  { id: '6', category: 'Traditional', url: '/gallery-6.jpeg' },
  { id: '7', category: 'Casual', url: '/gallery-7.jpeg' },
  { id: '8', category: 'Engagement', url: '/gallery-8.jpeg' },
];
