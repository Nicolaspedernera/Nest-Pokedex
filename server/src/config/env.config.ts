export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  default_page: +process.env.DEFAULT_PAGE || 1,
  default_limit: +process.env.DEFAULT_LIMIT || 5,
});
