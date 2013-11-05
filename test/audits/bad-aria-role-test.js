module("BadAriaRole");

test("No elements === no problems.", function() {
  // Setup fixture
  var fixture = document.getElementById('qunit-fixture');
  deepEqual(
    axs.AuditRules.getRule('badAriaRole').run({ scope: fixture }),
    new axs.AuditResult(axs.constants.AuditResult.NA)
  );
});

test("No roles === no problems.", function() {
  // Setup fixture
  var fixture = document.getElementById('qunit-fixture');
  for (var i = 0; i < 10; i++)
    fixture.appendChild(document.createElement('div'));

  deepEqual(
    axs.AuditRules.getRule('badAriaRole').run({ scope: fixture }),
    new axs.AuditResult(axs.constants.AuditResult.NA)
  );
});

test("Good role === no problems.", function() {
  // Setup fixture
  var fixture = document.getElementById('qunit-fixture');
  for (r in axs.constants.ARIA_ROLES) {
    if (axs.constants.ARIA_ROLES.hasOwnProperty(r)) {
      var div = document.createElement('div');
      div.setAttribute('role', r);
      fixture.appendChild(div);
    }
  }

  var expectedResult = new axs.AuditResult(axs.constants.AuditResult.PASS);
  expectedResult.elements = [];
  deepEqual(
    axs.AuditRules.getRule('badAriaRole').run({ scope: fixture }),
    expectedResult
  );
});

test("Bad role == problem", function() {
  // Setup fixture
  var fixture = document.getElementById('qunit-fixture');
  var div = document.createElement('div');
  div.setAttribute('role', 'not-an-aria-role');
  fixture.appendChild(div);

  var expectedResult = new axs.AuditResult(axs.constants.AuditResult.FAIL);
  expectedResult.elements = [div];

  deepEqual(
    axs.AuditRules.getRule('badAriaRole').run({ scope: fixture }),
    expectedResult
  );

});
