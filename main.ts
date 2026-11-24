import { mkdirSync, writeFileSync } from "node:fs";

// Weirdest Job Title: Blind Judge Showdown — one job title, 60 chars max.
// Entry: a real-sounding credentialed job with one hilariously specific
// twist — a certified specialist whose whole profession is reuniting
// left socks with their missing partners. Short, specific, pictureable.
const title = "Certified Left Sock Pairing Specialist";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title, "utf8");
