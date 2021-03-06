/* jshint node: true */
var deployTarget = process.env.deployTarget || 'local';
var deployTargetConfig = require('./' + deployTarget + '.json');

console.log(deployTargetConfig);
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'social-network',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: 'https://makapen-social-network.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      apiServer: deployTargetConfig.apiServer
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:jwt',
    authenticationRoute: 'index',
    routeAfterAuthentication: 'posts',
    routeIfAlreadyAuthenticated: 'posts'
  }

  ENV['auth0-ember-simple-auth'] = {
    clientID: "hkGW1zDmCpPCOthLmsbopZtLMeZHhJhN",
    domain: "linkedindemo.auth0.com"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
