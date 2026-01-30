
export interface MarketingContent {
  businessDescription: string;
  slogan: string;
  googleAd: {
    headline: string;
    description: string;
  };
  homepageIntro: string;
  chatbotGreeting: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}
