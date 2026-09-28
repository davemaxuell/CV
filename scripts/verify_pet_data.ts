import assert from 'node:assert/strict';
import { avatarDialogues } from '../src/data/avatarDialogues';
import { experiences, projects, publications, educationList, recognitions, languageSkills, skillCategories, techStackPills } from '../src/data/portfolioData';
import { createDialogueDeck } from '../src/components/usePetDialogue';

const expected = [
  'profile', 'about', 'skills', 'tech-stack', 'experience', 'projects', 'publications', 'education', 'recognition', 'links', 'contact',
  ...experiences.map(item => `experience:${item.id}`),
  ...projects.map(item => `project:${item.id}`),
  ...publications.map(item => `publication:${item.id}`),
  ...educationList.map(item => `education:${item.id}`),
  ...[...recognitions, ...languageSkills].map(item => `recognition:${item.id}`),
  ...skillCategories.map(item => `skill:${item.id || item.title}`),
  ...techStackPills.map(item => `tech:${item.name}`),
];
assert.deepEqual(Object.keys(avatarDialogues).sort(), expected.sort(), 'Every portfolio topic needs an authored dialogue bank');

for (const [key, { label, lines }] of Object.entries(avatarDialogues)) {
  assert.ok(label.trim(), `${key}: missing topic label`);
  assert.ok(lines.length >= 3, `${key}: needs at least three variants`);
  assert.equal(new Set(lines).size, lines.length, `${key}: duplicate lines`);
  const draw = createDialogueDeck(() => 0);
  let previous: string | undefined;
  for (let cycle = 0; cycle < 4; cycle++) {
    const seen = new Set<string>();
    for (let i = 0; i < lines.length; i++) {
      const next = draw(key, lines)!;
      assert.ok(lines.includes(next), `${key}: selected unrelated text`);
      assert.notEqual(next, previous, `${key}: repeated at a shuffle boundary`);
      seen.add(next);
      previous = next;
      draw('another-topic', ['unrelated A', 'unrelated B']);
    }
    assert.equal(seen.size, lines.length, `${key}: did not exhaust variants before repeating`);
  }
}
const draw = createDialogueDeck();
assert.equal(draw('empty', []), undefined);
assert.equal(draw('single', ['Only line']), 'Only line');
assert.equal(draw('single', ['Only line']), 'Only line');
console.log(`Verified ${expected.length} dialogue topics, coverage, variety, and independent shuffle cycles.`);
