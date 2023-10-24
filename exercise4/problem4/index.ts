// Update it as much as you want, just don't change the name
export class Circle {
    constructor(private radius: number) {}
  }
  
  // Update it as much as you want, just don't change the name
  export class Rectangle {
    constructor(private width: number, private height: number) {}
  }
  
  // Update it as much as you want, just don't change the name
  export function sumOfAllAreas(...shapes: (Circle | Rectangle)[]): number {
    function calculateCircleArea(circle: Circle): number {
      return Math.PI * circle.radius ** 2;
    }
  
    function calculateRectangleArea(rectangle: Rectangle): number {
      return rectangle.width * rectangle.height;
    }
  
    function calculateArea(shape: Circle | Rectangle): number {
      if (shape instanceof Circle) {
        return calculateCircleArea(shape);
      } else if (shape instanceof Rectangle) {
        return calculateRectangleArea(shape);
      }
      return 0;
    }
  
    return shapes.reduce((total, shape) => total + calculateArea(shape), 0);
  }