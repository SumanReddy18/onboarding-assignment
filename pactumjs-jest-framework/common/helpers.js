const formatResponse = (response) => {
    return {
      statusCode: response.statusCode,
      body: response.body
    };
  };
  
  module.exports = {
    formatResponse
  };