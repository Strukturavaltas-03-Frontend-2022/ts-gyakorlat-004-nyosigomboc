// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero"; './hero';
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  new HumanHero(1, 'Rincewind', 'M', 40, 50),
  new HumanHero(2, 'Twoflowers', 'M', 44, 60),
  new HumanHero(3, 'Conina', 'F', 19, 90)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  new TransformerHero(1, 'Luggage', 0, 80, 'Twoflowers'),
  new TransformerHero(2, 'Airplane', 2, 6, 'neutral'),
  new TransformerHero(3, 'Dragon', 2, 0, 'neutral')
];
