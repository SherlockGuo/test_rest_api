import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '10. Create product type with empty label in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'error-test-empty-label',
          'label': {},
          'isRequired': false
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
