const logger = function <T>(input: T) {
  console.log("input:", input);
  return input;
};

logger(1);
logger("Hello");
// logger<string>(1) - błąd
logger<number>(123);

const loggerArr = <T extends unknown>(input: T) => {
  console.log("input:", input);
  return input;
};

const test = loggerArr<boolean>(false);
console.log("test:", test);
