import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "smartphone_of_externalId_error_test",
    "de": "smartphone_of_externalId_error_test"
  },
  "slug": {
    "en": "smartphone_slug_of_externalId_error_test",
    "de": "smartphone_slug_of_externalId_error_test"
  },
  "externalId": 1234567890
}

const c: TestCase = {
  description: '14. Create category with wrong type of \'externalId\'',
  requestData: {
    method: 'post',
    payload: {
      ...testData
    }
  },
  expectedResult: {
    httpCode: 400 
  }
}

export default c