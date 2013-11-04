// Copyright 2012 Google Inc.
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

goog.provide('axs.constants');
goog.provide('axs.constants.Severity');
goog.provide('axs.constants.AuditResult');

/** @type {Object.<string, Object>} */
axs.constants.ARIA_ROLES = {
    "alert": {
        "namefrom": [ "author" ],
        "parent": [ "region" ]
    },
    "alertdialog": {
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "alert", "dialog" ]
    },
    "application": {
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "landmark" ]
    },
    "article": {
        "namefrom": [ "author" ],
        "parent": [ "document", "region" ]
    },
    "banner": {
        "namefrom": [ "author" ],
        "parent": [ "landmark" ]
    },
    "button": {
        "childpresentational": true,
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "command" ],
        "properties": [ "aria-expanded", "aria-pressed" ]
    },
    "checkbox": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "input" ],
        "requiredProperties": [ "aria-checked" ],
        "properties": [ "aria-checked" ]
    },
    "columnheader": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "gridcell", "sectionhead", "widget" ],
        "properties": [ "aria-sort" ]
    },
    "combobox": {
        "mustcontain": [ "listbox", "textbox" ],
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "select" ],
        "requiredProperties": [ "aria-expanded" ],
        "properties": [ "aria-expanded", "aria-autocomplete", "aria-required" ]
    },
    "command": {
        "abstract": true,
        "namefrom": [ "author" ],
        "parent": [ "widget" ]
    },
    "complementary": {
        "namefrom": [ "author" ],
        "parent": [ "landmark" ]
    },
    "composite": {
        "abstract": true,
        "childpresentational": false,
        "namefrom": [ "author" ],
        "parent": [ "widget" ],
        "properties": [ "aria-activedescendant" ]
    },
    "contentinfo": {
        "namefrom": [ "author" ],
        "parent": [ "landmark" ]
    },
    "definition": {
        "namefrom": [ "author" ],
        "parent": [ "section" ]
    },
    "dialog": {
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "window" ]
    },
    "directory": {
        "namefrom": [ "contents", "author" ],
        "parent": [ "list" ]
    },
    "document": {
        "namefrom": [ " author" ],
        "namerequired": true,
        "parent": [ "structure" ],
        "properties": [ "aria-expanded" ]
    },
    "form": {
        "namefrom": [ "author" ],
        "parent": [ "landmark" ]
    },
    "grid": {
        "mustcontain": [ "row", "rowgroup" ],
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "composite", "region" ],
        "properties": [ "aria-level", "aria-multiselectable", "aria-readonly" ]
    },
    "gridcell": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "section", "widget" ],
        "properties": [ "aria-readonly", "aria-required", "aria-selected" ]
    },
    "group": {
        "namefrom": [ " author" ],
        "parent": [ "section" ],
        "properties": [ "aria-activedescendant" ]
    },
    "heading": {
        "namerequired": true,
        "parent": [ "sectionhead" ],
        "properties": [ "aria-level" ]
    },
    "img": {
        "childpresentational": true,
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "section" ]
    },
    "input": {
        "abstract": true,
        "namefrom": [ "author" ],
        "parent": [ "widget" ]
    },
    "landmark": {
        "abstract": true,
        "namefrom": [ "contents", "author" ],
        "namerequired": false,
        "parent": [ "region" ]
    },
    "link": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "command" ],
        "properties": [ "aria-expanded" ]
    },
    "list": {
        "mustcontain": [ "group", "listitem" ],
        "namefrom": [ "author" ],
        "parent": [ "region" ]
    },
    "listbox": {
        "mustcontain": [ "option" ],
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "list", "select" ],
        "properties": [ "aria-multiselectable", "aria-required" ]
    },
    "listitem": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "section" ],
        "properties": [ "aria-level", "aria-posinset", "aria-setsize" ]
    },
    "log": {
        "namefrom": [ " author" ],
        "namerequired": true,
        "parent": [ "region" ]
    },
    "main": {
        "namefrom": [ "author" ],
        "parent": [ "landmark" ]
    },
    "marquee": {
        "namerequired": true,
        "parent": [ "section" ]
    },
    "math": {
        "childpresentational": true,
        "namefrom": [ "author" ],
        "parent": [ "section" ]
    },
    "menu": {
        "mustcontain": [
            "group",
            "menuitemradio",
            "menuitem",
            "menuitemcheckbox"
        ],
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "list", "select" ]
    },
    "menubar": {
        "namefrom": [ "author" ],
        "parent": [ "menu" ]
    },
    "menuitem": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "command" ]
    },
    "menuitemcheckbox": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "checkbox", "menuitem" ]
    },
    "menuitemradio": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "menuitemcheckbox", "radio" ]
    },
    "navigation": {
        "namefrom": [ "author" ],
        "parent": [ "landmark" ]
    },
    "note": {
        "namefrom": [ "author" ],
        "parent": [ "section" ]
    },
    "option": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "input" ],
        "properties": [
            "aria-checked",
            "aria-posinset",
            "aria-selected",
            "aria-setsize"
        ]
    },
    "presentation": {
        "parent": [ "structure" ]
    },
    "progressbar": {
        "childpresentational": true,
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "range" ]
    },
    "radio": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "checkbox", "option" ]
    },
    "radiogroup": {
        "mustcontain": [ "radio" ],
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "select" ],
        "properties": [ "aria-required" ]
    },
    "range": {
        "abstract": true,
        "namefrom": [ "author" ],
        "parent": [ "widget" ],
        "properties": [
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow",
            "aria-valuetext"
        ]
    },
    "region": {
        "namefrom": [ " author" ],
        "parent": [ "section" ]
    },
    "roletype": {
        "abstract": true,
        "properties": [
            "aria-atomic",
            "aria-busy",
            "aria-controls",
            "aria-describedby",
            "aria-disabled",
            "aria-dropeffect",
            "aria-flowto",
            "aria-grabbed",
            "aria-haspopup",
            "aria-hidden",
            "aria-invalid",
            "aria-label",
            "aria-labelledby",
            "aria-live",
            "aria-owns",
            "aria-relevant"
        ]
    },
    "row": {
        "mustcontain": [ "columnheader", "gridcell", "rowheader" ],
        "namefrom": [ "contents", "author" ],
        "parent": [ "group", "widget" ],
        "properties": [ "aria-level", "aria-selected" ]
    },
    "rowgroup": {
        "mustcontain": [ "row" ],
        "namefrom": [ "contents", "author" ],
        "parent": [ "group" ]
    },
    "rowheader": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "gridcell", "sectionhead", "widget" ],
        "properties": [ "aria-sort" ]
    },
    "search": {
        "namefrom": [ "author" ],
        "parent": [ "landmark" ]
    },
    "section": {
        "abstract": true,
        "namefrom": [ "contents", "author" ],
        "parent": [ "structure" ],
        "properties": [ "aria-expanded" ]
    },
    "sectionhead": {
        "abstract": true,
        "namefrom": [ "contents", "author" ],
        "parent": [ "structure" ],
        "properties": [ "aria-expanded" ]
    },
    "select": {
        "abstract": true,
        "namefrom": [ "author" ],
        "parent": [ "composite", "group", "input" ]
    },
    "separator": {
        "childpresentational": true,
        "namefrom": [ "author" ],
        "parent": [ "structure" ],
        "properties": [ "aria-expanded", "aria-orientation" ]
    },
    "scrollbar": {
        "childpresentational": true,
        "namefrom": [ "author" ],
        "namerequired": false,
        "parent": [ "input", "range" ],
        "requiredProperties": [
            "aria-controls",
            "aria-orientation",
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow"
        ],
        "properties": [
            "aria-controls",
            "aria-orientation",
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow"
        ]
    },
    "slider": {
        "childpresentational": true,
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "input", "range" ],
        "requiredProperties": [ "aria-valuemax", "aria-valuemin", "aria-valuenow" ],
        "properties": [
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow",
            "aria-orientation"
        ]
    },
    "spinbutton": {
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "input", "range" ],
        "requiredProperties": [ "aria-valuemax", "aria-valuemin", "aria-valuenow" ],
        "properties": [
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow",
            "aria-required"
        ]
    },
    "status": {
        "parent": [ "region" ]
    },
    "structure": {
        "abstract": true,
        "parent": [ "roletype" ]
    },
    "tab": {
        "namefrom": [ "contents", "author" ],
        "parent": [ "sectionhead", "widget" ],
        "properties": [ "aria-selected" ]
    },
    "tablist": {
        "mustcontain": [ "tab" ],
        "namefrom": [ "author" ],
        "parent": [ "composite", "directory" ],
        "properties": [ "aria-level" ]
    },
    "tabpanel": {
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "region" ]
    },
    "textbox": {
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "input" ],
        "properties": [
            "aria-activedescendant",
            "aria-autocomplete",
            "aria-multiline",
            "aria-readonly",
            "aria-required"
        ]
    },
    "timer": {
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "status" ]
    },
    "toolbar": {
        "namefrom": [ "author" ],
        "parent": [ "group" ]
    },
    "tooltip": {
        "namerequired": true,
        "parent": [ "section" ]
    },
    "tree": {
        "mustcontain": [ "group", "treeitem" ],
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "select" ],
        "properties": [ "aria-multiselectable", "aria-required" ]
    },
    "treegrid": {
        "mustcontain": [ "row" ],
        "namefrom": [ "author" ],
        "namerequired": true,
        "parent": [ "grid", "tree" ]
    },
    "treeitem": {
        "namefrom": [ "contents", "author" ],
        "namerequired": true,
        "parent": [ "listitem", "option" ]
    },
    "widget": {
        "abstract": true,
        "parent": [ "roletype" ]
    },
    "window": {
        "abstract": true,
        "namefrom": [ " author" ],
        "parent": [ "roletype" ],
        "properties": [ "aria-expanded" ]
    }
};
goog.exportSymbol('axs.constants.ARIA_ROLES', axs.constants.ARIA_ROLES);

