import { CaseSetup } from '../../../../../test_runners/models'

let s: CaseSetup = {
  description: 'Setup 1: Create the 1st product type for delete normal test',
  requestData: {
    payload: {
      'name': 'function-test-product-type-for-delete-1',
      'description': 'function test product type for delete 1',
      'key': 'function-test-product-type-for-delete-1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'function-test-attribute-definition-for-delete-1',
          'label': {
            'en': 'function test attribute definition for delete 1'
          },
          'isRequired': true,
          attributeConstraint: 'None',
          inputHint: 'SingleLine',
          isSearchable: true
        }
      ]
    }
  }
}

export default s
