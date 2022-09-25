function convertSecondsToMin(seconds) {
  return { min: parseInt(seconds / 60), sec: parseInt(seconds % 60) };
}

export { convertSecondsToMin };
