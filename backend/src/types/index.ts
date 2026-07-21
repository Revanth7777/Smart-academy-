export interface Sport {
  id: number;
  name: string;
  emoji: string;
  description: string;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  endDate?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  sport?: string;
  message?: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  sport: string;
  age?: string | number;
  batch?: string;
}

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data?: T;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
}
