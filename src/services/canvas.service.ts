/* eslint-disable implicit-arrow-linebreak */
export interface Input {
  x: number;
  y: number;
}
export interface Cordinates {
  from: Input;
  to: Input;
}
export type PoligonType = 'triangle' | 'cuadrado' | '';
export const options: PoligonType[] = ['triangle', 'cuadrado'];

class CanvasService {
  cordinates: Cordinates[];

  radio = 100;

  center: Input = { x: 200, y: 200 };

  numberOfLines: number;

  constructor() {
    this.cordinates = [];
    this.numberOfLines = Math.floor(Math.random() * (50 - 3)) + 3;
  }

  generatePoligon(): Cordinates[] {
    const side = (line: number) => (line * 2 * Math.PI) / this.numberOfLines;
    const cos = (line: number) => Math.cos(side(line));
    const sen = (line: number) => Math.sin(side(line));

    const cordinates: Input[] = [];

    for (let i = 0; i <= this.numberOfLines; i += 1) {
      if (i === 0) {
        cordinates.push({
          x: this.center.x + this.radio * Math.cos(0),
          y: this.center.y + this.radio * Math.sin(0),
        });
      } else {
        cordinates.push({
          x: this.center.x + this.radio * cos(i),
          y: this.center.y + this.radio * sen(i),
        });
      }
    }

    return this.convertInputToCordinates(cordinates);
  }

  convertInputToCordinates(input: Input[]): Cordinates[] {
    this.cordinates = input
      .map(
        (cord, i) =>
          i !== input.length - 1 && {
            from: { x: cord.x, y: cord.y },
            to: { x: input[i + 1].x, y: input[i + 1].y },
          }
      )
      .filter((cord) => cord !== false) as Cordinates[];
    return this.cordinates;
  }
}

export default CanvasService;
