var logger = require('../index')
describe('Mock Logger', function () {
  it('should support info method', function () {
    logger.info('test', { foo: 'bar'})
  })
  it('should support debug method', function () {
    logger.debug('test', { foo: 'bar'})
  })
  it('should support error method', function () {
    logger.error('test', { foo: 'bar'})
  })

})
