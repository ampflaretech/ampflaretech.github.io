// =============================================================================
// Site Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Ampflare Tech - Web Development Agency",
  description: "Ampflare Tech crafts stunning, high-performance websites and digital experiences that elevate your brand and drive results.",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "Ampflare Tech",
  decodeText: "WEB\nEXCELLENCE",
  decodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  subtitle: "We craft stunning, high-performance websites that elevate your brand and drive real business results. From concept to launch, we deliver digital excellence.",
  ctaPrimary: "Start Your Project",
  ctaPrimaryTarget: "services",
  ctaSecondary: "View Our Work",
  ctaSecondaryTarget: "gallery",
  cornerLabel: "EST. 2024",
  cornerDetail: "Premium Web Solutions",
  navItems: [
    { label: "Services", sectionId: "services", icon: "disc" },
    { label: "Portfolio", sectionId: "gallery", icon: "play" },
    { label: "Process", sectionId: "process", icon: "calendar" },
    { label: "Contact", sectionId: "contact", icon: "music" },
  ],
};

// -- Album Cube Section (Services Cube) -------------------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    {
      id: 1,
      title: "WEB DESIGN",
      subtitle: "CREATIVE",
      image: "/cube-1.jpg",
    },
    {
      id: 2,
      title: "APP DEV",
      subtitle: "MOBILE FIRST",
      image: "./dist/images/cube-2.jpg",
    },
    {
      id: 3,
      title: "E-COMMERCE",
      subtitle: "ONLINE STORE",
      image: "/cube-3.jpg",
    },
    {
      id: 4,
      title: "UI/UX DESIGN",
      subtitle: "EXPERIENCE",
      image: "/cube-4.jpg",
    },
  ],
  cubeTextures: [
    "/cube-1.jpg",
    "/cube-2.jpg",
    "/cube-3.jpg",
    "/cube-4.jpg",
    "/cube-5.jpg",
    "/cube-6.jpg",
  ],
  scrollHint: "Scroll to explore our services",
};

// -- Parallax Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "Our Portfolio",
  sectionTitle: "SHOWCASING\nDIGITAL\nMASTERPIECES",
  galleryLabel: "Featured Projects",
  galleryTitle: "RECENT WORK",
  marqueeTexts: [
    "WEB DESIGN",
    "APP DEVELOPMENT",
    "E-COMMERCE",
    "UI/UX DESIGN",
    "SEO OPTIMIZATION",
    "CLOUD HOSTING",
    "WEB DESIGN",
    "APP DEVELOPMENT",
    "E-COMMERCE",
    "UI/UX DESIGN",
  ],
  endCtaText: "Ready to create something amazing? Let's build your digital presence together.",
  parallaxImagesTop: [
    { id: 1, src: "/gallery-1.jpg", alt: "Corporate Website Project" },
    { id: 2, src: "/gallery-2.jpg", alt: "Creative Agency Website" },
    { id: 3, src: "/gallery-3.jpg", alt: "SaaS Dashboard Design" },
    { id: 4, src: "/gallery-4.jpg", alt: "Restaurant Website" },
    { id: 5, src: "/gallery-5.jpg", alt: "Fitness App Landing" },
    { id: 6, src: "/gallery-6.jpg", alt: "Real Estate Platform" },
  ],
  parallaxImagesBottom: [
    { id: 1, src: "/project-1.jpg", alt: "Portfolio Website" },
    { id: 2, src: "/project-2.jpg", alt: "E-commerce Platform" },
    { id: 3, src: "/project-3.jpg", alt: "Mobile App Design" },
    { id: 4, src: "/project-4.jpg", alt: "Analytics Dashboard" },
    { id: 5, src: "/gallery-1.jpg", alt: "Responsive Design" },
    { id: 6, src: "/gallery-2.jpg", alt: "Brand Website" },
  ],
  galleryImages: [
    { id: 1, src: "/gallery-1.jpg", title: "Aurora Global", date: "2025.01" },
    { id: 2, src: "/gallery-2.jpg", title: "Digital Alchemists", date: "2024.12" },
    { id: 3, src: "/gallery-3.jpg", title: "InnovateFlow SaaS", date: "2024.11" },
    { id: 4, src: "/gallery-4.jpg", title: "Aurum Fine Dining", date: "2024.10" },
    { id: 5, src: "/gallery-5.jpg", title: "Fitness Flow App", date: "2024.09" },
    { id: 6, src: "/gallery-6.jpg", title: "EstateBlue Platform", date: "2024.08" },
  ],
};

