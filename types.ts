
export interface Guest {
  id: string;
  name: string;
  inviteCode: string;
  allowedGuestCount: number;
  rsvpStatus: 'pending' | 'attending' | 'declined';
  eventsAttending: string[];
}

export interface WeddingPartyMember {
  id: string;
  name: string;
  role: 'Bridesmaid' | 'Groomsman';
  description: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: 'Engagement' | 'Traditional' | 'Casual';
  url: string;
}
