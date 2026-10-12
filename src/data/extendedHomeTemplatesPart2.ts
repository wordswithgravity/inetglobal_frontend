import type { RegionContent } from "./regionContent";

export const extendedTemplatesPart2: Record<
  string,
  (country: string, isGlobal: boolean, currency: string) => RegionContent
> = {
  // 12. Bengali (বাংলা - bn)
  bn: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "গ্লোবাল কমিউনিকেশন অবকাঠামো"
        : `${country.toUpperCase()} টেলিকম অবকাঠামো`,
      titleLine1: isGlobal ? "আন্তর্জাতিক যোগাযোগ," : `সেরা এসএমএস এবং ভয়েস ট্রাফিক`,
      titleLine2: isGlobal ? "আধুনিক ব্যবসার জন্য" : `সার্ভিস ${country}-তে,`,
      titleLine3: isGlobal ? "নিখুঁত প্রযুক্তি।" : `এন্টারপ্রাইজ স্কেলের জন্য তৈরি।`,
      description: isGlobal
        ? "যেসব প্রতিষ্ঠানের বিশ্বজুড়ে শাখা, দল এবং প্রতিটি গ্রাহকের সাথে নিরবচ্ছিন্ন যোগাযোগ প্রয়োজন, তাদের জন্য নির্ভরযোগ্য ভয়েস, এসএমএস এবং ভার্চুয়াল নম্বর।"
        : `${country}-এর এন্টারপ্রাইজগুলোকে উচ্চ-গতির এসএমএস রুট, অতি-কম লেটেন্সি ভয়েস এবং সরাসরি মোবাইল অপারেটর সংযোগ দিয়ে ক্ষমতায়ন করা হচ্ছে।`,
      primaryCta: isGlobal ? "শুরু করুন" : `${country}-তে শুরু করুন`,
      secondaryCta: isGlobal ? "সেবাগুলো দেখুন" : `${country} রুটগুলো দেখুন`,
      timeline: {
        voice: isGlobal ? "বিজনেস ভয়েস" : `${country} ভয়েস ট্রাফিক (CLI)`,
        messaging: isGlobal ? "এসএমএস ও মেসেজিং" : `${country} এসএমএস ও ওটিপি রুট`,
        numbers: isGlobal ? "ভার্চুয়াল নম্বর" : `${country} ভার্চুয়াল ডিআইডি নম্বর`,
        footerNote1: isGlobal ? "একটি সমন্বিত প্ল্যাটফর্ম" : "ডিরেক্ট ক্যারিয়ার রুটস",
        footerNote2: isGlobal ? "বিশ্বব্যাপী বিস্তৃতি" : "১০০% নিয়মমাফিক ও নিরাপদ",
      },
    },
    coreServices: {
      badge: isGlobal ? "মূল সেবাসমূহ" : `${country.toUpperCase()} সেবা ও অপারেটর ইন্টারকানেক্ট`,
      titleLine1: isGlobal ? "গ্রাহক যোগাযোগের প্রতিটি" : `${country}-তে সেরা ভয়েস ও মেসেজিং সেবা`,
      titleLine2: isGlobal ? "পর্যায়ের জন্য টেলিকম সলিউশন" : "ক্রমবর্ধমান এন্টারপ্রাইজের জন্য",
      description: isGlobal
        ? "বিশ্বব্যাপী উচ্চ প্রাপ্যতা সম্পন্ন ভয়েস, এসএমএস এবং ভার্চুয়াল নম্বরের জন্য তৈরি মডুলার টেলিকম অবকাঠামো।"
        : `৯৯.৯৯% আপটাইম, ২ সেকেন্ডের মধ্যে ওটিপি ডেলিভারি এবং লোকাল অপারেটর ইন্টারকানেক্ট সহ ${country}-তে ক্যারিয়ার-গ্রেড অবকাঠামো।`,
      services: [
        {
          title: isGlobal ? "ভয়েস সেবাসমূহ" : `${country} ভয়েস ও এসআইপি ট্রাঙ্কিং`,
          description: isGlobal
            ? "প্রিমিয়াম অডিও কোয়ালিটি, লোকাল সিএলআই কভারেজ এবং খরচ-সাশ্রয়ী টার্মিনেশনের জন্য আন্তর্জাতিক এসআইপি ট্রাঙ্কিং।"
            : `নিশ্চিত সিএলআই সহ উচ্চ-ধারণক্ষমতার কল ট্রাফিক, প্রিমিয়াম রুট এবং ${country}-এর লোকাল টেলকো অপারেটরদের সাথে সরাসরি ইন্টারকানেক্ট।`,
          features: [
            isGlobal ? "উচ্চমানের এইচডি ভয়েস কানেকশন" : "খাঁটি সিএলআই রুট গ্যারান্টি",
            isGlobal ? "সহজ ও নমনীয় রাউটিং সুবিধা" : "সরাসরি টেলিকম অপারেটর সংযোগ",
            isGlobal ? "বিশ্বজুড়ে রিডান্ড্যান্ট কভারেজ" : `${country} জুড়ে ভার্চুয়াল ও টোল-ফ্রি নম্বর`,
          ],
        },
        {
          title: isGlobal ? "এসএমএস মেসেজিং" : `${country}-তে সেরা এসএমএস সার্ভিস`,
          description: isGlobal
            ? "বিশ্বজুড়ে মোবাইল হ্যান্ডসেটে জরুরি লেনদেন সংক্রান্ত এসএমএস, ওটিপি এবং রিচ বিজনেস মেসেজ দ্রুততম সময়ে পৌঁছে দিন।"
            : `উচ্চ-গতির লেনদেন এসএমএস, ২ সেকেন্ডের মধ্যে ওটিপি কোড এবং ${country}-এর সমস্ত অপারেটরে নিয়ন্ত্রক নিয়ম মেনে বাল্ক মেসেজিং।`,
          features: [
            isGlobal ? "মুহূর্তেই ওটিপি ডেলিভারি" : `${country}-তে অফিশিয়াল সেন্ডার আইডি নিবন্ধন`,
            isGlobal ? "সর্বোচ্চ ডেলিভারি নিশ্চয়তা" : "২ সেকেন্ডের মধ্যে ওটিপি পৌঁছানোর নিশ্চয়তা",
            isGlobal ? "আরসিএস রিচ মিডিয়া মেসেজিং" : "ডাইনামিক ফেইলওভার ও স্বয়ংক্রিয় রুট ব্যাকআপ",
          ],
        },
        {
          title: isGlobal ? "অমনিচ্যানেল" : `${country} অমনিচ্যানেল ও হোয়াটসঅ্যাপ এপিআই`,
          description: isGlobal
            ? "ভয়েস, এসএমএস, হোয়াটসঅ্যাপ এবং ওটিপি ভেরিফিকেশনকে একক ডেভেলপার-বান্ধব রেস্ট এপিআই (REST API)-তে সমন্বয় করুন।"
            : `অফিশিয়াল হোয়াটসঅ্যাপ বিজনেস এপিআই, আরসিএস চ্যাট এবং ${country}-এর গ্রাহকদের সাথে যোগাযোগের উপযোগী সমন্বিত মাধ্যম।`,
          features: [
            isGlobal ? "অফিশিয়াল হোয়াটসঅ্যাপ বিজনেস এপিআই" : "অফিশিয়াল হোয়াটসঅ্যাপ বিজনেস এপিআই",
            isGlobal ? "আরসিএস ইন্টারঅ্যাক্টিভ কথোপকথন" : "ভেরিফায়েড ব্র্যান্ড ব্যাজ সহ আরসিএস প্রোফাইল",
            isGlobal ? "সমন্বিত রেস্ট এপিআই স্যুট" : "সম্পূর্ণ মাল্টি-চ্যানেল রেস্ট এপিআই",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "বিজনেস সলিউশন" : `${country.toUpperCase()} বিজনেস সলিউশন`,
      title: isGlobal ? "গ্রাহকের প্রতিটি যাত্রাপথের সমাধান" : `${country}-এর ব্যবসার জন্য নির্মিত সমাধান`,
      description: isGlobal
        ? "সুরক্ষিত এবং নির্ভরযোগ্য ভয়েস, এসএমএস এবং অমনিচ্যানেল প্রযুক্তির মাধ্যমে গ্রাহকদের সাথে অবিচ্ছিন্ন সংযোগ রক্ষা করুন।"
        : `${country}-এর বড় কোম্পানি, ফিনটেক এবং দ্রুত বিকাশমান ব্যবসায়ের জন্য উপযোগী উচ্চ-কার্যক্ষমতাসম্পন্ন টেলিকম প্ল্যাটফর্ম।`,
      solutions: [
        {
          id: "otp",
          name: "ওটিপি যাচাইকরণ",
          tagline: "নিরাপদ। দ্রুত। নির্ভরযোগ্য।",
          title: `তাৎক্ষণিক ওটিপি ভেরিফিকেশন (${country})`,
          description: `${country}-তে রেজিস্ট্রেশন, লগইন, পাসওয়ার্ড উদ্ধার এবং পেমেন্ট অনুমোদনের জন্য ওটিপি কোড দ্রুত ও নিরাপদে সরবরাহ করুন।`,
          features: [
            "২ সেকেন্ডেরও কম সময়ে দ্রুত ওটিপি ডেলিভারি",
            "একাধিক মোবাইল অপারেটরে অটো-ফেইলওভার নিরাপত্তা",
            `${country}-এর প্রতিটি টেলকোর জন্য অপ্টিমাইজড রুট`,
          ],
          customerStatus: "পরিচয় যাচাই সম্পন্ন",
          notification: {
            header: `iNet OTP (${country})`,
            body: "আপনার ভেরিফিকেশন কোডটি হলো:",
            bodyBold: "53193",
            validTime: "মেয়াদ ৫ মিনিট। কারো সাথে শেয়ার করবেন না।",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "যাচাইকরণ",
            title: "মোবাইল নম্বর নিশ্চিত করুন",
            subtitle: `${country}-তে আপনার নিবন্ধিত মোবাইল নম্বরে আমরা একটি যাচাইকরণ কোড পাঠিয়েছি।`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "যাচাই করুন ও এগিয়ে যান",
            subNote: "কোড পাননি?\nপুনরায় পাঠান 00:45 সেকেন্ডে",
          },
        },
        {
          id: "banking",
          name: "ব্যাংকিং ও অর্থায়ন",
          tagline: "নিরাপদ। সংযুক্ত। বিশ্বস্ত।",
          title: `ব্যাংকিং ও আর্থিক সেবা (${country})`,
          description: `${country}-এর আর্থিক প্রতিষ্ঠানের জন্য রিয়েল-টাইম লেনদেন অ্যালার্ট, ব্যালেন্স আপডেট এবং পেমেন্ট সংক্রান্ত নিরাপদ এসএমএস সুবিধা।`,
          features: [
            "ব্যাংক-গ্রেড এনক্রিপ্ট করা ডেটা সিকিউরিটি",
            "তাৎক্ষণিক ডেবিট/ক্রেডিট এবং লেনদেন নোটিফিকেশন",
            "বিশাল পরিমাণের লেনদেনমূলক এসএমএস হ্যান্ডলিং ক্ষমতা",
          ],
          customerStatus: "লেনদেন সফল হয়েছে",
          notification: {
            header: "ব্যাংক লেনদেন নোটিফিকেশন",
            body: `আপনার ${currency}250.00 এর পেমেন্ট সফলভাবে সম্পন্ন হয়েছে।`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "ব্যাংকিং",
            title: "পেমেন্ট সফল হয়েছে",
            subtitle: `${currency}250.00 আপনার অ্যাকাউন্ট থেকে নিরাপদে প্রক্রিয়া করা হয়েছে।`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "সম্পন্ন",
              reference: "TXN-849201",
            },
            buttonText: "রসিদ দেখুন",
            subNote: "✓ সুরক্ষিত ও ডেডিকেটেড ক্যারিয়ার পাইপলাইনের মাধ্যমে প্রেরিত",
          },
        },
        {
          id: "marketing",
          name: "মার্কেটিং",
          tagline: "পৌঁছান। যুক্ত করুন। রূপান্তর বাড়ান।",
          title: `মার্কেটিং ও প্রচারমূলক যোগাযোগ (${country})`,
          description: `${country}-তে টার্গেটেড এসএমএস প্রচারণার মাধ্যমে বিশেষ অফার, মৌসুমি ছাড় এবং ব্র্যান্ড নোটিশ সবার কাছে দ্রুত পৌঁছে দিন।`,
          features: [
            "উচ্চ ওপেন-রেট সহ বাল্ক প্রমোশনাল এসএমএস",
            "গ্রাহক বিভাজন এবং স্মার্ট সময়সূচি নির্ধারণ",
            "রিয়েল-টাইম ক্লিক ট্র্যাকিং ও রূপান্তর বিশ্লেষণ",
          ],
          customerStatus: "অফার পৌঁছে দেওয়া হয়েছে",
          notification: {
            header: "বিশেষ অফার",
            line1: "বিশেষ ৩০% মূল্যছাড়",
            line2: `আকর্ষণীয় অফারটি ${country} জুড়ে প্রযোজ্য।`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "স্পেশাল ডিল",
            badge: "সীমিত সময়",
            title: "আপনার জন্য এক্সক্লুসিভ ডিসকাউন্ট",
            subtitle: `আপনার পরবর্তী কেনাকাটায় ৩০% ছাড় উপভোগ করুন।\nমেয়াদ চলতি মাসের শেষ দিন পর্যন্ত।`,
            buttonText: "অফারটি গ্রহণ করুন",
            subNote: `✓ ${country}-এর যাচাইকৃত গ্রাহকদের কাছে প্রেরিত`,
          },
        },
        {
          id: "reminders",
          name: "রিমাইন্ডার",
          tagline: "সময়মতো। নির্ভুল। স্বয়ংক্রিয়।",
          title: `স্বয়ংক্রিয় গ্রাহক রিমাইন্ডার (${country})`,
          description: `${country}-তে অ্যাপয়েন্টমেন্ট, বিল পরিশোধের তারিখ, সাবস্ক্রিপশন নবায়ন এবং নির্ধারিত ইভেন্টের জন্য স্বয়ংক্রিয় নোটিফিকেশন পাঠান।`,
          features: [
            "একাধিক চ্যানেলে সময়সূচি অনুযায়ী স্বয়ংক্রিয় অ্যালার্ট",
            "বার্তার মধ্যেই সরাসরি বিল পরিশোধের সুরক্ষিত লিংক",
            "অনুপস্থিতি এবং বিলম্বিত পেমেন্টের হার বহুলাংশে হ্রাস",
          ],
          customerStatus: "রিমাইন্ডার পাঠানো হয়েছে",
          notification: {
            header: "অ্যাপয়েন্টমেন্ট রিমাইন্ডার",
            line1: "আগামীকালের জন্য নির্ধারিত",
            line2: "অনুগ্রহ করে নির্ধারিত সময়ের ১০ মিনিট পূর্বে উপস্থিত থাকুন।",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "রিমাইন্ডার",
            title: "আগামীকাল আপনার অ্যাপয়েন্টমেন্ট রয়েছে",
            subtitle: "আপনার সময়সূচি সকাল ১০:৩০ মিনিটে নিশ্চিত করা হয়েছে।",
            infoCard: {
              label: "স্থান / শাখা",
              value: `${country} প্রধান কেন্দ্র`,
            },
            buttonText: "উপস্থিতি নিশ্চিত করুন",
            subNote: "নিশ্চিত করতে ১ অথবা সময় পরিবর্তন করতে ২ লিখে পাঠান",
          },
        },
        {
          id: "emergency",
          name: "জরুরি সতর্কতা",
          tagline: "গুরুত্বপূর্ণ। তাত্ক্ষণিক। সর্বদা সচল।",
          title: `জরুরি ও জননিরাপত্তা নোটিফিকেশন (${country})`,
          description: `প্রতিটি সেকেন্ড যখন মূল্যবান, তখন ${country}-তে জননিরাপত্তা রক্ষা ও ব্যবসায়িক সুরক্ষার জন্য অগ্রাধিকার ভিত্তিতে তাৎক্ষণিক জরুরি বার্তা পাঠান।`,
          features: [
            "সাধারণ মেসেজ কিউ বাইপাস করে সর্বোচ্চ অগ্রাধিকার রুট",
            "গণসচেতনতা মূলক বার্তার জন্য ভৌগোলিক এলাকা নির্বাচন",
            "এসএমএস ব্যর্থ হলে স্বয়ংক্রিয়ভাবে ভয়েস কলে রূপান্তর",
          ],
          customerStatus: "জরুরি অ্যালার্ট পৌঁছেছে",
          notification: {
            header: "জননিরাপত্তা সতর্কতা",
            line1: "জরুরি আবহাওয়া বার্তা",
            line2: "স্থানীয় কর্তৃপক্ষের নিরাপত্তা নির্দেশনাবলী মেনে চলুন।",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "জরুরি অ্যালার্ট",
            title: "জরুরি আবহাওয়া বার্তা",
            subtitle: "আপনার অঞ্চলে বৈরী আবহাওয়ার খবর পাওয়া গেছে। নিরাপদে থাকুন এবং অফিশিয়াল সংবাদে নজর রাখুন।",
            infoCard: {
              label: "আক্রান্ত অঞ্চল",
              value: country,
            },
            buttonText: "নিরাপদ আশ্রয়স্থল দেখুন",
            subNote: "সরকারি জননিরাপত্তা সম্প্রচার বিজ্ঞপ্তি",
          },
        },
        {
          id: "order",
          name: "অর্ডার ট্র্যাকিং",
          tagline: "জানান। ট্র্যাক করুন। ডেলিভারি দিন।",
          title: `রিয়েল-টাইম অর্ডার ও ডেলিভারি আপডেট (${country})`,
          description: `${country}-তে পার্সেল প্রেরণ থেকে শুরু করে ডেলিভারি পার্টনারের লাইভ অবস্থান এবং হস্তান্তরের সময় ওটিপি কোড সহ পুরো যাত্রাপথে গ্রাহককে অবহিত রাখুন।`,
          features: [
            "রিয়েল-টাইমে পার্সেল বুকিং এবং প্রেরণ সংক্রান্ত আপডেট",
            "লাইভ ম্যাপ ট্র্যাকিং লিংক সহ ডেলিভারি পার্টনারের আগমন অ্যালার্ট",
            "নিরাপদ পার্সেল গ্রহণের জন্য ওটিপি যাচাইকরণ",
          ],
          customerStatus: "ডেলিভারির জন্য পাঠানো হয়েছে",
          notification: {
            header: "অর্ডার স্ট্যাটাস আপডেট",
            line1: "অর্ডার #IN849201 প্রেরিত হয়েছে",
            line2: `আপনার পার্সেলটি আজ ${country}-তে পৌঁছাবে।`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "অর্ডার ট্র্যাকিং",
            title: "আপনার অর্ডারটি পথে রয়েছে",
            subtitle: "ডেলিভারি পার্টনার আপনার পার্সেলটি নিয়ে রওনা হয়েছেন।",
            infoCard: {
              label: "ডেলিভারি ওটিপি কোড",
              value: "8492",
            },
            buttonText: "মানচিত্রে ট্র্যাক করুন",
            subNote: "স্পর্শবিহীন ডেলিভারি সুবিধা চালু রয়েছে",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "শিল্প খাতভিত্তিক দক্ষতা" : `শিল্পভিত্তিক দক্ষতা - ${country.toUpperCase()}`,
      titleLine1: "প্রতিটি বাণিজ্যিক খাতের জন্য",
      titleLine2: isGlobal ? "উপযোগী টেলিকম সলিউশন" : `${country}-এর ব্যবসার জন্য তৈরি`,
      description: isGlobal
        ? "শক্তিশালী ভয়েস, এসএমএস এবং সমন্বিত ডিজিটাল মাধ্যমের মাধ্যমে গ্রাহকদের সাথে বিশ্বাসযোগ্য সম্পর্ক গড়ে তুলুন।"
        : `${country}-এর টেলিকম আইন, ডেটা সুরক্ষা মানদণ্ড এবং ব্যবহারকারীদের চাহিদার সাথে ১০০% সামঞ্জস্যপূর্ণ প্রযুক্তি।`,
      industries: [
        {
          id: "banking",
          name: "ব্যাংকিং ও ফিনান্স",
          title: `${country}-তে ব্যাংকিং ও ফিনটেক`,
          description: `উচ্চ সুরক্ষাযুক্ত লেনদেন এসএমএস, আর্থিক সম্মতি ও তাৎক্ষণিক পেমেন্ট যাচাই (${country})।`,
        },
        {
          id: "healthcare",
          name: "স্বাস্থ্য ও চিকিৎসা",
          title: `${country}-তে হাসপাতাল ও ক্লিনিক`,
          description: `ডাক্তারের অ্যাপয়েন্টমেন্ট রিমাইন্ডার, টেস্ট রিপোর্ট নোটিফিকেশন এবং টেলিমেডিসিন যোগাযোগ (${country})।`,
        },
        {
          id: "ecommerce",
          name: "ই-কমার্স ও রিটেল",
          title: `${country}-তে ই-কমার্স ও রিটেল`,
          description: `অর্ডার ট্র্যাকিং, ফ্ল্যাশ সেল অফার মেসেজ এবং বহুমাধ্যম ভিত্তিক কাস্টমার সাপোর্ট (${country})।`,
        },
        {
          id: "education",
          name: "শিক্ষা ও বিশ্ববিদ্যালয়",
          title: `${country}-তে শিক্ষাপ্রতিষ্ঠান ও বিশ্ববিদ্যালয়`,
          description: `ভর্তি নোটিশ, জরুরি ক্যাম্পাস ঘোষণা এবং অভিভাবকদের সাথে নিয়মিত যোগাযোগ প্ল্যাটফর্ম (${country})।`,
        },
        {
          id: "travel",
          name: "ভ্রমণ ও আতিথেয়তা",
          title: `${country}-তে বিমান ও হোটেল`,
          description: `ফ্লাইট গেট পরিবর্তনের নোটিশ, হোটেল বুকিং নিশ্চিতকরণ এবং ভ্রমণকারীদের সার্বক্ষণিক ২৪/৭ সহায়তা (${country})।`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "যোগাযোগ করুন" : `${country.toUpperCase()}-তে আমাদের সাথে যোগাযোগ করুন`,
      titleLine1: "আসুন গড়ে তুলি ব্যবসার সঠিক",
      titleLine2: isGlobal ? "টেলিকম সংযোগ।" : `টেলিকম নেটওয়ার্ক ${country}-তে।`,
      description: isGlobal
        ? "iNet Global Services-এর সহায়তায় কোম্পানিগুলো নির্ভরযোগ্য এসএমএস এবং ভয়েস টুল ব্যবহার করে গ্রাহকদের সম্পৃক্ততা বৃদ্ধি, সুরক্ষা নিশ্চিত এবং ব্যবসায়িক গতি বাড়াতে পারে। আমরা সর্বদা গতি, স্থিতিশীলতা এবং সর্বোচ্চ কর্মক্ষমতা প্রদান করি।"
        : `${country}-তে ডিরেক্ট ক্যারিয়ার এসএমএস রুট, স্বচ্ছ ভয়েস টার্মিনেশন এবং সম্পূর্ণ স্থানীয় নিয়ম মেনে সেবা পেতে iNet Global-এর সাথে যুক্ত হোন। বিনামূল্যে টেস্টিং এবং সেরা অফারের জন্য আমাদের এন্টারপ্রাইজ টিমের সাথে আজই যোগাযোগ করুন।`,
    },
    footer: {
      description: isGlobal
        ? "যেসব প্রতিষ্ঠানের নির্ভরযোগ্য ভয়েস, এসএমএস এবং অমনিচ্যানেল সংযোগ প্রয়োজন, তাদের জন্য গ্লোবাল এন্টারপ্রাইজ টেলিকম অবকাঠামো।"
        : `ক্যারিয়ার-গ্রেড ভয়েস, এসএমএস, ভার্চুয়াল ডিআইডি নম্বর এবং অমনিচ্যানেল এপিআই সরবরাহকারী এন্টারপ্রাইজ অবকাঠামো ${country} এবং বিশ্বব্যাপী।`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). সর্বস্বত্ব সংরক্ষিত।`,
    },
  }),

  // 13. Marathi (मराठी - mr)
  mr: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "ग्लोबल दूरसंचार पायाभूत सुविधा"
        : `${country.toUpperCase()} दूरसंचार पायाभूत सुविधा`,
      titleLine1: isGlobal ? "जागतिक संवाद," : `सर्वोत्तम एसएमएस आणि व्हॉइस ट्रॅफिक`,
      titleLine2: isGlobal ? "मोठ्या व्यवसायांसाठी" : `${country} मधील सेवा,`,
      titleLine3: isGlobal ? "विश्वसनीय व्यासपीठ." : `मोठ्या उद्योगांच्या क्षमतेसाठी सज्ज.`,
      description: isGlobal
        ? "सीमा, टीम्स आणि प्रत्येक ग्राहकाशी सतत कनेक्ट राहू इच्छिणाऱ्या कंपन्यांसाठी विश्वासार्ह व्हॉइस, बिझनेस मेसेजिंग आणि व्हर्च्युअल नंबर्स."
        : `${country} मधील उद्योगांना उच्च-क्षमतेचे एसएमएस रूट्स, अत्यंत कमी लेटन्सीचे व्हॉइस टर्मिनेशन आणि थेट ऑपरेटर इंटरकनेक्ट्स प्रदान करत आहोत.`,
      primaryCta: isGlobal ? "सुरू करा" : `${country} मध्ये सुरू करा`,
      secondaryCta: isGlobal ? "सेवा जाणून घ्या" : `${country} रूट्स तपासा`,
      timeline: {
        voice: isGlobal ? "बिझनेस व्हॉइस" : `${country} व्हॉइस ट्रॅफिक (CLI)`,
        messaging: isGlobal ? "एसएमएस आणि मेसेजिंग" : `${country} एसएमएस आणि ओटीपी रूट्स`,
        numbers: isGlobal ? "व्हर्च्युअल नंबर्स" : `${country} व्हर्च्युअल डीआयडी नंबर्स`,
        footerNote1: isGlobal ? "एकच एकत्रित व्यासपीठ" : "थेट कॅरियर कनेक्टिव्हिटी",
        footerNote2: isGlobal ? "जागतिक व्याप्ती" : "१००% नियमांचे काटेकोर पालन",
      },
    },
    coreServices: {
      badge: isGlobal ? "मुख्य सेवा" : `${country.toUpperCase()} सेवा आणि थेट ऑपरेटर कनेक्टिव्हिटी`,
      titleLine1: isGlobal ? "ग्राहक प्रवासाच्या प्रत्येक" : `${country} मधील सर्वोत्तम व्हॉइस आणि एसएमएस सेवा`,
      titleLine2: isGlobal ? "टप्प्यासाठी दूरसंचार उपाय" : "प्रगतीशील उद्योगांसाठी",
      description: isGlobal
        ? "जगभरात अखंड व्हॉइस, मेसेजिंग आणि व्हर्च्युअल नंबर्सच्या उच्च उपलब्धतेसाठी तयार केलेली मॉड्यूलर टेलिकॉम इन्फ्रास्ट्रक्चर."
        : `९९.९९% अपटाइम, २ सेकंदांच्या आत ओटीपी डिलिव्हरी आणि स्थानिक ऑपरेटर जोडणीसह ${country} मधील कॅरियर-ग्रेड पायाभूत सुविधा.`,
      services: [
        {
          title: isGlobal ? "व्हॉइस सेवा" : `${country} व्हॉइस आणि एसआयपी ट्रंकिंग`,
          description: isGlobal
            ? "उत्कृष्ट ऑडिओ गुणवत्ता, स्थानिक सीएलआय कव्हरेज आणि किफायतशीर दरांसह आंतरराष्ट्रीय एसआयपी ट्रंकिंग."
            : `गॅरंटीड सीएलआय सह उच्च क्षमतेचा कॉल ट्रॅफिक, प्रीमियम रूट्स आणि ${country} मधील स्थानिक टेलिकॉम ऑपरेटर्सशी थेट इंटरकनेक्ट.`,
          features: [
            isGlobal ? "उच्च दर्जाचे एचडी व्हॉइस कनेक्शन" : "शुद्ध सीएलआय रूटची खात्री",
            isGlobal ? "लवचिक राऊटिंग पर्याय" : "थेट ऑपरेटर इंटरकनेक्ट्स",
            isGlobal ? "जागतिक रिडंडंट कव्हरेज" : `संपूर्ण ${country} साठी व्हर्च्युअल डीआयडी आणि टोल-फ्री नंबर्स`,
          ],
        },
        {
          title: isGlobal ? "एसएमएस मेसेजिंग" : `${country} मधील अग्रगण्य एसएमएस सेवा`,
          description: isGlobal
            ? "महत्त्वाचे ट्रान्झॅक्शनल एसएमएस, ओटीपी व्हेरिफिकेशन कोड आणि रिच बिझनेस मेसेजेस जगभरातील मोबाईल्सवर खात्रीशीर पोहोचवा."
            : `अतिजलद ट्रान्झॅक्शनल एसएमएस, २ सेकंदांच्या आत पडताळणी कोड आणि ${country} मधील सर्व ऑपरेटर्सवर कायदेशीर बल्क मेसेजिंग.`,
          features: [
            isGlobal ? "एका सेकंदाच्या आत ओटीपी डिलिव्हरी" : `${country} मध्ये अधिकृत सेंडर आयडी नोंदणी`,
            isGlobal ? "डिलिव्हरीची सर्वोच्च खात्री" : "२ सेकंदात ओटीपी मिळण्याची गॅरंटी",
            isGlobal ? "आरसीएस रिच मीडिया मेसेजिंग" : "डायनॅमिक फेलओव्हर आणि ऑटोमॅटिक बॅकअप",
          ],
        },
        {
          title: isGlobal ? "ओम्नीचॅनेल" : `${country} ओम्नीचॅनेल आणि व्हॉट्सअॅप एपीआय`,
          description: isGlobal
            ? "व्हॉइस, एसएमएस, व्हॉट्सअॅप आणि व्हेरिफिकेशन एकाच आधुनिक रेस्ट एपीआय (REST API) मध्ये एकत्रित करा आणि त्वरित सुरू करा."
            : `अधिकृत व्हॉट्सअॅप बिझनेस एपीआय, आरसीएस संवादात्मक मेसेजिंग आणि ${country} मधील ग्राहकांसाठी विशेष मल्टि-चॅनेल संवाद.`,
          features: [
            isGlobal ? "अधिकृत व्हॉट्सअॅप बिझनेस एपीआय" : "अधिकृत व्हॉट्सअॅप बिझनेस एपीआय",
            isGlobal ? "आरसीएस संवादात्मक मेसेजिंग" : "व्हेरिफाइड ब्रँड बॅजसह आरसीएस प्रोफाइल",
            isGlobal ? "एकत्रित रेस्ट एपीआय संच" : "संपूर्ण मल्टि-चॅनेल रेस्ट एपीआय",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "बिझनेस सोल्यूशन्स" : `${country.toUpperCase()} बिझनेस सोल्यूशन्स`,
      title: isGlobal ? "ग्राहकांच्या प्रत्येक गरजांसाठी उपाय" : `${country} मधील व्यवसायांसाठी विशेष उपाय`,
      description: isGlobal
        ? "सुरक्षित आणि खात्रीशीर व्हॉइस, मेसेजिंग आणि ओम्नीचॅनेल तंत्रज्ञानाद्वारे ग्राहकांशी सतत जोडलेले राहा."
        : `${country} मधील मोठ्या कंपन्या, फिनटेक आणि वेगाने वाढणाऱ्या व्यवसायांसाठी अनुकूल अशी टेलिकॉम प्रणाली.`,
      solutions: [
        {
          id: "otp",
          name: "ओटीपी प्रमाणीकरण",
          tagline: "सुरक्षित. वेगवान. विश्वासार्ह.",
          title: `झटपट ओटीपी ऑथेंटिकेशन (${country})`,
          description: `${country} मध्ये नोंदणी, लॉगिन, पासवर्ड रिकव्हरी आणि पेमेंट मंजुरीसाठी वन-टाइम पासवर्ड सुरक्षित व जलद पाठवा.`,
          features: [
            "२ सेकंदांच्या आत अत्यंत वेगवान ओटीपी डिलिव्हरी",
            "नेटवर्क समस्या आल्यास स्वयंचलित फेलओव्हर संरक्षण",
            `${country} मधील सर्व ऑपरेटरसाठी अनुकूल केलेले रूट्स`,
          ],
          customerStatus: "ओळख प्रमाणित झाली",
          notification: {
            header: `iNet OTP (${country})`,
            body: "तुमचा व्हेरिफिकेशन कोड आहे:",
            bodyBold: "53193",
            validTime: "५ मिनिटांसाठी वैध. कोणाशीही शेअर करू नका.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "प्रमाणीकरण",
            title: "मोबाईल नंबरची पडताळणी करा",
            subtitle: `${country} मध्ये तुमच्या नोंदणीकृत नंबरवर आम्ही व्हेरिफिकेशन कोड पाठवला आहे.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "पडताळणी करा आणि पुढे जा",
            subNote: "कोड मिळाला नाही?\n00:45 सेकंदात पुन्हा पाठवा",
          },
        },
        {
          id: "banking",
          name: "बँकिंग आणि वित्त",
          tagline: "सुरक्षित. कनेक्टेड. विश्वासू.",
          title: `बँकिंग व वित्तीय सेवा अलर्ट्स (${country})`,
          description: `${country} मधील वित्तीय संस्थांसाठी रिअल-टाइम ट्रॅन्झॅक्शन अलर्ट, शिल्लक अपडेट्स आणि पेमेंट सूचना देणारी सुरक्षित प्रणाली.`,
          features: [
            "बँकिंग मानकांची एनक्रिप्टेड सुरक्षा व्यवस्था",
            "त्वरित डेबिट/क्रेडिट आणि व्यवहार सूचना",
            "मोठ्या प्रमाणात ट्रान्झॅक्शनल एसएमएस पाठवण्याची क्षमता",
          ],
          customerStatus: "व्यवहार यशस्वी झाला",
          notification: {
            header: "बँक ट्रान्झॅक्शन अलर्ट",
            body: `तुमचे ${currency}250.00 चे पेमेंट यशस्वीरित्या पूर्ण झाले आहे.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "बँकिंग",
            title: "पेमेंट यशस्वी झाले",
            subtitle: `${currency}250.00 ची रक्कम तुमच्या खात्यातून सुरक्षितपणे ट्रान्सफर झाली.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "पूर्ण झाले",
              reference: "TXN-849201",
            },
            buttonText: "पावती पहा",
            subNote: "✓ सुरक्षित आणि समर्पित टेलिकॉम नेटवर्कद्वारे पाठवले",
          },
        },
        {
          id: "marketing",
          name: "मार्केटिंग",
          tagline: "पोहोचा. जोडा. विक्री वाढवा.",
          title: `मार्केटिंग आणि जाहिरात संवाद (${country})`,
          description: `${country} मध्ये ग्राहकांसाठी विशेष सवलती, ऑफर्स आणि ब्रँड घोषणा प्रभावीपणे पोहोचवणारे लक्ष्यित एसएमएस.`,
          features: [
            "उत्तम ओपन-रेट असलेले मोठ्या प्रमाणातील प्रमोशनल एसएमएस",
            "ग्राहक वर्गीकरण आणि स्मार्ट शेड्युलिंग व्यवस्था",
            "रिअल-टाइम क्लिक ट्रॅकिंग आणि विश्लेषण",
          ],
          customerStatus: "ऑफर पोहोचवली",
          notification: {
            header: "खास ऑफर",
            line1: "विशेष ३०% सूट",
            line2: `आकर्षक सवलती संपूर्ण ${country} मध्ये उपलब्ध.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "विशेष ऑफर्स",
            badge: "मर्यादित वेळ",
            title: "फक्त तुमच्यासाठी खास डिस्काउंट",
            subtitle: `पुढील खरेदीवर मिळवा ३०% सूट.\nऑफर या महिन्याच्या अखेरपर्यंत वैध.`,
            buttonText: "सूट मिळवा",
            subNote: `✓ ${country} मधील नोंदणीकृत ग्राहकांसाठी पाठवले`,
          },
        },
        {
          id: "reminders",
          name: "रिमाइंडर",
          tagline: "वेळेवर. अचूक. स्वयंचलित.",
          title: `स्वयंचलित ग्राहक रिमाइंडर्स (${country})`,
          description: `${country} मधील ग्राहकांसाठी नियोजित भेटी, बिलांची अंतिम मुदत आणि नूतनीकरणाच्या स्वयंचलित सूचना पाठवा.`,
          features: [
            "विविध चॅनेल्सवर वेळेनुसार नियोजित स्वयंचलित संदेश",
            "संदेशामध्येच थेट पेमेंटची सोपी लिंक",
            "ग्राहकांच्या गैरहजेरीचे आणि थकबाकीचे प्रमाण कमी करा",
          ],
          customerStatus: "रिमाइंडर पोहोचला",
          notification: {
            header: "भेट नियोजनाचा रिमाइंडर",
            line1: "उद्यासाठी नियोजित",
            line2: "कृपया नियोजित वेळेच्या १० मिनिटे आधी उपस्थित राहा.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "रिमाइंडर",
            title: "उद्या तुमची अपॉइंटमेंट आहे",
            subtitle: "तुमची भेट सकाळी १०:३० वाजता निश्चित झाली आहे.",
            infoCard: {
              label: "स्थान / शाखा",
              value: `${country} मध्यवर्ती केंद्र`,
            },
            buttonText: "उपस्थिती कन्फर्म करा",
            subNote: "पुष्टीसाठी १ किंवा वेळ बदलण्यासाठी २ पाठवा",
          },
        },
        {
          id: "emergency",
          name: "आपत्कालीन सूचना",
          tagline: "तातडीचे. जलद. सदैव सक्रिय.",
          title: `आपत्कालीन व सार्वजनिक सुरक्षा अलर्ट्स (${country})`,
          description: `जेव्हा प्रत्येक सेकंद मोलाचा असतो, तेव्हा ${country} मध्ये लोकांच्या आणि व्यवसायाच्या सुरक्षेसाठी त्वरित हाय-प्रायॉरिटी अलर्ट्स पाठवा.`,
          features: [
            "सामान्य मेसेज रांगा वगळून थेट सर्वोच्च प्राधान्य रस्ता",
            "मोठ्या प्रमाणावर सतर्कतेसाठी भौगोलिक क्षेत्र लक्ष्यीकरण",
            "एसएमएस न गेल्यास स्वयंचलित व्हॉइस कॉलमध्ये रूपांतर",
          ],
          customerStatus: "सुरक्षा अलर्ट जारी केला",
          notification: {
            header: "सार्वजनिक सुरक्षा सूचना",
            line1: "तातडीचा हवामान इशारा",
            line2: "स्थानिक प्रशासनाच्या सुरक्षा सूचनांचे पालन करा.",
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "इमर्जन्सी अलर्ट",
            title: "तातडीचा हवामान इशारा",
            subtitle: "तुमच्या भागात खराब हवामानाची शक्यता आहे. सुरक्षित ठिकाणी राहा आणि अधिकृत बातम्यांचे निरीक्षण करा.",
            infoCard: {
              label: "प्रभावित क्षेत्र",
              value: country,
            },
            buttonText: "सुरक्षित क्षेत्रे पहा",
            subNote: "अधिकृत सार्वजनिक सुरक्षा प्रसारण सूचना",
          },
        },
        {
          id: "order",
          name: "ऑर्डर ट्रॅकिंग",
          tagline: "कळवा. ट्रॅक करा. वितरित करा.",
          title: `रिअल-टाइम ऑर्डर व डिलिव्हरी ट्रॅकिंग (${country})`,
          description: `${country} मध्ये वस्तू रवाना झाल्यापासून डिलिव्हरी पार्टनरचे थेट लोकेशन आणि पार्सल सुपूर्द करताना ओटीपी पडताळणीपर्यंत ग्राहकाला माहिती द्या.`,
          features: [
            "पॅकिंग आणि पाठवण्याबद्दल रिअल-टाइम स्थिती अपडेट्स",
            "थेट नकाशा लिंकसह डिलिव्हरी पार्टनर आगमन अलर्ट",
            "सुरक्षित पार्सल मिळवण्यासाठी डिलिव्हरी ओटीपी",
          ],
          customerStatus: "डिलिव्हरीसाठी रवाना",
          notification: {
            header: "ऑर्डर स्थिती अपडेट",
            line1: "ऑर्डर #IN849201 रवाना झाली आहे",
            line2: `तुमचे पार्सल आज ${country} मध्ये पोहोचेल.`,
            time: "10:24 AM",
          },
          phoneScreen: {
            backTitle: "ऑर्डर ट्रॅकिंग",
            title: "तुमची ऑर्डर येत आहे",
            subtitle: "डिलिव्हरी पार्टनर तुमचे पार्सल घेऊन येत आहेत.",
            infoCard: {
              label: "डिलिव्हरी ओटीपी कोड",
              value: "8492",
            },
            buttonText: "नकाशावर ट्रॅक करा",
            subNote: "संपर्करहित डिलिव्हरी उपलब्ध",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "उद्योग क्षेत्रातील कौशल्य" : `उद्योगनिहाय कौशल्य - ${country.toUpperCase()}`,
      titleLine1: "प्रत्येक उद्योग क्षेत्रासाठी तयार",
      titleLine2: isGlobal ? "केलेले दूरसंचार तंत्रज्ञान" : `${country} मधील व्यवसायांसाठी सज्ज`,
      description: isGlobal
        ? "उत्कृष्ट व्हॉइस, एसएमएस आणि ओम्नीचॅनेल सोल्यूशन्सद्वारे ग्राहकांशी मजबूत आणि विश्वासाचे नाते तयार करा."
        : `${country} मधील टेलिकॉम कायदे, गोपनीयता मानके आणि ग्राहकांच्या सवयीनुसार १००% सुसंगत व्यवस्था.`,
      industries: [
        {
          id: "banking",
          name: "बँकिंग आणि फायनान्स",
          title: `${country} मधील बँकिंग आणि फिनटेक`,
          description: `अतिसुरक्षित ट्रान्झॅक्शनल एसएमएस, वित्तीय नियमांचे पालन आणि त्वरित व्यवहार पडताळणी (${country}).`,
        },
        {
          id: "healthcare",
          name: "आरोग्य आणि दवाखाने",
          title: `${country} मधील रुग्णालये आणि क्लिनिक्स`,
          description: `डॉक्टरांच्या भेटींचे रिमाइंडर्स, तपासणी अहवाल सूचना आणि टेलिमेडिसिन संवाद (${country}).`,
        },
        {
          id: "ecommerce",
          name: "ई-कॉमर्स आणि रिटेल",
          title: `${country} मधील ई-कॉमर्स व रिटेल`,
          description: `ऑर्डर ट्रॅकिंग, विशेष ऑफर्सचे संदेश आणि मल्टि-चॅनेल ग्राहक सेवा सपोर्ट (${country}).`,
        },
        {
          id: "education",
          name: "शिक्षण आणि विद्यापीठे",
          title: `${country} मधील शाळा व विद्यापीठे`,
          description: `प्रवेश सूचना, कॅम्पस आपत्कालीन सूचना आणि पालकांशी नियमित संवाद व्यवस्था (${country}).`,
        },
        {
          id: "travel",
          name: "पर्यटन आणि हॉस्पिटॅलिटी",
          title: `${country} मधील विमानसेवा व हॉटेल्स`,
          description: `बोर्डिंग गेट बदल सूचना, हॉटेल आरक्षण पडताळणी आणि प्रवाशांना २४/७ अखंड मदत (${country}).`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "आमच्याशी संपर्क साधा" : `${country.toUpperCase()} मध्ये आमच्याशी संपर्क साधा`,
      titleLine1: "चला व्यवसायासाठी योग्य असे",
      titleLine2: isGlobal ? "टेलिकॉम नेटवर्क उभे करूया." : `दूरसंचार जाळे ${country} मध्ये उभे करूया.`,
      description: isGlobal
        ? "iNet Global Services सह कंपन्या विश्वासार्ह एसएमएस आणि व्हॉइस टूल्सचा वापर करून ग्राहक जोडणी वाढवू शकतात, डेटा सुरक्षित ठेवू शकतात आणि ऑपरेशन्स सुलभ करू शकतात. आम्ही वेग, स्थैर्य आणि उच्च कार्यक्षमता देतो."
        : `${country} मधील थेट ऑपरेटर एसएमएस रूट्स, स्पष्ट व्हॉइस टर्मिनेशन आणि पूर्ण कायदेशीर नियमांचे पालन करण्यासाठी iNet Global शी भागीदारी करा. मोफत चाचणी आणि विशेष दरांसाठी आजच आमच्या प्रतिनिधींशी चर्चा करा.`,
    },
    footer: {
      description: isGlobal
        ? "ज्या कंपन्यांना खात्रीशीर व्हॉइस, एसएमएस आणि ओम्नीचॅनेल संपर्काची गरज आहे, त्यांच्यासाठी जागतिक कॉर्पोरेट टेलिकॉम इन्फ्रास्ट्रक्चर."
        : `कॅरियर-दर्जाचे व्हॉइस, एसएमएस, व्हर्च्युअल डीआयडी नंबर्स आणि ओम्नीचॅनेल एपीआय प्रदान करणारी प्रणाली ${country} आणि जगभरात.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). सर्व हक्क राखीव.`,
    },
  }),

  // 14. Swahili (Kiswahili - sw)
  sw: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "MIUNDOMBINU YA MAWASILIANO YA KIMATAIFA"
        : `MIUNDOMBINU YA MAWASILIANO KATIKA ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Mawasiliano ya Kimataifa," : `Huduma Bora za SMS na Sauti`,
      titleLine2: isGlobal ? "Yaliyojengwa Mahususi Kwa" : `Nchini ${country},`,
      titleLine3: isGlobal ? "Biashara Kubwa." : `Tayari Kwa Kiwango cha Biashara Kubwa.`,
      description: isGlobal
        ? "Sauti ya kuaminika, ujumbe wa kibiashara, na namba pepe kwa makampuni yanayohitaji kuunganishwa bila mipaka, timu, na kila mteja."
        : `Kuziwezesha kampuni nchini ${country} kwa njia za SMS zenye kasi ya juu, ukamilishaji wa sauti wenye ucheleweshaji wa chini sana, na miunganisho ya moja kwa moja ya waendeshaji mtandao.`,
      primaryCta: isGlobal ? "Anza Sasa" : `Anza Nchini ${country}`,
      secondaryCta: isGlobal ? "Gundua Huduma" : `Angalia Njia za ${country}`,
      timeline: {
        voice: isGlobal ? "Sauti ya Biashara" : `Trafiki ya Sauti (CLI) nchini ${country}`,
        messaging: isGlobal ? "SMS na Ujumbe" : `Njia za SMS na OTP nchini ${country}`,
        numbers: isGlobal ? "Namba Pepe" : `Namba Pepe za DID nchini ${country}`,
        footerNote1: isGlobal ? "Jukwaa Moja Pekee" : "Njia za Moja kwa Moja za Mitandao",
        footerNote2: isGlobal ? "Ufikiaji wa Kimataifa" : "Inazingatia Sheria 100%",
      },
    },
    coreServices: {
      badge: isGlobal ? "HUDUMA KUU" : `HUDUMA NA MIUNGANISHO YA MITANDAO NCHINI ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Suluhisho za mawasiliano kwa kila" : `Huduma Bora za Sauti na SMS nchini ${country}`,
      titleLine2: isGlobal ? "hatua ya safari ya mteja" : "Kwa Biashara Zinazokua",
      description: isGlobal
        ? "Miundombinu imara ya mawasiliano ya simu iliyoundwa kwa ajili ya upatikanaji wa juu wa huduma za sauti, ujumbe, na namba pepe ulimwenguni."
        : `Miundombinu ya kiwango cha juu cha mtoa huduma nchini ${country} yenye upatikanaji wa 99.99%, utoaji wa OTP chini ya sekunde 2, na muunganisho wa moja kwa moja wa mitandao ya ndani.`,
      services: [
        {
          title: isGlobal ? "Huduma za Sauti" : `Sauti na SIP Trunking nchini ${country}`,
          description: isGlobal
            ? "SIP trunking ya kimataifa yenye njia rahisi zilizoundwa kwa ubora wa juu wa sauti, utambulisho wa namba (CLI) na gharama nafuu."
            : `Trafiki kubwa ya simu nchini ${country} yenye utambulisho wa namba uliohakikishwa (CLI), njia za daraja la kwanza, na miunganisho ya moja kwa moja.`,
          features: [
            isGlobal ? "Miunganisho ya sauti ya ubora wa juu ya HD" : "Uhakika wa Njia Safi ya CLI",
            isGlobal ? "Chaguo rahisi za kuelekeza simu" : "Miunganisho ya Moja kwa Moja ya Mitandao",
            isGlobal ? "Ufikiaji mpana duniani kote" : `Namba Pepe za DID Nchi Nzima (${country})`,
          ],
        },
        {
          title: isGlobal ? "Ujumbe wa SMS" : `Huduma Bora za SMS nchini ${country}`,
          description: isGlobal
            ? "Tuma SMS muhimu za miamala, nambari za uthibitishaji wa OTP, na ujumbe wa kibiashara moja kwa moja kwenye simu za mkononi duniani kote."
            : `SMS za haraka za miamala, nambari za uthibitishaji chini ya sekunde 2, na ujumbe wa wingi unaozingatia sheria kwenye mitandao yote nchini ${country}.`,
          features: [
            isGlobal ? "Utoaji wa OTP chini ya sekunde moja" : `Usajili Rasmi wa Jina la Mtumaji (Sender ID) nchini ${country}`,
            isGlobal ? "Uhakika wa juu wa uwasilishaji" : "Dhamana ya Kufikisha OTP Chini ya Sekunde 2",
            isGlobal ? "Ujumbe wa picha na video wa RCS" : "Mfumo Imara wa Kubadili Njia Ikitokea Hitilafu",
          ],
        },
        {
          title: isGlobal ? "Njia Nyingi (Omnichannel)" : `API ya Njia Nyingi na WhatsApp nchini ${country}`,
          description: isGlobal
            ? "Unganisha Sauti, SMS, WhatsApp, na Uthibitishaji wa utambulisho katika seti moja ya REST API iliyo tayari kuanza kutumika."
            : `API rasmi ya WhatsApp Business, ujumbe shirikishi wa RCS, na njia zilizounganishwa zinazolenga wateja nchini ${country}.`,
          features: [
            isGlobal ? "API Rasmi ya WhatsApp Business" : "API Rasmi ya WhatsApp Business",
            isGlobal ? "Mazungumzo shirikishi ya RCS" : "Wasifu wa Biashara Uliothibitishwa kwenye RCS",
            isGlobal ? "Seti moja ya REST API" : "REST APIs Kamili za Njia Nyingi",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "SULUHU ZA KIBIASHARA" : `SULUHU ZA KIBIASHARA NCHINI ${country.toUpperCase()}`,
      title: isGlobal ? "Suluhu kwa Kila Hatua ya Mteja" : `Suluhu Zilizobuniwa Mahususi kwa ${country}`,
      description: isGlobal
        ? "Ungana, shiriki, na wasiliana na wateja kupitia sauti salama na ya kuaminika, SMS, na mifumo ya kisasa ya kidijitali."
        : `Jukwaa la mawasiliano lenye ufanisi mkubwa lililotengenezwa kwa makampuni makubwa, fintech, na biashara zinazokua nchini ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Uthibitishaji wa OTP",
          tagline: "Salama. Haraka. Ya Kuaminika.",
          title: `Uthibitishaji wa Papo Hapo wa OTP (${country})`,
          description: `Tuma manenosiri ya mara moja haraka na kwa usalama kwa ajili ya usajili, kuingia kwenye akaunti, kurejesha nenosiri, na malipo nchini ${country}.`,
          features: [
            "Uwasilishaji wa haraka na salama wa OTP chini ya sekunde 2",
            "Ulinzi wa kubadili mtandao kiotomatiki ikitokea hitilafu",
            `Njia zilizoboreshwa kwa mitandao yote ya simu nchini ${country}`,
          ],
          customerStatus: "Utambulisho Umethibitishwa",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Nambari yako ya uthibitishaji ni:",
            bodyBold: "53193",
            validTime: "Inatumika kwa dakika 5. Usishiriki na mtu yeyote.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Uthibitishaji",
            title: "Thibitisha Nambari Yako ya Simu",
            subtitle: `Tumetuma nambari ya uthibitishaji kwenye nambari yako iliyosajiliwa nchini ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Thibitisha na Uendelee",
            subNote: "Hujapokea nambari?\nTuma tena baada ya 00:45",
          },
        },
        {
          id: "banking",
          name: "Benki na Fedha",
          tagline: "Salama. Imeunganishwa. Inaaminika.",
          title: `Huduma za Kibenki na Kifedha (${country})`,
          description: `Mawasiliano salama ya kifedha yenye taarifa za papo hapo za miamala, masalio, na malipo kwa taasisi za fedha nchini ${country}.`,
          features: [
            "Ulinzi wa data uliosimbwa kwa viwango vya usalama wa kibenki",
            "Taarifa za papo hapo za kutoa/kuweka na uhamisho wa fedha",
            "Uwezo mkubwa wa kubeba SMS nyingi za miamala",
          ],
          customerStatus: "Muamala Umekamilika",
          notification: {
            header: "Taarifa ya Muamala wa Benki",
            body: `Malipo yako ya ${currency}250.00 yamekamilika kwa mafanikio.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Huduma za Kibenki",
            title: "Malipo Yamefanikiwa",
            subtitle: `${currency}250.00 imeshughulikiwa salama kwenye akaunti yako.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Imekamilika",
              reference: "TXN-849201",
            },
            buttonText: "Tazama Risiti",
            subNote: "✓ Imetumwa kupitia njia salama ya mtandao iliyoidhinishwa",
          },
        },
        {
          id: "marketing",
          name: "Masoko na Matangazo",
          tagline: "Fikia. Shirikisha. Badilisha Kuwa Mauzo.",
          title: `Mawasiliano ya Masoko na Matangazo (${country})`,
          description: `Fikia wateja kupitia kampeni maalum za SMS zenye ofa, punguzo la msimu, na matangazo ya chapa nchini ${country}.`,
          features: [
            "Ujumbe wa wingi wa matangazo wenye kiwango cha juu cha kusomwa",
            "Uainishaji wa walengwa na ratiba ya utumaji wa kiakili",
            "Ufuatiliaji wa kubofya na uchanganuzi wa mauzo kwa wakati halisi",
          ],
          customerStatus: "Ofa Imewasilishwa",
          notification: {
            header: "Ofa Maalum",
            line1: "PUNGUZO MAALUM LA 30%",
            line2: `Ofa kabambe zinapatikana kote nchini ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Ofa Maalum",
            badge: "Muda Mchache",
            title: "Punguzo Maalum Kwa Ajili Yako",
            subtitle: `Pata punguzo la 30% unaponunua tena.\nOfa hii ni halali hadi mwisho wa mwezi huu.`,
            buttonText: "Chukua Ofa Hii",
            subNote: `✓ Imetumwa kwa wateja walioidhinishwa nchini ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Vikumbusho",
          tagline: "Kwa Wakati. Sahihi. Kiotomatiki.",
          title: `Vikumbusho vya Kiotomatiki kwa Wateja (${country})`,
          description: `Wajulishe wateja mapema kuhusu miadi, tarehe za mwisho za kulipia bili, na matukio yaliyopangwa nchini ${country}.`,
          features: [
            "Taarifa za kiotomatiki kupitia njia nyingi kulingana na ratiba",
            "Viungo vya malipo ya haraka vilivyowekwa kwenye ujumbe",
            "Kupunguza sana kutotokea kwenye miadi na ucheleweshaji wa malipo",
          ],
          customerStatus: "Kikumbusho Kimewasilishwa",
          notification: {
            header: "Kikumbusho cha Miadi",
            line1: "Imepangwa kwa Siku ya Kesho",
            line2: "Tafadhali fika dakika 10 kabla ya muda uliopangwa.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Vikumbusho",
            title: "Una Miadi Kesho",
            subtitle: "Miadi yako imethibitishwa saa 4:30 asubuhi.",
            infoCard: {
              label: "Kituo / Tawi",
              value: `Kituo Kikuu cha ${country}`,
            },
            buttonText: "Thibitisha Kuhudhuria",
            subNote: "Jibu 1 kuthibitisha au 2 kubadilisha tarehe",
          },
        },
        {
          id: "emergency",
          name: "Taarifa za Dharura",
          tagline: "Muhimu. Haraka. Huunganishwa Daima.",
          title: `Matangazo ya Dharura na Usalama wa Umma (${country})`,
          description: `Tuma taarifa za dharura zenye kipaumbele cha juu papo hapo wakati kila sekunde inapohitajika ili kulinda usalama na biashara nchini ${country}.`,
          features: [
            "Njia ya kipaumbele cha juu inayopita foleni za kawaida",
            "Uainishaji wa kijiografia kwa ajili ya tahadhari za umma",
            "Kubadili kwenda kwenye simu za sauti iwapo SMS haitafika",
          ],
          customerStatus: "Tahadhari ya Dharura Imetolewa",
          notification: {
            header: "Tahadhari ya Usalama wa Umma",
            line1: "Tahadhari ya Hali ya Hewa",
            line2: "Tafadhali fuata maelekezo ya mamlaka husika za usalama.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Tahadhari ya Dharura",
            title: "Tahadhari ya Hali ya Hewa",
            subtitle: "Hali mbaya ya hewa imeripotiwa katika eneo lako. Kaa ndani na ufuatilie taarifa rasmi.",
            infoCard: {
              label: "Eneo Lililoathirika",
              value: country,
            },
            buttonText: "Tazama Sehemu Salama",
            subNote: "Tangazo rasmi la usalama wa umma",
          },
        },
        {
          id: "order",
          name: "Ufuatiliaji wa Mizigo",
          tagline: "Fahamisha. Fuatilia. Fikisha.",
          title: `Ufuatiliaji wa Maagizo na Usafirishaji kwa Wakati Halisi (${country})`,
          description: `Wape wateja taarifa kuanzia mzigo unapotumwa kutoka ghalani, kufuatilia msafirishaji kwenye ramani, hadi nambari ya OTP ya kupokelea nchini ${country}.`,
          features: [
            "Taarifa za moja kwa moja kuhusu upakiaji na usafirishaji wa mzigo",
            "Tahadhari ya kuwasili kwa mtoa huduma yenye kiungo cha ramani",
            "Msimbo salama wa OTP ili kuthibitisha kupokea kifurushi",
          ],
          customerStatus: "Kifurushi Kinaelekea Kufikishwa",
          notification: {
            header: "Hali ya Agizo Lako",
            line1: "Agizo #IN849201 Limetumwa",
            line2: `Mzigo wako utawasilishwa leo nchini ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Ufuatiliaji wa Mzigo",
            title: "Mzigo Wako Uko Njia",
            subtitle: "Dereva wa usafirishaji yuko njiani kuleta kifurushi chako.",
            infoCard: {
              label: "Msimbo wa OTP wa Kupokelea",
              value: "8492",
            },
            buttonText: "Fuatilia Kwenye Ramani",
            subNote: "Utoaji bila kugusana umewezeshwa",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "UZOEFU WA VIWANDA" : `UZOEFU WA SEKTA - ${country.toUpperCase()}`,
      titleLine1: "Suluhisho za Mawasiliano Zilizobuniwa",
      titleLine2: isGlobal ? "Kwa Kila Sekta ya Kibiashara" : `Kwa Biashara nchini ${country}`,
      description: isGlobal
        ? "Jenga uhusiano imara na wateja kupitia huduma bora za sauti, SMS, na njia za kisasa zilizounganishwa."
        : `Miundombinu inayotimiza kikamilifu kanuni za mawasiliano, viwango vya ulinzi wa data, na mahitaji ya wateja nchini ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Benki na Fedha",
          title: `Benki na Fintech nchini ${country}`,
          description: `SMS salama za miamala, uzingatiaji wa sheria za kifedha, na uthibitishaji wa malipo kwa wakati halisi (${country}).`,
        },
        {
          id: "healthcare",
          name: "Afya na Zahanati",
          title: `Hospitali na Vituo vya Afya nchini ${country}`,
          description: `Vikumbusho vya kumuona daktari, majibu ya vipimo vya maabara, na mawasiliano ya telemedicine (${country}).`,
        },
        {
          id: "ecommerce",
          name: "Biashara ya Mtandao",
          title: `Biashara ya Mtandaoni na Rejareja nchini ${country}`,
          description: `Ufuatiliaji wa vifurushi, ujumbe wa punguzo la bei, na huduma kwa wateja ya njia mbalimbali (${country}).`,
        },
        {
          id: "education",
          name: "Elimu na Vyuo Vikuu",
          title: `Shule na Vyuo Vikuu nchini ${country}`,
          description: `Taarifa za udahili, matangazo ya dharura chuoni, na mawasiliano ya mara kwa mara na wazazi (${country}).`,
        },
        {
          id: "travel",
          name: "Usafiri na Ukarimu",
          title: `Mashirika ya Ndege na Hoteli nchini ${country}`,
          description: `Mabadiliko ya lango la ndege, uthibitisho wa hoteli, na usaidizi wa wasafiri saa 24/7 (${country}).`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "WASILIANA NASI" : `WASILIANA NASI NCHINI ${country.toUpperCase()}`,
      titleLine1: "Tujenge Pamoja Muunganisho",
      titleLine2: isGlobal ? "Sahihi wa Mawasiliano." : `Sahihi wa Mawasiliano nchini ${country}.`,
      description: isGlobal
        ? "Ukiwa na iNet Global Services, biashara zinaweza kutumia masuluhisho thabiti ya SMS na sauti ili kuongeza mwingiliano wa wateja, kuimarisha usalama, na kurahisisha shughuli. Tunatoa kasi, uthabiti, na utendaji wa hali ya juu."
        : `Shirikiana na iNet Global kupata njia za moja kwa moja za SMS, sauti safi isiyo na mikwaruzo, na uzingatiaji kamili wa sheria nchini ${country}. Wasiliana na wataalamu wetu kwa majaribio ya bure na makadirio ya bei.`,
    },
    footer: {
      description: isGlobal
        ? "Miundombinu ya kimataifa ya mawasiliano ya simu kwa makampuni yanayohitaji uhakika wa juu katika huduma za sauti, ujumbe, na mifumo ya kidijitali."
        : `Miundombinu ya daraja la kibiashara inayotoa Sauti, SMS, Namba Pepe za DID, na API za Kidijitali nchini ${country} na ulimwenguni.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "United States" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Haki zote zimehifadhiwa.`,
    },
  }),

  // 15. Swedish (Svenska - sv)
  sv: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "GLOBAL TELEKOMINFRASTRUKTUR"
        : `TELEKOMINFRASTRUKTUR I ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Global Kommunikation," : `Bästa SMS- & Rösttrafik`,
      titleLine2: isGlobal ? "Byggd För Det" : `I ${country},`,
      titleLine3: isGlobal ? "Moderna Företaget." : `Redo För Enterprise-Skala.`,
      description: isGlobal
        ? "Pålitliga rösttjänster, företagsmeddelanden och virtuella nummer för organisationer som behöver hålla kontakten över landsgränser, team och i varje kundmöte."
        : `Vi stärker företag i ${country} med SMS-rutter med hög kapacitet, röstterminering med ultralåg latens och direkta samtrafiksförbindelser till lokala operatörer.`,
      primaryCta: isGlobal ? "Kom Igång" : `Börja i ${country}`,
      secondaryCta: isGlobal ? "Utforska Tjänster" : `Se Rutter i ${country}`,
      timeline: {
        voice: isGlobal ? "Företagsröst" : `Rösttrafik (CLI) i ${country}`,
        messaging: isGlobal ? "SMS & Meddelanden" : `SMS- & OTP-rutter i ${country}`,
        numbers: isGlobal ? "Virtuella Nummer" : `Virtuella DID-nummer i ${country}`,
        footerNote1: isGlobal ? "En Enhetlig Plattform" : "Direkta Operatörsrutter",
        footerNote2: isGlobal ? "Global Räckvidd" : "100% Regelefterlevnad",
      },
    },
    coreServices: {
      badge: isGlobal ? "KÄRNTJÄNSTER" : `TJÄNSTER & OPERATÖRSFÖRBINDELSER I ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Kommunikationslösningar för varje" : `Bästa Röst- & SMS-tjänster i ${country}`,
      titleLine2: isGlobal ? "steg i kundresan" : "För Växande Företag",
      description: isGlobal
        ? "Modulär telekominfrastruktur utvecklad för maximal tillgänglighet inom röst, meddelanden och virtuella nummer över hela världen."
        : `Telekominfrastruktur i operatörsklass i ${country} med 99,99% drifttid, OTP-leverans under 2 sekunder och direkta samtrafikanslutningar.`,
      services: [
        {
          title: isGlobal ? "Rösttjänster" : `SIP Trunking & Röst i ${country}`,
          description: isGlobal
            ? "Internationell SIP-trunking med flexibel dirigering, kristallklar ljudkvalitet, lokal CLI-presentation och optimerade termineringskostnader."
            : `Samtalstrafik med hög samtidighet i ${country} med garanterad CLI, premiumrutter och direkta förbindelser till lokala teleoperatörer.`,
          features: [
            isGlobal ? "HD-röstanslutningar av högsta kvalitet" : "Garanterat Rena CLI-rutter",
            isGlobal ? "Flexibla dirigeringsalternativ" : "Direkta Operatörsförbindelser",
            isGlobal ? "Global redundant täckning" : `Nationella Virtuella DID-nummer i ${country}`,
          ],
        },
        {
          title: isGlobal ? "SMS-meddelanden" : `Bästa SMS-tjänster i ${country}`,
          description: isGlobal
            ? "Skicka kritiska transaktions-SMS, verifieringskoder (OTP) och rika företagsmeddelanden direkt till mobiltelefoner över hela världen med hög leveranssäkerhet."
            : `Blixtsnabba transaktions-SMS, verifieringskoder inom 2 sekunder och regelefterlevande massutskick i alla mobilnätverk i ${country}.`,
          features: [
            isGlobal ? "Blixtsnabb OTP-leverans" : `Officiell Registrering av Avsändar-ID i ${country}`,
            isGlobal ? "Högsta leveransgaranti" : "Garanterad OTP-leverans Inom 2 Sekunder",
            isGlobal ? "RCS interaktiva mediemeddelanden" : "Dynamisk Redundans & Automatisk Nätverksväxling",
          ],
        },
        {
          title: isGlobal ? "Flerkanaligt (Omnichannel)" : `Omnichannel & WhatsApp API i ${country}`,
          description: isGlobal
            ? "Förena Röst, SMS, WhatsApp och Verifiering i en utvecklarvänlig REST API-svit redo för snabb implementering."
            : `Officiellt WhatsApp Business API, interaktiva RCS-meddelanden och integrerade kanaler skräddarsydda för kunder i ${country}.`,
          features: [
            isGlobal ? "Officiellt WhatsApp Business API" : "Officiellt WhatsApp Business API",
            isGlobal ? "RCS interaktiva konversationer" : "Verifierad Varumärkesprofil med Badge i RCS",
            isGlobal ? "Enhetlig REST API-svit" : "Komplett Flerkanalig REST API-svit",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "FÖRETAGSLÖSNINGAR" : `FÖRETAGSLÖSNINGAR I ${country.toUpperCase()}`,
      title: isGlobal ? "Lösningar för Varje Skede av Kundresan" : `Lösningar Framtagna För ${country}`,
      description: isGlobal
        ? "Koppla upp, engagera och kommunicera med kunder genom säkra och pålitliga röst-, SMS- och flerkanalsverktyg."
        : `Högpresterande telekomstapell utformad för storföretag, fintech och snabbväxande bolag i ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "OTP-autentisering",
          tagline: "Säkert. Snabbt. Pålitligt.",
          title: `Omedelbar OTP-verifiering (${country})`,
          description: `Leverera engångslösenord snabbt och säkert för registreringar, inloggningar, kontosäkerhet och betalningsgodkännanden i ${country}.`,
          features: [
            "Snabb och pålitlig OTP-leverans på under 2 sekunder",
            "Automatiskt failover-skydd mellan mobiloperatörer",
            `Optimerade rutter över samtliga nätverk i ${country}`,
          ],
          customerStatus: "Identitet Verifierad",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Din verifieringskod är",
            bodyBold: "53193",
            validTime: "Giltig i 5 minuter. Dela den inte med någon.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Verifiering",
            title: "Bekräfta ditt Mobilnummer",
            subtitle: `Vi har skickat en säkerhetskod till ditt registrerade nummer i ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verifiera och Fortsätt",
            subNote: "Fick du ingen kod?\nSkicka igen om 00:45",
          },
        },
        {
          id: "banking",
          name: "Bank & Finans",
          tagline: "Säkert. Uppkopplat. Pålitligt.",
          title: `Bank- och Finanstjänster (${country})`,
          description: `Säker finansiell kommunikation med transaktionsnotiser i realtid, saldoändringar och betalningsbekräftelser i ${country}.`,
          features: [
            "Krypterade säkerhetskanaler av bankstandard",
            "Direkta aviseringar vid debet/kredit och överföringar",
            "Hög kapacitet för storskaliga transaktions-SMS",
          ],
          customerStatus: "Transaktion Genomförd",
          notification: {
            header: "Banknotis Transaktion",
            body: `Din betalning på ${currency}250.00 har slutförts framgångsrikt.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Banktjänster",
            title: "Betalning Godkänd",
            subtitle: `${currency}250.00 har behandlats säkert på ditt konto.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Slutförd",
              reference: "TXN-849201",
            },
            buttonText: "Visa Kvitto",
            subNote: "✓ Skickat via en dedikerad och säker operatörskanal",
          },
        },
        {
          id: "marketing",
          name: "Marknadsföring",
          tagline: "Nå ut. Engagera. Konvertera.",
          title: `Marknadskommunikation & Kampanjer (${country})`,
          description: `Nå konsumenter genom målinriktade SMS-kampanjer med exklusiva erbjudanden, reor och varumärkesnyheter i hela ${country}.`,
          features: [
            "Massutskick av marknadsförings-SMS med hög öppningsgrad",
            "Målgruppssegmentering och smart schemaläggning",
            "Klickspårning och konverteringsanalys i realtid",
          ],
          customerStatus: "Erbjudande Levererat",
          notification: {
            header: "Exklusivt Erbjudande",
            line1: "SPECIELL 30% RABATT",
            line2: `Exklusiva kampanjer giltiga i hela ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Erbjudanden",
            badge: "Begränsad Tid",
            title: "Exklusiv Rabatt Speciellt För Dig",
            subtitle: `Få 30% rabatt på ditt nästa köp.\nErbjudandet gäller månaden ut.`,
            buttonText: "Ta Del Av Erbjudandet",
            subNote: `✓ Skickat till verifierade prenumeranter i ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Påminnelser",
          tagline: "I Tid. Träffsäkert. Automatiserat.",
          title: `Automatiserade Kundpåminnelser (${country})`,
          description: `Håll kunder informerade med automatiska påminnelser om bokade tider, fakturaförfallodagar och förnyelser i ${country}.`,
          features: [
            "Flerkanaliga automatiska schemalagda påminnelser",
            "Snabba betalningslänkar inbäddade direkt i meddelandet",
            "Minskar uteblivna besök och försenade betalningar drastiskt",
          ],
          customerStatus: "Påminnelse Levererad",
          notification: {
            header: "Bokningspåminnelse",
            line1: "Inbokad Tills Imorgon",
            line2: "Vänligen kom 10 minuter före utsatt tid.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Påminnelser",
            title: "Tid Inbokad Imorgon",
            subtitle: "Ditt möte är bekräftat klockan 10:30.",
            infoCard: {
              label: "Plats / Mottagning",
              value: `Centrala Enheten ${country}`,
            },
            buttonText: "Bekräfta Närvaro",
            subNote: "Svara 1 för att bekräfta eller 2 för att boka om",
          },
        },
        {
          id: "emergency",
          name: "Nödaviseringar",
          tagline: "Kritiskt. Blixtsnabbt. Alltid Uppkopplat.",
          title: `Nöd- och Säkerhetslarm (${country})`,
          description: `Skicka prioriterade nödlarm omedelbart när varje sekund räknas, för att säkerställa allmänhetens skydd och kontinuitet i ${country}.`,
          features: [
            "Högsta prioriterade rutt som passerar förbi vanliga SMS-köer",
            "Geografisk avgränsning för storskaliga massvarningar",
            "Automatisk växling till röstsamtal om SMS misslyckas",
          ],
          customerStatus: "Nödlarm Utskickat",
          notification: {
            header: "Viktigt Meddelande till Allmänheten",
            line1: "Brådskande Vädervarning",
            line2: "Följ lokala myndigheters säkerhetsanvisningar.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Nödvarning",
            title: "Brådskande Vädervarning",
            subtitle: "Svåra väderförhållanden rapporteras i ditt område. Stanna inomhus och följ officiella rapporter.",
            infoCard: {
              label: "Påverkat Område",
              value: country,
            },
            buttonText: "Visa Säkra Zoner",
            subNote: "Officiellt säkerhetsmeddelande till allmänheten",
          },
        },
        {
          id: "order",
          name: "Beställningsstatus",
          tagline: "Informera. Spåra. Leverera.",
          title: `Spårning av Beställningar & Leveranser i Realtid (${country})`,
          description: `Håll köpare uppdaterade genom hela leveransen: från lagerskick, chaufförens position i realtid till OTP-kod vid mottagandet i ${country}.`,
          features: [
            "Realtidsuppdateringar om packning och transportstatus",
            "Avisering när budet närmar sig med länk till live-karta",
            "Säker engångskod (OTP) vid överlämning av paketet",
          ],
          customerStatus: "Ute för Leverans",
          notification: {
            header: "Statusuppdatering för Beställning",
            line1: "Order #IN849201 Skickad",
            line2: `Ditt paket anländer idag under adressen i ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Paketspårning",
            title: "Ditt Paket Är På Väg",
            subtitle: "Budet är på väg till din adress med din leverans.",
            infoCard: {
              label: "Mottagningskod (OTP)",
              value: "8492",
            },
            buttonText: "Följ på Karta",
            subNote: "Kontaktlös leverans aktiverad",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "BRANSCHEXPERTIIS" : `BRANSCHEXPERTIIS - ${country.toUpperCase()}`,
      titleLine1: "Telekomlösningar Skapade",
      titleLine2: isGlobal ? "För Varje Bransch" : `För Företag i ${country}`,
      description: isGlobal
        ? "Skapa starka och långvariga relationer med kunder genom pålitliga rösttjänster, SMS och integrerade digitala kanaler."
        : `Infrastruktur som fullt ut möter lokala telekomregler, GDPR-krav och kundbeteenden i ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Bank och Finans",
          title: `Bank och Fintech i ${country}`,
          description: `Säkra transaktions-SMS, strikt regelefterlevnad och direkt betalningsverifiering i ${country}.`,
        },
        {
          id: "healthcare",
          name: "Vård och Hälsa",
          title: `Sjukhus och Vårdcentraler i ${country}`,
          description: `Bokningspåminnelser, provsvar och säker digital vårdkommunikation i ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Handel och Retail",
          title: `E-Handel & Detaljhandel i ${country}`,
          description: `Paketspårning, kampanjmeddelanden och flerkanalig kundservice i ${country}.`,
        },
        {
          id: "education",
          name: "Utbildning och Universitet",
          title: `Skolor och Lärosäten i ${country}`,
          description: `Antagningsbesked, viktiga campuslarm och kommunikation med vårdnadshavare i ${country}.`,
        },
        {
          id: "travel",
          name: "Resor och Turism",
          title: `Flyg och Hotellverksamhet i ${country}`,
          description: `Gateändringar, bokningsbekräftelser och support dygnet runt för resenärer i ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "KONTAKTA OSS" : `KONTAKTA OSS I ${country.toUpperCase()}`,
      titleLine1: "Låt Oss Bygga Rätt",
      titleLine2: isGlobal ? "Kommunikationslösning." : `Telekomförbindelse i ${country}.`,
      description: isGlobal
        ? "Med iNet Global Services får organisationer tillgång till stabila SMS- och röstlösningar för att öka kundengagemanget, förstärka säkerheten och effektivisera processer. Vi levererar fart, driftsäkerhet och kvalitet."
        : `Samarbeta med iNet Global för direkta SMS-rutter, kristallklart ljud och 100% regelefterlevnad i ${country}. Kontakta vårt företagsteam idag för kostnadsfria tester och skräddarsydda priser.`,
    },
    footer: {
      description: isGlobal
        ? "Global telekominfrastruktur för företag som ställer högsta krav på driftsäker röst, meddelanden och flerkanalsanslutning."
        : `Infrastruktur i operatörsklass som tillhandahåller röst, SMS, virtuella DID-nummer och flerkanaliga API:er i ${country} och globalt.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "USA" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Alla rättigheter förbehållna.`,
    },
  }),

  // 16. Greek (Ελληνικά - el)
  el: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "ΠΑΓΚΟΣΜΙΑ ΤΗΛΕΠΙΚΟΙΝΩΝΙΑΚΗ ΥΠΟΔΟΜΗ"
        : `ΤΗΛΕΠΙΚΟΙΝΩΝΙΑΚΗ ΥΠΟΔΟΜΗ ΣΤΗΝ ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Παγκόσμια Επικοινωνία," : `Κορυφαία Κίνηση SMS & Φωνής`,
      titleLine2: isGlobal ? "Σχεδιασμένη Για Τις" : `Στην ${country},`,
      titleLine3: isGlobal ? "Σύγχρονες Επιχειρήσεις." : `Σε Επιχειρησιακή Κλίμακα.`,
      description: isGlobal
        ? "Αξιόπιστη φωνή, εταιρικά μηνύματα και εικονικοί αριθμοί για επιχειρήσεις που χρειάζονται απρόσκοπτη σύνδεση διασυνοριακά, μεταξύ ομάδων και πελατών."
        : `Ενισχύουμε τις επιχειρήσεις στην ${country} με διαδρομές SMS υψηλής χωρητικότητας, τερματισμό φωνής εξαιρετικά χαμηλής καθυστέρησης και απευθείας διασυνδέσεις παρόχων.`,
      primaryCta: isGlobal ? "Ξεκινήστε Τώρα" : `Έναρξη στην ${country}`,
      secondaryCta: isGlobal ? "Δείτε τις Υπηρεσίες" : `Διαδρομές στην ${country}`,
      timeline: {
        voice: isGlobal ? "Εταιρική Φωνή" : `Κίνηση Φωνής (CLI) στην ${country}`,
        messaging: isGlobal ? "SMS & Μηνύματα" : `Διαδρομές SMS & OTP στην ${country}`,
        numbers: isGlobal ? "Εικονικοί Αριθμοί" : `Εικονικοί Αριθμοί DID στην ${country}`,
        footerNote1: isGlobal ? "Μία Ενιαία Πλατφόρμα" : "Απευθείας Διαδρομές Παρόχων",
        footerNote2: isGlobal ? "Παγκόσμια Κάλυψη" : "100% Συμμόρφωση με Κανονισμούς",
      },
    },
    coreServices: {
      badge: isGlobal ? "ΒΑΣΙΚΕΣ ΥΠΗΡΕΣΙΕΣ" : `ΥΠΗΡΕΣΙΕΣ & ΔΙΑΣΥΝΔΕΣΕΙΣ ΣΤΗΝ ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Τηλεπικοινωνιακές λύσεις για κάθε" : `Κορυφαίες Υπηρεσίες Φωνής & SMS στην ${country}`,
      titleLine2: isGlobal ? "στάδιο της εμπειρίας πελάτη" : "Για Αναπτυσσόμενες Επιχειρήσεις",
      description: isGlobal
        ? "Αρθρωτή τηλεπικοινωνιακή υποδομή σχεδιασμένη για μέγιστη διαθεσιμότητα σε υπηρεσίες φωνής, μηνυμάτων και εικονικών αριθμών παγκοσμίως."
        : `Υποδομή επιπέδου παρόχου στην ${country} με 99,99% διαθεσιμότητα, παράδοση OTP κάτω των 2 δευτερολέπτων και τοπικές διασυνδέσεις.`,
      services: [
        {
          title: isGlobal ? "Υπηρεσίες Φωνής" : `SIP Trunking & Φωνή στην ${country}`,
          description: isGlobal
            ? "Διεθνές SIP trunking με ευέλικτη δρομολόγηση, κρυστάλλινη ποιότητα ήχου, κάλυψη τοπικού CLI και βελτιστοποιημένο κόστος τερματισμού."
            : `Υψηλή ταυτόχρονη κίνηση κλήσεων στην ${country} με εγγυημένο CLI, διαδρομές premium ποιότητας και απευθείας σύνδεση με τοπικούς παρόχους.`,
          features: [
            isGlobal ? "Συνδέσεις φωνής HD υψηλής ποιότητας" : "Εγγύηση Καθαρών Διαδρομών CLI",
            isGlobal ? "Ευέλικτες επιλογές δρομολόγησης" : "Απευθείας Διασυνδέσεις Παρόχων",
            isGlobal ? "Παγκόσμια πλεονάζουσα κάλυψη" : `Εικονικοί Αριθμοί DID σε όλη την ${country}`,
          ],
        },
        {
          title: isGlobal ? "Μηνύματα SMS" : `Κορυφαίες Υπηρεσίες SMS στην ${country}`,
          description: isGlobal
            ? "Αποστολή κρίσιμων συναλλακτικών SMS, κωδικών OTP και πλούσιων εταιρικών μηνυμάτων απευθείας σε κινητά τηλέφωνα παγκοσμίως."
            : `Ταχύτατα συναλλακτικά SMS, κωδικοί επαλήθευσης κάτω των 2 δευτερολέπτων και πλήρως εναρμονισμένη μαζική αποστολή σε όλα τα δίκτυα στην ${country}.`,
          features: [
            isGlobal ? "Παράδοση OTP σε κλάσματα δευτερολέπτου" : `Επίσημη Εγγραφή Sender ID στην ${country}`,
            isGlobal ? "Μέγιστη εγγύηση παράδοσης" : "Εγγύηση Παράδοσης OTP Κάτω των 2 Δευτερολέπτων",
            isGlobal ? "Μηνύματα πολυμέσων RCS" : "Δυναμικό Failover και Αυτόματη Ανακατεύθυνση",
          ],
        },
        {
          title: isGlobal ? "Πολυκαναλικό (Omnichannel)" : `Omnichannel & WhatsApp API στην ${country}`,
          description: isGlobal
            ? "Ενοποιήστε Φωνή, SMS, WhatsApp και Επαλήθευση σε μια ενιαία σουίτα REST API έτοιμη για άμεση υλοποίηση από προγραμματιστές."
            : `Επίσημο WhatsApp Business API, διαδραστικά μηνύματα RCS και ενοποιημένα κανάλια επικοινωνίας προσαρμοσμένα για την ${country}.`,
          features: [
            isGlobal ? "Επίσημο WhatsApp Business API" : "Επίσημο WhatsApp Business API",
            isGlobal ? "Διαδραστική συνομιλία RCS" : "Επαληθευμένο Προφίλ Brand με Σήμα στο RCS",
            isGlobal ? "Ενιαία σουίτα REST API" : "Ολοκληρωμένα Πολυκαναλικά REST APIs",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "ΕΠΙΧΕΙΡΗΜΑΤΙΚΕΣ ΛΥΣΕΙΣ" : `ΕΠΙΧΕΙΡΗΜΑΤΙΚΕΣ ΛΥΣΕΙΣ ΣΤΗΝ ${country.toUpperCase()}`,
      title: isGlobal ? "Λύσεις για Κάθε Βήμα της Σχέσης με τον Πελάτη" : `Λύσεις Σχεδιασμένες Για την ${country}`,
      description: isGlobal
        ? "Συνδεθείτε, αλληλεπιδράστε και επικοινωνήστε με ασφάλεια μέσω κορυφαίων εργαλείων φωνής, SMS και πολυκαναλικών καναλιών."
        : `Τηλεπικοινωνιακή πλατφόρμα υψηλής απόδοσης προσαρμοσμένη για μεγάλες επιχειρήσεις, fintech και αναπτυσσόμενους οργανισμούς στην ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Επαλήθευση OTP",
          tagline: "Ασφαλές. Άμεσο. Αξιόπιστο.",
          title: `Άμεση Επαλήθευση με Κωδικούς OTP (${country})`,
          description: `Αποστολή κωδικών μίας χρήσης γρήγορα και με μέγιστη ασφάλεια για εγγραφές, συνδέσεις, ανάκτηση λογαριασμών και εγκρίσεις πληρωμών στην ${country}.`,
          features: [
            "Εξαιρετικά γρήγορη παράδοση OTP σε λιγότερο από 2 δευτερόλεπτα",
            "Αυτόματη προστασία failover μεταξύ πολλαπλών δικτύων",
            `Βελτιστοποιημένες διαδρομές προς όλους τους παρόχους στην ${country}`,
          ],
          customerStatus: "Ταυτότητα Επαληθεύτηκε",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Ο κωδικός επαλήθευσής σας είναι",
            bodyBold: "53193",
            validTime: "Ισχύει για 5 λεπτά. Μην τον μοιράζεστε με κανέναν.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Επαλήθευση",
            title: "Επαληθεύστε τον Αριθμό σας",
            subtitle: `Στείλαμε έναν κωδικό ασφαλείας στον εγγεγραμμένο αριθμό σας στην ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Επαλήθευση & Συνέχεια",
            subNote: "Δεν λάβατε τον κωδικό;\nΕπαναποστολή σε 00:45",
          },
        },
        {
          id: "banking",
          name: "Τράπεζες & Οικονομικά",
          tagline: "Προστατευμένο. Συνδεδεμένο. Αξιόπιστο.",
          title: `Τραπεζικές & Χρηματοοικονομικές Ειδοποιήσεις (${country})`,
          description: `Ασφαλής οικονομική επικοινωνία με ενημερώσεις συναλλαγών σε πραγματικό χρόνο, μεταβολές υπολοίπου και επιβεβαιώσεις πληρωμών στην ${country}.`,
          features: [
            "Κρυπτογραφημένα κανάλια τραπεζικών προδιαγραφών ασφαλείας",
            "Άμεσες ειδοποιήσεις χρεώσεων/πιστώσεων και μεταφορών",
            "Υψηλή χωρητικότητα για αποστολή συναλλακτικών SMS",
          ],
          customerStatus: "Συναλλαγή Ολοκληρώθηκε",
          notification: {
            header: "Ειδοποίηση Τραπεζικής Συναλλαγής",
            body: `Η πληρωμή σας ύψους ${currency}250.00 ολοκληρώθηκε επιτυχώς.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Τραπεζικές Υπηρεσίες",
            title: "Επιτυχής Πληρωμή",
            subtitle: `Το ποσό των ${currency}250.00 διεκπεραιώθηκε με ασφάλεια στον λογαριασμό σας.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Ολοκληρώθηκε",
              reference: "TXN-849201",
            },
            buttonText: "Προβολή Απόδειξης",
            subNote: "✓ Απεστάλη μέσω πιστοποιημένου ασφαλούς καναλιού παρόχου",
          },
        },
        {
          id: "marketing",
          name: "Μάρκετινγκ",
          tagline: "Προσέγγιση. Αλληλεπίδραση. Μετατροπή.",
          title: `Επικοινωνία Μάρκετινγκ & Προωθητικές Ενέργειες (${country})`,
          description: `Προσεγγίστε το κοινό με στοχευμένες καμπάνιες SMS, αποκλειστικές εκπτώσεις και ανακοινώσεις σε μεγάλη κλίμακα στην ${country}.`,
          features: [
            "Μαζική αποστολή διαφημιστικών SMS με υψηλό ποσοστό ανοίγματος",
            "Τμηματοποίηση κοινού και έξυπνος προγραμματισμός αποστολών",
            "Παρακολούθηση κλικ και ανάλυση μετατροπών σε πραγματικό χρόνο",
          ],
          customerStatus: "Προσφορά Παραδόθηκε",
          notification: {
            header: "Αποκλειστική Προσφορά",
            line1: "ΕΙΔΙΚΗ ΕΚΠΤΩΣΗ 30%",
            line2: `Αποκλειστικές προσφορές διαθέσιμες σε όλη την ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Ειδικές Προσφορές",
            badge: "Περιορισμένος Χρόνος",
            title: "Αποκλειστική Έκπτωση Μόνο Για Εσάς",
            subtitle: `Κερδίστε 30% έκπτωση στην επόμενη αγορά σας.\nΙσχύει έως το τέλος του τρέχοντος μήνα.`,
            buttonText: "Λήψη Προσφοράς",
            subNote: `✓ Απεστάλη σε εγγεγραμμένους συνδρομητές στην ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Υπενθυμίσεις",
          tagline: "Στην Ώρα Τους. Ακριβείς. Αυτοματοποιημένες.",
          title: `Αυτοματοποιημένες Υπενθυμίσεις Πελατών (${country})`,
          description: `Κρατήστε τους πελάτες ενήμερους με αυτόματες ειδοποιήσεις για ραντεβού, προθεσμίες πληρωμής λογαριασμών και ανανεώσεις στην ${country}.`,
          features: [
            "Αυτοματοποιημένες πολυκαναλικές ειδοποιήσεις βάσει χρονοδιαγράμματος",
            "Ενσωματωμένοι σύνδεσμοι άμεσης πληρωμής μέσα στο μήνυμα",
            "Δραστική μείωση ακυρώσεων και καθυστερήσεων πληρωμών",
          ],
          customerStatus: "Υπενθύμιση Παραδόθηκε",
          notification: {
            header: "Υπενθύμιση Ραντεβού",
            line1: "Προγραμματισμένο για Αύριο",
            line2: "Παρακαλούμε προσέλθετε 10 λεπτά πριν από την ώρα του ραντεβού.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Υπενθυμίσεις",
            title: "Έχετε Ραντεβού Αύριο",
            subtitle: "Το ραντεβού σας έχει επιβεβαιωθεί για τις 10:30 π.μ.",
            infoCard: {
              label: "Τοποθεσία / Υποκατάστημα",
              value: `Κεντρικό Κέντρο ${country}`,
            },
            buttonText: "Επιβεβαίωση Παρουσίας",
            subNote: "Απαντήστε 1 για επιβεβαίωση ή 2 για αλλαγή ώρας",
          },
        },
        {
          id: "emergency",
          name: "Ειδοποιήσεις Έκτακτης Ανάγκης",
          tagline: "Κρίσιμο. Άμεσο. Πάντα Συνδεδεμένο.",
          title: `Ειδοποιήσεις Έκτακτης Ανάγκης & Πολιτικής Προστασίας (${country})`,
          description: `Άμεση μετάδοση ειδοποιήσεων ύψιστης προτεραιότητας όταν κάθε δευτερόλεπτο μετράει, για την προστασία των πολιτών στην ${country}.`,
          features: [
            "Διαδρομή μέγιστης προτεραιότητας που παρακάμπτει τις κοινές ουρές",
            "Γεωγραφική στόχευση για μαζικές ειδοποιήσεις πληθυσμού",
            "Αυτόματη εναλλαγή σε φωνητικές κλήσεις εάν το SMS αποτύχει",
          ],
          customerStatus: "Επείγον Μήνυμα Απεστάλη",
          notification: {
            header: "Πολιτική Προστασία",
            line1: "Επείγουσα Μετεωρολογική Προειδοποίηση",
            line2: "Ακολουθήστε πιστά τις οδηγίες των αρχών ασφαλείας.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Συναγερμός Έκτακτης Ανάγκης",
            title: "Επείγουσα Προειδοποίηση Καιρού",
            subtitle: "Αναφέρονται έντονα καιρικά φαινόμενα στην περιοχή σας. Παραμείνετε σε ασφαλές μέρος και παρακολουθείτε τις επίσημες οδηγίες.",
            infoCard: {
              label: "Επηρεαζόμενη Περιοχή",
              value: country,
            },
            buttonText: "Προβολή Ασφαλών Ζωνών",
            subNote: "Επίσημη ανακοίνωση δημόσιας ασφάλειας",
          },
        },
        {
          id: "order",
          name: "Κατάσταση Παραγγελιών",
          tagline: "Ενημέρωση. Παρακολούθηση. Παράδοση.",
          title: `Παρακολούθηση Παραγγελιών & Παραδόσεων σε Πραγματικό Χρόνο (${country})`,
          description: `Ενημερώστε τους αγοραστές σε κάθε βήμα: από την αποστολή έως τον ζωντανό εντοπισμό του διανομέα και την επαλήθευση OTP στην ${country}.`,
          features: [
            "Ενημερώσεις κατάστασης συσκευασίας και αποστολής σε πραγματικό χρόνο",
            "Ειδοποίηση προσέγγισης διανομέα με ζωντανό σύνδεσμο χάρτη",
            "Ασφαλής κωδικός OTP για την επιβεβαίωση παραλαβής του δέματος",
          ],
          customerStatus: "Προς Παράδοση",
          notification: {
            header: "Κατάσταση Παραγγελίας",
            line1: "Η Παραγγελία #IN849201 Απεστάλη",
            line2: `Το δέμα σας θα παραδοθεί σήμερα στην ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Εντοπισμός Δέματος",
            title: "Το Δέμα σας Είναι Καθ' Οδόν",
            subtitle: "Ο διανομέας κατευθύνεται προς τη διεύθυνσή σας.",
            infoCard: {
              label: "Κωδικός OTP Παραλαβής",
              value: "8492",
            },
            buttonText: "Εντοπισμός στον Χάρτη",
            subNote: "Ενεργοποιημένη ανέπαφη παράδοση",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "ΕΜΠΕΙΡΙΑ ΑΝΑ ΚΛΑΔΟ" : `ΚΛΑΔΙΚΗ ΕΜΠΕΙΡΙΑ - ${country.toUpperCase()}`,
      titleLine1: "Τηλεπικοινωνιακές Λύσεις Σχεδιασμένες",
      titleLine2: isGlobal ? "Για Κάθε Κλάδο της Οικονομίας" : `Για Επιχειρήσεις στην ${country}`,
      description: isGlobal
        ? "Δημιουργήστε ισχυρές σχέσεις με τους πελάτες σας μέσω αξιόπιστων υπηρεσιών φωνής, μηνυμάτων και ψηφιακών καναλιών."
        : `Υποδομή πλήρως ευθυγραμμισμένη με τους τοπικούς τηλεπικοινωνιακούς κανονισμούς, το GDPR και τις συνήθειες των χρηστών στην ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Τράπεζες και Χρηματοοικονομικά",
          title: `Τράπεζες & Fintech στην ${country}`,
          description: `Ασφαλή συναλλακτικά SMS, αυστηρή κανονιστική συμμόρφωση και άμεση επαλήθευση συναλλαγών (${country}).`,
        },
        {
          id: "healthcare",
          name: "Υγεία και Κλινικές",
          title: `Νοσοκομεία & Ιατρικά Κέντρα στην ${country}`,
          description: `Υπενθυμίσεις ιατρικών ραντεβού, αποτελέσματα εξετάσεων και επικοινωνία τηλεϊατρικής στην ${country}.`,
        },
        {
          id: "ecommerce",
          name: "Ηλεκτρονικό Εμπόριο",
          title: `E-Commerce & Λιανική στην ${country}`,
          description: `Παρακολούθηση δεμάτων, προωθητικά μηνύματα flash sale και πολυκαναλική εξυπηρέτηση πελατών στην ${country}.`,
        },
        {
          id: "education",
          name: "Εκπαίδευση και Πανεπιστήμια",
          title: `Σχολεία & Πανεπιστήμια στην ${country}`,
          description: `Ανακοινώσεις εισαγωγής, επείγουσες ειδοποιήσεις πανεπιστημιούπολης και ενημέρωση γονέων στην ${country}.`,
        },
        {
          id: "travel",
          name: "Τουρισμός και Φιλοξενία",
          title: `Αεροπορικές & Ξενοδοχεία στην ${country}`,
          description: `Ενημερώσεις πύλης επιβίβασης, επιβεβαιώσεις κρατήσεων και υποστήριξη ταξιδιωτών 24/7 στην ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ" : `ΕΠΙΚΟΙΝΩΝΙΑ ΣΤΗΝ ${country.toUpperCase()}`,
      titleLine1: "Ελάτε να Δημιουργήσουμε τη Σωστή",
      titleLine2: isGlobal ? "Τηλεπικοινωνιακή Σύνδεση." : `Τηλεπικοινωνιακή Λύση στην ${country}.`,
      description: isGlobal
        ? "Με την iNet Global Services, οι επιχειρήσεις αξιοποιούν αξιόπιστα εργαλεία SMS και φωνής για να αυξήσουν την αφοσίωση των πελατών, να ενισχύσουν την ασφάλεια και να απλοποιήσουν τις διαδικασίες. Παρέχουμε ταχύτητα, σταθερότητα και υψηλή απόδοση."
        : `Συνεργαστείτε με την iNet Global για απευθείας διαδρομές SMS, κρυστάλλινη ποιότητα φωνής και πλήρη νομική συμμόρφωση στην ${country}. Επικοινωνήστε σήμερα με την ομάδα μας για δωρεάν δοκιμές και προνομιακές τιμές.`,
    },
    footer: {
      description: isGlobal
        ? "Παγκόσμια τηλεπικοινωνιακή υποδομή για οργανισμούς που απαιτούν απόλυτη αξιοπιστία σε υπηρεσίες φωνής, μηνυμάτων και πολυκαναλικής συνδεσιμότητας."
        : `Υποδομή επιπέδου παρόχου που παρέχει Φωνή, SMS, Εικονικούς Αριθμούς DID και Πολυκαναλικά APIs στην ${country} και διεθνώς.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Ηνωμένες Πολιτείες" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Όλα τα δικαιώματα διατηρούνται.`,
    },
  }),

  // 17. Czech (Čeština - cs)
  cs: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "GLOBÁLNÍ TELEKOMUNIKAČNÍ INFRASTRUKTURA"
        : `TELEKOMUNIKAČNÍ INFRASTRUKTURA V ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Globální Komunikace," : `Nejlepší SMS a Hlasový Provoz`,
      titleLine2: isGlobal ? "Vytvořeno Pro" : `V ${country},`,
      titleLine3: isGlobal ? "Moderní Podnikání." : `Připraveno Pro Enterprise Úroveň.`,
      description: isGlobal
        ? "Spolehlivé hlasové služby, firemní zprávy a virtuální čísla pro společnosti, které potřebují bezproblémové propojení přes hranice, týmy i zákazníky."
        : `Podporujeme podniky v ${country} vysokokapacitními SMS trasami, hlasovou terminací s ultranízou latencí a přímým propojením s operátory.`,
      primaryCta: isGlobal ? "Začít Nyní" : `Začít v ${country}`,
      secondaryCta: isGlobal ? "Prozkoumat Služby" : `Trasy v ${country}`,
      timeline: {
        voice: isGlobal ? "Firemní Hlas" : `Hlasový Provoz (CLI) v ${country}`,
        messaging: isGlobal ? "SMS a Zprávy" : `SMS a OTP Trasy v ${country}`,
        numbers: isGlobal ? "Virtuální Čísla" : `Virtuální DID Čísla v ${country}`,
        footerNote1: isGlobal ? "Jedna Platforma" : "Přímé Operátorské Trasy",
        footerNote2: isGlobal ? "Globální Dosah" : "100% Soulad s Předpisy",
      },
    },
    coreServices: {
      badge: isGlobal ? "HLAVNÍ SLUŽBY" : `SLUŽBY A PROPOJENÍ S OPERÁTORY V ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Komunikační řešení pro každou" : `Špičkové Hlasové a SMS Služby v ${country}`,
      titleLine2: isGlobal ? "fázi zákaznické cesty" : "Pro Rostoucí Podniky",
      description: isGlobal
        ? "Modulární telekomunikační infrastruktura navržená pro maximální dostupnost hlasových služeb, zpráv a virtuálních čísel po celém světě."
        : `Telekomunikační infrastruktura v ${country} s dostupností 99,99 %, doručením OTP pod 2 sekundy a přímým propojením s lokálními sítěmi.`,
      services: [
        {
          title: isGlobal ? "Hlasové Služby" : `SIP Trunking a Hlas v ${country}`,
          description: isGlobal
            ? "Mezinárodní SIP trunking s flexibilním směrováním, prémiovou kvalitou zvuku, zobrazením místního CLI a optimalizovanými náklady."
            : `Vysokokapacitní provoz volání v ${country} s garantovaným CLI, prémiovými trasami a přímým napojením na lokální telekomunikační sítě.`,
          features: [
            isGlobal ? "Vysoká kvalita HD hlasových hovorů" : "Garance Čistých CLI Tras",
            isGlobal ? "Flexibilní možnosti směrování" : "Přímé Propojení s Operátory",
            isGlobal ? "Globální redundantní pokrytí" : `Celostátní Virtuální DID Čísla v ${country}`,
          ],
        },
        {
          title: isGlobal ? "SMS Zprávy" : `Nejlepší SMS Služby v ${country}`,
          description: isGlobal
            ? "Odesílejte kritické transakční SMS, ověřovací OTP kódy a bohaté firemní zprávy na mobilní telefony po celém světě s vysokou spolehlivostí."
            : `Bleskové transakční SMS, ověřovací kódy do 2 sekund a plně regulované hromadné zprávy u všech operátorů v ${country}.`,
          features: [
            isGlobal ? "Doručení OTP pod 1 sekundu" : `Oficiální Registrace Sender ID v ${country}`,
            isGlobal ? "Vysoká jistota doručení" : "Garance Doručení OTP Pod 2 Sekundy",
            isGlobal ? "RCS interaktivní zprávy" : "Dynamický Failover a Ochrana Proti Výpadkům",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `Omnichannel a WhatsApp API v ${country}`,
          description: isGlobal
            ? "Sjednoťte Hlas, SMS, WhatsApp a Ověřování do jediné sady REST API připravené pro rychlou integraci vývojáři."
            : `Oficiální WhatsApp Business API, interaktivní RCS komunikace a integrované kanály přizpůsobené zákazníkům v ${country}.`,
          features: [
            isGlobal ? "Oficiální WhatsApp Business API" : "Oficiální WhatsApp Business API",
            isGlobal ? "Interaktivní konverzace RCS" : "Ověřený Firemní Profil s Odznakem v RCS",
            isGlobal ? "Jednotná sada REST API" : "Kompletní Vícekanálová REST API",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "FIREMNÍ ŘEŠENÍ" : `FIREMNÍ ŘEŠENÍ V ${country.toUpperCase()}`,
      title: isGlobal ? "Řešení pro Každou Fázi Kontaktu se Zákazníkem" : `Řešení Vyvinutá Pro ${country}`,
      description: isGlobal
        ? "Spojte se, zaujměte a komunikujte se zákazníky prostřednictvím bezpečných a spolehlivých hlasových, SMS a vícekanálových nástrojů."
        : `Vysoce výkonná telekomunikační platforma přizpůsobená pro korporace, fintech a dynamické firmy v ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Ověřování OTP",
          tagline: "Bezpečné. Rychlé. Spolehlivé.",
          title: `Okamžité OTP Ověření (${country})`,
          description: `Odesílejte jednorázová hesla rychle a bezpečně při registracích, přihlašování, obnově hesel a potvrzování plateb v ${country}.`,
          features: [
            "Bleskurychlé a spolehlivé doručení OTP do 2 sekund",
            "Automatická ochrana proti výpadkům mezi operátory",
            `Optimalizované trasy pro všechny sítě v ${country}`,
          ],
          customerStatus: "Identita Ověřena",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Váš ověřovací kód je",
            bodyBold: "53193",
            validTime: "Platí 5 minut. S nikým jej nesdílejte.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Ověření",
            title: "Ověřte své Mobilní Číslo",
            subtitle: `Zaslali jsme bezpečnostní kód na vaše registrované číslo v ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Ověřit a Pokračovat",
            subNote: "Kód vám nedorazil?\nZnovu odeslat za 00:45",
          },
        },
        {
          id: "banking",
          name: "Bankovnictví a Finance",
          tagline: "Chráněné. Propojené. Důvěryhodné.",
          title: `Bankovní a Finanční Služby (${country})`,
          description: `Zabezpečená finanční komunikace s notifikacemi o transakcích v reálném čase, změnách zůstatku a převodech v ${country}.`,
          features: [
            "Šifrované bezpečnostní toky bankovního standardu",
            "Okamžité zprávy o debetu, kreditu a transakcích",
            "Vysoká kapacita pro transakční SMS zprávy",
          ],
          customerStatus: "Transakce Dokončena",
          notification: {
            header: "Bankovní Notifikace",
            body: `Vaše platba ve výši ${currency}250.00 byla úspěšně zpracována.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Bankovnictví",
            title: "Platba Byla Úspěšná",
            subtitle: `${currency}250.00 bylo bezpečně zaúčtováno na váš účet.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Dokončeno",
              reference: "TXN-849201",
            },
            buttonText: "Zobrazit Doklad",
            subNote: "✓ Odesláno přes certifikovaný zabezpečený kanál operátora",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Oslovte. Zaujměte. Získejte Tržby.",
          title: `Marketingová Komunikace a Kampaně (${country})`,
          description: `Oslovte spotřebitele cílenými SMS kampaněmi s exkluzivními slevami, sezónními nabídkami a oznámeními v ${country}.`,
          features: [
            "Hromadné reklamní SMS s vysokou mírou otevření",
            "Segmentace publika a inteligentní plánování odesílání",
            "Sledování prokliků a konverzí v reálném čase",
          ],
          customerStatus: "Nabídka Doručena",
          notification: {
            header: "Exkluzivní Nabídka",
            line1: "SPECIÁLNÍ SLEVA 30 %",
            line2: `Exkluzivní nabídky platné po celé ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Speciální Akce",
            badge: "Omezený Čas",
            title: "Exkluzivní Sleva Jen Pro Vás",
            subtitle: `Získejte 30% slevu na další nákup.\nPlatí do konce tohoto měsíce.`,
            buttonText: "Využít Slevu",
            subNote: `✓ Odesláno ověřeným odběratelům v ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Připomínky",
          tagline: "Včas. Přesně. Automaticky.",
          title: `Automatické Připomínky pro Zákazníky (${country})`,
          description: `Informujte zákazníky předem o termínech schůzek, splatnostech faktur a obnovení předplatného v ${country}.`,
          features: [
            "Automatická vícekanálová upozornění podle plánu",
            "Odkazy na rychlou platbu vložené přímo do textu zprávy",
            "Výrazné snížení počtu zmeškaných schůzek a platebních prodlení",
          ],
          customerStatus: "Připomínka Doručena",
          notification: {
            header: "Připomínka Schůzky",
            line1: "Naplánováno na Zítřek",
            line2: "Prosíme, dostavte se 10 minut před smluveným časem.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Připomínky",
            title: "Máte Zítra Naplánovanou Schůzku",
            subtitle: "Váš termín byl potvrzen na 10:30 dopoledne.",
            infoCard: {
              label: "Místo / Pobočka",
              value: `Centrální Pobočka ${country}`,
            },
            buttonText: "Potvrdit Účast",
            subNote: "Odpovězte 1 pro potvrzení nebo 2 pro změnu termínu",
          },
        },
        {
          id: "emergency",
          name: "Nouzová Upozornění",
          tagline: "Kritické. Okamžité. Vždy Dostupné.",
          title: `Nouzová Varování a Veřejná Bezpečnost (${country})`,
          description: `Okamžité rozesílání prioritních varování, když záleží na každé vteřině, pro ochranu veřejnosti a kontinuitu provozu v ${country}.`,
          features: [
            "Trasa s nejvyšší prioritou obcházející běžné fronty",
            "Geografické zacílení pro plošné varování obyvatelstva",
            "Automatické přepnutí na hlasové volání při nedoručení SMS",
          ],
          customerStatus: "Nouzové Varování Odesláno",
          notification: {
            header: "Varování Veřejné Bezpečnosti",
            line1: "Naléhavé Meteorologické Varování",
            line2: "Řiďte se pokyny bezpečnostních složek.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Nouzový Signál",
            title: "Naléhavé Meteorologické Varování",
            subtitle: "Ve vaší oblasti byly hlášeny extrémní povětrnostní podmínky. Zůstaňte v bezpečí a sledujte oficiální zprávy.",
            infoCard: {
              label: "Zasažená Oblast",
              value: country,
            },
            buttonText: "Zobrazit Bezpečné Zóny",
            subNote: "Oficiální varování záchranných složek",
          },
        },
        {
          id: "order",
          name: "Stav Objednávky",
          tagline: "Informujte. Sledujte. Dodejte.",
          title: `Sledování Zásilek a Objednávek v Reálném Čase (${country})`,
          description: `Informujte zákazníky o každém kroku zásilky: od expedice ze skladu přes živé sledování kurýra až po OTP kód při převzetí v ${country}.`,
          features: [
            "Průběžné aktualizace o balení a expedici zboží",
            "Upozornění na příjezd kurýra s odkazem na živou mapu",
            "Bezpečný OTP kód pro potvrzení převzetí zásilky",
          ],
          customerStatus: "Na Cestě k Vám",
          notification: {
            header: "Aktualizace Stavu Objednávky",
            line1: "Objednávka #IN849201 Odeslána",
            line2: `Váš balíček bude dnes doručen na adresu v ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Sledování Zásilky",
            title: "Váš Balíček Je Na Cestě",
            subtitle: "Kurýr veze vaši objednávku na zadanou adresu.",
            infoCard: {
              label: "Doručovací OTP Kód",
              value: "8492",
            },
            buttonText: "Sledovat na Mapě",
            subNote: "Možnost bezkontaktního předání zásilky",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "OBOROVÁ EXPERTÍZA" : `OBOROVÁ EXPERTÍZA - ${country.toUpperCase()}`,
      titleLine1: "Telekomunikační Řešení Vyvinutá",
      titleLine2: isGlobal ? "Pro Každé Průmyslové Odvětví" : `Pro Podniky v ${country}`,
      description: isGlobal
        ? "Vytvářejte pevné vztahy se zákazníky prostřednictvím spolehlivých hlasových služeb, SMS a integrovaných digitálních kanálů."
        : `Infrastruktura plně vyhovující místním telekomunikačním předpisům, normám GDPR a potřebám zákazníků v ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Bankovnictví a Finance",
          title: `Bankovnictví a Fintech v ${country}`,
          description: `Zabezpečené transakční SMS, regulatorní soulad a ověřování plateb v reálném čase (${country}).`,
        },
        {
          id: "healthcare",
          name: "Zdravotnictví a Kliniky",
          title: `Nemocnice a Zdravotní Střediska v ${country}`,
          description: `Připomínky vyšetření, výsledky testů a komunikace pro telemedicínu v ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce a Retail",
          title: `E-Commerce a Maloobchod v ${country}`,
          description: `Sledování zásilek, bleskové slevové nabídky a vícekanálová zákaznická podpora v ${country}.`,
        },
        {
          id: "education",
          name: "Vzdělávání a Univerzity",
          title: `Školy a Univerzity v ${country}`,
          description: `Přijímací řízení, krizová hlášení a efektivní komunikace s rodiči v ${country}.`,
        },
        {
          id: "travel",
          name: "Cestování a Pohostinství",
          title: `Aerolinie a Hotely v ${country}`,
          description: `Změny odletových bran, potvrzení rezervací a podpora cestujících 24/7 v ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "KONTAKTUJTE NÁS" : `KONTAKTUJTE NÁS V ${country.toUpperCase()}`,
      titleLine1: "Pojďme Vytvořit Správné",
      titleLine2: isGlobal ? "Komunikační Spojení." : `Telekomunikační Spojení v ${country}.`,
      description: isGlobal
        ? "S iNet Global Services získávají společnosti spolehlivá řešení pro SMS a hlas, která zvyšují angažovanost zákazníků, posilují bezpečnost a zefektivňují firemní procesy. Poskytujeme rychlost, stabilitu a špičkový výkon."
        : `Spolupracujte s iNet Global a získejte přímé operátorské SMS trasy, křišťálově čistý zvuk a stoprocentní soulad s předpisy v ${country}. Spojte se s naším týmem pro bezplatné testování a individuální cenovou nabídku.`,
    },
    footer: {
      description: isGlobal
        ? "Globální telekomunikační infrastruktura pro firmy, které vyžadují maximální spolehlivost hlasových služeb, zpráv a omnichannel komunikace."
        : `Podniková infrastruktura poskytující operátorský hlas, SMS, virtuální čísla DID a vícekanálová API v ${country} i po celém světě.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Spojené státy americké" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Všechna práva vyhrazena.`,
    },
  }),

  // 18. Romanian (Română - ro)
  ro: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "INFRASTRUCTURĂ GLOBALĂ DE TELECOMUNICAȚII"
        : `INFRASTRUCTURĂ TELECOM ÎN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Comunicații Globale," : `Cel Mai Bun Trafic SMS & Voce`,
      titleLine2: isGlobal ? "Construite Pentru" : `În ${country},`,
      titleLine3: isGlobal ? "Companii Moderne." : `Pregătit Pentru Scara Enterprise.`,
      description: isGlobal
        ? "Servicii fiabile de voce, mesagerie pentru afaceri și numere virtuale pentru companii care trebuie să rămână conectate peste granițe, între echipe și clienți."
        : `Sprijinim companiile din ${country} cu rute SMS de mare capacitate, terminare vocală cu latență extrem de redusă și interconectări directe cu operatorii telecom.`,
      primaryCta: isGlobal ? "Începeți Acum" : `Începeți în ${country}`,
      secondaryCta: isGlobal ? "Explorați Serviciile" : `Rute în ${country}`,
      timeline: {
        voice: isGlobal ? "Voce Enterprise" : `Trafic Voce (CLI) în ${country}`,
        messaging: isGlobal ? "SMS & Mesagerie" : `Rute SMS & OTP în ${country}`,
        numbers: isGlobal ? "Numere Virtuale" : `Numere Virtuale DID în ${country}`,
        footerNote1: isGlobal ? "O Singură Platformă" : "Rute Directe Operator",
        footerNote2: isGlobal ? "Acoperire Globală" : "100% Conformitate Legală",
      },
    },
    coreServices: {
      badge: isGlobal ? "SERVICII PRINCIPALE" : `SERVICII & INTERCONECTĂRI ÎN ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Soluții de comunicare pentru fiecare" : `Cele Mai Bune Servicii Voce & SMS în ${country}`,
      titleLine2: isGlobal ? "etapă a călătoriei clientului" : "Pentru Companii în Dezvoltare",
      description: isGlobal
        ? "Infrastructură modulară de telecomunicații proiectată pentru disponibilitate maximă în voce, mesagerie și numere virtuale la nivel mondial."
        : `Infrastructură de nivel operator în ${country} cu 99,99% disponibilitate, livrare OTP sub 2 secunde și conexiuni directe locale.`,
      services: [
        {
          title: isGlobal ? "Servicii Voce" : `SIP Trunking & Voce în ${country}`,
          description: isGlobal
            ? "SIP trunking internațional cu rutare flexibilă, calitate audio HD superioară, identificare locală a apelantului (CLI) și costuri optimizate."
            : `Trafic de apeluri de mare capacitate în ${country} cu CLI garantat, rute premium și interconectare directă cu operatorii locali.`,
          features: [
            isGlobal ? "Conexiuni de voce HD de înaltă fidelitate" : "Garanție pentru Rute Pure CLI",
            isGlobal ? "Opțiuni flexibile de rutare a apelurilor" : "Interconectări Directe cu Operatorii",
            isGlobal ? "Acoperire globală redundantă" : `Numere Virtuale DID Naționale în ${country}`,
          ],
        },
        {
          title: isGlobal ? "Mesagerie SMS" : `Servicii SMS de Top în ${country}`,
          description: isGlobal
            ? "Trimiteți SMS-uri tranzacționale critice, coduri de autentificare OTP și mesaje comerciale direct pe telefoanele mobile la nivel mondial."
            : `SMS-uri tranzacționale ultrarapide, coduri de verificare livrate sub 2 secunde și campanii de masă conforme la toți operatorii din ${country}.`,
          features: [
            isGlobal ? "Livrare OTP în mai puțin de o secundă" : `Înregistrare Oficială Sender ID în ${country}`,
            isGlobal ? "Rată maximă de livrare garantată" : "Garanție de Livrare OTP Sub 2 Secunde",
            isGlobal ? "Mesaje interactive multimedia RCS" : "Failover Dinamic și Rutare de Rezervă",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `API Omnichannel & WhatsApp în ${country}`,
          description: isGlobal
            ? "Unificați Voce, SMS, WhatsApp și Autentificarea într-o suită completă de REST API modernă, gata de implementare imediată."
            : `API oficial WhatsApp Business, mesagerie conversațională RCS și canale integrate adaptate pentru clienții din ${country}.`,
          features: [
            isGlobal ? "API Oficial WhatsApp Business" : "API Oficial WhatsApp Business",
            isGlobal ? "Conversații interactive prin RCS" : "Profil Verificat de Brand cu Insignă în RCS",
            isGlobal ? "Suită unificată de REST API" : "Platformă REST API Multicanal Completă",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "SOLUȚII PENTRU AFACERI" : `SOLUȚII PENTRU AFACERI ÎN ${country.toUpperCase()}`,
      title: isGlobal ? "Soluții pentru Fiecare Etapă a Relației cu Clientul" : `Soluții Dezvoltate Pentru ${country}`,
      description: isGlobal
        ? "Conectați-vă, interacționați și comunicați cu clienții prin instrumente sigure și de încredere de voce, SMS și soluții digitale integrate."
        : `Platformă telecom de înaltă performanță proiectată pentru companii mari, fintech-uri și afaceri în expansiune din ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Autentificare OTP",
          tagline: "Sigur. Rapid. De Încredere.",
          title: `Autentificare Instantanee prin Coduri OTP (${country})`,
          description: `Trimiteți parole de unică folosință rapid și în deplină siguranță pentru înregistrări, conectări, recuperare de cont și plăți în ${country}.`,
          features: [
            "Livrare ultra-rapidă și sigură a codurilor OTP în sub 2 secunde",
            "Protecție automată prin failover între mai mulți operatori",
            `Rute optimizate către toate rețelele din ${country}`,
          ],
          customerStatus: "Identitate Verificată",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Codul dvs. de verificare este",
            bodyBold: "53193",
            validTime: "Valabil 5 minute. Nu îl dezvăluiți nimănui.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Autentificare",
            title: "Verificați Numărul de Mobil",
            subtitle: `Am trimis un cod de verificare la numărul dvs. înregistrat în ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Verifică și Continuă",
            subNote: "Nu ați primit codul?\nRetrimiteți în 00:45",
          },
        },
        {
          id: "banking",
          name: "Bănci & Servicii Financiare",
          tagline: "Protejat. Conectat. Certificat.",
          title: `Servicii Bancare și Notificări Financiare (${country})`,
          description: `Comunicații financiare de înaltă securitate cu alerte de tranzacții în timp real, modificări de sold și confirmări de transferuri în ${country}.`,
          features: [
            "Conexiuni criptate la standarde de securitate bancară",
            "Alerte instantanee pentru debite, credite și plăți",
            "Capacitate masivă de procesare pentru SMS tranzacțional",
          ],
          customerStatus: "Tranzacție Finalizată",
          notification: {
            header: "Notificare Tranzacție Bancară",
            body: `Plata dvs. de ${currency}250.00 a fost efectuată cu succes.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Servicii Bancare",
            title: "Plată Reușită",
            subtitle: `${currency}250.00 au fost procesați în siguranță în contul dvs.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Finalizat",
              reference: "TXN-849201",
            },
            buttonText: "Vezi Extrasul",
            subNote: "✓ Livrat printr-un canal securizat și certificat de operator",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Atingeți. Implicați. Vindeți.",
          title: `Comunicații de Marketing & Promoții (${country})`,
          description: `Atrageți consumatorii prin campanii SMS targetate cu oferte exclusive, promoții de sezon și noutăți de brand pe scară largă în ${country}.`,
          features: [
            "SMS-uri promoționale de masă cu rate foarte mari de deschidere",
            "Segmentare avansată a audienței și programare inteligentă",
            "Monitorizare a accesărilor și analiză a conversiilor în timp real",
          ],
          customerStatus: "Ofertă Livrată",
          notification: {
            header: "Ofertă Exclusivă",
            line1: "REDUCERE SPECIALĂ DE 30%",
            line2: `Oferte speciale disponibile în toată ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Oferte Speciale",
            badge: "Timp Limitat",
            title: "Reducere Exclusivă Creată Pentru Tine",
            subtitle: `Bucură-te de 30% reducere la următoarea achiziție.\nOfertă valabilă până la sfârșitul lunii.`,
            buttonText: "Revendică Reducerea",
            subNote: `✓ Trimis către abonați verificați din ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Memento-uri",
          tagline: "La Timp. Precis. Automatizat.",
          title: `Memento-uri Automate Pentru Clienți (${country})`,
          description: `Mențineți clienții informați din timp despre programări, scadențe de facturi și reînnoiri de abonamente în ${country}.`,
          features: [
            "Notificări automate trimise pe multiple canale conform planificării",
            "Link-uri de plată rapidă inserate direct în mesaj",
            "Reducerea semnificativă a programărilor ratate și a întârzierilor",
          ],
          customerStatus: "Memento Livrat",
          notification: {
            header: "Memento Programare",
            line1: "Programat Pentru Mâine",
            line2: "Vă rugăm să sosiți cu 10 minute înainte de ora stabilită.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Memento-uri",
            title: "Aveți o Programare Mâine",
            subtitle: "Programarea dvs. este confirmată pentru ora 10:30.",
            infoCard: {
              label: "Locație / Sediu",
              value: `Centrul Principal ${country}`,
            },
            buttonText: "Confirmă Prezența",
            subNote: "Răspundeți cu 1 pentru confirmare sau 2 pentru reprogramare",
          },
        },
        {
          id: "emergency",
          name: "Alerte de Urgență",
          tagline: "Critic. Instantaneu. Mereu Conectat.",
          title: `Alerte de Urgență și Siguranță Publică (${country})`,
          description: `Difuzarea imediată a mesajelor prioritare când fiecare secundă contează, pentru protejarea cetățenilor și securitatea afacerii în ${country}.`,
          features: [
            "Rută cu prioritate maximă care depășește cozile standard de mesaje",
            "Targetare geografică pentru alerte publice de masă",
            "Comutare automată pe apeluri vocale dacă SMS-ul nu poate fi livrat",
          ],
          customerStatus: "Alertă de Urgență Emisă",
          notification: {
            header: "Avertizare de Siguranță Publică",
            line1: "Avertizare Meteo Urgentă",
            line2: "Urmați instrucțiunile autorităților de securitate.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Semnal de Urgență",
            title: "Avertizare Meteo Urgentă",
            subtitle: "Sunt prognozate fenomene meteo severe în zona dvs. Rămâneți în siguranță și urmăriți comunicatele oficiale.",
            infoCard: {
              label: "Regiune Afectată",
              value: country,
            },
            buttonText: "Vezi Zonele Sigure",
            subNote: "Mesaj oficial de siguranță publică",
          },
        },
        {
          id: "order",
          name: "Status Comenzi",
          tagline: "Informați. Urmăriți. Livrați.",
          title: `Urmărirea Comenzilor și Livrărilor în Timp Real (${country})`,
          description: `Informați cumpărătorii la fiecare etapă: de la expedierea din depozit, urmărirea curierului pe hartă până la codul OTP la predare în ${country}.`,
          features: [
            "Actualizări în timp real privind pregătirea și expedierea coletului",
            "Alerte de sosire a curierului cu link către harta live",
            "Cod OTP securizat pentru confirmarea preluării coletului",
          ],
          customerStatus: "În Curs de Livrare",
          notification: {
            header: "Actualizare Comandă",
            line1: "Comanda #IN849201 a Fost Expediată",
            line2: `Coletul dvs. va fi livrat astăzi la adresa din ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Urmărire Colet",
            title: "Coletul Dvs. Este Pe Drum",
            subtitle: "Curierul se îndreaptă spre adresa dvs. pentru a livra comanda.",
            infoCard: {
              label: "Cod OTP Livrare",
              value: "8492",
            },
            buttonText: "Urmărește pe Hartă",
            subNote: "Livrare fără contact activată",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "EXPERTIZĂ PE SECTOARE" : `EXPERTIZĂ PE DOMENII - ${country.toUpperCase()}`,
      titleLine1: "Soluții de Telecomunicații Construite",
      titleLine2: isGlobal ? "Pentru Fiecare Ramură Industrială" : `Pentru Companii din ${country}`,
      description: isGlobal
        ? "Creați relații de durată cu clienții prin servicii sigure de voce, mesagerie instantanee și canale digitale integrate."
        : `Infrastructură conformă în totalitate cu legislația telecom locală, normele GDPR și comportamentul utilizatorilor din ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Bănci și Finanțe",
          title: `Bănci și Fintech în ${country}`,
          description: `SMS-uri tranzacționale securizate, conformitate financiară riguroasă și validare instantanee a plăților (${country}).`,
        },
        {
          id: "healthcare",
          name: "Sănătate și Clinici",
          title: `Spitale și Clinici Medicale în ${country}`,
          description: `Memento-uri pentru programări, rezultate de laborator și comunicare securizată pentru telemedicină în ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Commerce și Retail",
          title: `E-Commerce și Comerț în ${country}`,
          description: `Urmărirea expedierilor, promoții fulger prin SMS și suport clienți multicanal în ${country}.`,
        },
        {
          id: "education",
          name: "Educație și Universități",
          title: `Școli și Instituții Universitare în ${country}`,
          description: `Anunțuri de admitere, alerte urgente de campus și canale de comunicare directă cu părinții în ${country}.`,
        },
        {
          id: "travel",
          name: "Turism și Ospitalitate",
          title: `Companii Aeriene și Hoteluri în ${country}`,
          description: `Modificări ale porților de îmbarcare, confirmări de rezervare și asistență 24/7 pentru călători în ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "CONTACTAȚI-NE" : `CONTACTAȚI-NE ÎN ${country.toUpperCase()}`,
      titleLine1: "Să Construim Împreună Conexiunea",
      titleLine2: isGlobal ? "de Comunicare Potrivită." : `Telecom Optimă în ${country}.`,
      description: isGlobal
        ? "Cu iNet Global Services, companiile pot utiliza soluții fiabile de SMS și voce pentru a crește interacțiunea cu clienții, a întări securitatea datelor și a fluidiza procesele operaționale. Oferim viteză, stabilitate și performanțe maxime."
        : `Parteneriatul cu iNet Global vă asigură rute directe de SMS, o claritate ireproșabilă a vocii și conformitate legală totală în ${country}. Contactați specialiștii noștri corporate pentru teste gratuite și oferte personalizate.`,
    },
    footer: {
      description: isGlobal
        ? "Infrastructură globală de telecomunicații pentru organizații care au nevoie de fiabilitate absolută în servicii de voce, mesagerie și conectivitate omnichannel."
        : `Infrastructură de nivel enterprise ce furnizează Voce de operator, SMS, Numere Virtuale DID și API-uri Multicanal în ${country} și pe plan internațional.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Statele Unite ale Americii" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Toate drepturile rezervate.`,
    },
  }),

  // 19. Hungarian (Magyar - hu)
  hu: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "GLOBÁLIS TÁVKÖZLÉSI INFRASTRUKTÚRA"
        : `TÁVKÖZLÉSI INFRASTRUKTÚRA ITT: ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Globális Kommunikáció," : `Legjobb SMS és Hangforgalom`,
      titleLine2: isGlobal ? "Nagyvállalatokra" : `Itt: ${country},`,
      titleLine3: isGlobal ? "Tervezve." : `Vállalati Méretekre Készítve.`,
      description: isGlobal
        ? "Megbízható hang-, üzleti üzenetküldési és virtuális szám megoldások olyan cégeknek, amelyek határokon, csapatokon és ügyfélkapcsolatokon átívelő kapcsolatot igényelnek."
        : `Nagy kapacitású SMS útvonalakkal, ultraalacsony késleltetésű hangvégződtetéssel és közvetlen távközlési összeköttetésekkel támogatjuk a vállalkozásokat itt: ${country}.`,
      primaryCta: isGlobal ? "Kezdés Most" : `Kezdés itt: ${country}`,
      secondaryCta: isGlobal ? "Szolgáltatások Megtekintése" : `Útvonalak itt: ${country}`,
      timeline: {
        voice: isGlobal ? "Vállalati Hang" : `Hangforgalom (CLI) itt: ${country}`,
        messaging: isGlobal ? "SMS és Üzenetek" : `SMS és OTP Útvonalak itt: ${country}`,
        numbers: isGlobal ? "Virtuális Számok" : `Virtuális DID Számok itt: ${country}`,
        footerNote1: isGlobal ? "Egyetlen Integrált Platform" : "Közvetlen Szolgáltatói Útvonalak",
        footerNote2: isGlobal ? "Globális Elérés" : "100%-os Jogszabályi Megfelelőség",
      },
    },
    coreServices: {
      badge: isGlobal ? "FŐ SZOLGÁLTATÁSOK" : `SZOLGÁLTATÁSOK ÉS ÖSSZEKÖTTETÉSEK ITT: ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Kommunikációs megoldások az ügyfélút" : `Legjobb Hang- és SMS-szolgáltatások itt: ${country}`,
      titleLine2: isGlobal ? "minden egyes lépéséhez" : "Növekvő Vállalkozások Számára",
      description: isGlobal
        ? "Moduláris távközlési infrastruktúra, amelyet a hang-, üzenetküldési és virtuális szám szolgáltatások kiemelkedő globális rendelkezésre állására terveztünk."
        : `Szolgáltatói szintű infrastruktúra itt: ${country}, 99,99%-os rendelkezésre állással, 2 másodpercen belüli OTP kézbesítéssel és helyi összeköttetéssel.`,
      services: [
        {
          title: isGlobal ? "Hangszolgáltatások" : `SIP Trunking és Hang itt: ${country}`,
          description: isGlobal
            ? "Nemzetközi SIP trunking rugalmas forgalomirányítással, kristálytiszta hangminőséggel, helyi CLI kijelzéssel és kedvező percdíjakkal."
            : `Nagy kapacitású hívásforgalom itt: ${country}, garantált hívószám-kijelzéssel (CLI), prémium útvonalakkal és közvetlen összeköttetéssel.`,
          features: [
            isGlobal ? "Kiváló minőségű HD hangkapcsolatok" : "Garantáltan Tiszta CLI Útvonalak",
            isGlobal ? "Rugalmas hívásirányítási lehetőségek" : "Közvetlen Szolgáltatói Összeköttetés",
            isGlobal ? "Globális redundáns lefedettség" : `Országos Virtuális DID Számok itt: ${country}`,
          ],
        },
        {
          title: isGlobal ? "SMS Üzenetküldés" : `Vezető SMS Szolgáltatások itt: ${country}`,
          description: isGlobal
            ? "Kritikus tranzakciós SMS-ek, OTP megerősítő kódok és gazdag üzleti üzenetek megbízható kézbesítése mobiltelefonokra világszerte."
            : `Villámgyors tranzakciós SMS-ek, 2 másodpercen belüli hitelesítő kódok és szabályoknak megfelelő tömeges üzenetküldés minden hálózatba itt: ${country}.`,
          features: [
            isGlobal ? "Másodperc alatti OTP kézbesítés" : `Hivatalos Feladói Azonosító (Sender ID) itt: ${country}`,
            isGlobal ? "Kiemelkedő kézbesítési arány" : "2 Másodpercen Belüli OTP Kézbesítési Garancia",
            isGlobal ? "RCS multimédiás üzenetküldés" : "Dinamikus Hibatűrés és Automatikus Útvonalváltás",
          ],
        },
        {
          title: isGlobal ? "Omnichannel" : `Omnichannel és WhatsApp API itt: ${country}`,
          description: isGlobal
            ? "Egyesítse a Hangot, SMS-t, WhatsAppot és az Azonosítást egyetlen modern REST API-ban, amely azonnal bevezethető a fejlesztők számára."
            : `Hivatalos WhatsApp Business API, interaktív RCS üzenetküldés és integrált kommunikációs csatornák az ügyfelek számára itt: ${country}.`,
          features: [
            isGlobal ? "Hivatalos WhatsApp Business API" : "Hivatalos WhatsApp Business API",
            isGlobal ? "RCS interaktív beszélgetések" : "Hitelesített Márkaprofil Jelvénnyel az RCS-ben",
            isGlobal ? "Egységes REST API csomag" : "Teljes Többcsatornás REST API Készlet",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "ÜZLETI MEGOLDÁSOK" : `ÜZLETI MEGOLDÁSOK ITT: ${country.toUpperCase()}`,
      title: isGlobal ? "Megoldások az Ügyfélkapcsolat Minden Fázisára" : `Megoldások ${country} Vállalatai Számára`,
      description: isGlobal
        ? "Kapcsolódjon és kommunikáljon zökkenőmentesen ügyfeleivel biztonságos hang-, SMS- és többcsatornás digitális eszközeinkkel."
        : `Nagy teljesítményű távközlési technológiai platform, amelyet nagyvállalatoknak, fintech cégeknek és skálázódó márkáknak terveztünk itt: ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "OTP Hitelesítés",
          tagline: "Biztonságos. Gyors. Megbízható.",
          title: `Azonnali OTP Hitelesítés (${country})`,
          description: `Küldjön egyszer használatos jelszavakat gyorsan és maximális biztonsággal regisztrációkhoz, belépésekhez és fizetések jóváhagyásához itt: ${country}.`,
          features: [
            "Rendkívül gyors és megbízható OTP kézbesítés 2 másodpercen belül",
            "Automatikus hálózatváltás hibák esetén több szolgáltató között",
            `Optimalizált útvonalak minden mobilhálózathoz itt: ${country}`,
          ],
          customerStatus: "Személyazonosság Ellenőrizve",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Az Ön megerősítő kódja:",
            bodyBold: "53193",
            validTime: "5 percig érvényes. Kérjük, ne ossza meg senkivel.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Hitelesítés",
            title: "Erősítse meg Telefonszámát",
            subtitle: `Biztonsági kódot küldtünk a regisztrált telefonszámára itt: ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Ellenőrzés és Tovább",
            subNote: "Nem kapta meg a kódot?\nÚjraküldés 00:45 múlva",
          },
        },
        {
          id: "banking",
          name: "Bank és Pénzügy",
          tagline: "Védett. Kapcsolódó. Hiteles.",
          title: `Banki és Pénzügyi Szolgáltatások (${country})`,
          description: `Biztonságos pénzügyi kommunikáció valós idejű tranzakciós értesítésekkel, egyenlegváltozásokkal és fizetési megerősítésekkel itt: ${country}.`,
          features: [
            "Banki szintű titkosított adatvédelmi csatornák",
            "Azonnali értesítések jóváírásokról, terhelésekről és átutalásokról",
            "Nagy kapacitású tranzakciós SMS küldési infrastruktúra",
          ],
          customerStatus: "Tranzakció Befejezve",
          notification: {
            header: "Banki Tranzakció Értesítés",
            body: `Az Ön ${currency}250.00 összegű fizetése sikeresen teljesült.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Banki Szolgáltatások",
            title: "Sikeres Fizetés",
            subtitle: `${currency}250.00 biztonságosan elszámolásra került az Ön számláján.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Teljesítve",
              reference: "TXN-849201",
            },
            buttonText: "Kivonat Megtekintése",
            subNote: "✓ Hitelesített és védett szolgáltatói csatornán keresztül küldve",
          },
        },
        {
          id: "marketing",
          name: "Marketing",
          tagline: "Érje el. Vonja be. Értékesítsen.",
          title: `Marketingkommunikáció és Kampányok (${country})`,
          description: `Érje el vásárlóit célzott SMS kampányokkal, exkluzív akciókkal, szezonális kedvezményekkel és márkahírekkel széles körben itt: ${country}.`,
          features: [
            "Tömeges promóciós SMS-ek rendkívül magas megnyitási aránnyal",
            "Célközönség szegmentálás és intelligens időzítés",
            "Valós idejű kattintáskövetés és konverziós elemzés",
          ],
          customerStatus: "Ajánlat Kézbesítve",
          notification: {
            header: "Exkluzív Ajánlat",
            line1: "KÜLÖNLEGES 30%-OS KEDVEZMÉNY",
            line2: `Exkluzív ajánlatok érvényesek itt: ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Különleges Akciók",
            badge: "Korlátozott Idő",
            title: "Exkluzív Kedvezmény Kifejezetten Önnek",
            subtitle: `Élvezze a 30% kedvezményt következő vásárlásakor.\nAjánlatunk a hónap végéig érvényes.`,
            buttonText: "Kedvezmény Igénylése",
            subNote: `✓ Ellenőrzött feliratkozóknak elküldve itt: ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Emlékeztetők",
          tagline: "Időben. Pontosan. Automatikusan.",
          title: `Automatizált Ügyfélemlékeztetők (${country})`,
          description: `Tartsa tájékoztatva ügyfeleit automatikus értesítésekkel időpontokról, számlafizetési határidőkről és megújításokról itt: ${country}.`,
          features: [
            "Többcsatornás, automatikusan ütemezett emlékeztető üzenetek",
            "Közvetlen gyorsfizetési hivatkozások az üzenetbe ágyazva",
            "A mulasztott időpontok és a fizetési késedelmek jelentős csökkenése",
          ],
          customerStatus: "Emlékeztető Kézbesítve",
          notification: {
            header: "Időpont Emlékeztető",
            line1: "Holnapra Ütemezve",
            line2: "Kérjük, érkezzen 10 perccel a megbeszélt időpont előtt.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Emlékeztetők",
            title: "Holnap Időpontja Van",
            subtitle: "Időpontja meg van erősítve délelőtt 10:30-ra.",
            infoCard: {
              label: "Helyszín / Kirendeltség",
              value: `Központi Iroda ${country}`,
            },
            buttonText: "Részvétel Megerősítése",
            subNote: "Válaszoljon 1-gyel a megerősítéshez, vagy 2-vel az átütemezéshez",
          },
        },
        {
          id: "emergency",
          name: "Vészhelyzeti Értesítések",
          tagline: "Kritikus. Azonnali. Mindig Aktív.",
          title: `Vészhelyzeti és Közbiztonsági Riasztások (${country})`,
          description: `Azonnali, kiemelt prioritású értesítések küldése, amikor minden másodperc számít a lakosság és a vállalkozások védelmében itt: ${country}.`,
          features: [
            "Legmagasabb prioritású útvonal, amely kikerüli a normál üzenetsorokat",
            "Földrajzi alapú célzás tömeges lakossági riasztásokhoz",
            "Automatikus hanghívásra váltás, ha az SMS nem kézbesíthető",
          ],
          customerStatus: "Vészhelyzeti Riasztás Kiküldve",
          notification: {
            header: "Közbiztonsági Riasztás",
            line1: "Sürgős Időjárási Figyelmeztetés",
            line2: "Kérjük, kövesse a hatóságok biztonsági utasításait.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Vészjelzés",
            title: "Sürgős Időjárási Riasztás",
            subtitle: "Heves időjárási jelenségeket jelentettek a körzetben. Maradjon biztonságos helyen és kövesse a híreket.",
            infoCard: {
              label: "Érintett Terület",
              value: country,
            },
            buttonText: "Biztonságos Zónák",
            subNote: "Hivatalos közbiztonsági tájékoztatás",
          },
        },
        {
          id: "order",
          name: "Rendeléskövetés",
          tagline: "Tájékoztasson. Kövessen. Kézbesítsen.",
          title: `Valós Idejű Rendelés- és Csomagkövetés (${country})`,
          description: `Tartsa naprakészen a vásárlókat: a feladástól a futár valós idejű térképes nyomon követésén át az átvételi OTP kód megadásáig itt: ${country}.`,
          features: [
            "Valós idejű állapotfrissítések a csomagolásról és feladásról",
            "Értesítés a futár érkezéséről élő térképes követési linkkel",
            "Biztonságos OTP kód a csomag átvételének igazolásához",
          ],
          customerStatus: "Kiszállítás Alatt",
          notification: {
            header: "Rendelés Állapotfrissítés",
            line1: "A #IN849201 Rendelés Feladva",
            line2: `Csomagja ma megérkezik a megadott címre itt: ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Csomagkövetés",
            title: "A Csomagja Úton Van",
            subtitle: "A futár úton van a megadott címre a küldeménnyel.",
            infoCard: {
              label: "Átvételi OTP Kód",
              value: "8492",
            },
            buttonText: "Követés a Térképen",
            subNote: "Érintésmentes kézbesítés engedélyezve",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "IPARÁGI SZAKÉRTELEM" : `IPARÁGI SZAKÉRTELEM - ${country.toUpperCase()}`,
      titleLine1: "Távközlési Megoldások Kifejezetten",
      titleLine2: isGlobal ? "Minden Iparág Igényeire Szabva" : `Vállalkozásoknak itt: ${country}`,
      description: isGlobal
        ? "Építsen ki stabil ügyfélkapcsolatokat professzionális hang-, SMS- és integrált digitális csatornáink segítségével."
        : `Olyan infrastruktúra, amely maradéktalanul megfelel a helyi előírásoknak, a GDPR-nak és a fogyasztói szokásoknak itt: ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Bank és Pénzügy",
          title: `Banki és Fintech Szektor itt: ${country}`,
          description: `Biztonságos tranzakciós SMS, szigorú pénzügyi megfelelőség és azonnali tranzakció-ellenőrzés (${country}).`,
        },
        {
          id: "healthcare",
          name: "Egészségügy és Klinikák",
          title: `Kórházak és Orvosi Központok itt: ${country}`,
          description: `Orvosi időpont-emlékeztetők, leletértesítések és telemedicina kommunikáció itt: ${country}.`,
        },
        {
          id: "ecommerce",
          name: "E-Kereskedelem és Kiskereskedelem",
          title: `Online Kereskedelem és Retail itt: ${country}`,
          description: `Csomagkövetés, villámakciós üzenetek és többcsatornás ügyfélszolgálati támogatás itt: ${country}.`,
        },
        {
          id: "education",
          name: "Oktatás és Egyetemek",
          title: `Iskolák és Felsőoktatás itt: ${country}`,
          description: `Felvételi értesítők, egyetemi vészjelzések és gördülékeny szülői kapcsolattartás itt: ${country}.`,
        },
        {
          id: "travel",
          name: "Utazás és Vendéglátás",
          title: `Légitársaságok és Szállodák itt: ${country}`,
          description: `Beszállókapu változások, foglalási visszaigazolások és éjjel-nappali 24/7 utastámogatás itt: ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "LÉPJEN VELÜNK KAPCSOLATBA" : `KAPCSOLATFELVÉTEL ITT: ${country.toUpperCase()}`,
      titleLine1: "Építsük Ki Együtt a Megfelelő",
      titleLine2: isGlobal ? "Kommunikációs Hálózatot." : `Távközlési Hálózatot itt: ${country}.`,
      description: isGlobal
        ? "Az iNet Global Services révén a vállalatok megbízható SMS és hang megoldásokkal növelhetik az ügyfélelköteleződést, erősíthetik a biztonságot és egyszerűsíthetik a folyamatokat. Kiemelkedő sebességet és megbízhatóságot nyújtunk."
        : `Lépjen partnerségre az iNet Global vállalattal közvetlen SMS útvonalakért, kristálytiszta hangminőségért és teljes jogi megfelelőségért itt: ${country}. Keresse vállalati tanácsadóinkat ingyenes tesztelésért és egyedi ajánlatokért.`,
    },
    footer: {
      description: isGlobal
        ? "Globális távközlési infrastruktúra olyan cégeknek, amelyek maximális megbízhatóságot követelnek a hang-, üzenetküldési és többcsatornás kapcsolatokban."
        : `Vállalati szintű infrastruktúra, amely szolgáltatói minőségű Hangot, SMS-t, Virtuális DID Számokat és API-kat biztosít itt: ${country} és világszerte.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Egyesült Államok" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Minden jog fenntartva.`,
    },
  }),

  // 20. Ukrainian (Українська - uk)
  uk: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "ГЛОБАЛЬНА ТЕЛЕКОМУНІКАЦІЙНА ІНФРАСТРУКТУРА"
        : `ТЕЛЕКОМ-ІНФРАСТРУКТУРА В ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Глобальний Зв'язок," : `Найкращий SMS та Голосовий Трафік`,
      titleLine2: isGlobal ? "Створений Для" : `У Країні: ${country},`,
      titleLine3: isGlobal ? "Великого Бізнесу." : `Для Корпоративного Масштабу.`,
      description: isGlobal
        ? "Надійний голосовий зв'язок, корпоративні повідомлення та віртуальні номери для компаній, які об'єднують філії, команди та клієнтів по всьому світу."
        : `Забезпечуємо підприємства в ${country} високошвидкісними SMS-каналами, ультранизькою затримкою передачі голосу та прямими інтерконектами з операторами.`,
      primaryCta: isGlobal ? "Почати Зараз" : `Почати в ${country}`,
      secondaryCta: isGlobal ? "Огляд Послуг" : `Маршрути в ${country}`,
      timeline: {
        voice: isGlobal ? "Корпоративний Голос" : `Голосовий Трафік (CLI) в ${country}`,
        messaging: isGlobal ? "SMS та Повідомлення" : `Канали SMS та OTP в ${country}`,
        numbers: isGlobal ? "Віртуальні Номери" : `Віртуальні Номери DID в ${country}`,
        footerNote1: isGlobal ? "Єдина Платформа" : "Прямі Канали Операторів",
        footerNote2: isGlobal ? "Глобальне Охоплення" : "100% Відповідність Законодавству",
      },
    },
    coreServices: {
      badge: isGlobal ? "ОСНОВНІ ПОСЛУГИ" : `ПОСЛУГИ ТА ІНТЕРКОНЕКТИ В ${country.toUpperCase()}`,
      titleLine1: isGlobal ? "Телекомунікаційні рішення для кожного" : `Найкращі Сервіси Голосу та SMS в ${country}`,
      titleLine2: isGlobal ? "етапу взаємодії з клієнтом" : "Для Зростаючих Підприємств",
      description: isGlobal
        ? "Модульна телеком-інфраструктура операторського рівня, створена для високої доступності голосових послуг, SMS та віртуальних номерів у всьому світі."
        : `Інфраструктура операторського класу в ${country} з доступністю 99,99%, доставкою OTP менше 2 секунд та прямими стиками з місцевими операторами.`,
      services: [
        {
          title: isGlobal ? "Голосові Послуги" : `SIP-транкінг та Голос в ${country}`,
          description: isGlobal
            ? "Міжнародний SIP-транкінг із гнучкою маршрутизацією, преміальною якістю аудіо, покриттям місцевого CLI та оптимізованими тарифами."
            : `Високонавантажений голосовий трафік в ${country} з гарантованою підстановкою номерів (CLI), преміум-маршрутами та прямими стиками.`,
          features: [
            isGlobal ? "HD-якість голосових з'єднань" : "Гарантія Чистих CLI-маршрутів",
            isGlobal ? "Гнучкі опції маршрутизації" : "Прямі Інтерконекти з Операторами",
            isGlobal ? "Глобальне резервоване покриття" : `Віртуальні Номери DID по всій країні (${country})`,
          ],
        },
        {
          title: isGlobal ? "Повідомлення SMS" : `Провідні SMS-сервіси в ${country}`,
          description: isGlobal
            ? "Доставка критично важливих транзакційних SMS, кодів підтвердження OTP та бізнес-повідомлень на мобільні телефони по всьому світу."
            : `Блискавичні транзакційні SMS, доставка кодів верифікації до 2 секунд та узгоджені масові розсилки в усіх мережах в ${country}.`,
          features: [
            isGlobal ? "Миттєва доставка OTP за частки секунди" : `Офіційна Реєстрація Sender ID в ${country}`,
            isGlobal ? "Максимальна гарантія доставки" : "Гарантія Доставки OTP До 2 Секунд",
            isGlobal ? "Мультимедійні повідомлення RCS" : "Динамічний Failover та Захист Від Збоїв",
          ],
        },
        {
          title: isGlobal ? "Омніканальність" : `API Омніканальності та WhatsApp в ${country}`,
          description: isGlobal
            ? "Об'єднайте Голос, SMS, WhatsApp та Верифікацію в єдиний набір REST API, готовий до швидкого впровадження розробниками."
            : `Офіційний WhatsApp Business API, діалогові повідомлення RCS та інтегровані канали комунікації для клієнтів в ${country}.`,
          features: [
            isGlobal ? "Офіційний WhatsApp Business API" : "Офіційний WhatsApp Business API",
            isGlobal ? "Інтерактивні діалоги RCS" : "Верифікований Профіль Бренду з Бейджем у RCS",
            isGlobal ? "Уніфікований набір REST API" : "Повний Набір Мультиканальних REST API",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "БІЗНЕС-РІШЕННЯ" : `БІЗНЕС-РІШЕННЯ В ${country.toUpperCase()}`,
      title: isGlobal ? "Рішення для Кожного Сценарію Взаємодії" : `Рішення Розроблені Для ${country}`,
      description: isGlobal
        ? "Будуйте міцні відносини з клієнтами за допомогою захищених і стабільних рішень голосового зв'язку, SMS та цифрових каналів."
        : `Високопродуктивна телекомунікаційна платформа, оптимізована для великих корпорацій, фінтеху та масштабованого бізнесу в ${country}.`,
      solutions: [
        {
          id: "otp",
          name: "Авторизація OTP",
          tagline: "Безпечно. Швидко. Надійно.",
          title: `Миттєва Доставка Одноразових Паролів (${country})`,
          description: `Швидка та безпечна доставка одноразових паролів для реєстрацій, входу в обліковий запис, відновлення доступу та підтвердження платежів в ${country}.`,
          features: [
            "Доставка OTP менш ніж за 2 секунди з високою надійністю",
            "Автоматичне перемикання між мережами у разі збоїв",
            `Оптимізовані маршрути до всіх операторів в ${country}`,
          ],
          customerStatus: "Особу Підтверджено",
          notification: {
            header: `iNet OTP (${country})`,
            body: "Ваш код підтвердження:",
            bodyBold: "53193",
            validTime: "Дійсний 5 хвилин. Нікому не повідомляйте.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Авторизація",
            title: "Підтвердіть Номер Телефону",
            subtitle: `Ми надіслали код перевірки на ваш зареєстрований номер в ${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "Підтвердити та Продовжити",
            subNote: "Не отримали код?\nНадіслати повторно через 00:45",
          },
        },
        {
          id: "banking",
          name: "Банкінг та Фінанси",
          tagline: "Захищено. Підключено. Перевірено.",
          title: `Банківські та Фінансові Сповіщення (${country})`,
          description: `Безпечні фінансові повідомлення: миттєві звіти про транзакції, списання, поповнення та зміну балансу для установ в ${country}.`,
          features: [
            "Шифровані канали за стандартами банківської безпеки",
            "Моментальні сповіщення про списання, зарахування та перекази",
            "Висока пропускна здатність для транзакційних повідомлень",
          ],
          customerStatus: "Транзакцію Завершено",
          notification: {
            header: "Сповіщення Банку",
            body: `Ваш платіж на суму ${currency}250.00 успішно виконано.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Банкінг",
            title: "Оплата Пройшла Успішно",
            subtitle: `${currency}250.00 списано з вашого рахунку в повній безпеці.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "Виконано",
              reference: "TXN-849201",
            },
            buttonText: "Переглянути Чек",
            subNote: "✓ Надіслано через захищений виділений канал оператора",
          },
        },
        {
          id: "marketing",
          name: "Маркетинг",
          tagline: "Охоплення. Залучення. Продажі.",
          title: `Маркетингові Повідомлення та Розсилки (${country})`,
          description: `Залучайте споживачів цільовими SMS-кампаніями з персональними знижками, сезонними пропозиціями та оголошеннями в масштабах ${country}.`,
          features: [
            "Масові рекламні розсилки з високим показником відкриття",
            "Сегментація аудиторії та інтелектуальне планування за часом",
            "Відстеження переходів та аналітика конверсій у реальному часі",
          ],
          customerStatus: "Пропозицію Доставлено",
          notification: {
            header: "Спеціальна Пропозиція",
            line1: "ЗНИЖКА 30% ДЛЯ ВАС",
            line2: `Ексклюзивні акції діють по всій країні (${country}).`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Акції та Знижки",
            badge: "Обмежений Час",
            title: "Ексклюзивна Знижка Спеціально Для Вас",
            subtitle: `Отримайте знижку 30% на наступне замовлення.\nПропозиція діє до кінця поточного місяця.`,
            buttonText: "Отримати Знижку",
            subNote: `✓ Надіслано перевіреним підписникам в ${country}`,
          },
        },
        {
          id: "reminders",
          name: "Нагадування",
          tagline: "Вчасно. Точно. Автоматизовано.",
          title: `Автоматичні Нагадування Клієнтам (${country})`,
          description: `Інформуйте клієнтів заздалегідь про заплановані візити, терміни оплати рахунків та подовження підписок в ${country}.`,
          features: [
            "Автоматичні сповіщення за розкладом через різні канали",
            "Посилання на швидку оплату безпосередньо в тексті повідомлення",
            "Зниження кількості пропущених зустрічей та прострочених платежів",
          ],
          customerStatus: "Нагадування Доставлено",
          notification: {
            header: "Нагадування про Візит",
            line1: "Заплановано на Завтра",
            line2: "Будь ласка, приходьте за 10 хвилин до призначеного часу.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Нагадування",
            title: "Запис Підтверджено на Завтра",
            subtitle: "Ваш візит призначено на 10:30 ранку.",
            infoCard: {
              label: "Адреса Відділення",
              value: `Центральний Офіс ${country}`,
            },
            buttonText: "Підтвердити Візит",
            subNote: "Відповідайте 1 для підтвердження або 2 для перенесення",
          },
        },
        {
          id: "emergency",
          name: "Екстрені Сповіщення",
          tagline: "Критично. Миттєво. Завжди на Зв'язку.",
          title: `Екстрені Оповіщення та Цивільний Захист (${country})`,
          description: `Миттєве розсилання пріоритетних сповіщень, коли кожна секунда на вагу золота, для безпеки громадян та стабільності бізнесу в ${country}.`,
          features: [
            "Найвищий пріоритет доставки в обхід загальних черг повідомлень",
            "Географічне таргетування для масового оповіщення населення",
            "Автоматичний перехід на голосовий дзвінок у разі недоставки SMS",
          ],
          customerStatus: "Екстрене Сповіщення Надіслано",
          notification: {
            header: "Служба Цивільного Захисту",
            line1: "Термінове Штормове Попередження",
            line2: "Дотримуйтесь інструкцій місцевих екстрених служб.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Екстрена Тривога",
            title: "Штормове Попередження",
            subtitle: "У вашому районі очікуються складні погодні умови. Залишайтеся в безпечному місці та стежте за новинами.",
            infoCard: {
              label: "Район Попередження",
              value: country,
            },
            buttonText: "Список Безпечних Зон",
            subNote: "Офіційне повідомлення служби цивільного захисту",
          },
        },
        {
          id: "order",
          name: "Статус Замовлень",
          tagline: "Інформуйте. Відстежуйте. Доставляйте.",
          title: `Відстеження Замовлень та Доставки в Реальному Часі (${country})`,
          description: `Тримайте покупців у курсі: від відправлення зі складу та руху кур'єра на мапі до коду OTP при отриманні в ${country}.`,
          features: [
            "Оновлення статусу комплектації та відправлення в реальному часі",
            "Сповіщення про прибуття кур'єра з посиланням на живу мапу",
            "Безпечний перевірочний код OTP для підтвердження вручення",
          ],
          customerStatus: "Передано Кур'єру",
          notification: {
            header: "Оновлення Статусу Замовлення",
            line1: "Замовлення #IN849201 Відправлено",
            line2: `Посилка буде доставлена сьогодні за адресою в ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "Відстеження Посилки",
            title: "Ваше Замовлення Вже в Дорозі",
            subtitle: "Кур'єр прямує за вашою адресою для вручення посилки.",
            infoCard: {
              label: "Код для Отримання (OTP)",
              value: "8492",
            },
            buttonText: "Стежити на Мапі",
            subNote: "Доступна безконтактна передача посилки",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "ГАЛУЗЕВА ЕКСПЕРТИЗА" : `ГАЛУЗЕВА ЕКСПЕРТИЗА - ${country.toUpperCase()}`,
      titleLine1: "Телекомунікаційні Рішення, Створені",
      titleLine2: isGlobal ? "Для Будь-якої Галузі Економіки" : `Для Підприємств у ${country}`,
      description: isGlobal
        ? "Будуйте міцні взаємини з клієнтами завдяки безперебійному зв'язку, SMS та єдиним цифровим каналам."
        : `Інфраструктура, повністю адаптована до законодавства у сфері зв'язку, вимог захисту даних та запитів клієнтів у ${country}.`,
      industries: [
        {
          id: "banking",
          name: "Банки та Фінанси",
          title: `Банківський Сектор та Фінтех в ${country}`,
          description: `Захищені сервісні SMS, фінансовий комплаєнс та підтвердження транзакцій у реальному часі (${country}).`,
        },
        {
          id: "healthcare",
          name: "Охорона Здоров'я",
          title: `Лікарні та Медичні Центри в ${country}`,
          description: `Нагадування про прийом лікаря, готовність аналізів та зв'язок для телемедицини по всій країні (${country}).`,
        },
        {
          id: "ecommerce",
          name: "Електронна Комерція",
          title: `Онлайн-торгівля та Ритейл в ${country}`,
          description: `Сповіщення про рух посилок, персоналізовані знижки та омніканальна підтримка клієнтів в ${country}.`,
        },
        {
          id: "education",
          name: "Освіта та Університети",
          title: `Школи та Вищі Навчальні Заклади в ${country}`,
          description: `Повідомлення про вступ, термінові оголошення кампусу та інформування батьків в ${country}.`,
        },
        {
          id: "travel",
          name: "Туризм та Готелі",
          title: `Авіалінії та Готельний Бізнес в ${country}`,
          description: `Зміни виходів на посадку, підтвердження бронювань та цілодобова підтримка мандрівників 24/7 в ${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "ЗВ'ЯЖІТЬСЯ З НАМИ" : `ЗВ'ЯЖІТЬСЯ З НАМИ В ${country.toUpperCase()}`,
      titleLine1: "Створімо Надійне Телекомунікаційне",
      titleLine2: isGlobal ? "Рішення Для Вашої Компанії." : `Рішення Для Бізнесу в ${country}.`,
      description: isGlobal
        ? "Завдяки сервісам iNet Global Services компанії отримують масштабовані інструменти SMS і голосу для підвищення залученості, зміцнення безпеки та оптимізації витрат. Ми гарантуємо швидкість, стабільність і найвищу якість."
        : `Станьте партнером iNet Global для отримання прямих операторських SMS-маршрутів, бездоганного звуку та повної юридичної відповідності в ${country}. Зв'яжіться з нашими експертами для безкоштовного тестування та індивідуального розрахунку тарифів.`,
    },
    footer: {
      description: isGlobal
        ? "Глобальна телекомунікаційна інфраструктура для компаній, які вимагають максимальної надійності в послугах голосу, повідомлень та омніканальності."
        : `Інфраструктура операторського рівня, що надає Голос, SMS, Віртуальні Номери DID та Мультиканальні API в ${country} та по всьому світу.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "Сполучені Штати Америки" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). Всі права захищені.`,
    },
  }),

  // 21. Hebrew (עברית - he)
  he: (country, isGlobal, currency) => ({
    header: {
      badge: isGlobal
        ? "תשתית תקשורת גלובלית"
        : `תשתית תקשורת ב-${country.toUpperCase()}`,
      titleLine1: isGlobal ? "תקשורת גלובלית," : `תעבורת ה-SMS והקול המובילה`,
      titleLine2: isGlobal ? "שנבנתה במיוחד עבור" : `ב-${country},`,
      titleLine3: isGlobal ? "ארגונים מובילים." : `מוכנה לקנה מידה ארגוני.`,
      description: isGlobal
        ? "שירותי קול, הודעות ארגוניות ומספרים וירטואליים אמינים לעסקים שצריכים להישאר מחוברים מעבר לגבולות, צוותים ובכל נקודת מפגש עם הלקוח."
        : `מעצימים ארגונים ב-${country} עם ניתוב SMS בקיבולת גבוהה, סיום שיחות קוליות בהשהיה מזערית וחיבור ישיר למפעילי תקשורת מקומיים.`,
      primaryCta: isGlobal ? "התחל עכשיו" : `התחל ב-${country}`,
      secondaryCta: isGlobal ? "גלה את השירותים" : `מסלולים ב-${country}`,
      timeline: {
        voice: isGlobal ? "קול ארגוני" : `תעבורת קול (CLI) ב-${country}`,
        messaging: isGlobal ? "SMS והודעות" : `מסלולי SMS ו-OTP ב-${country}`,
        numbers: isGlobal ? "מספרים וירטואליים" : `מספרי DID וירטואליים ב-${country}`,
        footerNote1: isGlobal ? "פלטפורמה אחודה אחת" : "מסלולי מפעיל ישירים",
        footerNote2: isGlobal ? "פריסה עולמית" : "100% עמידה ברגולציה",
      },
    },
    coreServices: {
      badge: isGlobal ? "שירותי ליבה" : `שירותים וחיבורי מפעילים ב-${country.toUpperCase()}`,
      titleLine1: isGlobal ? "פתרונות תקשורת לכל" : `שירותי הקול וה-SMS המובילים ב-${country}`,
      titleLine2: isGlobal ? "שלב במסע הלקוח" : "לארגונים בצמיחה",
      description: isGlobal
        ? "תשתית טלקום מודולרית המתוכננת לזמינות גבוהה ביותר של שירותי קול, הודעות ומספרים וירטואליים ברחבי העולם."
        : `תשתית תקשורת ברמת מפעיל ב-${country} עם 99.99% זמינות, מסירת OTP בתוך פחות מ-2 שניות וחיבור ישיר לרשתות מקומיות.`,
      services: [
        {
          title: isGlobal ? "שירותי קול" : `SIP Trunking וקול ב-${country}`,
          description: isGlobal
            ? "SIP trunking בינלאומי עם ניתוב גמיש, איכות שמע מעולה, תצוגת מספר מתקשר (CLI) מקומי ועלויות סיום שיחה משתלמות."
            : `תעבורת שיחות במקביל בנפח גבוה ב-${country} עם זיהוי CLI מובטח, מסלולי פרימיום וחיבור ישיר לספקי טלקום מקומיים.`,
          features: [
            isGlobal ? "חיבורי שיחות קוליות באיכות HD" : "התחייבות למסלולי CLI נקיים",
            isGlobal ? "אפשרויות ניתוב שיחות גמישות" : "חיבור ישיר למפעילי תקשורת",
            isGlobal ? "כיסוי עולמי עם שרידות גבוהה" : `מספרי DID וירטואליים בפריסה ארצית ב-${country}`,
          ],
        },
        {
          title: isGlobal ? "הודעות SMS" : `שירותי SMS מובילים ב-${country}`,
          description: isGlobal
            ? "שליחת הודעות SMS תפעוליות קריטיות, קודי אימות OTP והודעות עסקיות עשירות ישירות לטלפונים ניידים בכל העולם."
            : `הודעות תפעוליות מהירות כברק, קודי אימות בפחות מ-2 שניות ושליחת הודעות המוניות התואמות את חוקי התקשורת ב-${country}.`,
          features: [
            isGlobal ? "מסירת OTP בפחות משנייה" : `רישום שם שולח רשמי (Sender ID) ב-${country}`,
            isGlobal ? "אחוזי מסירה מהגבוהים בעולם" : "התחייבות למסירת OTP בתוך פחות מ-2 שניות",
            isGlobal ? "הודעות מולטימדיה עשירות ב-RCS" : "מנגנון גיבוי וניתוב דינמי במקרה של תקלה",
          ],
        },
        {
          title: isGlobal ? "אומניצ'אנל" : `Omnichannel ו-WhatsApp API ב-${country}`,
          description: isGlobal
            ? "אחדו שירותי קול, SMS, WhatsApp ואימות לכדי ממשק REST API מודרני אחד, המוכן להטמעה מיידית בידי מפתחים."
            : `ממשק WhatsApp Business API רשמי, הודעות שיחה אינטראקטיביות ב-RCS וערוצים משולבים המותאמים ללקוחות ב-${country}.`,
          features: [
            isGlobal ? "ממשק WhatsApp Business API רשמי" : "ממשק WhatsApp Business API רשמי",
            isGlobal ? "שיחות אינטראקטיביות ב-RCS" : "פרופיל מותג מאומת עם תג רשמי ב-RCS",
            isGlobal ? "מערך REST API אחוד" : "ממשקי REST API רב-ערוציים מלאים",
          ],
        },
      ],
    },
    businessSolutions: {
      badge: isGlobal ? "פתרונות עסקיים" : `פתרונות עסקיים ב-${country.toUpperCase()}`,
      title: isGlobal ? "פתרונות לכל שלב באינטראקציה עם הלקוח" : `פתרונות המותאמים במיוחד עבור ${country}`,
      description: isGlobal
        ? "התחברו, צרו מעורבות ותקשרו עם לקוחות באמצעות פתרונות קול, SMS וערוצים דיגיטליים מאובטחים ואמינים."
        : `פלטפורמת טלקום מתקדמת בביצועים גבוהים המותאמת לארגונים, חברות פינטק ועסקים בצמיחה מהירה ב-${country}.`,
      solutions: [
        {
          id: "otp",
          name: "אימות OTP",
          tagline: "מאובטח. מהיר. אמין.",
          title: `אימות מיידי באמצעות קודי OTP (${country})`,
          description: `שליחת סיסמאות חד-פעמיות במהירות ובביטחון מלא עבור הרשמות, התחברויות, שחזור חשבונות ואישור תשלומים ב-${country}.`,
          features: [
            "מסירת OTP מהירה ואמינה ביותר בפחות מ-2 שניות",
            "הגנת מעבר אוטומטי (failover) בין מפעילי תקשורת",
            `מסלולים מותאמים לכל המפעילים הסלולריים ב-${country}`,
          ],
          customerStatus: "זהות אומתה בהצלחה",
          notification: {
            header: `iNet OTP (${country})`,
            body: "קוד האימות שלך הוא",
            bodyBold: "53193",
            validTime: "תקף ל-5 דקות. אין לשתף קוד זה.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "אימות",
            title: "אמת את מספר הנייד שלך",
            subtitle: `שלחנו קוד אבטחה למספר הטלפון הרשום שלך ב-${country}.`,
            otpDigits: ["5", "3", "1", "9", "3"],
            buttonText: "אמת והמשך",
            subNote: "לא קיבלת את הקוד?\nשלח שוב בעוד 00:45",
          },
        },
        {
          id: "banking",
          name: "בנקאות ופיננסים",
          tagline: "מוגן. מקושר. מהימן.",
          title: `שירותי בנקאות והתראות פיננסיות (${country})`,
          description: `תקשורת פיננסית מאובטחת עם התראות על עסקאות בזמן אמת, עדכוני יתרות ואישורי העברות עבור מוסדות פיננסיים ב-${country}.`,
          features: [
            "ערוצי אבטחה מוצפנים בתקנים המחמירים של עולם הבנקאות",
            "התראות מיידיות על חיובים, זיכויים ועסקאות",
            "קיבולת גבוהה במיוחד להעברת הודעות SMS תפעוליות",
          ],
          customerStatus: "עסקה בוצעה בהצלחה",
          notification: {
            header: "התראת עסקת בנק",
            body: `התשלום שלך על סך ${currency}250.00 בוצע בהצלחה.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "בנקאות",
            title: "התשלום עבר בהצלחה",
            subtitle: `סכום של ${currency}250.00 עובד בצורה מאובטחת בחשבונך.`,
            bankingDetails: {
              amount: `${currency}250.00`,
              status: "הושלם",
              reference: "TXN-849201",
            },
            buttonText: "צפה בקבלה",
            subNote: "✓ נמסר דרך ערוץ מפעיל מאובטח ומאושר",
          },
        },
        {
          id: "marketing",
          name: "שיווק",
          tagline: "הגעה. מעורבות. המרה.",
          title: `תקשורת שיווקית וקמפיינים (${country})`,
          description: `הגיעו לצרכנים באמצעות קמפיינים ממוקדים ב-SMS הכוללים מבצעים מיוחדים, הנחות עונתיות והודעות מותג בפריסה רחבה ב-${country}.`,
          features: [
            "שליחת SMS שיווקי בכמויות גדולות עם אחוזי פתיחה מהגבוהים בשוק",
            "פילוח קהלים מתקדם ותזמון הודעות חכם",
            "מעקב אחר הקלקות וניתוח המרות בזמן אמת",
          ],
          customerStatus: "ההצעה נמסרה",
          notification: {
            header: "הטבה בלעדית",
            line1: "30% הנחה מיוחדת",
            line2: `מבצעים בלעדיים זמינים בכל רחבי ${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "הטבות מיוחדות",
            badge: "זמן מוגבל",
            title: "הנחה בלעדית במיוחד בשבילך",
            subtitle: `קבל 30% הנחה על הקנייה הבאה שלך.\nהמבצע בתוקף עד סוף החודש הנוכחי.`,
            buttonText: "מימוש ההטבה",
            subNote: `✓ נשלח למנויים מאומתים ב-${country}`,
          },
        },
        {
          id: "reminders",
          name: "תזכורות",
          tagline: "בזמן. מדויק. אוטומטי.",
          title: `תזכורות אוטומטיות ללקוחות (${country})`,
          description: `שמרו על לקוחות מעודכנים מראש לגבי מועדי פגישות, זמני פירעון חשבונות וחידושי מנויים ב-${country}.`,
          features: [
            "הודעות תזכורת אוטומטיות מתוזמנות במספר ערוצים",
            "קישורי תשלום מהירים המוטמעים ישירות בתוך ההודעה",
            "צמצום משמעותי של היעדרויות מפגישות ואיחורי תשלום",
          ],
          customerStatus: "התזכורת נמסרה",
          notification: {
            header: "תזכורת לתור",
            line1: "מתוזמן למחר",
            line2: "אנא הגע 10 דקות לפני המועד שנקבע.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "תזכורות",
            title: "יש לך פגישה מתוכננת למחר",
            subtitle: "התור שלך מאושר לשעה 10:30 בבוקר.",
            infoCard: {
              label: "מיקום / סניף",
              value: `המרכז הראשי ${country}`,
            },
            buttonText: "אישור הגעה",
            subNote: "השב 1 לאישור או 2 לתיאום מועד חדש",
          },
        },
        {
          id: "emergency",
          name: "התראות חירום",
          tagline: "קריטי. מיידי. תמיד מחובר.",
          title: `שידורי חירום ובטיחות הציבור (${country})`,
          description: `הפצת התראות בעדיפות עליונה באופן מיידי כשכל שנייה קובעת, לשמירה על ביטחון הציבור והמשכיות עסקית ב-${country}.`,
          features: [
            "ערוץ בעדיפות עליונה העוקף את תורי ההודעות הרגילים",
            "פילוח גיאוגרפי להתראות המוניות לאוכלוסייה",
            "מעבר אוטומטי לשיחות קוליות במידה וה-SMS אינו מגיע",
          ],
          customerStatus: "התראת חירום שודרה",
          notification: {
            header: "הודעת בטיחות הציבור",
            line1: "אזהרת מזג אוויר דחופה",
            line2: "יש להישמע להנחיות גורמי הביטחון וההצלה.",
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "התראת חירום",
            title: "אזהרת מזג אוויר חריג",
            subtitle: "תנאי מזג אוויר קשים דווחו באזורך. הישאר במרחב מוגן ועקוב אחר הודעות רשמיות.",
            infoCard: {
              label: "אזור מושפע",
              value: country,
            },
            buttonText: "צפה במרחבים מוגנים",
            subNote: "הודעת שידור רשמית לשלום הציבור",
          },
        },
        {
          id: "order",
          name: "סטטוס הזמנות",
          tagline: "עדכן. עקוב. מסור.",
          title: `מעקב הזמנות ומשלוחים בזמן אמת (${country})`,
          description: `עדכנו את הרוכשים בכל שלב: מיציאת המשלוח מהמחסן, מיקום השליח על המפה ועד אימות קוד OTP בעת קבלת החבילה ב-${country}.`,
          features: [
            "עדכונים שוטפים בזמן אמת על אריזה ויציאה למשלוח",
            "התראת הגעת השליח בליווי קישור למפה חיה",
            "קוד אימות OTP מאובטח למסירה בטוחה של החבילה",
          ],
          customerStatus: "יצא להפצה",
          notification: {
            header: "עדכון סטטוס הזמנה",
            line1: "הזמנה #IN849201 נשלחה",
            line2: `החבילה שלך תגיע היום לכתובת ב-${country}.`,
            time: "10:24",
          },
          phoneScreen: {
            backTitle: "מעקב משלוח",
            title: "החבילה שלך בדרך אליך",
            subtitle: "השליח עושה את דרכו כעת לכתובתך למסירת המשלוח.",
            infoCard: {
              label: "קוד מסירה (OTP)",
              value: "8492",
            },
            buttonText: "מעקב על המפה",
            subNote: "מסירה ללא מגע מופעלת",
          },
        },
      ],
    },
    industryExpertise: {
      badge: isGlobal ? "מומחיות לפי ענפים" : `מומחיות מגזרית - ${country.toUpperCase()}`,
      titleLine1: "פתרונות טלקום שפותחו במיוחד",
      titleLine2: isGlobal ? "עבור כל ענף במשק" : `עבור חברות ב-${country}`,
      description: isGlobal
        ? "בנו מעורבות עמוקה עם לקוחותיכם באמצעות שירותי קול, SMS וערוצים דיגיטליים אחודים ברמת האמינות הגבוהה ביותר."
        : `תשתית העומדת במלואה ברגולציית התקשורת המקומית, חוקי הגנת הפרטיות והרגלי הצרכנים ב-${country}.`,
      industries: [
        {
          id: "banking",
          name: "בנקאות ופיננסים",
          title: `בנקאות ופינטק ב-${country}`,
          description: `הודעות SMS תפעוליות מאובטחות, עמידה קפדנית ברגולציה ואימות עסקאות בזמן אמת (${country}).`,
        },
        {
          id: "healthcare",
          name: "בריאות ומרפאות",
          title: `בתי חולים ומרכזים רפואיים ב-${country}`,
          description: `תזכורות לתורים, הודעות על תוצאات בדיקות ותקשורת לרפואה מרחוק ב-${country}.`,
        },
        {
          id: "ecommerce",
          name: "מסחר אלקטרוני וקמעונאות",
          title: `איקומרס וקמעונאות ב-${country}`,
          description: `מעקב אחר משלוחים, הודעות על מבצעי בזק ושירות לקוחות רב-ערוצי ב-${country}.`,
        },
        {
          id: "education",
          name: "חינוך ואוניברסיטאות",
          title: `מוסדות לימוד ואוניברסיטאות ב-${country}`,
          description: `הודעות קבלה, התראות חירום בקמפוס ותקשורת שוטפת עם הורים ותלמידים ב-${country}.`,
        },
        {
          id: "travel",
          name: "תיירות ומלונאות",
          title: `חברות תעופה ומלונות ב-${country}`,
          description: `עדכוני שערי עלייה למטוס, אישורי הזמנות חדרים ותמיכה לנוסעים 24/7 ב-${country}.`,
        },
      ],
    },
    connectWithUs: {
      badge: isGlobal ? "צור קשר" : `צור קשר ב-${country.toUpperCase()}`,
      titleLine1: "בואו נבנה יחד את חיבור",
      titleLine2: isGlobal ? "התקשורת הנכון עבורכם." : `הטלקום האופטימלי ב-${country}.`,
      description: isGlobal
        ? "באמצעות iNet Global Services, עסקים יכולים למנף פתרונות SMS וקול אמינים כדי לשפר את מעורבות הלקוחות, להעמיק את האבטחה ולייעל את הפעילות. אנו מספקים מהירות, יציבות וביצועים ללא פשרות."
        : `שתפו פעולה עם iNet Global לקבלת מסלולי SMS ישירים, קול באיכות צלולה ועמידה מלאה בדרישות החוק ב-${country}. פנו לצוות הארגוני שלנו לבדיקה חינם ולהצעת מחיר מותאמת.`,
    },
    footer: {
      description: isGlobal
        ? "תשתית תקשורת גלובלית לארגונים הדורשים אמינות מוחלטת בשירותי קול, הודעות וקישוריות אומניצ'אנל."
        : `תשתית ברמת ספק המספקת שירותי קול, SMS, מספרי DID וירטואליים וממשקי API רב-ערוציים ב-${country} ובעולם.`,
      email: isGlobal ? "hello@inetglobal.com" : `${country.toLowerCase().replace(/\s+/g, "")}@inetglobal.com`,
      phone: "+1 800 123 4567",
      address: {
        line1: isGlobal ? "123 Innovation Drive," : `Enterprise Business Center,`,
        line2: isGlobal ? "San Francisco, CA 94105," : `Financial Center,`,
        line3: isGlobal ? "ארצות הברית" : country,
      },
      copyright: `@2026 iNet Global Services (${country}). כל הזכויות שמורות.`,
    },
  }),
};
