import { ModuleSuites } from '../../test_runners/models/module_suites'
import createError from './create/error'
import createNormal from './create/normal'
import deleteNormal from './delete/normal'
import deleteError from './delete/error'
import updateNormal from './update/normal'
import updateError from './update/error'

const ms: ModuleSuites = {
  apiName: 'product-types',
  suites: [
    // createError,
    // createNormal,
    // deleteNormal,
    // deleteError,
    // updateNormal,
    updateError
  ]
}


export default ms