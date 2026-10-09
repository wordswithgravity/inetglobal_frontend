export interface RegionContent {
  header: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    timeline: {
      voice: string;
      messaging: string;
      numbers: string;
      footerNote1: string;
      footerNote2: string;
    };
  };
  coreServices: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    services: {
      title: string;
      description: string;
      features: string[];
    }[];
  };
  businessSolutions: {
    badge: string;
    title: string;
    description: string;
    solutions: {
      id: string;
      name: string;
      tagline: string;
      title: string;
      description: string;
      features: string[];
      customerStatus: string;
      notification: {
        header: string;
        line1?: string;
        line2?: string;
        body?: string;
        bodyBold?: string;
        validTime?: string;
        time: string;
      };
      phoneScreen: {
        backTitle: string;
        badge?: string;
        title: string;
        subtitle: string;
        bankingDetails?: {
          amount: string;
          status: string;
          reference: string;
        };
        infoCard?: {
          label: string;
          value: string;
        };
        otpDigits?: string[];
        buttonText: string;
        subNote: string;
      };
    }[];
  };
  industryExpertise: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    industries: {
      id: string;
      name: string;
      title: string;
      description: string;
    }[];
  };
  connectWithUs: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
  };
  footer: {
    description: string;
    email: string;
    phone: string;
    address: {
      line1: string;
      line2: string;
      line3: string;
    };
    copyright: string;
  };
}

