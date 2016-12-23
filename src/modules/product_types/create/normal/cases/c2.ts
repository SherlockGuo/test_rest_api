import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '2. Create product type with least properties',
  requestData: {
    payload: {
      'name': 'function test product type 2',
      'description': 'function test product type 2'
    }
  },
  expectedResult: {
    httpCode: 201,
    data: {
      'id': '5f011575-0f6b-4e0b-b638-b0264119e4d7',
      'version': 1,
      'name': 'function test product type 2',
      'description': 'function test product type 2',
      'classifier': 'Complex',
      'attributes': [],
      'createdAt': '2016-12-09T05:59:14.716Z',
      'lastModifiedAt': '2016-12-09T05:59:14.716Z'
    }
  }
}

export default c
