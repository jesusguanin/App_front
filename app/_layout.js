import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <GluestackUIProvider config={config}>
      <Slot />
    </GluestackUIProvider>
  );
}