axs.constants.WIDGET_ROLES = {};
goog.exportSymbol('axs.constants.WIDGET_ROLES', axs.constants.WIDGET_ROLES);

/**
 * Squashes the parent hierarchy on to role object.
 * @param {Object} role
 * @param {Object} set
 * @private
 */
axs.constants.addAllParentRolesToSet_ = function(role, set) {
  if (!role['parent'])
      return;
  var parents = role['parent'];
  for (var j = 0; j < parents.length; j++) {
    var parentRoleName = parents[j];
    set[parentRoleName] = true;
    axs.constants.addAllParentRolesToSet_(
        axs.constants.ARIA_ROLES[parentRoleName], set);
  }
}

/**
 * Adds all properties and requiredProperties from parent hierarchy.
 * @param {Object} role
 * @param {string} propertiesName
 * @param {Object} propertiesSet
 * @private
 */
axs.constants.addAllPropertiesToSet_ = function(role, propertiesName,
    propertiesSet) {
  var properties = role[propertiesName]
  if (properties) {
    for (var i = 0; i < properties.length; i++)
      propertiesSet[properties[i]] = true;
  }
  if (role['parent']) {
    var parents = role['parent'];
    for (var j = 0; j < parents.length; j++) {
      var parentRoleName = parents[j];
      axs.constants.addAllPropertiesToSet_(
          axs.constants.ARIA_ROLES[parentRoleName], propertiesName,
          propertiesSet);
    }
  }
}

