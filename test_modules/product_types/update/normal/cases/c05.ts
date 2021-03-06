import { TestCase, HttpResult, CaseSetup } from '../../../../../test_runners/models'
import s01 from '../setups/s01'

const s: CaseSetup[] = [s01]

const c: TestCase = {
  description: '5. Update product type remove attribute definition',
  config: function (this: TestCase) {
    let result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url = `${this.requestData.url}/${result.data.id}`
    }
  },
  setups: s,
  requestData: {
    payload: {
      'version': 0,
      'actions': [
        {
          'action': 'removeAttributeDefinition',
          'name': 'normal-test-attribute-definition-text'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      'id': '80bb9d00-4f16-442a-b468-d53605d0934e',
      'version': 1,
      'name': 'normal test product type for update',
      'description': 'normal test product type for update',
      // 'classifier': 'Complex',
      'attributes': [
        {
          'name': 'normal-test-attribute-definition-enum',
          'label': {
            'en': 'normal test attribute definition enum'
          },
          'isRequired': false,
          'type': {
            'name': 'enum',
            'values': [
              {
                'key': 'key1',
                'label': 'label1'
              },
              {
                'key': 'key2',
                'label': 'label2'
              },
              {
                'key': 'key3',
                'label': 'label3'
              }
            ]
          },
          'attributeConstraint': 'None',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          // 'displayGroup': 'Other'
        },
        {
          'name': 'normal-test-attribute-definition-lenum',
          'label': {
            'en': 'normal test attribute definition lenum'
          },
          'isRequired': true,
          'type': {
            'name': 'lenum',
            'values': [
              {
                'key': 'lenumKey1',
                'label': {
                  'en': 'lenumLabel1'
                }
              },
              {
                'key': 'lenumKey2',
                'label': {
                  'en': 'lenumLabel2'
                }
              }
            ]
          },
          'attributeConstraint': 'None',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          // 'displayGroup': 'Other'
        }
      ],
      'key': 'normal-test-product-type-for-update',
      'createdAt': '2016-12-26T01:53:48.309Z',
      'lastModifiedAt': '2016-12-26T01:53:48.309Z'
    }
  }
}

export default c
