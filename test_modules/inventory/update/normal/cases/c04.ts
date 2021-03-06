import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s01 from '../setups/s01'

const setup = [ s01 ]

const c: TestCase = {
  description: '4. Update inventory entry remove quantity',
  setups: setup,
  config: function (this: TestCase) {
    const result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url += `/${result.data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'removeQuantity',
          quantity: 30,
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      id: '',
      version: 0,
      createdAt: '',
      lastModifiedAt: '',
      sku: 'Inventory entry sku for update normal test',
      supplyChannel: {},
      quantityOnStock: 170,
      availableQuantity: 170,
      restockableInDays: 20,
      expectedDelivery: '2017-01-01T06:00:00.000Z',
      custom: {}
    }
  }
}

export default c
