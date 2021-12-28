const fetch = require("node-fetch");

// Generates a new Direct Line token given the secret.
module.exports = async function generateDirectLineToken(botId, botTenantId) {
  // You should consider using Enhanced Direct Line Authentication to protect the user ID.
  // https://blog.botframework.com/2018/09/25/enhanced-direct-line-authentication-features/
  
  // The URL host in which to generate the Direct Line token is subject to change based off of environment.
  // The host should be consistent to the host that you are building your Power VA.

  console.log('BOT ID: ' + botId);
  console.log('BOT Tenant ID: ' + botTenantId);
  Secret = 'JVmE88ln1qU.sP46ls1yjXX9uHd1y3NxYfOMK1cFkrmKlnnfaPfk1Bs'
  const url = 'https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=' +botId + '&tenantId=' + botTenantId;
  console.log('url: ', url);
  const response = await fetch(url,{method: "GET", headers: {'Authorization': 'Bearer JVmE88ln1qU.sP46ls1yjXX9uHd1y3NxYfOMK1cFkrmKlnnfaPfk1Bs'}});
  
  const result  = await response.json();
  console.log('REsult: ' + result);
  console.log('type: ' + typeof result);

  token = result.token;
  console.log('Token: ' + token);
  return token;


  
};
