
import { TestBase } from '../../../../../test_runners/models'

let s: TestBase = {
  description: 'Setup 7-1: Create category with correct field name and correct field slug',
  requestData: {
    payload: {
      "name": {
        "en": "smartphone_with_correct_message_for_error_create_test",
        "de": "smartphone_with_correct_message_for_error_create_test"
      },
      "slug": "en-smartphone_slug_with_correct_message_for_error_create_test-1"
    }
  }
}

export default s
