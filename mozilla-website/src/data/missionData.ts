import img1 from "src/assets/img-1.jpg";
import img2 from "src/assets/img-2.jpg";
import img3 from "src/assets/img-3.png";

export type Mission = {
  id: number;
  missionTitle: string;
  missionDescription: string;
  buttonText: string;
  image: string;
};

export const missions: Mission[] = [
  {
    id: 1,
    missionTitle: "Join us in shaping trustworthy AI",
    missionDescription:
      "Mozilla’s work with AI isn’t just a new thing—we’ve spent years funding, building and advocating for AI that’s open, fair and developed responsibly. Our focus is on creating AI that serves the people, prioritizes transparency and supports the public good, not corporate agendas.",
    buttonText: "Read more",
    image: img1,
  },
  {
    id: 2,
    missionTitle: "So, what is Mozilla?",
    missionDescription:
      "At its core, Mozilla is an activist organization led by the Mozilla Foundation that makes change in the world through a variety of ventures including Mozilla Corporation, MZLA, Mozilla Ventures and Mozilla AI. How are we different? Because we’re mission-driven, it means we have the freedom to make all of our decisions based on what’s best for the internet and for everyone online, not based on the demands of shareholders — we don’t actually have any of those.",
    buttonText: "Learn about the Mozilla Foundation",
    image: img2,
  },
  {
    id: 3,
    missionTitle: "Join the fight for a healthy internet",
    missionDescription:
      "Your voice. Your code. Your ideas. There are literally thousands of ways you can contribute to Mozilla.",
    buttonText: "Volunteer with Mozilla",
    image: img3,
  },
];
