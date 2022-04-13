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
  input: Input;

  cordinates: Cordinates[];

  constructor(input?: Input) {
    if (input !== undefined) {
      this.input = input;
    } else {
      this.input = { x: 100, y: 100 };
    }
    this.cordinates = [];
  }

  getTriangle(): Cordinates[] {
    const firstPoint = { x: this.input.x + 50, y: this.input.y + 60 };
    const secondPoint = { x: firstPoint.x + 50, y: firstPoint.y - 60 };
    this.cordinates = [
      { from: this.input, to: firstPoint },
      { from: firstPoint, to: secondPoint },
      { from: secondPoint, to: this.input },
    ];
    return this.cordinates;
  }

  getCuadrado(): Cordinates[] {
    const firstPoint = { x: this.input.x + 100, y: this.input.y };
    const secondPoint = { x: firstPoint.x, y: firstPoint.y + 100 };
    const thirdPoint = { x: this.input.x, y: secondPoint.y };
    this.cordinates = [
      { from: this.input, to: firstPoint },
      { from: firstPoint, to: secondPoint },
      { from: secondPoint, to: thirdPoint },
      { from: thirdPoint, to: this.input },
    ];
    return this.cordinates;
  }

  getPoligon(name: PoligonType): Cordinates[] {
    if (name === 'triangle') return this.getTriangle();
    if (name === 'cuadrado') return this.getCuadrado();
    return [];
  }
}

export default CanvasService;
