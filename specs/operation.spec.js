'use strict';

describe('Operation @probedock(contributor=laurent.prevost@probedock.io ticket=feature-1 ticket=feature-2 ticket=feature-3 ticket=feature-4 tag=base)', function () {
  it ('should be possible to create a new operation with two numbers @probedock(tag=constructor)', function() {
    var op = new calc.Operation(1, 2);

    expect(op.left_operand).toEqual(1);
    expect(op.right_operand).toEqual(2);
    expect(op.left_operation).toBeUndefined();
    expect(op.right_operation).toBeUndefined();
  });

  it ('should be possible to create a new operation with left number and right operation @probedock(tag=constructor)', function() {
    var op = new calc.Operation(1, new calc.Operation(1, 2));

    expect(op.left_operand).toEqual(1);
    expect(op.right_operand).toBeUndefined();
    expect(op.left_operation).toBeUndefined();
    expect(op.right_operation).not.toBeNull();
  });

  it ('should be possible to create a new operation with right number and left operation @probedock(tag=constructor)', function() {
    var op = new calc.Operation(new calc.Operation(1, 2), 1);

    expect(op.left_operand).toBeUndefined();
    expect(op.right_operand).toEqual(1);
    expect(op.left_operation).not.toBeNull();
    expect(op.right_operation).toBeUndefined();
  });

  it ('should be possible to create a new operation with two operations @probedock(tag=constructor)', function() {
    var op = new calc.Operation(new calc.Operation(1, 2), new calc.Operation(3, 4));

    expect(op.left_operand).toBeUndefined();
    expect(op.right_operand).toBeUndefined();
    expect(op.left_operation).not.toBeNull();
    expect(op.right_operation).not.toBeNull();
  });

  it ('should not be possible to call calculate on the "abstract" operation @probedock(tag=error)', function() {
    var op = new calc.Operation(1, 2);

    expect(function() { op.calculate(); }).toThrow(new Error('calculate is not yet implemented'));
  });

  it ('should not be possible to call process on the "abstract" operation @probedoc(tag=error)', function() {
    var op = new calc.Operation(1, 2);

    expect(function() { op.process(); }).toThrow(new Error('calculate is not yet implemented'));
  });
});