export const regionContentMap: Record<string, RegionContent> = {
  // ==================== GLOBAL ====================
  global: {
    header: {
      badge: "GLOBAL COMMUNICATIONS INFRASTRUCTURE",
      titleLine1: "Global",
      titleLine2: "Communication,",
      titleLine3: "Built For Business.",
      description:
        "Reliable voice, messaging and virtual numbers for companies that need to stay connected across borders, across teams, and across every customer touchpoint.",
      primaryCta: "Get Started",
      secondaryCta: "Explore Service",
      timeline: {
        voice: "Business Voice",
        messaging: "SMS & Messaging",
        numbers: "Virtual Numbers",
        footerNote1: "One platform",
        footerNote2: "Global reach",
      },
    },
    coreServices: {
      badge: "CORE SERVICE",
      titleLine1: "Communication Solutions For",
      titleLine2: "Every Customer Journey",
      description:
        "Modular telecom infrastructure engineered for high availability voice, messaging, and virtual numbers worldwide.",
      services: [
        {
          title: "Voice Services",
          description:
            "International SIP trunking with flexible route options designed around quality, localized CLI coverage, and optimized termination costs.",
          features: [
            "High-quality voice connections",
            "Flexible route options",
            "Global coverage",
          ],
        },
        {
          title: "Messaging",
          description:
            "Deliver critical transactional SMS, OTPs, and rich business messaging directly to handsets worldwide with high delivery assurance.",
          features: [
            "High-quality voice connections",
            "Flexible route options",
            "Global coverage",
          ],
        },
        {
          title: "Omnichannels",
          description:
            "Unify Voice, SMS, WhatsApp, and Verification into a single developer-friendly REST API suite designed for instant deployment.",
          features: [
            "High-quality voice connections",
            "Flexible route options",
            "Global coverage",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: "BUSINESS SOLUTIONS",
      title: "Solutions For Every Customer Journey",
      description:
        "Connect, engage and communicate with customers through reliable voice, messaging and omnichannel solutions.",
      solutions: [
        {
          id: "otp",
          name: "OTP Auth",
          tagline: "Secure. Fast. Reliable.",
          title: "OTP Authentication",
          description:
            "Deliver one-time passwords quickly and securely for registrations, logins, account recovery, and payment verification across global networks.",
          features: [
            "Fast and reliable OTP delivery",
            "Secure multi-channel authentication",
            "Global reach with intelligent routing",
          ],
          customerStatus: "Identity Verified",
          notification: {
            header: "iNet Global",
            body: "Your verification code is",
            bodyBold: "53193",
            validTime: "Valid for 5 minutes",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Authentication",
            title: "Verify your identity",
            subtitle:
              "We've sent a verification code to your registered mobile number.",
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verify and Continue",
            subNote: "Didn't receive the code?\nResend code in 00:45",
          },
        },
        {
          id: "banking",
          name: "Banking",
          tagline: "Secure. Connected. Trusted",
          title: "Banking & Financial Services",
          description:
            "Enable secure and reliable customer communication with transactional SMS, payment alerts, and other critical messages designed for banks and financial institutions.",
          features: [
            "Secure OTP and transaction alerts",
            "Reliable high-volume messaging",
            "Real-time customer notifications",
          ],
          customerStatus: "Transaction received",
          notification: {
            header: "Transaction Alert",
            body: "Your payment of $250.00 was completed successfully.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Banking",
            title: "Transaction Successful",
            subtitle:
              "Your payment of $250.00 has been processed successfully.",
            bankingDetails: {
              amount: "$250.00",
              status: "Completed",
              reference: "TXN-482190",
            },
            buttonText: "View Transaction",
            subNote: "✓  Securely delivered",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Reach. Engage. Convert",
          title: "Marketing Communications",
          description:
            "Connect with customers through targeted messaging campaigns that deliver promotions, offers, and brand communications at the right time.",
          features: [
            "Targeted customer campaigns",
            "High-volume SMS delivery",
            "Personalized customer engagement",
          ],
          customerStatus: "Offer delivered",
          notification: {
            header: "Marketing Campaign",
            line1: "20% OFF",
            line2: "Your exclusive offer is waiting.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Marketing",
            badge: "New Offer",
            title: "Special Offer Just for You",
            subtitle:
              "Get 20% off your next purchase.\nOffer valid until June 30.",
            buttonText: "Shop Now",
            subNote: "✓  Campaign delivered",
          },
        },
        {
          id: "reminders",
          name: "Reminders",
          tagline: "Timely. Reliable. Automated",
          title: "Customer Reminders",
          description:
            "Keep customers informed with automated reminders for appointments, payments, renewals, bookings, and important upcoming events.",
          features: [
            "Automated reminder messaging",
            "Timely delivery across channels",
            "Reduce missed appointments and payments",
          ],
          customerStatus: "Reminder received",
          notification: {
            header: "Reminder",
            line1: "Appointment Tomorrow",
            line2: "Your appointment is scheduled for June 30",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Reminders",
            title: "Your Appointment is Tomorrow",
            subtitle:
              "You have an appointment scheduled for 10:30 AM, June 30",
            infoCard: {
              label: "Location",
              value: "City Medical Center",
            },
            buttonText: "View Details",
            subNote: "Reply 1 to confirm",
          },
        },
        {
          id: "emergency",
          name: "Emergency",
          tagline: "Critical. Fast. Always Connected",
          title: "Emergency Communications",
          description:
            "Deliver critical alerts quickly when every second matters, helping organizations communicate important information during urgent situations.",
          features: [
            "Rapid emergency notifications",
            "High-priority message delivery",
            "Reliable communication at scale",
          ],
          customerStatus: "Alert received",
          notification: {
            header: "Emergency Alert",
            line1: "Important Alert",
            line2: "Please check the latest safety information.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Emergency",
            title: "Important Safety Alert",
            subtitle:
              "Severe weather has been reported in your area. Please follow local safety instructions.",
            infoCard: {
              label: "Affected Area",
              value: "San Francisco, CA",
            },
            buttonText: "View Alert",
            subNote: "Emergency notification",
          },
        },
        {
          id: "order",
          name: "Order Alert",
          tagline: "Inform. Track. Deliver",
          title: "Order Alerts",
          description:
            "Keep customers updated throughout their order journey with real-time notifications for confirmations, dispatch, delivery, and status changes.",
          features: [
            "Real-time order notifications",
            "Delivery and status updates",
            "Seamless customer communication",
          ],
          customerStatus: "Order update received",
          notification: {
            header: "Order Update",
            line1: "Order #IN482190",
            line2: "Your package has been shipped.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Order Alert",
            title: "Your Order Has Shipped",
            subtitle: "Order #IN482190 is on its way.",
            infoCard: {
              label: "Estimated Delivery",
              value: "Tomorrow, 2:00 - 5:00 PM",
            },
            buttonText: "Track Order",
            subNote: "Delivery notification",
          },
        },
      ],
    },
    industryExpertise: {
      badge: "INDUSTRY EXPERTISE",
      titleLine1: "Communication Solutions Built",
      titleLine2: "For Every Industry",
      description:
        "Connect, engage and communicate with customers through reliable voice, messaging and omnichannel solutions.",
      industries: [
        {
          id: "banking",
          name: "Banking",
          title: "Banking and Financial Services",
          description:
            "Utilize Transactional SMS and OTP SMS Service solutions for secure customer authentication, payment alerts, and account notifications.",
        },
        {
          id: "healthcare",
          name: "Healthcare",
          title: "Healthcare",
          description:
            "Send critical patient appointment reminders, prescription updates, and healthcare notifications with enterprise reliability.",
        },
        {
          id: "ecommerce",
          name: "E-Commerce and Retail",
          title: "E-Commerce and Retail",
          description:
            "Enhance customer experiences with SMS Notification Service updates, order confirmations and promotional campaigns.",
        },
        {
          id: "education",
          name: "Education",
          title: "Education",
          description:
            "Keep students and parents informed with admission alerts, campus updates, attendance notices, and exam results across channels.",
        },
        {
          id: "travel",
          name: "Travel and Hospitality",
          title: "Travel and Hospitality",
          description:
            "Deliver real-time flight updates, booking confirmations, itinerary changes, and 24/7 guest support messaging worldwide.",
        },
      ],
    },
    connectWithUs: {
      badge: "CONNECT WITH US",
      titleLine1: "Let’s Build The Right Communication",
      titleLine2: "Connection.",
      description:
        "With INET Global Services, businesses can leverage reliable Business SMS Solutions to improve customer engagement, strengthen security, and streamline communication. Whether you need Transactional SMS, OTP SMS Service, or a scalable Bulk SMS Service, our platform delivers the speed, security, and performance your business demands.",
    },
    footer: {
      description:
        "Global communication infrastructure for businesses that need reliable voice, messaging and omnichannel connectivity.",
      email: "hello@inetglobal.com",
      phone: "+1 800 123 4567",
      address: {
        line1: "123 Innovation Drive,",
        line2: "San Francisco, CA 94105,",
        line3: "United States",
      },
      copyright: "@2026 iNet Global Services. All right reserved.",
    },
  },

  // ==================== INDIA ====================
  india: {
    header: {
      badge: "INDIA'S LEADING TELECOM INFRASTRUCTURE",
      titleLine1: "Best SMS & Call Traffic",
      titleLine2: "Services In India,",
      titleLine3: "Built For High Volume.",
      description:
        "Empowering Indian enterprises with DLT-compliant bulk SMS, ultra-low latency voice termination, and direct operator interconnects across Airtel, Jio, and Vi.",
      primaryCta: "Start in India",
      secondaryCta: "Explore India Routes",
      timeline: {
        voice: "India Voice Traffic (CLI)",
        messaging: "DLT-Approved SMS & OTP",
        numbers: "Virtual DID & Toll-Free",
        footerNote1: "100% TRAI Compliant",
        footerNote2: "Direct Telco Routes",
      },
    },
    coreServices: {
      badge: "INDIA SERVICES & OPERATOR INTERCONNECTS",
      titleLine1: "Best Voice & Messaging Services In India",
      titleLine2: "For Scalable Enterprises",
      description:
        "India-optimized telecom pipelines with 99.99% uptime, 1-second OTP delivery, and full TRAI DLT template registration support.",
      services: [
        {
          title: "India Voice & SIP Trunking",
          description:
            "Best call traffic routes in India with pure CLI guarantee, premium ILDO/NLDO termination, and dedicated bandwidth for enterprise call centers.",
          features: [
            "Pure CLI Route Guarantee",
            "Airtel & Jio Direct Interconnect",
            "Pan-India Toll-Free (1800)",
          ],
        },
        {
          title: "Best SMS Services in India",
          description:
            "Ultra-fast DLT-compliant Transactional SMS, OTP delivery under 2 seconds, and high-throughput promotional messaging across all Indian circles.",
          features: [
            "100% DLT Whitelist & Scrubbing",
            "Sub-2s OTP Delivery Across India",
            "Smart Dynamic Operator Routing",
          ],
        },
        {
          title: "India Omnichannel & WhatsApp API",
          description:
            "Official WhatsApp Business API integration, RCS Business Messaging, and conversational AI tailored for Indian consumer brands.",
          features: [
            "Official Meta WhatsApp Business API",
            "RCS Branded SMS with Green Tick",
            "UPI Pay-in-Chat Native Support",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: "INDIA BUSINESS SOLUTIONS",
      title: "Solutions Engineered For India’s Digital Ecosystem",
      description:
        "High-performance communication stack tailored for India's booming fintech, e-commerce, and enterprise sectors.",
      solutions: [
        {
          id: "otp",
          name: "OTP Auth",
          tagline: "Sub-2s Delivery. TRAI DLT Compliant",
          title: "Instant OTP Authentication (India)",
          description:
            "Delivering high-priority OTPs via direct Indian telecom carrier channels ensuring >99% first-attempt delivery for net-banking and UPI logins.",
          features: [
            "Priority DLT Route scrubbed instantly",
            "Backup WhatsApp OTP Failover",
            "Active pan-India carrier coverage",
          ],
          customerStatus: "Aadhaar / OTP Verified",
          notification: {
            header: "iNet OTP (India)",
            body: "Your secure OTP for verification is",
            bodyBold: "94821",
            validTime: "Valid for 3 mins. Do not share with anyone.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Authentication",
            title: "Verify your Mobile Number",
            subtitle:
              "We've sent a 5-digit verification code to +91 98765 43210.",
            otpDigits: ["9", "4", "8", "2", "1"],
            buttonText: "Verify and Proceed",
            subNote: "Didn't receive the OTP?\nResend in 00:30",
          },
        },
        {
          id: "banking",
          name: "Banking",
          tagline: "UPI. NetBanking. RBI Compliant",
          title: "Banking & Financial Services (India)",
          description:
            "Empowering leading Indian banks and NBFCs with instant UPI payment confirmations, credit card alerts, and loan status updates.",
          features: [
            "Real-time UPI & IMPS transaction alerts",
            "Encrypted RBI-grade security pipelines",
            "High-volume salary and mandate alerts",
          ],
          customerStatus: "UPI Payment Received",
          notification: {
            header: "HDFC / SBI Bank Alert",
            body: "A/C **4821 credited with ₹18,500.00 via UPI.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "UPI Banking",
            title: "Payment Received Successfully",
            subtitle: "₹18,500.00 received in your Savings Account.",
            bankingDetails: {
              amount: "₹18,500.00",
              status: "Successful",
              reference: "UPI/4291084201",
            },
            buttonText: "Check Balance",
            subNote: "✓  Delivered via Secure DLT Route",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Promotional SMS. Smart Targeting",
          title: "Festive & Promotional Campaigns (India)",
          description:
            "Drive sales on Diwali, Big Billion Days, and seasonal sales with high-volume promotional SMS reaching millions across India within minutes.",
          features: [
            "Smart DND auto-filtering",
            "Regional language SMS (Hindi, Tamil, etc.)",
            "Click tracking and conversion analytics",
          ],
          customerStatus: "Campaign Delivered",
          notification: {
            header: "Festive Mega Sale",
            line1: "FLAT 40% OFF",
            line2: "Use code INDIA40 on your next order.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Exclusive Deals",
            badge: "Great Indian Sale",
            title: "Exclusive Festive Offer",
            subtitle:
              "Get flat 40% discount on electronics.\nOffer valid till Sunday midnight.",
            buttonText: "Claim Offer",
            subNote: "✓  Sent to verified Indian subscribers",
          },
        },
        {
          id: "reminders",
          name: "Reminders",
          tagline: "EMI. Insurance. Appointments",
          title: "Automated EMI & Renewal Reminders",
          description:
            "Reduce defaults for Indian lenders with automated loan EMI alerts, credit card due dates, and policy renewal SMS with direct payment links.",
          features: [
            "Automated EMI due date alerts with UPI link",
            "Hospital & diagnostic appointment reminders",
            "Utility bill notifications (Electricity / Broadband)",
          ],
          customerStatus: "Reminder Delivered",
          notification: {
            header: "EMI Due Reminder",
            line1: "EMI of ₹4,250 Due Tomorrow",
            line2: "Pay via UPI to avoid late fees.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Loan Account",
            title: "EMI Payment Due Tomorrow",
            subtitle:
              "Your vehicle loan EMI of ₹4,250 is scheduled for July 1.",
            infoCard: {
              label: "Payment Method",
              value: "Auto-Debit / UPI Link",
            },
            buttonText: "Pay via UPI Now",
            subNote: "Reply 1 to postpone by 2 days",
          },
        },
        {
          id: "emergency",
          name: "Emergency",
          tagline: "Public Safety. Weather. Disaster Alerts",
          title: "Emergency & Disaster Broadcasts (India)",
          description:
            "Instant broadcast pipelines for city municipal corporations, monsoon advisories, and critical enterprise business continuity.",
          features: [
            "Priority route bypassing standard queues",
            "Circle-wide geographic geo-targeting",
            "Multilingual voice broadcast failover",
          ],
          customerStatus: "Alert Delivered",
          notification: {
            header: "IMD Weather Alert",
            line1: "Heavy Rain Red Alert",
            line2: "Stay indoors. Emergency helpline: 112.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Public Safety",
            title: "Heavy Rainfall Advisory",
            subtitle:
              "High tide and water-logging expected in low lying areas. Follow disaster guidelines.",
            infoCard: {
              label: "Affected Region",
              value: "Mumbai & MMR Region",
            },
            buttonText: "View Safe Zones",
            subNote: "National Disaster Response Broadcast",
          },
        },
        {
          id: "order",
          name: "Order Alert",
          tagline: "Quick Commerce. E-Commerce. OTP Delivery",
          title: "Live Order Tracking & Delivery Alerts",
          description:
            "Seamless notifications for Indian quick-commerce, food delivery, and logistics with live rider tracking and delivery OTPs.",
          features: [
            "10-minute grocery delivery dispatch updates",
            "Cash on Delivery (COD) confirmation SMS",
            "Driver arrival and security gate OTPs",
          ],
          customerStatus: "Out for Delivery",
          notification: {
            header: "Delivery Alert",
            line1: "Package Arriving in 15 mins",
            line2: "Share OTP 8219 with delivery partner.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Order Tracking",
            title: "Your Order is Out for Delivery",
            subtitle: "Delivery partner Rahul is on the way.",
            infoCard: {
              label: "Delivery OTP",
              value: "8219",
            },
            buttonText: "Track on Map",
            subNote: "Contactless delivery enabled",
          },
        },
      ],
    },
    industryExpertise: {
      badge: "INDUSTRY EXPERTISE - INDIA",
      titleLine1: "Best Communication Solutions Built",
      titleLine2: "For Indian Enterprises",
      description:
        "Tailored infrastructure meeting regulatory compliance, local consumer behaviors, and massive transactional scale in India.",
      industries: [
        {
          id: "banking",
          name: "Banking",
          title: "Banking, UPI & Fintech in India",
          description:
            "TRAI DLT-registered transactional SMS, RBI-compliant data routing, and instant UPI payment notifications across all Indian banks.",
        },
        {
          id: "healthcare",
          name: "Healthcare",
          title: "Healthcare & Diagnostics in India",
          description:
            "Automated OPD booking reminders, diagnostic lab report download links via SMS, and tele-consultation alerts across Indian medical networks.",
        },
        {
          id: "ecommerce",
          name: "E-Commerce and Retail",
          title: "E-Commerce & Quick Commerce (India)",
          description:
            "High-speed Cash on Delivery (COD) verification, festival sale promotional messaging, and 10-minute delivery tracking alerts.",
        },
        {
          id: "education",
          name: "Education",
          title: "EdTech & Education in India",
          description:
            "Entrance exam admit card notifications, campus fee reminder SMS, and parent communication platforms for schools and coaching institutes.",
        },
        {
          id: "travel",
          name: "Travel and Hospitality",
          title: "Indian Travel & Railways (IRCTC / Airlines)",
          description:
            "PNR status change alerts, flight boarding gate updates, hotel check-in SMS, and 24/7 passenger WhatsApp concierge across India.",
        },
      ],
    },
    connectWithUs: {
      badge: "CONNECT WITH US IN INDIA",
      titleLine1: "Scale Your Business Communication",
      titleLine2: "With Best SMS & Voice In India.",
      description:
        "Join top Indian enterprises that trust iNet Global for high-throughput SMS gateways, zero-drop call traffic routes, and 100% TRAI DLT compliance. Connect directly with our enterprise team in India for custom route testing and pricing.",
    },
    footer: {
      description:
        "India's premier communication infrastructure delivering enterprise-grade Voice, SMS, DLT OTPs, and WhatsApp Business API across all Indian telecom circles.",
      email: "india@inetglobal.com",
      phone: "+91 1800 123 4567",
      address: {
        line1: "Tower B, Cyber City,",
        line2: "DLF Phase 2, Gurugram,",
        line3: "Haryana 122002, India",
      },
      copyright:
        "@2026 iNet Global Services (India) Private Limited. All right reserved.",
    },
  },

  // ==================== CHINA ====================
  china: {
    header: {
      badge: "CHINA ENTERPRISE TELECOM INFRASTRUCTURE",
      titleLine1: "Best Direct Voice & SMS",
      titleLine2: "Services In China,",
      titleLine3: "MIIT & Operator Compliant.",
      description:
        "Enterprise-grade communication infrastructure with direct interconnects across China Mobile, China Telecom, and China Unicom with 100% domestic route reliability.",
      primaryCta: "Start in China",
      secondaryCta: "Explore China Routes",
      timeline: {
        voice: "China Direct Call Traffic",
        messaging: "MIIT Whitelisted 106 SMS",
        numbers: "China 400 & 95 Virtual DID",
        footerNote1: "MIIT Compliant",
        footerNote2: "Direct 3-Carrier Interconnect",
      },
    },
    coreServices: {
      badge: "CHINA TELECOM SOLUTIONS",
      titleLine1: "Best Voice & Messaging Services In China",
      titleLine2: "For Global & Domestic Enterprises",
      description:
        "Direct 106-channel SMS routing, low-latency cross-border SIP trunking, and enterprise WeChat API integrations.",
      services: [
        {
          title: "China Voice & 400 Toll-Free",
          description:
            "Direct interconnects with China Telecom, China Mobile, and China Unicom providing crystal clear call quality, low latency, and 400/95 corporate numbers.",
          features: [
            "Three Major Carriers Direct Interconnect",
            "China 400 & 95 Enterprise Toll-Free",
            "High-Concurrent Voice Call Traffic",
          ],
        },
        {
          title: "Best SMS Services in China (106 Routes)",
          description:
            "Official 106 enterprise SMS channels with high delivery speed, dedicated sign registration, and ultra-high stability for banking and verification.",
          features: [
            "Official 106 Enterprise SMS Gateway",
            "Sub-3 Second Verification Code Delivery",
            "Custom Enterprise Signature Support",
          ],
        },
        {
          title: "China Omnichannel & WeChat API",
          description:
            "Seamless customer engagement combining WeChat Official Accounts, Enterprise WeChat, mini-program push notifications, and 5G Messaging.",
          features: [
            "WeChat Official Account & Mini-Program Push",
            "China 5G Rich Media Messaging",
            "Direct Cross-Border REST APIs",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: "CHINA BUSINESS SOLUTIONS",
      title: "Solutions Designed For China's Digital Ecosystem",
      description:
        "Tailored high-concurrency communications for Chinese mobile payments, live-commerce, and enterprise applications.",
      solutions: [
        {
          id: "otp",
          name: "OTP Auth",
          tagline: "High Speed. 106 Verified Channel",
          title: "Fast Verification Code (China)",
          description:
            "Delivering high-priority 106 verification SMS across all Chinese mobile networks with 99.8% first-attempt delivery rate.",
          features: [
            "Dedicated 106-channel priority queue",
            "Anti-fraud and smart throttling",
            "Carrier-level failover routing",
          ],
          customerStatus: "Real-Name Verified",
          notification: {
            header: "【iNet Global】Verification",
            body: "Your login verification code is",
            bodyBold: "68291",
            validTime: "Valid for 5 minutes. Do not disclose to others.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Security Verification",
            title: "Enter Verification Code",
            subtitle:
              "We've sent a 5-digit verification code to +86 138 0000 0000.",
            otpDigits: ["6", "8", "2", "9", "1"],
            buttonText: "Verify and Log In",
            subNote: "Didn't receive the SMS?\nResend in 00:60",
          },
        },
        {
          id: "banking",
          name: "Banking",
          tagline: "UnionPay. Alipay. WeChat Pay",
          title: "Banking & Payment Alerts (China)",
          description:
            "Instant notification services for Chinese commercial banks, UnionPay transactions, and digital payment gateways.",
          features: [
            "Real-time debit/credit card balance alerts",
            "UnionPay transaction confirmation",
            "High security encrypted transmission",
          ],
          customerStatus: "Payment Succeeded",
          notification: {
            header: "China UnionPay Alert",
            body: "Your card ending in 8899 was charged ¥1,280.00.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Bank Card Details",
            title: "Transaction Successful",
            subtitle: "¥1,280.00 spent at Shanghai Flagship Store.",
            bankingDetails: {
              amount: "¥1,280.00",
              status: "Success",
              reference: "CN-89420194",
            },
            buttonText: "View Electronic Receipt",
            subNote: "✓  Sent via 106 Financial Channel",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Double 11. 618 Shopping Festival",
          title: "E-Commerce Promotional SMS (China)",
          description:
            "Empowering brands on Tmall, JD.com, and Douyin during shopping festivals with targeted SMS and rich 5G video messaging.",
          features: [
            "Double 11 & 618 massive throughput capacity",
            "Interactive 5G Video Messaging & card links",
            "Targeted customer segmenting",
          ],
          customerStatus: "Coupon Delivered",
          notification: {
            header: "【Brand Member】Special",
            line1: "¥100 Off Coupon Waiting",
            line2: "Click to claim your exclusive member discount.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Member Center",
            badge: "618 Mid-Year Sale",
            title: "VIP Member Exclusive Gift",
            subtitle:
              "¥100 voucher has been added to your wallet.\nValid for purchases over ¥300.",
            buttonText: "Open App and Shop",
            subNote: "✓  Delivered to active member list",
          },
        },
        {
          id: "reminders",
          name: "Reminders",
          tagline: "Flight. High-Speed Rail. Hotels",
          title: "Travel & Service Reminders (China)",
          description:
            "Automated notifications for high-speed rail departures, flight check-ins, and hotel reservations across China.",
          features: [
            "12306 Train departure and gate alerts",
            "Flight delay and boarding gate notifications",
            "Hotel contactless check-in SMS with digital key",
          ],
          customerStatus: "Reminder Delivered",
          notification: {
            header: "High-Speed Rail Alert",
            line1: "Train G102 departs in 45 mins",
            line2: "Boarding Gate: 8B, Shanghai Hongqiao Station.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Trip Itinerary",
            title: "Train G102 Departure Alert",
            subtitle: "Shanghai Hongqiao to Beijing South at 11:10 AM.",
            infoCard: {
              label: "Boarding Gate",
              value: "Gate 8B (Hongqiao)",
            },
            buttonText: "View Digital Ticket",
            subNote: "Have your National ID ready",
          },
        },
        {
          id: "emergency",
          name: "Emergency",
          tagline: "Weather Warning. Enterprise Continuity",
          title: "Public & Enterprise Emergency Broadcasts",
          description:
            "High-speed alert channels for typhoon warnings, blizzard advisories, and mission-critical enterprise incident management in China.",
          features: [
            "Carrier emergency channel with top priority",
            "Provincial and city-level geofencing",
            "Multilingual SMS support for foreign visitors",
          ],
          customerStatus: "Warning Broadcast",
          notification: {
            header: "Meteorological Alert",
            line1: "Typhoon Yellow Warning",
            line2: "Coastal areas expect heavy winds. Stay safe.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Safety Information",
            title: "Typhoon Weather Advisory",
            subtitle:
              "Severe gales and heavy rain forecast for the next 24 hours. Limit outdoor travel.",
            infoCard: {
              label: "Affected Region",
              value: "Zhejiang & Shanghai Coast",
            },
            buttonText: "View Emergency Guide",
            subNote: "National Emergency Management Center",
          },
        },
        {
          id: "order",
          name: "Order Alert",
          tagline: "SF Express. Meituan. Cainiao Logistics",
          title: "Express Logistics & Courier Notifications",
          description:
            "Real-time package dispatch and smart locker pickup codes for SF Express, JD Logistics, and Cainiao network.",
          features: [
            "Smart parcel locker pickup code SMS",
            "Meituan & Ele.me delivery tracking alerts",
            "Cross-border customs clearance notification",
          ],
          customerStatus: "In Smart Locker",
          notification: {
            header: "Express Delivery",
            line1: "SF Express Package Arrived",
            line2: "Pickup code: 4821 at Hive Box #3.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Logistics Tracking",
            title: "Package Ready for Pickup",
            subtitle: "Your package from Tmall is waiting in the smart locker.",
            infoCard: {
              label: "Locker Code",
              value: "4821 (Locker #3)",
            },
            buttonText: "One-Click Open Locker",
            subNote: "Free storage for 24 hours",
          },
        },
      ],
    },
    industryExpertise: {
      badge: "INDUSTRY EXPERTISE - CHINA",
      titleLine1: "Best Communication Solutions Built",
      titleLine2: "For China Market Scale",
      description:
        "High-concurrency infrastructure meeting local regulatory compliance, MIIT filing standards, and carrier requirements across China.",
      industries: [
        {
          id: "banking",
          name: "Banking",
          title: "Banking & Fintech in China",
          description:
            "High-security 106 financial SMS channels, UnionPay and Alipay integration alerts, and mobile banking two-factor authentication.",
        },
        {
          id: "healthcare",
          name: "Healthcare",
          title: "Healthcare & Telemedicine in China",
          description:
            "Hospital appointment scheduling via WeChat & SMS, medical test result downloads, and regional public health notification services.",
        },
        {
          id: "ecommerce",
          name: "E-Commerce and Retail",
          title: "Cross-Border & Live-Streaming E-Commerce",
          description:
            "Massive scale SMS routing for Double 11 sales, Douyin live-stream flash sale coupons, and Cainiao express delivery tracking.",
        },
        {
          id: "education",
          name: "Education",
          title: "Higher Education & Vocational Training",
          description:
            "Gaokao & university admission notices, online course schedule reminders, and institutional parent-teacher messaging.",
        },
        {
          id: "travel",
          name: "Travel and Hospitality",
          title: "High-Speed Rail & Aviation (China)",
          description:
            "Direct 12306 rail ticket notifications, airport boarding gate updates, and international hotel booking confirmations across China.",
        },
      ],
    },
    connectWithUs: {
      badge: "CONNECT WITH US IN CHINA",
      titleLine1: "Scale Your Business Communication",
      titleLine2: "With Best SMS & Voice In China.",
      description:
        "Partner with iNet Global for direct 106 SMS routes, crystal clear 400/95 call traffic, and full MIIT compliance. Connect directly with our enterprise solution architects in China for carrier route testing and dedicated deployment.",
    },
    footer: {
      description:
        "China's enterprise communication infrastructure delivering carrier-grade Voice, 106 SMS, 400 Toll-Free numbers, and WeChat API integration across China Telecom, China Mobile, and China Unicom.",
      email: "china@inetglobal.com",
      phone: "+86 800 123 4567",
      address: {
        line1: "Level 28, China World Tower,",
        line2: "No. 1 Jianguomenwai Avenue,",
        line3: "Chaoyang District, Beijing 100004, China",
      },
      copyright:
        "@2026 iNet Global Services (China) Co., Ltd. All right reserved.",
    },
  },

  // ==================== UNITED STATES ====================
  "united-states": {
    header: {
      badge: "US ENTERPRISE TELECOM INFRASTRUCTURE",
      titleLine1: "Best A2P 10DLC SMS",
      titleLine2: "& Voice Traffic in the US,",
      titleLine3: "FCC & Carrier Registered.",
      description:
        "Direct Tier-1 carrier interconnects across AT&T, Verizon, and T-Mobile delivering ultra-high throughput 10DLC messaging, toll-free verification, and STIR/SHAKEN certified SIP trunking.",
      primaryCta: "Start in the US",
      secondaryCta: "Explore US Routes",
      timeline: {
        voice: "STIR/SHAKEN Voice Traffic",
        messaging: "A2P 10DLC & Short Codes",
        numbers: "Toll-Free & Local DID",
        footerNote1: "100% 10DLC Registered",
        footerNote2: "Tier-1 Carrier Network",
      },
    },
    coreServices: {
      badge: "US TELECOM SERVICES",
      titleLine1: "Best Voice & Messaging Services in the US",
      titleLine2: "Engineered for High Throughput",
      description:
        "Compliant A2P messaging pipelines, STIR/SHAKEN verified voice calling, and high-concurrency cloud communications across North America.",
      services: [
        {
          title: "US SIP Trunking & Voice Termination",
          description:
            "STIR/SHAKEN A-attestation certified voice routes with crystal-clear call quality, local US presence, and nationwide toll-free numbering.",
          features: [
            "STIR/SHAKEN A-Attestation Certified",
            "Direct AT&T, Verizon & T-Mobile Routes",
            "High CPS (Calls Per Second) Capacity",
          ],
        },
        {
          title: "Best A2P 10DLC & Shortcode SMS",
          description:
            "Fully campaign-registered 10DLC and dedicated shortcode messaging with carrier fee transparency and 99.9% delivery rate.",
          features: [
            "The Campaign Registry (TCR) Fast Vetting",
            "High-Throughput Dedicated Shortcodes",
            "Automated Carrier Unsubscribe Handling",
          ],
        },
        {
          title: "US Omnichannel & Apple Messages for Business",
          description:
            "Connect with American consumers on Apple Messages for Business, RCS, SMS, and WhatsApp with single-API integration.",
          features: [
            "Apple Messages for Business Integration",
            "RCS Rich Business Messaging",
            "Enterprise SOC2 & HIPAA Compliant",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: "US BUSINESS SOLUTIONS",
      title: "Solutions Designed for US Enterprise Scale",
      description:
        "Enterprise communication architecture tailored for North American fintech, healthcare, and retail leaders.",
      solutions: [
        {
          id: "otp",
          name: "OTP Auth",
          tagline: "Instant. Carrier Vetted. Secure",
          title: "A2P 10DLC OTP Authentication (US)",
          description:
            "Deliver 2FA codes in under 1.5 seconds through registered 10DLC brand routes ensuring zero carrier spam filtering.",
          features: [
            "TCR-registered brand trust score",
            "Multi-carrier redundancy across US",
            "Branded sender ID support",
          ],
          customerStatus: "Identity Verified",
          notification: {
            header: "Security Verification",
            body: "Your Chase / iNet security code is",
            bodyBold: "49102",
            validTime: "Expires in 10 minutes.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Security Check",
            title: "Verify your Account",
            subtitle:
              "We sent a 5-digit verification code to +1 (555) 019-2834.",
            otpDigits: ["4", "9", "1", "0", "2"],
            buttonText: "Verify and Sign In",
            subNote: "Didn't receive the code?\nResend in 00:45",
          },
        },
        {
          id: "banking",
          name: "Banking",
          tagline: "ACH. Zelle. Wire Notifications",
          title: "Banking & Fintech Alerts (US)",
          description:
            "Real-time fraud alerts, Zelle transfers, and credit card push notifications for US financial institutions.",
          features: [
            "Instant Zelle & ACH transfer confirmation",
            "SOC2 Type II certified data pipes",
            "Interactive two-way fraud verification",
          ],
          customerStatus: "Payment Approved",
          notification: {
            header: "Chase Card Alert",
            body: "Charge of $340.00 at Apple Store approved.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Account Activity",
            title: "Transaction Approved",
            subtitle: "$340.00 charged to your Sapphire Card ending in 4109.",
            bankingDetails: {
              amount: "$340.00",
              status: "Approved",
              reference: "US-8921094",
            },
            buttonText: "View Statement",
            subNote: "✓  Sent via Verified 10DLC Channel",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Black Friday. Cyber Monday. 10DLC",
          title: "High-ROI Marketing SMS (US)",
          description:
            "Drive record conversions during Black Friday and Cyber Monday with TCPA-compliant conversational marketing campaigns.",
          features: [
            "100% TCPA & CTIA compliance tools",
            "MMS high-resolution image support",
            "Real-time link shortener & attribution",
          ],
          customerStatus: "Offer Claimed",
          notification: {
            header: "VIP Member Sale",
            line1: "30% OFF Sitewide",
            line2: "Use code VIP30 at checkout today.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Member Rewards",
            badge: "Cyber Week Exclusive",
            title: "Early Access: 30% Off",
            subtitle:
              "Exclusive cyber week discount applied to your cart.\nFree 2-day shipping included.",
            buttonText: "Checkout Now",
            subNote: "✓  Delivered to opted-in US subscribers",
          },
        },
        {
          id: "reminders",
          name: "Reminders",
          tagline: "HIPAA Compliant. Appointments",
          title: "HIPAA-Compliant Healthcare Reminders",
          description:
            "Automated clinical appointment reminders, prescription pickups, and telehealth links with full HIPAA data security.",
          features: [
            "Encrypted healthcare notification pipes",
            "Two-way SMS appointment confirmation",
            "Epic & Cerner EHR system integration",
          ],
          customerStatus: "Confirmed",
          notification: {
            header: "Clinic Reminder",
            line1: "Dental Checkup Tomorrow",
            line2: "Reply C to confirm or R to reschedule.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Patient Portal",
            title: "Appointment Reminder",
            subtitle:
              "Your consultation with Dr. Miller is tomorrow at 2:30 PM.",
            infoCard: {
              label: "Clinic Location",
              value: "Stanford Medical Plaza, CA",
            },
            buttonText: "Check-In Online",
            subNote: "Reply 1 to confirm",
          },
        },
        {
          id: "emergency",
          name: "Emergency",
          tagline: "FEMA. Campus Safety. Weather",
          title: "Public Safety & Enterprise Alerts",
          description:
            "Emergency broadcast solutions for enterprise campuses, extreme weather warnings, and critical operational updates.",
          features: [
            "Instant broadcast bypassing network congestion",
            "Multi-channel SMS, Voice, and Email blast",
            "FEMA IPAWS interoperability support",
          ],
          customerStatus: "Safety Broadcast",
          notification: {
            header: "NOAA Weather Alert",
            line1: "Severe Storm Warning",
            line2: "High winds expected. Seek shelter.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Emergency Advisory",
            title: "Severe Weather Warning",
            subtitle:
              "Flash flood warning issued for the greater metropolitan area. Take necessary precautions.",
            infoCard: {
              label: "Alert Area",
              value: "San Francisco Bay Area",
            },
            buttonText: "View Emergency Map",
            subNote: "National Weather Service Broadcast",
          },
        },
        {
          id: "order",
          name: "Order Alert",
          tagline: "Amazon. FedEx. UPS Tracking",
          title: "Nationwide Logistics & Delivery Updates",
          description:
            "Instant order confirmation, live FedEx / UPS tracking notifications, and doorstep photo confirmation alerts.",
          features: [
            "Real-time carrier milestone webhooks",
            "Contactless delivery PIN verification",
            "Instant returns pickup scheduling",
          ],
          customerStatus: "Delivered to Porch",
          notification: {
            header: "FedEx Express",
            line1: "Package Delivered",
            line2: "Left at front door. Signature not required.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "Package Tracking",
            title: "Your Package Has Arrived",
            subtitle: "Delivered by FedEx Express at front porch.",
            infoCard: {
              label: "Tracking Number",
              value: "7829-0194-2841",
            },
            buttonText: "View Delivery Photo",
            subNote: "Delivery confirmed via GPS",
          },
        },
      ],
    },
    industryExpertise: {
      badge: "INDUSTRY EXPERTISE - UNITED STATES",
      titleLine1: "Best Communication Solutions Built",
      titleLine2: "For North American Enterprises",
      description:
        "High-performance communication stack engineered for strict FCC, TCPA, HIPAA, and US Tier-1 telecom carrier requirements.",
      industries: [
        {
          id: "banking",
          name: "Banking",
          title: "Banking, Credit & Fintech (US)",
          description:
            "A2P 10DLC verified transaction notifications, SOC2 compliant authentication pipelines, and Zelle payment verification.",
        },
        {
          id: "healthcare",
          name: "Healthcare",
          title: "Healthcare & Telehealth (HIPAA)",
          description:
            "HIPAA-compliant patient appointment reminders, prescription refill alerts, and secure doctor-patient messaging.",
        },
        {
          id: "ecommerce",
          name: "E-Commerce and Retail",
          title: "E-Commerce & Direct-to-Consumer (DTC)",
          description:
            "High-volume Cyber Week promotional SMS, personalized cart recovery messaging, and live package tracking.",
        },
        {
          id: "education",
          name: "Education",
          title: "Higher Education & School Districts",
          description:
            "Emergency campus safety broadcasts, tuition deadline reminders, and admissions update alerts for universities.",
        },
        {
          id: "travel",
          name: "Travel and Hospitality",
          title: "Airlines, Hotels & Rideshare (US)",
          description:
            "TSA line updates, flight delay SMS alerts, mobile hotel room key passcodes, and 24/7 guest concierge.",
        },
      ],
    },
    connectWithUs: {
      badge: "CONNECT WITH US IN THE US",
      titleLine1: "Scale Your Business Communication",
      titleLine2: "With Best SMS & Voice In North America.",
      description:
        "Join top Fortune 500 companies and fast-growing US tech startups that rely on iNet Global for Tier-1 A2P 10DLC messaging, STIR/SHAKEN certified voice trunking, and enterprise SLA reliability.",
    },
    footer: {
      description:
        "US premier communication infrastructure delivering enterprise-grade Voice, A2P 10DLC SMS, Toll-Free numbers, and Omnichannel APIs across AT&T, Verizon, and T-Mobile.",
      email: "us@inetglobal.com",
      phone: "+1 800 123 4567",
      address: {
        line1: "500 Howard Street, Suite 400,",
        line2: "San Francisco, CA 94105,",
        line3: "United States",
      },
      copyright: "@2026 iNet Global Services Inc. All right reserved.",
    },
  },
};

import { getLocalizedContent } from "./localizedContent";

/**
 * Intelligent generator: produces rich country-tailored and language-localized content for ANY country and ANY language dynamically
 */
export const getRegionContent = (
  regionId: string = "global",
  languageId: string = "en"
): RegionContent => {
  if (languageId && languageId !== "en") {
    return getLocalizedContent(regionId, languageId);
  }
  if (regionContentMap[regionId]) {
    return regionContentMap[regionId];
  }
  return getLocalizedContent(regionId, "en");
};

