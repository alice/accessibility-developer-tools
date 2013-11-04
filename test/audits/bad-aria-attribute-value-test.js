module('BadAriaAttributeValue');

test('Empty idref value is ok', function() {
    var fixture = document.getElementById('qunit-fixture');
    var div = document.createElement('div');
    fixture.appendChild(div);
    div.setAttribute('aria-activedescendant', '');

    var expectedResult = new axs.AuditResult(axs.constants.AuditResult.PASS);
    expectedResult.elements = [];

    deepEqual(
      axs.AuditRules.getRule('badAriaAttributeValue').run({ scope: fixture }),
      expectedResult
    );
});

test('Bad number value doesn\'t cause crash', function() {
    var fixture = document.getElementById('qunit-fixture');
    var div = document.createElement('div');
    fixture.appendChild(div);
    div.setAttribute('aria-valuenow', 'foo');

    var expectedResult = new axs.AuditResult(axs.constants.AuditResult.FAIL);
    expectedResult.elements = [div];

    deepEqual(
      axs.AuditRules.getRule('badAriaAttributeValue').run({ scope: fixture }),
      expectedResult
    );
});

test('Good number value is good', function() {
    var fixture = document.getElementById('qunit-fixture');
    var div = document.createElement('div');
    fixture.appendChild(div);
    div.setAttribute('aria-valuenow', '10');

    var expectedResult = new axs.AuditResult(axs.constants.AuditResult.PASS);
    expectedResult.elements = [];

    deepEqual(
      axs.AuditRules.getRule('badAriaAttributeValue').run({ scope: fixture }),
      expectedResult
    );
});
