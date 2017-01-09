import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s4 from '../setups/s04'

const setups = [s4]

const c: TestCase = {
  description: '39. Add localized enum with no value',
  setups,
  config: function (this: TestCase) {
    const result = s4.result as HttpResult
    const data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'addLocalizedEnumValue',
          attributeName: 'text-attribute-for-update-error-test'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
