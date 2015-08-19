/**
 * Multiplication operation
 *
 * @param left
 * @param right
 * @constructor
 */
function OperationMul(left, right) {
  calc.Operation.call(this, left, right);
}

OperationMul.prototype = Object.create(Operation.prototype);

OperationMul.prototype.constructor = OperationMul;

OperationMul.prototype.calculate = function() {
  return this.left_operand * this.right_operand;
};

calc.OperationMul = OperationMul;
