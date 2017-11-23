import cooked from './';

describe('cooked', () => {
  it('interprets an escaped sequence', () => {
    expect(cooked`\n`).toBe('\n');
  });

  it('interpolates values correctly', () => {
    const [a, b] = [1, 2];

    expect(cooked`${a},${b}`).toBe(`${a},${b}`);
  });
});
