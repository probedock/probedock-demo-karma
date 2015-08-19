/**
 * Addition operation
 *
 * @param left
 * @param right
 * @constructor
 */
function OperationAdd(left, right) {
  calc.Operation.call(this, left, right);
}

OperationAdd.prototype = Object.create(Operation.prototype);

OperationAdd.prototype.constructor = OperationAdd;

OperationAdd.prototype.calculate = function() {
  return this.left_operand + this.right_operand;
};

calc.OperationAdd = OperationAdd;
