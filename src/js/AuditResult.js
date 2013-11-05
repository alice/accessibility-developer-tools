// Copyright 2013 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.require('axs.constants');

goog.provide('axs.AuditResult');

/**
 * Results for one run of one audit rule.
 * @constructor
 * @param {axs.constants.AuditResult} result
 */
axs.AuditResult = function(result) {
  /**
   * @type {axs.constants.AuditResult}
   * @export
   */
  this.result = result;
}
goog.exportSymbol('axs.AuditResult', axs.AuditResult);

/**
 * Whether the audit stopped before testing all of the relevant elements, as a
 * result of hitting the maximum number of results.
 * @type {boolean}
 * @export
 */
axs.AuditResult.prototype.resultsTruncated = false;

/**
 * The elements for which this audit rule failed, if any;
 * @type {Array.<Element>}
 * @export
 */
axs.AuditResult.prototype.elements;

/**
 * Data for the rule associated with this AuditResult.
 * @type {?Object}
 * @export
 */
axs.AuditResult.prototype.rule = null;
