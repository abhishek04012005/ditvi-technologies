import ServImage1 from "../assets/services/serv1.jpg";
import ServImage2 from "../assets/services/serv2.jpg";
import ServImage3 from "../assets/celebration/birthday.jpg";
import ServImage4 from "../assets/celebration/wedding.jpg";
import ServImage5 from "../assets/celebration/anniversary.jpg"
import ServImage6 from "../assets/services/serv3.jpg"
import type { StaticImageData } from "next/image";

export interface PricingFeature {
    icon: string;
    title: string;
    items: string[];
}

export interface PricingPackage {
    name: string;
    icon?: string;
    oneTimePrice: number;
    partPaymentPrice?: number;
    recommendedFor: string[];
    installments: {
        first: { percentage: number; description: string };
        second: { percentage: number; description: string };
        third: { percentage: number; description: string };
    };
    features: PricingFeature[];
    highlights: string[];
    popular?: boolean;
}

export interface Challenge {
    icon: string;
    title: string;
    description: string;
}

export interface Offering {
    icon: string;
    title: string;
    description: string;
    benefits: string[];
}

export interface ServiceItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    descriptionContent: string;
    detailedDescription: string[];
    challenges: Challenge[];
    offerings: Offering[];
    pricing: PricingPackage[];
    image: string | StaticImageData;
    path: string;
    stats: {
        clients: number;
        projects: number;
        satisfaction: number;
    };
    startingPrice: string;
}

