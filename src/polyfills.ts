(window as any).global = window;
// stub out the native watcher so Parcel falls back
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
try {
  require.resolve('@parcel/watcher');
} catch {
  // no-op: prevents the runtime error when watcher is missing
}
