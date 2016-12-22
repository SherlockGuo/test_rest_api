import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '14. Create product type with no enum key in values while the type of the attribute definition draft is enum',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'enum',
            'values': [
              {
                'label': 'label1'
              }
            ]
          },
          'name': 'error-test-no-key-in-values',
          'label': {
            'en': 'error test no key in values'
          },
          'isRequired': true
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
