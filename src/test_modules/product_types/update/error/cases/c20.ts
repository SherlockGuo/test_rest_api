import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '20. Add attribute definition with wrong attributeConstraint',
  setups,
  config: function (this: TestCase) {
    const result = s1.result as HttpResult
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
          action: 'addAttributeDefinition',
          attribute: {
            type: {
              name: 'text'
            },
            name: 'wrong-attributeConstraint',
            label: {
              en:  'wrong attributeConstraint'
            },
            isRequired: false,
            attributeConstraint: 'Yes',
            inputHint: 'SingleLine',
            isSearchable: true
          }
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
