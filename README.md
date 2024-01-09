# (Create) Freyja Service

> Bootstrap your Project Freyja service using `npm init @adobe/freyja-service`

## Status
[![codecov](https://img.shields.io/codecov/c/github/adobe/freyja-service.svg)](https://codecov.io/gh/adobe/freyja-service)
[![CircleCI](https://img.shields.io/circleci/project/github/adobe/freyja-service.svg)](https://circleci.com/gh/adobe/freyja-service)
[![GitHub license](https://img.shields.io/github/license/adobe/freyja-service.svg)](https://github.com/adobe/freyja-service/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/adobe/freyja-service.svg)](https://github.com/adobe/freyja-service/issues)
[![LGTM Code Quality Grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/adobe/freyja-service.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/adobe/freyja-service)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

Not needed.

## Usage
First, make sure you ahve this entry in your `~/.npmrc` file:
```
 @freyja:registry=https://artifactory-uw2.adobeitc.com/artifactory/api/npm/npm-freyja-release/
```
Then, login to the registry, if you haven't done so:
```bash
npm login --registry https://artifactory-uw2.adobeitc.com/artifactory/api/npm/npm-freyja-release/
```

Finally, create your service with the following command:
```bash
$ $ npm init @adobe/freyja-service
```

`create-freyja-service` will ask you a couple of questions and create a ready-to-go directory

## Development

### Build

```bash
$ npm install
```

### Test

```bash
$ npm test
```

### Lint

```bash
$ npm run lint
```
