export interface SocialLink { platform: string; url: string; icon?: string; }
export interface Award { icon?: string; awardFor?: string; awardDescription?: string; cardColorClass?: string; iconColorClass?: string; }
export interface Affiliation { image?: string; icon?: string; paHeading?: string; paDescription?: string; }
export interface Expertise { icon?: string; expertise: string; }
export interface Schedule { day: string; slots: string[]; }
export interface Publication { title: string; link?: string; }

export interface AvailabilityResp {
  availableFrom: string;
  slotDuration: number;
}

export interface Doctors {
  id: number;
  name: string;
  slug: string;
  image?: string;
  alt?: string;
  title?: string;
  description?: string;
  briefProfile?: string;
  qualification?: string;
  department?: string;
  experience?: string;
  designation?: string;
  social?: SocialLink[];
  schedules?: Schedule[];
  awards?: Award[];
  professionalAffilications?: Affiliation[];
  areasOfExpertise?: Expertise[];
  publications?: Publication[] | string[];
}
