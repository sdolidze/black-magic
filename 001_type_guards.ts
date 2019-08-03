interface Circle {
  type: 'cirlce';
  radius: number;
}

interface Rectangle {
  type: 'rectangle';
  height: number;
  width: number;
}

export type Shape = Circle | Rectangle;

// -------------------------------------

export function isCircle(shape: Shape): boolean {
  return shape.type === 'cirlce';
}

export function isRectangle(shape: Shape): boolean {
  return shape.type === 'rectangle';
}

function printShape(shape: Shape) {
  if (isRectangle(shape)) {
    // Since compiler does not know that shape is a rectangle
    // width and height properties cannot be used.
    // WARNING! This code does not compile.
    console.log(shape.width, shape.height);
  } else if (isCircle(shape)) {
    // Since compiler does not know that shape is a circle
    // radius propery cannot be used.
    // WARNING! This code does not compile.
    console.log(shape.radius);
  }
}

// -------------------------------------

export function isCircleBM(shape: Shape): shape is Circle {
  return shape.type === 'cirlce';
}

export function isRectangleBM(shape: Shape): shape is Rectangle {
  return shape.type === 'rectangle';
}

function printShapeBM(shape: Shape) {
  if (isRectangleBM(shape)) {
    // Compiler knows that shape is rectangle at this point
    // thanks to type guard `shape is Rectangle`.
    // Properties width and height can be used freely.
    // This code compiles and works as expected.
    console.log(shape.width, shape.height);
  } else if (isCircleBM(shape)) {
    // Compiler knows that shape is rectangle at this point
    // thanks to type guard `shape is Circle`.
    // Property radius can be used freely.
    // This code compiles and works as expected.
    console.log(shape.radius);
  }
}
