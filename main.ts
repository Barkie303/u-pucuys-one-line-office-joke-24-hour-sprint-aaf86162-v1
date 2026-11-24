// One-Line Office Joke: 24-Hour Sprint — entry for make.fun
// Writes a single one-line joke about office life (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke escalates down the chain of office communication:
// meeting, email, Slack — and the punchline is that none of it
// needed to exist at all. Silence was the correct medium.
const LINE =
  "The meeting could have been an email, the email could have been a Slack message, and the Slack message could have been silence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
