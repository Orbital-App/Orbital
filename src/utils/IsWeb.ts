export function isWeb() {
  const isElectron = !!window?.process?.versions?.electron;
  return !isElectron;
}
