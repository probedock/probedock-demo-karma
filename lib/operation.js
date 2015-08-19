window.calc = {};

/**
 * Define a generic operation with left and right operands
 *
 * @param left The left operand which can be an operation
 * @param right The right operand which can also be an operation
 * @constructor
 */
function Operation(left, right) {
  // Differentiate left operand from left operation
  if (left && typeof left === 'object') {
    this.left_operation = left;
  }
  else {
    this.left_operand = left;
  }

  // Differentiate right operand from right operation
  if (right && typeof right === 'object') {
    this.right_operation = right;
  }
  else {
    this.right_operand = right;
  }
}

/**
 * Calculate the result of the whole operation even if the operation is a composed one.
 */
Operation.prototype.process = function() {
  // Resolve the left part of the operation if necessary
  if (this.left_operation !== undefined) {
    this.left_operand = this.left_operation.process();
  }

  // Resolve the right part of the operation if necessary
  if (this.right_operation !== undefined) {
    this.right_operand = this.right_operation.process();
  }

  // Do the internal calculation
  return this.calculate();
};

/**
 * This is the internal calculation. This must be implemented by each operation.
 */
Operation.prototype.calculate = function() {
  throw new Error('calculate is not yet implemented');
};

calc.Operation = Operation;
