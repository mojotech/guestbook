# This script cleans out all yarn deps, and clears all caches React Native, Haste, and Jest use
watchman watch-del-all &&
rm -rf $TMPDIR/react-native-packager-cache-* &&
rm -rf $TMPDIR/metro-bundler-cache-* &&
watchman shutdown-server &&
rm -rf $TMPDIR/react-* &&
rm -rf $TMPDIR/jest* &&
rm -rf $TMPDIR/haste-map-react-native-packager-* &&
rm -rf $TMPDIR/metro-bundler-* &&
rm -rf .jest &&
rm -rf ios/build/ModuleCache/* &&
rm -rf node_modules/ &&
yarn cache clean &&
yarn &&
echo -e '⚡ You must manually terminate this process after you see the "Metro Bundler ready." message.' &&
node node_modules/react-native/local-cli/cli.js start --reset-cache
