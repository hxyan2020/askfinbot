module.exports = {
  apps: [{
    name: 'askfinbot',
    cwd: '/var/www/askfinbot',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 4010',
    env: { NODE_ENV: 'production', PORT: '4010' },
    max_memory_restart: '512M',
  }],
};
