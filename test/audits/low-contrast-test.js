module("LowContrast");

test("No text = no relevant elements", function() {
  var fixture = document.getElementById('qunit-fixture');
  var div = document.createElement('div');
  div.style.backgroundColor = 'white';
  div.style.color = 'white';
  fixture.appendChild(div);
  deepEqual(
    axs.AuditRules.getRule('lowContrastElements').run({ scope: fixture }),
    new axs.AuditResult(axs.constants.AuditResult.NA)
  );
});

test("Black on white = no problem", function() {
  var fixture = document.getElementById('qunit-fixture');
  var div = document.createElement('div');
  div.style.backgroundColor = 'white';
  div.style.color = 'black';
  div.textContent = 'Some text';
  fixture.appendChild(div);

  var expectedResult = new axs.AuditResult(axs.constants.AuditResult.PASS);
  expectedResult.elements = [];

  deepEqual(
    axs.AuditRules.getRule('lowContrastElements').run({ scope: fixture }),
    expectedResult
  );
});

test("Low contrast = fail", function() {
  var fixture = document.getElementById('qunit-fixture');
  var div = document.createElement('div');
  div.style.backgroundColor = 'white';
  div.style.color = '#aaa';  // Contrast ratio = 2.32
  div.textContent = 'Some text';
  fixture.appendChild(div);

  var expectedResult = new axs.AuditResult(axs.constants.AuditResult.FAIL);
  expectedResult.elements = [div];

  deepEqual(
    axs.AuditRules.getRule('lowContrastElements').run({ scope: fixture }),
    expectedResult
  );
});

test("Opacity is handled", function() {
  // Setup fixture
  var fixture = document.getElementById('qunit-fixture');
  var elementWithOpacity = document.createElement('div');
  elementWithOpacity.style.opacity = '0.4';
  elementWithOpacity.textContent = 'Some text';
  fixture.appendChild(elementWithOpacity);

  var expectedResult = new axs.AuditResult(axs.constants.AuditResult.FAIL);
  expectedResult.elements = [elementWithOpacity];

  deepEqual(
    axs.AuditRules.getRule('lowContrastElements').run({ scope: fixture }),
    expectedResult
  );
});

test("Uses tolerance value", function() {
  var fixture = document.getElementById('qunit-fixture');
  var div = document.createElement('div');
  div.style.backgroundColor = 'white';
  div.style.color = '#777'; // Contrast ratio = 4.48
  div.textContent = 'Some text';
  fixture.appendChild(div);

  var expectedResult = new axs.AuditResult(axs.constants.AuditResult.PASS);
  expectedResult.elements = [];

  deepEqual(
    axs.AuditRules.getRule('lowContrastElements').run({ scope: fixture }),
    expectedResult
  );
});
