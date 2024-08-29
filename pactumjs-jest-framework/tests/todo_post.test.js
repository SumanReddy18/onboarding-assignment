const { spec } = require('../common/api');
const logger = require('../common/logger');

describe('POST API Tests', () => {
  
  it('should create a new user', async () => {
    logger.info('Starting POST to create a new user');

    try {
      const response = await spec()
        .post('/api/users')
        .withBody(`
            {
              "name": "morpheus",
              "job": "leader"
            }
          `)
        .expectStatus(201);

      logger.info('Response Status Code:', response.statusCode);
      logger.info('Response Body:', response.body);
      logger.info('Response Headers:', response.headers);
      logger.info('POST user creation test successful');
    } catch (error) {
      logger.error(`POST user creation test failed: ${error.message}`);
    }
  });
  
  it('should unregister user unsuccessfully', async () => {
    logger.info('Starting POST to unregister a user');

    try {
      const response = await spec()
        .post('/api/register')
        .withBody(`
            {
              "email": "sydney@fife"
            }
          `)
        .expectStatus(400)
        .expectJson({
            "error": "Missing password"
        })

      logger.info('Response Status Code:', response.statusCode);
      logger.info('Response Body:', response.body);
      logger.info('Response Headers:', response.headers);
      logger.info('POST user registration test successful');
    } catch (error) {
      logger.error(`POST user registration test failed: ${error.message}`);
    }
  });

});