// TODO make a AriaRole object etc.
for (var roleName in axs.constants.ARIA_ROLES) {
    var role = axs.constants.ARIA_ROLES[roleName];

    var propertiesSet = {};
    axs.constants.addAllPropertiesToSet_(role, 'properties', propertiesSet);
    role['propertiesSet'] = propertiesSet;

    var requiredPropertiesSet = {};
    axs.constants.addAllPropertiesToSet_(role, 'requiredProperties', requiredPropertiesSet);
    role['requiredPropertiesSet'] = requiredPropertiesSet;
    var parentRolesSet = {};
    axs.constants.addAllParentRolesToSet_(role, parentRolesSet);
    role['allParentRolesSet'] = parentRolesSet;
    if ('widget' in parentRolesSet)
        axs.constants.WIDGET_ROLES[roleName] = role;
}

// BEGIN ARIA_PROPERTIES_AUTOGENERATED
/** @type {Object.<string, Object>} */
axs.constants.ARIA_PROPERTIES = {
    "activedescendant": {
        "type": "property",
        "valueType": "idref"
    },
    "atomic": {
        "defaultValue": "false",
        "type": "property",
        "valueType": "boolean"
    },
    "autocomplete": {
        "defaultValue": "none",
        "type": "property",
        "valueType": "token",
        "values": [
            "inline",
            "list",
            "both",
            "none"
        ]
    },
    "busy": {
        "defaultValue": "false",
        "type": "state",
        "valueType": "boolean"
    },
    "checked": {
        "defaultValue": "undefined",
        "type": "state",
        "valueType": "token",
        "values": [
            "true",
            "false",
            "mixed",
            "undefined"
        ]
    },
    "controls": {
        "type": "property",
        "valueType": "idref_list"
    },
    "describedby": {
        "type": "property",
        "valueType": "idref_list"
    },
    "disabled": {
        "defaultValue": "false",
        "type": "state",
        "valueType": "boolean"
    },
    "dropeffect": {
        "defaultValue": "none",
        "type": "property",
        "valueType": "token_list",
        "values": [
            "copy",
            "move",
            "link",
            "execute",
            "popup",
            "none"
        ]
    },
    "expanded": {
        "defaultValue": "undefined",
        "type": "state",
        "valueType": "token",
        "values": [
            "true",
            "false",
            "undefined"
        ]
    },
    "flowto": {
        "type": "property",
        "valueType": "idref_list"
    },
    "grabbed": {
        "defaultValue": "undefined",
        "type": "state",
        "valueType": "token",
        "values": [
            "true",
            "false",
            "undefined"
        ]
    },
    "haspopup": {
        "defaultValue": "false",
        "type": "property",
        "valueType": "boolean"
    },
    "hidden": {
        "defaultValue": "false",
        "type": "state",
        "valueType": "boolean"
    },
    "invalid": {
        "defaultValue": "false",
        "type": "state",
        "valueType": "token",
        "values": [
            "grammar",
            "false",
            "spelling",
            "true"
        ]
    },
    "label": {
        "type": "property",
        "valueType": "string"
    },
    "labelledby": {
        "type": "property",
        "valueType": "idref_list"
    },
    "level": {
        "type": "property",
        "valueType": "integer"
    },
    "live": {
        "defaultValue": "off",
        "type": "property",
        "valueType": "token",
        "values": [
            "off",
            "polite",
            "assertive"
        ]
    },
    "multiline": {
        "defaultValue": "false",
        "type": "property",
        "valueType": "boolean"
    },
    "multiselectable": {
        "defaultValue": "false",
        "type": "property",
        "valueType": "boolean"
    },
    "orientation": {
        "defaultValue": "vertical",
        "type": "property",
        "valueType": "token",
        "values": [
            "horizontal",
            "vertical"
        ]
    },
    "owns": {
        "type": "property",
        "valueType": "idref_list"
    },
    "posinset": {
        "type": "property",
        "valueType": "integer"
    },
    "pressed": {
        "defaultValue": "undefined",
        "type": "state",
        "valueType": "token",
        "values": [
            "true",
            "false",
            "mixed",
            "undefined"
        ]
    },
    "readonly": {
        "defaultValue": "false",
        "type": "property",
        "valueType": "boolean"
    },
    "relevant": {
        "defaultValue": "additions text",
        "type": "property",
        "valueType": "token_list",
        "values": [
            "additions",
            "removals",
            "text",
            "all"
        ]
    },
    "required": {
        "defaultValue": "false",
        "type": "property",
        "valueType": "boolean"
    },
    "selected": {
        "defaultValue": "undefined",
        "type": "state",
        "valueType": "token",
        "values": [
            "true",
            "false",
            "undefined"
        ]
    },
    "setsize": {
        "type": "property",
        "valueType": "integer"
    },
    "sort": {
        "defaultValue": "none",
        "type": "property",
        "valueType": "token",
        "values": [
            "ascending",
            "descending",
            "none",
            "other"
        ]
    },
    "valuemax": {
        "type": "property",
        "valueType": "decimal"
    },
    "valuemin": {
        "type": "property",
        "valueType": "decimal"
    },
    "valuenow": {
        "type": "property",
        "valueType": "decimal"
    },
    "valuetext": {
        "type": "property",
        "valueType": "string"
    }
};
// END ARIA_PROPERTIES_AUTOGENERATED
goog.exportSymbol('axs.constants.ARIA_PROPERTIES',
                  axs.constants.ARIA_PROPERTIES);

