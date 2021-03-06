import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s3-1'

let setups = [s1]
let testData = {
  "name": {
    "en": "en-smartphone_for_queryByID_function_test-1",
    "de": "de-smartphone_for_queryByID_function_test-1"
  },
  "slug": "en-smartphone_slug_for_queryByID_function_test-6"
}

const c: TestCase = {
  description: '3. Get category by ID when 1 category in database',
  setups,
  config: function (this: TestCase) {
    const result = s1.result as HttpResult
    if(result.data) {
      this.requestData.url = `${this.requestData.url}/${result.data.id}`
    }
  },
  requestData: {
    payload: {}
  },
  expectedResult: {
    httpCode: 200,
    data: {
      ...testData,
      'id': '',
      'version': 0,
      'ancestors': [],
      'createdAt': '',
      'lastModifiedAt': ''
    }
  }
}

export default c
