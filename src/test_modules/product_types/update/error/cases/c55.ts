import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s4 from '../setups/s04'

const setups = [s4]

const c: TestCase = {
  description: '55. Change the label of a localized enum value with no key',
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
          action: 'setLocalizedEnumValueLabel',
          attributeName: 'lenum-attribute-for-update-error-test',
          newValue: {
            label: {
              en: 'lenumLabel',
              zh_cn: '本地化枚举值'
            }
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
