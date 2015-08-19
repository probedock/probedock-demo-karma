/**
 * Division operation
 *
 * @param left
 * @param right
 * @constructor
 */
function OperationDiv(left, right) {
  calc.Operation.call(this, left, right);
}

OperationDiv.prototype = Object.create(Operation.prototype);

OperationDiv.prototype.constructor = OperationDiv;

OperationDiv.prototype.calculate = function() {
  if (this.right_operand === undefined || this.right_operand == 0) {
    throw new Error('Cannot divide by zero');
  }

  return this.left_operand / this.right_operand;
};

calc.OperationDiv = OperationDiv;
