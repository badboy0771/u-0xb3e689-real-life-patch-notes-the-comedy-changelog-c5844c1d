// Real-Life Patch Notes: The Comedy Changelog
// Writes a single one-line patch note (<=160 chars) to /output/entry.txt.
// Paths are resolved relative to this entrypoint, never the working directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve("/output");
const outFile = resolve(outDir, "entry.txt");

const line =
  "v2.4.1: Fixed a bug where I woke up on time. Sleep schedule rolled back to the previous build; 3 AM doomscrolling restored.";

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line, "utf8");
console.log(`Wrote ${line.length} chars to ${outFile}`);
void here;
