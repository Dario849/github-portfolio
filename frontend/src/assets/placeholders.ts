import hobbyritual from "./placeholders/hobby-ritual.png";
import hobbyOrbit from "./placeholders/hobby-orbit.png";
import hobbyNotes from "./placeholders/hobby-notes.png";
import projectInterface from "./placeholders/project-interface.png";
import projectLaunch from "./placeholders/project-launch.png";
import AppGro01 from "./placeholders/appGro02.png";
import qrPassport01 from "./placeholders/qrPassport01.png";
import androidMic01 from "./placeholders/androidMic01.jpeg";

export const hobbyPlaceholderImages = [hobbyNotes, hobbyritual, hobbyOrbit] as const;
export const projectPlaceholderImages = [AppGro01, qrPassport01, androidMic01] as const;
export const baristaPlaceholderImages = [
  hobbyNotes,
  hobbyritual,
  hobbyOrbit,
  qrPassport01,
  androidMic01,
] as const;