/**
 * All of the states and properties which apply globally.
 */
axs.constants.GLOBAL_PROPERTIES = [
    "aria-atomic",
    "aria-busy",  // (state)
    "aria-controls",
    "aria-describedby",
    "aria-disabled",  // (state)
    "aria-dropeffect",
    "aria-flowto",
    "aria-grabbed",  // (state)
    "aria-haspopup",
    "aria-hidden",  // (state)
    "aria-invalid",  // (state)
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant"
];
goog.exportSymbol('axs.constants.GLOBAL_PROPERTIES',
                  axs.constants.GLOBAL_PROPERTIES)

/**
 * A constant indicating no role name.
 * @type {string}
 */
axs.constants.NO_ROLE_NAME = ' ';
goog.exportSymbol('axs.constants.NO_ROLE_NAME', axs.constants.NO_ROLE_NAME);

axs.constants.MIXED_VALUES = {
    "true": true,
    "false": true,
    "mixed": true
};
goog.exportSymbol('axs.constants.MIXED_VALUES', axs.constants.MIXED_VALUES);

(function() {
// pull values lists into sets
for (var propertyName in axs.constants.ARIA_PROPERTIES) {
    var propertyDetails = axs.constants.ARIA_PROPERTIES[propertyName];
    if (!propertyDetails['values'])
        continue;
    var valuesSet = {};
    for (var i = 0; i < propertyDetails['values'].length; i++)
        valuesSet[propertyDetails['values'][i]] = true;
    propertyDetails['valuesSet'] = valuesSet;
}
})();

