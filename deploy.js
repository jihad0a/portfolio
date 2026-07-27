const { execSync } = require('child_process');
const result = execSync('npx vercel --token $VERCEL_TOKEN --yes --prod 2>&1', {
  cwd: 'C:/project/folio-tailwind-1.0.0',
  encoding: 'utf8',
  timeout: 60000
});
console.log(result);
