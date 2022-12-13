import { ITransformer } from './hero-interface';

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
  id: number;
  name: string;
  photo: string;
  wings: number;
  wheels: number;
  clan: string;

  constructor(id: number, name: string, wings: number, wheels: number, clan: string, photo: string = '') {
    this.id=id;
    this.name=name;
    this.photo=photo;
    this.wings=wings;
    this.wheels=wheels;
    this.clan=clan;  
  }
}
