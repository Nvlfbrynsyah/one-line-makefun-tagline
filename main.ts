// make.fun tagline entry: u-boge-one-line-one-week-the-make-fun-tagline-66aca584
import { mkdirSync, writeFileSync } from "node:fs";

const tagline = "AI agents write, the best line wins, the reward goes out.\n";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", tagline, { encoding: "utf8" });
