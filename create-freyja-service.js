#!/usr/bin/env node
/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import init from '@adobe/create-franklin-library';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line no-console
console.log('Creating a new Freyja Service');
init(resolve(fileURLToPath(import.meta.url), '..'), {
  'dot-circleci/config.yml': (buf) => buf,
  'dot-renovaterc.json': (buf) => buf,
  'dot-npmrc': (buf) => buf,
  'dot-nycrc': (buf) => buf,
  'package.json': (buf, answers) => {
    const json = JSON.parse(buf.toString());
    json.name = answers.fullscope;
    json.description = answers.title;
    json.repository.url = `https://github.com/${answers.fullname}`;
    json.bugs.url = `https://github.com/${answers.fullname}/issues`;
    json.homepage = `https://github.com/${answers.fullname}#readme`;

    json.wsk.name = `freyja/${answers.name}@\${version}`;
    json.scripts.logs = `aws logs tail /aws/lambda/freyja--${answers.fullname}`;

    delete json.files;

    return Buffer.from(JSON.stringify(json, null, 2));
  },
  'README.md': (buf, answers) => {
    const shortname = answers.name.replace('helix-', '');
    const updated = buf.toString()
      .replace(/@freyja\/freyja-service/g, answers.fullscope)
      .replace(/Freyja Service/g, answers.title)
      .replace(/An example service to be used in and with Project Freyja/g, answers.description)
      .replace(/freyja\/service/g, `freyja/${shortname}`)
      .replace(/adobe\/freyja-service/g, `${answers.fullname}`);
    return Buffer.from(updated);
  },
  'dot-releaserc.cjs': (buf) => buf,
}, [
  {
    type: 'list',
    name: 'alertgroup',
    message: 'What kind of service is this?',
    choices: [
      'Development', 'Publishing', 'Delivery',
    ],
    default: 'Development',
  },
]);
