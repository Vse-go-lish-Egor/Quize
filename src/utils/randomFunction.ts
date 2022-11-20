import {Quotes} from '../API';

export function getRandomAnswers(
  data: Quotes[],
  numberOfQuestion: number,
): Quotes[] {
  if (data.length) {
    const randAnswers = new Set<Quotes>();
    randAnswers.add(data[numberOfQuestion]);
    while (randAnswers.size < 4) {
      const rand = Math.floor(Math.random() * data.length);
      randAnswers.add(data[rand]);
    }
    const randArr = [...randAnswers];
    return randArr.sort(() => Math.random() - 0.5);
  }
  return [];
}
