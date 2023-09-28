import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'balance.workspace',
  appName: 'balance-workspace',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
