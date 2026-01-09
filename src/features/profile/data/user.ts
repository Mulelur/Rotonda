import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Rotonda",
  lastName: "Mulelu",
  displayName: "Rotonda",
  username: "mulelur",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "DevSecOps Engineer",
    "Open Source Contributor",
  ],
  address: "Lonehill, Johannesburg, South Africa",
  phoneNumber: "MDcxMjA1MTM1Mw==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "cm90b25kd2FtdWxlbHVAZ21haWwuY29t", // base64 encoded
  website: "https://mulelur.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Developer",
      company: "port443",
      website: "https://port443.co.za",
    },
  ],
  about: `
Hello, World! I am Rotonda — a Software Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

With 4+ years of experience, I specialize in building high-quality web and desktop applications using Next.js, React, TypeScript, Python, Rust, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

One of my key projects, [Draftcode.io](https://draftcode.io), enhances the Zalo experience on PC and Web, surpassing 80,000 downloads on [SourceForge](https://sourceforge.net/projects/zadark) and 15,000 active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) since 2022.

I'm also the creator of [weblinnk](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 221 stars on [GitHub](https://github.com/ncdai/react-wheel-picker) and was selected for **Vercel Open Source Program** summer 2025 cohort, receiving $3,600 in Vercel platform credits, an OSS Starter Pack, and priority community support to fuel its ongoing development.

Let's connect and collaborate!
  `,
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/weblinnk-project.appspot.com/o/Rotonde%20Photo.jpg?alt=media&token=02adc349-bbfc-4288-8021-302e0f4116e3",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1755355653",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  keywords: [],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
