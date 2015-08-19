/**
 * Subtraction operation
 *
 * @param left
 * @param right
 * @constructor
 */
function OperationSub(left, right) {
  calc.Operation.call(this, left, right);
}

OperationSub.prototype = Object.create(Operation.prototype);

OperationSub.prototype.constructor = OperationSub;

OperationSub.prototype.calculate = function() {
  return this.left_operand - this.right_operand;
};

calc.OperationSub = OperationSub;
