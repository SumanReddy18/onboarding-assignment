const { spec } = require('../common/api');
const logger = require('../common/logger');

describe('GET API Tests', () => {
  
  it('should get the list of users', async () => {
    logger.info('Starting GET all users list');

    try {
      const response = await spec()
        .get('/api/users?page=2')
        .expectStatus(200);

      logger.info('Response Body:', response.body);
      logger.info('Response Headers:', response.headers);
      if (Array.isArray(response.body.data)) {
        logger.info('Response data is an array');
      } else {
        logger.error('Response data is not an array');
      }

      logger.info('GET all users test successful');
    } catch (error) {
      logger.error(`GET all users test failed: ${error.message}`);
    }
  });

  it('should get single user details', async () => {
    logger.info('Starting GET Single user details');

    try {
      const response = await spec()
        .get('/api/users/2')
        .expectStatus(200)
        .expectResponseTime(200)
        .expectJson({
          data: {
            id: 2,
            email: 'janet.weaver@reqres.in',
            first_name: 'Janet',
            last_name: 'Weaver',
            avatar: 'https://reqres.in/img/faces/2-image.jpg'
          },
          support: {
            url: 'https://reqres.in/#support-heading',
            text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
          }
        });

      logger.info('Response Body:', response.body);
      logger.info('Response Headers:', response.headers);
      if (response.body.data && response.body.data.email === 'janet.weaver@reqres.in') {
        logger.info('User email is correct');
      } else {
        logger.error('User email is incorrect or missing');
      }

      logger.info('GET single user details test successful');
    } catch (error) {
      logger.error(`GET single user details test failed: ${error.message}`);
    }
  });
});