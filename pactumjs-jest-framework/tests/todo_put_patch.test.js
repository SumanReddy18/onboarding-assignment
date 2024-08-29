const { spec } = require('../common/api');
const logger = require('../common/logger');

describe('PUT and PATCH API Tests', () => {
  
  it('should fail to update user using PUT due to incorrect status code', async () => {
    logger.info('Starting PUT to update a user');

    try {
      const response = await spec()
        .put('/api/users/2')
        .withBody(`
            {
                "name": "morpheus",
                "job": "zion resident"
            }
          `)
        // Intentionally expecting a 201 status instead of the actual 200
        .expectStatus(201)
        // Intentionally expecting a wrong response body
        .expectJson({
            "name": "neo",
            "job": "the one",
            "updatedAt": "2024-08-28T06:58:48.653Z"
        });

      logger.info('Response Status Code:', response.statusCode);
      logger.info('Response Body:', response.body);
      logger.info('Response Headers:', response.headers);
      logger.info('PUT user update test should have failed but passed');
    } catch (error) {
      logger.error(`PUT user update test failed as expected: ${error.message}`);
    }
  });
  
  it('should fail to update user using PATCH due to incorrect response body', async () => {
    logger.info('Starting PATCH to update a user');

    try {
      const response = await spec()
        .patch('/api/users/2')
        .withBody(`
            {
                "name": "morpheus",
                "job": "zion resident"
            }
          `)
        // Keeping the status code correct but changing the expected response body to incorrect values
        .expectStatus(200)
        .expectJson({
            "name": "trinity",
            "job": "zion resident",
            "updatedAt": "2024-08-28T07:00:24.740Z"
        });

      logger.info('Response Status Code:', response.statusCode);
      logger.info('Response Body:', response.body);
      logger.info('Response Headers:', response.headers);
      logger.info('PATCH user update test should have failed but passed');
    } catch (error) {
      logger.error(`PATCH user update test failed as expected: ${error.message}`);
    }
  });

});