/*
Copyright 2018 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
'use strict';

(function() {

window.testSuiteDescriptions = {
  'conformance-test': {
    name: 'MSE Conformance Tests',
    title: 'Media Source and Media Conformance Tests',
    heading: 'MSE Conformance Tests'
  },
  'progressive-test': {
    name: 'Progressive Tests',
    title: 'HTML Media Element Conformance Tests',
    heading: 'HTML Media Element Conformance Tests'
  },
};

window.testSuiteVersions = {
  [testVersion] : {
    'testSuites' : [
      'conformance-test',
      'progressive-test',
    ],
    'config' : {
      'defaultTestSuite': 'conformance-test',
      'enablewebm': false,
      'controlMediaFormatSelection': false
    }
  }
};

})();
