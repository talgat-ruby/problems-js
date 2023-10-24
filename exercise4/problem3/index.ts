// Update it as much as you want, just don't change the name
export class Circle {
    constructor(private radius: number) {}
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Update it as much as you want, just don't change the name
  export class Rectangle {
    constructor(private width: number, private height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  // Update it as much as you want, just don't change the name
  export function sumOfAllAreas(...shapes: { getArea: () => number }[]): number {
    return shapes.reduce((total, shape) => total + shape.getArea(), 0);
  }