// -- Tour Schedule Section (Process Timeline) ----------------------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "Our Process",
  sectionTitle: "HOW WE\nBRING YOUR\nVISION TO LIFE",
  vinylImage: "/process-icon.png",
  buyButtonText: "Learn More",
  detailsButtonText: "View Details",
  bottomNote: "Every project follows our proven 4-step methodology",
  bottomCtaText: "Start Your Journey",
  statusLabels: {
    onSale: "Active",
    soldOut: "Complete",
    comingSoon: "Next",
    default: "Pending",
  },
  tourDates: [
    {
      id: 1,
      date: "STEP 01",
      time: "Discovery",
      city: "DISCOVERY",
      venue: "Understanding your goals, audience, and requirements",
      status: "on-sale",
      image: "/process-1.jpg",
    },
    {
      id: 2,
      date: "STEP 02",
      time: "Design",
      city: "DESIGN",
      venue: "Creating wireframes, prototypes, and visual designs",
      status: "on-sale",
      image: "/process-2.jpg",
    },
    {
      id: 3,
      date: "STEP 03",
      time: "Development",
      city: "DEVELOPMENT",
      venue: "Building your solution with clean, scalable code",
      status: "coming-soon",
      image: "/process-3.jpg",
    },
    {
      id: 4,
      date: "STEP 04",
      time: "Launch",
      city: "LAUNCH",
      venue: "Deploying, testing, and optimizing for success",
      status: "coming-soon",
      image: "/process-4.jpg",
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/footer-portrait.jpg",
  portraitAlt: "Ampflare Tech Team",
  heroTitle: "LET'S BUILD\nSOMETHING\nAMAZING",
  heroSubtitle: "Your digital success starts here",
  artistLabel: "Get In Touch",
  artistName: "Ampflare Tech",
  artistSubtitle: "Web Development Agency",
  brandName: "Ampflare Tech",
  brandDescription: "We are a full-service web development agency dedicated to creating exceptional digital experiences. From stunning websites to powerful web applications, we transform your vision into reality.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["Home", "Services", "Portfolio", "Process", "Contact"],
  contactTitle: "Contact Us",
  emailLabel: "Email",
  email: "hello@ampflaretech.com",
  phoneLabel: "Phone",
  phone: "+1 (555) 123-4567",
  addressLabel: "Address",
  address: "123 Innovation Drive, Tech City, TC 90210",
  newsletterTitle: "Stay Updated",
  newsletterDescription: "Subscribe to our newsletter for the latest web design trends and insights.",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Thank you for subscribing! We'll keep you updated.",
  copyrightText: "© 2025 Ampflare Tech. All rights reserved.",
  bottomLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "https://instagram.com/ampflaretech" },
    { icon: "twitter", label: "Twitter", href: "https://twitter.com/ampflaretech" },
    { icon: "youtube", label: "LinkedIn", href: "https://linkedin.com/company/ampflaretech" },
    { icon: "music", label: "Dribbble", href: "https://dribbble.com/ampflaretech" },
  ],
  galleryImages: [
    { id: 1, src: "/project-1.jpg" },
    { id: 2, src: "/project-2.jpg" },
    { id: 3, src: "/project-3.jpg" },
    { id: 4, src: "/project-4.jpg" },
  ],
};
