const { beforeScenario, afterScenario } = require('artillery-plugin-sdk');

// Setup action to be executed before each scenario
beforeScenario((userContext, scenariosPerVU, sharedState) => {
  // Perform setup actions here
  console.log('Setting up scenario...');

  // Example: Set up a database connection
  // Assuming you have a function called `connectToDatabase`
  const databaseConnection = connectToDatabase();
  userContext.vars.databaseConnection = databaseConnection;

  // You can also modify the sharedState object if needed
  sharedState.example = 'Hello, world!';
});

// Teardown action to be executed after each scenario
afterScenario((userContext, scenariosPerVU, sharedState) => {
  // Perform teardown actions here
  console.log('Tearing down scenario...');

  // Example: Close the database connection
  const databaseConnection = userContext.vars.databaseConnection;
  databaseConnection.close();

  // You can also access the sharedState object here
  console.log(sharedState.example);
});