export const services: ServiceItem[] = [
    {
        id: 1,
        title: "Ditvi Digital Presence",
        subtitle: "Crafting intuitive online presences for discoverability, engagement, and growth.",
        startingPrice: "Starts from ₹13,999",
        description:
            "Ditvi Technologies simplifies the path to a commanding online presence. We deliver tailored digital solutions, ensuring your business gains maximum visibility, fosters strong audience engagement, and leverages advanced capabilities for sustained success.",
        descriptionContent: "Ditvi Technologies specializes in simplifying the digital journey for businesses. We deliver tailored, user-friendly solutions to establish and elevate your online presence. From professional websites and strategic SEO to engaging social media and digital automation, we ensure every aspect is optimized. Our goal is to make advanced digital capabilities accessible, driving discoverability and fostering strong connections. Partner with us to achieve sustainable online growth and measurable success.",
        detailedDescription: [
            "In today's digital age, your online presence is your business card to the world.",
            "We help local businesses establish a strong, professional, and engaging digital presence.",
            "Our comprehensive solutions are designed to address the unique challenges faced by local businesses.",
            "From brand identity to lead generation, we've got you covered.",
            "We specialize in crafting responsive websites, optimizing for search engines, and creating content that resonates with your audience.",
            "Our team works closely with you to understand your goals and deliver results that align with your vision.",
            "With data-driven strategies and creative execution, we ensure your brand connects with the right people at the right time.",
            "Whether it's social media management, targeted advertising, or e-commerce integration, we provide end-to-end support to help your business thrive.",
            "Let us be your digital growth partner—building trust, driving traffic, and converting visitors into loyal customers."
        ],
        challenges: [
            {
                icon: "🔍",
                title: "Low Visibility",
                description: "Hard to reach customers online"
            },
            {
                icon: "🎯",
                title: "Weak Branding",
                description: "Inconsistent brand presence"
            },
            {
                icon: "📊",
                title: "Scattered Info",
                description: "Disorganized business details"
            },
            {
                icon: "🛠️",
                title: "No Digital Promotion",
                description: "Missing key digital solutions"
            },
            {
                icon: "📅",
                title: "Missed Seasonal Trends",
                description: "No seasonal campaign strategy"
            },
            {
                icon: "💬",
                title: "Poor Engagement",
                description: "Low customer interaction online"
            }
        ],
        offerings: [
            {
                icon: "🎨",
                title: "Digital Identity",
                description: "Create a strong, memorable brand presence online",
                benefits: [
                    "Professional logo design",
                    "Brand style guide",
                    "Digital asset creation",
                    "Brand voice development"
                ]
            },
            {
                icon: "📱",
                title: "Branding & Print Collateral",
                description: "Cohesive branding across all touchpoints",
                benefits: [
                    "Business cards",
                    "Brochures and flyers",
                    "Letterheads and envelopes",
                    "Marketing materials"
                ]
            },
            {
                icon: "🌐",
                title: "Online Presence",
                description: "Establish a strong digital footprint",
                benefits: [
                    "Professional website",
                    "Google Business Profile",
                    "Local directory listings",
                    "Online reputation management"
                ]
            },
            {
                icon: "📣",
                title: "Social Media Promotion",
                description: "Engage with your audience effectively",
                benefits: [
                    "Social media strategy",
                    "Content calendar",
                    "Paid advertising",
                    "Performance tracking"
                ]
            },
            {
                icon: "📊",
                title: "Advanced SEO and Lead Generation",
                description: "Convert visitors into customers",
                benefits: [
                    "Lead capture forms",
                    "Email marketing automation",
                    "CRM integration",
                    "Analytics and reporting"
                ]
            },
            {
                icon: "🤖",
                title: "Automation and Admin Dashboard",
                description: "Empower your team with knowledge",
                benefits: [
                    "Training sessions",
                    "Documentation",
                    "Ongoing support",
                    "Regular updates"
                ]
            }
        ],
        pricing: [
            {
                name: "Essential 💫",
                oneTimePrice: 13999,
                partPaymentPrice: 14999,
                recommendedFor: ["Small businesses", "Startups", "Local shops"],
                installments: {
                    first: { percentage: 30, description: "🎨 Branding & Print Collateral" },
                    second: { percentage: 50, description: "✅ Digital Identity" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "🎨",
                        title: "Branding & Print Collateral",
                        items: [
                            "Logo Design",
                            "Letter Head",
                            "Digital Visiting Card",
                            "Business Profile Deck Upto 10 Pages"
                        ]
                    },
                    {
                        icon: "✅",
                        title: "Digital Identity",
                        items: [
                            "Mobile-Optimized Website Upto 5 Pages",
                            "SEO Upto 10 Keywords",
                            "Branded Email Address Upto 2 Accounts",
                            "Whatsapp Chat Integration",
                            "Contact Us Form to Capture Enquirys",
                            "QR Code of Website for Easy Sharing",
                            "Domain, SSL & Hosting Setup Upto 1 Year",
                        ]
                    }
                ],
                highlights: [
                    "Perfect for businesses starting their digital journey",
                    "3 months of basic support",
                    "SEO-friendly website structure"
                ]
            },
            {
                name: "Elite 🌟",
                oneTimePrice: 23999,
                partPaymentPrice: 24999,
                recommendedFor: ["Growing businesses", "Service providers", "Retail stores"],
                installments: {
                    first: { percentage: 30, description: "📍 Online Presence" },
                    second: { percentage: 50, description: "📱 Social Media Promotion" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "💫",
                        title: "Everything in Essential",
                        items: [
                        ]
                    },
                    {
                        icon: "📍",
                        title: "Online Presence ",
                        items: [
                            "Google Business Profile Setup & Optimization",
                            "Google Map Embedded on Website",
                            "Local Directory Listings",

                        ]
                    },
                    {
                        icon: "📱",
                        title: "Social Media Promotion",
                        items: [
                            "Brand Awareness Promotion",
                            "Content Creation & Scheduling",
                            "Festival & Seasonal Campaigns Upto 4 Campaigns",
                            "Social Media Promotion with Branding",
                            "Meta Ads"
                        ]
                    }
                ],
                highlights: [
                    "Comprehensive digital presence setup",
                    "6 months of priority support",
                    "Monthly performance reports"
                ],
                popular: true
            },
            {
                name: "Excellence 👑",
                oneTimePrice: 33999,
                partPaymentPrice: 34999,
                recommendedFor: ["Established businesses", "Multi-location companies", "E-commerce stores"],
                installments: {
                    first: { percentage: 30, description: "📊 Advanced SEO and Lead Generation" },
                    second: { percentage: 50, description: "🤖 Automation and Admin Dashboard" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Elite",
                        items: [
                        ]
                    },
                    {
                        icon: "📊",
                        title: "Advanced SEO and Lead Generation",
                        items: [
                            "High-Intent Keyword Strategy",
                            "Optimized Landing Pages",
                            "Content Funnel Development",
                            "Lead Capture Integrations",
                            "Mobile-First Optimization"
                        ]
                    },
                    {
                        icon: "🤖",
                        title: "Automation and Admin Dashboard",
                        items: [
                            "Workflow Automation",
                            "Email & SMS Campaigns",
                            "Payment & Invoice Automation",
                            "Analytics Integration",
                            "Centralized Control Panel",
                            "Real-Time Analytics",
                            "Mobile-Friendly Access"
                        ]
                    }
                ],
                highlights: [
                    "Complete digital transformation solution",
                    "12 months of premium support",
                    "Quarterly strategy reviews",
                    "Custom integrations"
                ]
            }
        ],
        image: ServImage1,
        path: "/services/digital-presence",
        stats: {
            clients: 150,
            projects: 200,
            satisfaction: 98
        }
    },
    { id: 2, title: "Ditvi Celebration", subtitle: "We capture your essence through thoughtful design and storytelling", startingPrice: "Starts from ₹4,999", description: "Transform your special moments into unforgettable digital celebrations with personalized designs, interactive experiences, and lasting memories that truly capture your essence.", descriptionContent: "Ditvi Technologies specializes in simplifying the digital journey for businesses. We deliver tailored, user-friendly solutions to establish and elevate your online presence. From professional websites and strategic SEO to engaging social media and digital automation, we ensure every aspect is optimized. Our goal is to make advanced digital capabilities accessible, driving discoverability and fostering strong connections. Partner with us to achieve sustainable online growth and measurable success.", detailedDescription: ["Your brand is more than a logo—it's an experience.", "We help businesses create a visual identity that resonates with their audience.", "From print to digital, our design services ensure consistency and impact.", "Let your brand speak volumes through thoughtful design."], challenges: [{ icon: "🖼️", title: "Inconsistent Branding", description: "Visual identity varies across platforms and materials" }, { icon: "📉", title: "Low Brand Recall", description: "Customers struggle to remember your brand" }, { icon: "🧩", title: "Fragmented Design Assets", description: "Lack of unified design elements" }], offerings: [{ icon: "💌", title: "Digital Invitations", description: "Craft a memorable brand mark", benefits: ["Logo design", "Color palette", "Typography", "Brand voice"] }, { icon: "🌐", title: "Website", description: "Professional materials for every occasion", benefits: ["Business cards", "Letterheads", "Brochures", "Flyers"] }, { icon: "🎨", title: "Theme & Branding", description: "Extend your brand to physical products", benefits: ["Product packaging", "Branded merchandise", "Event kits", "Gift boxes"] }, { icon: "📱", title: "Social Media Contents", description: "Extend your brand to physical products", benefits: ["Product packaging", "Branded merchandise", "Event kits", "Gift boxes"] }, { icon: "🎥", title: "Live Streaming & Virtual Access", description: "Extend your brand to physical products", benefits: ["Product packaging", "Branded merchandise", "Event kits", "Gift boxes"] }, { icon: "📸", title: "Post‑Event Memories", description: "Extend your brand to physical products", benefits: ["Product packaging", "Branded merchandise", "Event kits", "Gift boxes"] }], pricing: [{ name: "Starter", oneTimePrice: 9999, partPaymentPrice: 10999, recommendedFor: ["New brands", "Solo entrepreneurs", "Local vendors"], installments: { first: { percentage: 50, description: "Logo & Identity Design" }, second: { percentage: 30, description: "Print Collateral" }, third: { percentage: 20, description: "Final Delivery & Support" } }, features: [{ icon: "🎨", title: "Branding & Print Collateral", items: ["Logo Design", "Business Profile Deck", "Stationery Design", "Marketing Brochures"] }, { icon: "✅", title: "Digital Identity", items: ["Responsive Website", "SEO Optimization", "Domain & Hosting Setup", "Analytics Integration"] }], highlights: ["Perfect for launching a new brand", "Fast turnaround", "Print-ready files"] }, { name: "Pro", oneTimePrice: 17999, partPaymentPrice: 18999, recommendedFor: ["Growing brands", "Retail businesses", "Event planners"], installments: { first: { percentage: 40, description: "Logo & Identity + Print Collateral" }, second: { percentage: 40, description: "Packaging & Merch" }, third: { percentage: 20, description: "Final Delivery & Support" } }, features: [{ icon: "🎨", title: "Branding & Print Collateral", items: ["Logo Design", "Business Profile Deck", "Stationery Design", "Marketing Brochures"] }, { icon: "✅", title: "Digital Identity", items: ["Responsive Website", "SEO Optimization", "Domain & Hosting Setup", "Analytics Integration"] }], highlights: ["Expanded brand presence", "Creative packaging ideas", "Support for events and promotions"], popular: true }, { name: "Elite", oneTimePrice: 25999, partPaymentPrice: 26999, recommendedFor: ["Established brands", "Franchises", "Luxury businesses"], installments: { first: { percentage: 30, description: "Full Brand Audit & Strategy" }, second: { percentage: 50, description: "Advanced Design Execution" }, third: { percentage: 20, description: "Final Delivery & Brand Kit" } }, features: [{ icon: "🎨", title: "Branding & Print Collateral", items: ["Logo Design", "Business Profile Deck", "Stationery Design", "Marketing Brochures"] }, { icon: "✅", title: "Digital Identity", items: ["Responsive Website", "SEO Optimization", "Domain & Hosting Setup", "Analytics Integration"] }], highlights: ["Complete brand transformation", "12 months of design support", "Tailored for high-impact visibility"] }], image: ServImage2, path: "/services/celebrations", stats: { clients: 120, projects: 160, satisfaction: 97 } },
    {
        id: 3,
        title: "Celebration Birthday",
        subtitle: "Make every birthday unforgettable with digital magic",
        startingPrice: "Starts from ₹4,999",
        description:
            "Celebrate birthdays in style with personalized digital invitations, live streaming, interactive experiences, and memory albums that make every moment timeless.",
        descriptionContent: "Ditvi's Celebration Birthday brings joy to life’s special days by blending creativity with technology. From custom e‑invites and themed websites to live streaming and digital memory walls, we ensure your birthday celebration is beautifully designed and shared with everyone you love. Our goal is to make birthdays more engaging, inclusive, and unforgettable through seamless digital experiences.",
        detailedDescription: [
            "Birthdays are more than just dates—they’re milestones of joy and togetherness.",
            "We help you create digital-first celebrations that reflect your personality and style.",
            "From invites to live streaming, every detail is designed to delight your guests.",
            "Relive the magic with curated digital albums and memory walls."
        ],
        challenges: [
            {
                icon: "📩",
                title: "Invitation Hassles",
                description: "Hard to design & personalize"
            },
            {
                icon: "🌐",
                title: "Scattered Event Information",
                description: "Venue/maps often missed"
            },
            {
                icon: "📝",
                title: "RSVP & Food Choices",
                description: "Manual confirmations"
            },
            {
                icon: "📸",
                title: "Memories",
                description: "Photos scattered across chats"
            },
            {
                icon: "📱",
                title: "Social Media Promotion",
                description: "Time‑consuming post creation"
            },
            {
                icon: "🎨",
                title: "Theme Inconsistency",
                description: "Mismatched invites, décor, posts"
            },
        ],
        offerings: [
            {
                icon: "💌",
                title: "Digital Invitations",
                description: "Personalized e‑invites with themes",
                benefits: [
                    "Custom birthday themes",
                    "Animated invitations",
                    "RSVP integration",
                    "Shareable links"
                ]
            },
            {
                icon: "🌐",
                title: "Birthday Website",
                description: "A dedicated portal for your celebration",
                benefits: [
                    "Event countdown",
                    "Guest RSVP",
                    "Photo & video sharing",
                    "Gift registry integration"
                ]
            },
            {
                icon: "🎨",
                title: "Theme & Branding",
                description: "Bring your birthday theme to life",
                benefits: [
                    "Custom color palettes",
                    "Personalized graphics",
                    "Decor coordination",
                    "Digital backdrops"
                ]
            },
            {
                icon: "📱",
                title: "Social Media Content",
                description: "Engage your circle online",
                benefits: [
                    "Birthday posts & stories",
                    "Highlight reels",
                    "Event hashtags",
                    "Guest shoutouts"
                ]
            },
            {
                icon: "🎥",
                title: "Live Streaming",
                description: "Celebrate with everyone, everywhere",
                benefits: [
                    "Multi-camera coverage",
                    "HD streaming",
                    "Virtual guest interaction",
                    "Recording for later viewing"
                ]
            },
            {
                icon: "📸",
                title: "Post‑Event Memories",
                description: "Relive the joy anytime",
                benefits: [
                    "Curated photo albums",
                    "Highlight videos",
                    "Guestbook messages",
                    "Digital keepsakes"
                ]
            }
        ],
        pricing: [
            {
                name: "Essential 💫",
                oneTimePrice: 4999,
                partPaymentPrice: 5999,
                recommendedFor: ["Kids’ birthdays", "Small family gatherings", "First birthdays"],
                installments: {
                    first: { percentage: 30, description: "🎨 Theme & Branding" },
                    second: { percentage: 50, description: "🌐 Birthday Website" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "🎨",
                        title: "Theme & Branding",
                        items: [
                            "e‑Invitation Card",
                            "Custom Logo of Birthday Star",
                            "Theme Kit"
                        ]
                    },
                    {
                        icon: "🌐",
                        title: "Birthday Website",
                        items: [
                            "Event Details",
                            "Photo Gallery of Birthday Star Upto 12 Photos",
                            "Venue Directions via Google Maps",
                            "RSVP",
                            "Contact Us Form  For General Enquiry",
                            "Wish Wall",
                            "Whatsapp Chat Integration for Quick Connect",
                            "Shared Domain, SSL & Hosting Setup",
                            "QR Code of Website for Easy Sharing",

                        ]
                    }
                ],
                highlights: [
                    "Perfect for intimate celebrations",
                    "Quick setup",
                    "3 months of support"
                ]
            },
            {
                name: "Elite 🌟",
                oneTimePrice: 9999,
                partPaymentPrice: 10999,
                recommendedFor: ["Teen birthdays", "Milestone celebrations", "Themed parties"],
                installments: {
                    first: { percentage: 30, description: "💌 Digital Invitations" },
                    second: { percentage: 50, description: "📱 Social Media Promotion" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "💫",
                        title: "Everything in Essential",
                        items: [

                        ]
                    },
                    {
                        icon: "💌",
                        title: "Digital Invitations",
                        items: [
                            "An e-Invitation Card with 2 Revisions",
                            "Personalized e‑Invitation Card (upto 20 Guests with 2 Revisions)",
                            "A Video Invitation of Length (upto 20 Seconds with 2 Revisions)",
                            "RSVP Management with Food Option",
                            "Dashboard to Track Responses",
                        ]
                    },
                    {
                        icon: "📱",
                        title: "Social Media Promotion",
                        items: [
                            "4 Unique e‑Invites for Each Platform (WhatsApp / IG / FB)",
                            "5 Eye Catching Social Media Posts from the Events Photos",
                            "1 Boosted Video Post Campaign (upto ₹500)",
                            "1 Video Story of Length (upto 20 Seconds)",
                        ]
                    }
                ],
                highlights: [
                    "Ideal for larger gatherings",
                    "Interactive experiences",
                    "6 months of support"
                ],
                popular: true
            },
            {
                name: "Excellence 👑",
                oneTimePrice: 14999,
                partPaymentPrice: 15999,
                recommendedFor: ["Grand milestone birthdays", "Luxury celebrations", "Destination parties"],
                installments: {
                    first: { percentage: 30, description: "🎥 Live Streaming & Virtual Access" },
                    second: { percentage: 50, description: "📸 Post‑Event Memories" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Elite",
                        items: [

                        ]
                    },
                    {
                        icon: "🎥",
                        title: "Live Streaming & Virtual Access",
                        items: [
                            "Secure & Reliable Streaming",
                            "Embedded on YouTube",
                            "Multi‑Device Compatible",
                            "Real‑Time Streaming",
                            "⚠️ Disclaimer: Event coverage is contingent upon camera facilities and internet connectivity arranged by the client.",

                        ]
                    },
                    {
                        icon: "📸",
                        title: "Post‑Event Memories",
                        items: [
                            "Digital Album (upto 50 Photos)",
                            "Memory Slideshow with Music",
                            "5 Eye Catching Social Media Posts from the Events Photos",
                            "1 Boosted Video Post Campaign (upto ₹500)",
                            "1 Video Story of Length upto 20 Seconds",
                            "Personalized Thank You e-Card with Guest Photos (upto 20 Guests with 2 Revisions)",
                            "Event Hashtag Creation",
                        ]
                    },
                ],
                highlights: [
                    "Complete digital celebration package",
                    "12 months of premium support",
                    "Tailored for unforgettable experiences"
                ]
            }
        ],
        image: ServImage3,
        path: "/services/celebration-birthday",
        stats: {
            clients: 140,
            projects: 180,
            satisfaction: 98
        }
    },
    {
        id: 4,
        title: "Wedding Celebration",
        subtitle: "Your dream wedding, digitally enhanced",
        startingPrice: "Starts from ₹4,999",
        description:
            "Transform your wedding into a digital fairytale with elegant e‑invitations, live streaming, personalized websites, and curated memory albums that make your big day timeless.",
        descriptionContent: "Ditvi Wedding blends tradition with technology to make your special day unforgettable. From custom wedding websites and elegant e‑invites to live streaming and digital memory walls, we ensure your wedding is beautifully designed, seamlessly shared, and cherished forever. Our goal is to make weddings more engaging, inclusive, and memorable through digital-first experiences.",
        detailedDescription: [
            "Weddings are more than ceremonies—they’re lifelong memories.",
            "We help couples create digital-first celebrations that reflect their love story.",
            "From invitations to live streaming, every detail is designed with elegance.",
            "Relive the joy with curated albums, videos, and digital keepsakes."
        ],
        challenges: [
            {
                icon: "📩",
                title: "Invitation Hassles",
                description: "Hard to design & personalize"
            },
            {
                icon: "🌐",
                title: "Scattered Event Information",
                description: "Venue/maps often missed"
            },
            {
                icon: "📝",
                title: "RSVP & Food Choices",
                description: "Manual confirmations"
            },
            {
                icon: "📸",
                title: "Memories",
                description: "Photos scattered across chats"
            },
            {
                icon: "📱",
                title: "Social Media Promotion",
                description: "Time‑consuming post creation"
            },
            {
                icon: "🎨",
                title: "Theme Inconsistency",
                description: "Mismatched invites, décor, posts"
            },
        ],
        offerings: [
            {
                icon: "💌",
                title: "Digital Invitations",
                description: "Personalized e‑invites with themes",
                benefits: [
                    "Custom Wedding themes",
                    "Animated invitations",
                    "RSVP integration",
                    "Shareable links"
                ]
            },
            {
                icon: "🌐",
                title: "Wedding Website",
                description: "A dedicated portal for your celebration",
                benefits: [
                    "Event countdown",
                    "Guest RSVP",
                    "Photo & video sharing",
                    "Gift registry integration"
                ]
            },
            {
                icon: "🎨",
                title: "Theme & Branding",
                description: "Bring your wedding theme to life",
                benefits: [
                    "Custom color palettes",
                    "Personalized graphics",
                    "Decor coordination",
                    "Digital backdrops"
                ]
            },
            {
                icon: "📱",
                title: "Social Media Content",
                description: "Engage your circle online",
                benefits: [
                    "Wedding posts & stories",
                    "Highlight reels",
                    "Event hashtags",
                    "Guest shoutouts"
                ]
            },
            {
                icon: "🎥",
                title: "Live Streaming",
                description: "Celebrate with everyone, everywhere",
                benefits: [
                    "Multi-camera coverage",
                    "HD streaming",
                    "Virtual guest interaction",
                    "Recording for later viewing"
                ]
            },
            {
                icon: "📸",
                title: "Post‑Event Memories",
                description: "Relive the joy anytime",
                benefits: [
                    "Curated photo albums",
                    "Highlight videos",
                    "Guestbook messages",
                    "Digital keepsakes"
                ]
            }
        ],
        pricing: [
            {
                name: "Essential 💫",
                oneTimePrice: 4999,
                partPaymentPrice: 5999,
                recommendedFor: ["Wedding", "Small family gatherings", "First birthdays"],
                installments: {
                    first: { percentage: 50, description: "🎨 Theme & Branding" },
                    second: { percentage: 30, description: "🌐 Wedding Website" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "🎨",
                        title: "Theme & Branding",
                        items: [
                            "e‑Invitation Card",
                            "Personalized Wedding Couple Monogram",
                            "Theme Kit"
                        ]
                    },
                    {
                        icon: "🌐",
                        title: "Wedding Website",
                        items: [
                            "Event Details",
                            "Photo Gallery of Wedding Couple Upto 12 Photos",
                            "Venue Directions via Google Maps",
                            "RSVP",
                            "Contact Us Form  For General Enquiry",
                            "Wish Wall",
                            "Dashboard to Track Responses",
                            "Whatsapp Chat Integration for Quick Connect",
                            "Shared Domain, SSL & Hosting Setup",
                            "QR Code of Website for Easy Sharing",

                        ]
                    }
                ],
                highlights: [
                    "Perfect for intimate celebrations",
                    "Quick setup",
                    "3 months of support"
                ]
            },
            {
                name: "Elite 🌟",
                oneTimePrice: 9999,
                partPaymentPrice: 10999,
                recommendedFor: ["Wedding", "Milestone celebrations", "Themed parties"],
                installments: {
                    first: { percentage: 40, description: "💌 Digital Invitations" },
                    second: { percentage: 40, description: "📱 Social Media Promotion" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "💫",
                        title: "Everything in Essential",
                        items: [

                        ]
                    },
                    {
                        icon: "💌",
                        title: "Digital Invitations",
                        items: [
                            "An e-Invitation Card with 2 Revisions",
                            "Personalized e‑Invitation Card (upto 20 Guests with 2 Revisions)",
                            "A Video Invitation of Length (upto 20 Seconds with 2 Revisions)",
                            "RSVP Management with Food Option",
                            "Dashboard to Track Responses",
                        ]
                    },
                    {
                        icon: "📱",
                        title: "Social Media Promotion",
                        items: [
                            "4 Unique e‑Invites for Each Platform (WhatsApp / IG / FB)",
                            "5 Eye Catching Social Media Posts from the Events Photos",
                            "1 Boosted Video Post Campaign (upto ₹500)",
                            "1 Video Story of Length (upto 20 Seconds)",
                        ]
                    }
                ],
                highlights: [
                    "Ideal for larger gatherings",
                    "Interactive experiences",
                    "6 months of support"
                ],
                popular: true
            },
            {
                name: "Excellence 👑",
                oneTimePrice: 14999,
                partPaymentPrice: 15999,
                recommendedFor: ["Grand Wedding", "Luxury celebrations", "Destination parties"],
                installments: {
                    first: { percentage: 30, description: "Full Event Planning & Branding" },
                    second: { percentage: 50, description: "Streaming, Media & Social Content" },
                    third: { percentage: 20, description: "Final Delivery & Digital Keepsakes" }
                },
                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Elite",
                        items: [

                        ]
                    },
                    {
                        icon: "🎥",
                        title: "Live Streaming & Virtual Access",
                        items: [
                            "Secure & Reliable Streaming",
                            "Embedded on YouTube",
                            "Multi‑Device Compatible",
                            "Real‑Time Streaming",
                            "⚠️ Disclaimer: Event coverage is contingent upon camera facilities and internet connectivity arranged by the client.",

                        ]
                    },
                    {
                        icon: "📸",
                        title: "Post‑Event Memories",
                        items: [
                            "Digital Album (upto 50 Photos)",
                            "Memory Slideshow with Music",
                            "5 Eye Catching Social Media Posts from the Events Photos",
                            "1 Boosted Video Post Campaign (upto ₹500)",
                            "1 Video Story of Length upto 20 Seconds",
                            "Personalized Thank You e-Card with Guest Photos (upto 20 Guests with 2 Revisions)",
                            "Event Hashtag Creation",
                        ]
                    },
                ],
                highlights: [
                    "Complete digital celebration package",
                    "12 months of premium support",
                    "Tailored for unforgettable experiences"
                ]
            }
        ],
        image: ServImage4,
        path: "/services/wedding-celebration",
        stats: {
            clients: 200,
            projects: 250,
            satisfaction: 99
        }
    },
    {
        id: 5,
        title: "Anniversary Celebration",
        subtitle: "Your milestone moments, digitally enhanced",
        startingPrice: "Starts from ₹4,999",
        description:
            "Celebrate your anniversary in style with elegant e‑invites, live streaming, personalized websites, and curated memory albums that make your milestone timeless.",
        descriptionContent:
            "Ditvi Anniversary blends love, tradition, and technology to make your special day unforgettable. From custom anniversary websites and elegant e‑invites to live streaming and digital memory walls, we ensure your celebration is beautifully designed, seamlessly shared, and cherished forever. Our goal is to make anniversaries more engaging, inclusive, and memorable through digital‑first experiences.",
        detailedDescription: [
            "Anniversaries are more than dates—they’re milestones of love and togetherness.",
            "We help couples celebrate their journey with digital‑first experiences that reflect their story.",
            "From invitations to live streaming, every detail is designed with elegance and ease.",
            "Relive the joy with curated albums, heartfelt videos, and personalized digital keepsakes."
        ],
        challenges: [
            {
                icon: "📩",
                title: "Invitation Hassles",
                description: "Hard to design & personalize"
            },
            {
                icon: "🌐",
                title: "Scattered Event Information",
                description: "Venue/maps often missed"
            },
            {
                icon: "📝",
                title: "RSVP & Food Choices",
                description: "Manual confirmations"
            },
            {
                icon: "📸",
                title: "Memories",
                description: "Photos scattered across chats"
            },
            {
                icon: "📱",
                title: "Social Media Promotion",
                description: "Time‑consuming post creation"
            },
            {
                icon: "🎨",
                title: "Theme Inconsistency",
                description: "Mismatched invites, décor, posts"
            },
        ],
        offerings: [
            {
                icon: "💌",
                title: "Digital Invitations",
                description: "Personalized e‑invites with themes",
                benefits: [
                    "Custom Anniversary themes",
                    "Animated invitations",
                    "RSVP integration",
                    "Shareable links"
                ]
            },
            {
                icon: "🌐",
                title: "Anniversary Website",
                description: "A dedicated portal for your celebration",
                benefits: [
                    "Event countdown",
                    "Guest RSVP",
                    "Photo & video sharing",
                    "Gift registry integration"
                ]
            },
            {
                icon: "🎨",
                title: "Theme & Branding",
                description: "Bring your Anniversary theme to life",
                benefits: [
                    "Custom color palettes",
                    "Personalized graphics",
                    "Decor coordination",
                    "Digital backdrops"
                ]
            },
            {
                icon: "📱",
                title: "Social Media Content",
                description: "Engage your circle online",
                benefits: [
                    "Anniversary posts & stories",
                    "Highlight reels",
                    "Event hashtags",
                    "Guest shoutouts"
                ]
            },
            {
                icon: "🎥",
                title: "Live Streaming",
                description: "Celebrate with everyone, everywhere",
                benefits: [
                    "Multi-camera coverage",
                    "HD streaming",
                    "Virtual guest interaction",
                    "Recording for later viewing"
                ]
            },
            {
                icon: "📸",
                title: "Post‑Event Memories",
                description: "Relive the joy anytime",
                benefits: [
                    "Curated photo albums",
                    "Highlight videos",
                    "Guestbook messages",
                    "Digital keepsakes"
                ]
            }
        ],
        pricing: [
            {
                name: "Essential 💫",
                oneTimePrice: 4999,
                partPaymentPrice: 5999,
                recommendedFor: ["Anniversary", "Small family gatherings", "First Anniversary"],
                installments: {
                    first: { percentage: 50, description: "🎨 Theme & Branding" },
                    second: { percentage: 30, description: "🌐 Anniversary Website" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "🎨",
                        title: "Theme & Branding",
                        items: [
                            "e‑Invitation Card",
                            "Personalized Anniversary Couple Monogram",
                            "Theme Kit"
                        ]
                    },
                    {
                        icon: "🌐",
                        title: "Anniversary Website",
                        items: [
                            "Event Details",
                            "Photo Gallery of Anniversary Couple Upto 12 Photos",
                            "Venue Directions via Google Maps",
                            "RSVP",
                            "Contact Us Form  For General Enquiry",
                            "Wish Wall",
                            "Dashboard to Track Responses",
                            "Whatsapp Chat Integration for Quick Connect",
                            "Shared Domain, SSL & Hosting Setup",
                            "QR Code of Website for Easy Sharing",

                        ]
                    }
                ],
                highlights: [
                    "Perfect for intimate celebrations",
                    "Quick setup",
                    "3 months of support"
                ]
            },
            {
                name: "Elite 🌟",
                oneTimePrice: 9999,
                partPaymentPrice: 10999,
                recommendedFor: ["Anniversary", "Milestone celebrations", "Themed parties"],
                installments: {
                    first: { percentage: 40, description: "💌 Digital Invitations" },
                    second: { percentage: 40, description: "📱 Social Media Promotion" },
                    third: { percentage: 20, description: "At the Time of Hand Over Process" }
                },
                features: [
                    {
                        icon: "💫",
                        title: "Everything in Essential",
                        items: [

                        ]
                    },
                    {
                        icon: "💌",
                        title: "Digital Invitations",
                        items: [
                            "An e-Invitation Card with 2 Revisions",
                            "Personalized e‑Invitation Card (upto 20 Guests with 2 Revisions)",
                            "A Video Invitation of Length (upto 20 Seconds with 2 Revisions)",
                            "RSVP Management with Food Option",
                            "Dashboard to Track Responses",
                        ]
                    },
                    {
                        icon: "📱",
                        title: "Social Media Promotion",
                        items: [
                            "4 Unique e‑Invites for Each Platform (WhatsApp / IG / FB)",
                            "5 Eye Catching Social Media Posts from the Events Photos",
                            "1 Boosted Video Post Campaign (upto ₹500)",
                            "1 Video Story of Length (upto 20 Seconds)",
                        ]
                    }
                ],
                highlights: [
                    "Ideal for larger gatherings",
                    "Interactive experiences",
                    "6 months of support"
                ],
                popular: true
            },
            {
                name: "Excellence 👑",
                oneTimePrice: 14999,
                partPaymentPrice: 15999,
                recommendedFor: ["Grand Anniversary", "Luxury celebrations", "Destination parties"],
                installments: {
                    first: { percentage: 30, description: "Full Event Planning & Branding" },
                    second: { percentage: 50, description: "Streaming, Media & Social Content" },
                    third: { percentage: 20, description: "Final Delivery & Digital Keepsakes" }
                },
                features: [
                    {
                        icon: "🌟",
                        title: "Everything in Elite",
                        items: [

                        ]
                    },
                    {
                        icon: "🎥",
                        title: "Live Streaming & Virtual Access",
                        items: [
                            "Secure & Reliable Streaming",
                            "Embedded on YouTube",
                            "Multi‑Device Compatible",
                            "Real‑Time Streaming",
                            "⚠️ Disclaimer: Event coverage is contingent upon camera facilities and internet connectivity arranged by the client.",

                        ]
                    },
                    {
                        icon: "📸",
                        title: "Post‑Event Memories",
                        items: [
                            "Digital Album (upto 50 Photos)",
                            "Memory Slideshow with Music",
                            "5 Eye Catching Social Media Posts from the Events Photos",
                            "1 Boosted Video Post Campaign (upto ₹500)",
                            "1 Video Story of Length upto 20 Seconds",
                            "Personalized Thank You e-Card with Guest Photos (upto 20 Guests with 2 Revisions)",
                            "Event Hashtag Creation",
                        ]
                    },
                ],
                highlights: [
                    "Complete digital celebration package",
                    "12 months of premium support",
                    "Tailored for unforgettable experiences"
                ]
            }
        ],
        image: ServImage5,
        path: "/services/celebration-anniversary",
        stats: {
            clients: 200,
            projects: 250,
            satisfaction: 99
        }
    },
    {
        id: 6,
        title: "Ditvi Signature",
        subtitle: "Boost Your Local Visibility & Reputation",
        startingPrice: "Starts from ₹11,999",
        description: "Leave a lasting digital signature with enhanced local SEO strategies, reputation management, and optimized online listings that drive visibility and trust.",
        descriptionContent: "Ditvi Technologies specializes in simplifying the digital journey for businesses. We deliver tailored, user-friendly solutions to establish and elevate your online presence. From professional websites and strategic SEO to engaging social media and digital automation, we ensure every aspect is optimized. Our goal is to make advanced digital capabilities accessible, driving discoverability and fostering strong connections. Partner with us to achieve sustainable online growth and measurable success.",
        detailedDescription: [
            "In a competitive local market, visibility is everything.",
            "Ditvi Signature helps businesses stand out with optimized local SEO, directory listings, and review strategies.",
            "We ensure your business is found, trusted, and chosen by local customers.",
            "From Google profiles to content strategy, we build your digital footprint with precision."
        ],
        challenges: [
            {
                icon: "📍",
                title: "Low Local Visibility",
                description: "Struggling to appear in local search results and maps"
            },
            {
                icon: "📉",
                title: "Poor Online Reputation",
                description: "Negative or missing reviews impacting customer trust"
            },
            {
                icon: "📵",
                title: "Unclaimed Listings",
                description: "Business not listed or verified on key platforms"
            },
            {
                icon: "📄",
                title: "Outdated Information",
                description: "Inconsistent or incorrect business details online"
            }
        ],
        offerings: [
            {
                icon: "📍",
                title: "Local SEO Optimization",
                description: "Improve your visibility in local search results",
                benefits: [
                    "Keyword targeting",
                    "Geo-tagged content",
                    "Mobile-first optimization",
                    "Local backlink strategy"
                ]
            },
            {
                icon: "🗂️",
                title: "Directory Listings",
                description: "Ensure consistent presence across platforms",
                benefits: [
                    "Google Business Profile",
                    "Yelp & JustDial setup",
                    "Industry-specific directories",
                    "NAP consistency checks"
                ]
            },
            {
                icon: "⭐",
                title: "Review Management",
                description: "Build trust through customer feedback",
                benefits: [
                    "Review generation strategy",
                    "Response templates",
                    "Reputation monitoring",
                    "Sentiment analysis"
                ]
            },
            {
                icon: "📝",
                title: "Local Content Strategy",
                description: "Engage your community with relevant content",
                benefits: [
                    "Blog writing",
                    "Event promotion",
                    "Seasonal campaigns",
                    "Social media localization"
                ]
            }
        ],
        pricing: [
            {
                name: "Starter",
                oneTimePrice: 11999,
                partPaymentPrice: 12999,
                recommendedFor: ["Local shops", "Service providers", "Clinics"],
                installments: {
                    first: { percentage: 40, description: "Google Profile & Listings" },
                    second: { percentage: 40, description: "Review Management Setup" },
                    third: { percentage: 20, description: "Final Optimization & Support" }
                },
                features: [
                    {
                        icon: "🎨",
                        title: "Branding & Print Collateral",
                        items: [
                            "Logo Design",
                            "Business Profile Deck",
                            "Stationery Design",
                            "Marketing Brochures"
                        ]
                    },
                    {
                        icon: "✅",
                        title: "Digital Identity",
                        items: [
                            "Responsive Website",
                            "SEO Optimization",
                            "Domain & Hosting Setup",
                            "Analytics Integration"
                        ]
                    }
                ],
                highlights: [
                    "Quick visibility boost",
                    "Ideal for small businesses",
                    "3 months of support"
                ]
            },
            {
                name: "Pro",
                oneTimePrice: 18999,
                partPaymentPrice: 19999,
                recommendedFor: ["Growing local brands", "Multi-location outlets", "Consultants"],
                installments: {
                    first: { percentage: 30, description: "SEO & Listings Setup" },
                    second: { percentage: 50, description: "Review & Content Strategy" },
                    third: { percentage: 20, description: "Performance Review & Support" }
                },
                features: [
                    {
                        icon: "🎨",
                        title: "Branding & Print Collateral",
                        items: [
                            "Logo Design",
                            "Business Profile Deck",
                            "Stationery Design",
                            "Marketing Brochures"
                        ]
                    },
                    {
                        icon: "✅",
                        title: "Digital Identity",
                        items: [
                            "Responsive Website",
                            "SEO Optimization",
                            "Domain & Hosting Setup",
                            "Analytics Integration"
                        ]
                    }
                ],
                highlights: [
                    "Enhanced local reach",
                    "6 months of support",
                    "Monthly performance reports"
                ],
                popular: true
            },
            {
                name: "Elite",
                oneTimePrice: 27999,
                partPaymentPrice: 28999,
                recommendedFor: ["Established local chains", "Luxury service providers", "High-traffic venues"],
                installments: {
                    first: { percentage: 30, description: "Full Audit & Strategy" },
                    second: { percentage: 50, description: "Execution & Optimization" },
                    third: { percentage: 20, description: "Final Delivery & Brand Monitoring" }
                },
                features: [
                    {
                        icon: "🎨",
                        title: "Branding & Print Collateral",
                        items: [
                            "Logo Design",
                            "Business Profile Deck",
                            "Stationery Design",
                            "Marketing Brochures"
                        ]
                    },
                    {
                        icon: "✅",
                        title: "Digital Identity",
                        items: [
                            "Responsive Website",
                            "SEO Optimization",
                            "Domain & Hosting Setup",
                            "Analytics Integration"
                        ]
                    }
                ],
                highlights: [
                    "Complete local dominance",
                    "12 months of premium support",
                    "Custom integrations available"
                ]
            }
        ],
        image: ServImage6,
        path: "/services/seo",
        stats: {
            clients: 100,
            projects: 140,
            satisfaction: 96
        }
    }

];



