/*
 * Copyright 2014-2016 CyberVision, Inc.
 * <p/>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p/>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p/>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var UTILS = (function () {
	var my = {};

	var SCRIPT_ID = "utils.js";
	var DATA_LATEST_VERSION = "latest-version";
	var DATA_VERSIONS_LIST = "version-list";

	my.isBlank = function isBlank(str) {
		return (!str || /^\s*$/.test(str));
	};

	my.getQueryVariable = function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		if (my.isBlank(query)) {
			return '';
		}
		var vars = query.split('&');

		var mappedVars = vars.filter(function(item) {
			var testItem = item && item.split('=')[0];
			return !my.isBlank(item) && testItem === variable;
		}).map(function(item) {
			var unDecoded = item && item.split('=')[1] || '';
			return decodeURIComponent(unDecoded.replace(/\+/g, '%20'));
		});
		return mappedVars[0];
	}

	my.replaceIfBlank = function getQueryVariable(testStr, replacementStr) {
		if (my.isBlank(testStr)) {
			return replacementStr;
		}
		return testStr;
	}

	my.splitByLines = function splitByLines(text) {
		return text.split("\n");
	}

	my.getVersionFromURL = function getVersionFromURL() {
		match = window.location.pathname.match(/^\/[^/]+\/[^/]+\/([^/]+)\//);
		if (match) {
			return match[1];
		}
		return "";
	}

	my.getPathname = function getPathname() {
		return window.location.pathname;
	}

	my.getLatestVersion = function getLatestVersion() {
		return DOM.getInstance().getDataParam(SCRIPT_ID, DATA_LATEST_VERSION);
	}

	my.getVersionsArray = function getVersionsArray() {
		return DOM.getInstance().getDataParam(SCRIPT_ID, DATA_VERSIONS_LIST).split(" ");
	}

	my.validateEmail = function validateEmail(email) {
		var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		return re.test(email);
	}

	return my;

}());
