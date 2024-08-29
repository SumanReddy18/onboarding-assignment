const { spec } = require('../common/api');
const logger = require('../common/logger');

describe('DELETE API Tests', () => {

  it('should delete an existing user', async () => {
    logger.info('Starting DELETE to remove a user');

    try {
      const response = await spec()
        .delete('/api/users/2')
        .expectStatus(204);

      logger.info('Response Status Code:', response.statusCode);
      logger.info('Response Body:', response.body);  
      logger.info('Response Headers:', response.headers);
      logger.info('DELETE user test successful');
    } catch (error) {
      logger.error(`DELETE user test failed: ${error.message}`);
    }
  });

});