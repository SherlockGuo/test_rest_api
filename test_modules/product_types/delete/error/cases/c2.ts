import { TestCase, HttpResult, CaseSetup } from '../../../../../test_runners/models'
import * as config from '../../../../../config'
import s1 from '../setups/s1'

const s: CaseSetup[] = [ s1 ]

const c: TestCase = {
  description: '2. Delete product type by key with higher version',
  setups: s,
  config: function (this: TestCase) {
    this.requestData.url = `${this.requestData.url}/key=${s1.requestData.payload.key}`
  },
  requestData: {
    params: { version: 2 }
  },
  expectedResult: {
    httpCode: 409
  }
}

export default c
