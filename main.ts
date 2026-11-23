// One Word From Grandma — make.fun bounty u-0xkianno-one-word-from-grandma-f04bed16
//
// The entry is exactly one word: the word grandma would text about AI.
// Grandma heard everyone talking about ChatGPT, so she texts about it too —
// only she types it the way she always types it: one letter off.
//
//   ChatGBT
//
// A real typo she would actually make: the flagship AI product, mis-typed
// with the warm, slightly baffled confidence of a grandma texting her
// grandchild. Funny in one word, tied straight to AI, and instantly
// readable as the slip it is. No sentence, no explanation, no punctuation
// tricks — just the word, as she sent it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "ChatGBT";
const OUT = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

// The gate only accepts 1–30 characters and a single word, so fail loudly
// instead of shipping a bad entry if the word is ever edited into
// something that is not one word.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`entry word must be one word of 1-30 characters, got: ${JSON.stringify(WORD)}`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, "utf8");
