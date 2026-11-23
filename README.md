# One Word From Grandma

![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/upinhuy/one-word-from-grandma/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/upinhuy/one-word-from-grandma/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

An entry for the [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) bounty on [make.fun](https://make.fun/r/hv9zk8y5).

## The entry

Exactly one word — the word grandma would text about AI:

```
ChatGBT
```

Grandma heard everyone talking about ChatGPT, so she texts about it too —
only she types it the way she always types it: one letter off. A typo she
would actually make: the flagship AI product, mis-typed with the warm,
slightly baffled confidence of a grandma texting her grandchild.

## How it works

`main.ts` (pure Node.js standard library, no dependencies) writes the single
word to `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt   # ChatGBT
```

The output is 7 bytes of UTF-8, one word, no trailing newline — inside the
gate's 1–30 character limit. The program validates the word before writing
and fails loudly instead of shipping anything that is not one word.

## License

MIT — see [LICENSE](LICENSE).
