import {
  MessageSquare,
  Calendar,
  Smartphone,
  Settings,
} from "lucide-react";

export const FEATURES_CONTENT = {
  title: "APP FEATURES",

  description:
    "Unlock the power of DevelopYourself with features designed to support your emotional well-being. Enjoy AI-powered mood analysis, a personal daily journal, insightful visual statistics, and tailored affirmations – all helping you understand your emotions, track your growth, and nurture self-awareness effortlessly.",

  imageAlt: "App features preview",
};

export const FEATURES = [
  {
    icon: MessageSquare,
    title: "AI-POWERED EMOTIONAL ANALYSIS",
  },
  {
    icon: Calendar,
    title: "MOOD CALENDAR & VISUAL STATISTICS",
  },
  {
    icon: Smartphone,
    title: "AVAILABLE ON IOS & ANDROID",
  },
  {
    icon: Settings,
    title: "PERSONALIZED DAILY AFFIRMATIONS",
  },
] as const;