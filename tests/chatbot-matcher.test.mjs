// Extracts the real FAQ array and matchFAQ function straight out of
// public/chatbot-demo.html (no reimplementation), so this test fails if the
// matching logic in the shipped file changes shape, not just if its output
// changes.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const chatbotPath = path.join(here, '..', 'public', 'chatbot-demo.html');
const html = readFileSync(chatbotPath, 'utf8');

const start = html.indexOf('var FAQ = [');
const end = html.indexOf('function showTyping');
if (start === -1 || end === -1) {
  throw new Error(
    'Could not locate the FAQ array / matchFAQ function in public/chatbot-demo.html. ' +
    'The extraction markers ("var FAQ = [" and "function showTyping") are gone or renamed; ' +
    'update this test\'s markers to match the current source.'
  );
}
const snippet = html.slice(start, end);

// document.getElementById calls appear in var declarations between FAQ and
// matchFAQ (launcher, chatWindow, etc.) but are never invoked before
// matchFAQ is extracted, so a no-op stub is enough to let the snippet
// execute outside a browser.
const domStub = 'var document = { getElementById: function () { return {}; } };\n';
const wrapped = domStub + snippet + '\nmodule.exports = { FAQ: FAQ, matchFAQ: matchFAQ, FALLBACK: FALLBACK };';

const mod = { exports: {} };
try {
  new Function('module', 'exports', wrapped)(mod, mod.exports);
} catch (err) {
  throw new Error(
    `Failed to execute the extracted chatbot-demo.html source: ${err.message}. ` +
    'The matching logic likely changed in a way this extraction can\'t follow; update the test.'
  );
}
const { FAQ, matchFAQ, FALLBACK } = mod.exports;
if (typeof matchFAQ !== 'function' || !Array.isArray(FAQ) || typeof FALLBACK !== 'string') {
  throw new Error('Extraction ran but FAQ, matchFAQ, or FALLBACK is missing or the wrong type.');
}

function replyFor(topic) {
  const item = FAQ.find(f => f.topic === topic);
  if (!item) throw new Error(`No FAQ topic named "${topic}" found in the extracted source.`);
  return item.reply;
}

// [input, expected topic name, or null for the fallback reply]
const cases = [
  // --- SEO ---
  ['seo', 'SEO'],
  ['what is seo', 'SEO'],
  ['SEO', 'SEO'],
  ['do you do search engine optimization', 'SEO'],
  ['can you help with search engines', 'SEO'],
  ['improve my search visibility', 'SEO'],
  ['improve my rankings', 'SEO'],
  ['rank on google', 'SEO'],
  ['google ranking', 'SEO'],
  ['show up on google', 'SEO'],
  ['get found on google', 'SEO'],
  ['how much does SEO cost', 'SEO'],

  // --- Pricing ---
  ['price', 'Pricing'],
  ['pricing', 'Pricing'],
  ['what is the cost', 'Pricing'],
  ['how much', 'Pricing'],
  ['how much does a chatbot cost', 'Pricing'],
  ['cost', 'Pricing'],
  ['what are your rates', 'Pricing'],
  ['rate', 'Pricing'],

  // --- Turnaround time ---
  ['turnaround', 'Turnaround time'],
  ['how long will it take', 'Turnaround time'],
  ['what is the delivery time', 'Turnaround time'],
  ['timeline', 'Turnaround time'],
  ['can you work fast', 'Turnaround time'],
  ['when can you start', 'Turnaround time'],

  // --- Tech stack ---
  ['what is react', 'Tech stack'],
  ['what is React for', 'Tech stack'],
  ['what is mongodb', 'Tech stack'],
  ['what does node do', 'Tech stack'],
  ['what is the tech stack', 'Tech stack'],
  ['what technology do you use', 'Tech stack'],
  ['what language is it built with', 'Tech stack'],
  ['what is built with', 'Tech stack'],

  // --- AI chatbots ---
  ['chatbot', 'AI chatbots'],
  ['do you build bots', 'AI chatbots'],
  ['faq bot', 'AI chatbots'],
  ['can I get an assistant', 'AI chatbots'],

  // --- Custom projects ---
  ['can you migrate my squarespace site', 'Custom projects'],
  ['can you do a wix migration', 'Custom projects'],
  ['do you work with wordpress', 'Custom projects'],
  ['can you build an online store', 'Custom projects'],
  ['do you do ecommerce', 'Custom projects'],
  ['can you help with hosting', 'Custom projects'],
  ['can you design a logo', 'Custom projects'],
  ['do you do automation', 'Custom projects'],
  ['can you build an ai agent', 'Custom projects'],

  // --- Maintenance ---
  ['do you offer maintenance', 'Maintenance'],
  ['is support included', 'Maintenance'],
  ['ongoing updates', 'Maintenance'],
  ['what happens after launch', 'Maintenance'],

  // --- Getting started / conversational ---
  ['how do I get started', 'Getting started'],
  ['how do I start', 'Getting started'],
  ['I want to begin a project', 'Getting started'],
  ['how do I hire you', 'Getting started'],
  ['how do I order', 'Getting started'],
  ['how can I contact you', 'Getting started'],
  ['hi', null],
  ['hello there', null],
  ['thanks', null],

  // --- word-boundary collisions (must NOT false-positive) ---
  ['can you migrate my data', 'Custom projects'],
  ['estimate the project', null],
  ['operating system question', null],
  ['accelerate my timeline', 'Turnaround time'],
  ['costume design', null],
  ['boticelli painting', null],
  ['robot', null],
  ['starting a new business', 'Getting started'],

  // --- typos / odd casing / punctuation ---
  ['WHAT IS REACT??', 'Tech stack'],
  ['  pricing  ', 'Pricing'],
  ['How Much???', 'Pricing'],
  ['tech-stack?', 'Tech stack'],
  ["what's the turnaround", 'Turnaround time'],

  // --- services not in the FAQ (should fall back) ---
  ['do you do graphic design only', null],
  ['can you write my resume', null],
  ['do you offer tattoo design', null],
  ['can you fix my printer', null],

  // --- injection / XSS strings (must not throw, must not execute, treated as plain text) ---
  ['<script>alert(1)</script>', null],
  ['"><img src=x onerror=alert(1)>', null],
  ["'; DROP TABLE users; --", null],
  ['{{7*7}}', null],
  ['${alert(1)}', null],
];

test('chatbot matching battery', async (t) => {
  for (const [input, expectedTopic] of cases) {
    await t.test(JSON.stringify(input), () => {
      const expected = expectedTopic ? replyFor(expectedTopic) : FALLBACK;
      const actual = matchFAQ(input);
      assert.equal(actual, expected);
    });
  }
});

test('battery covers all required categories', () => {
  assert.equal(cases.length, 82, 'case count changed; update this assertion deliberately if that was intended');
});