/** @enum {string} */
axs.constants.Severity =  {
    INFO: 'Info',
    WARNING: 'Warning',
    SEVERE: 'Severe'
};
goog.exportSymbol('axs.constants.Severity', axs.constants.Severity);
goog.exportProperty(axs.constants.Severity, 'INFO',
                    axs.constants.Severity.INFO);
goog.exportProperty(axs.constants.Severity, 'WARNING',
                    axs.constants.Severity.WARNING);
goog.exportProperty(axs.constants.Severity, 'SEVERE',
                    axs.constants.Severity.SEVERE);

/** @enum {string} */
axs.constants.AuditResult = {
    PASS: 'PASS',
    FAIL: 'FAIL',
    NA: 'NA'
};
goog.exportSymbol('axs.constants.AuditResult', axs.constants.AuditResult);
goog.exportProperty(axs.constants.AuditResult, 'PASS',
                    axs.constants.AuditResult.PASS);
goog.exportProperty(axs.constants.AuditResult, 'FAIL',
                    axs.constants.AuditResult.FAIL);
goog.exportProperty(axs.constants.AuditResult, 'NA',
                    axs.constants.AuditResult.NA);

/** @enum {boolean} */
axs.constants.InlineElements = {
    // fontstyle
    'TT': true,
    'I': true,
    'B': true,
    'BIG': true,
    'SMALL': true,

    // phrase
    'EM': true,
    'STRONG': true,
    'DFN': true,
    'CODE': true,
    'SAMP': true,
    'KBD': true,
    'VAR': true,
    'CITE': true,
    'ABBR': true,
    'ACRONYM': true,

    // special
    'A': true,
    'IMG': true,
    'OBJECT': true,
    'BR': true,
    'SCRIPT': true,
    'MAP': true,
    'Q': true,
    'SUB': true,
    'SUP': true,
    'SPAN': true,
    'BDO': true,

    // formctrl
    'INPUT': true,
    'SELECT': true,
    'TEXTAREA': true,
    'LABEL': true,
    'BUTTON': true
 }
goog.exportSymbol('axs.constants.InlineElements', axs.constants.InlineElements);
