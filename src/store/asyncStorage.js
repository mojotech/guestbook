import { AsyncStorage } from 'react-native';

const MOJOS = 'MOJOS';
const VISITORLOG = 'VISITORLOG';

export const asyncStorageKeys = {
  MOJOS,
  VISITORLOG,
};

export const setObjectInAsyncStorage = (key, val) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(val));
  } catch (error) {
    console.log(error);
  }
};

const updateMojoNames = (storedMojoNames, mojoList) => {
  const missingMojoNames = mojoList.filter(mojo => (!storedMojoNames.includes(mojo)));
  setObjectInAsyncStorage(MOJOS, storedMojoNames.concat(missingMojoNames));
};

export const initMojoNames = async (mojoList) => {
  try {
    const mojoNames = await AsyncStorage.getItem(MOJOS);
    const storedMojoNames = JSON.parse(mojoNames);
    if (!storedMojoNames) {
      setObjectInAsyncStorage(MOJOS, mojoList);
    } else {
      updateMojoNames(storedMojoNames, mojoList);
    }
  } catch (error) {
    console.log(error);
  }
};

export const initVisitorLog = () => {
  try {
    const emptyVisitorLog = [
      {
        name: 'John Doe',
        arrivalTime: Date.now(),
      },
    ];
    setObjectInAsyncStorage(VISITORLOG, emptyVisitorLog);
  } catch (error) {
    console.log(error);
  }
};

export const addVisitor = async (visitorName) => {
  try {
    const log = await AsyncStorage.getItem(VISITORLOG);
    const parsed = JSON.parse(log);
    const newVisitor = {
      name: visitorName,
      arrivalTime: Date.now(),
    };
    setObjectInAsyncStorage(VISITORLOG, parsed.concat(JSON.stringify(newVisitor)));
  } catch (error) {
    console.log(error);
  }
};

export const mostRecentVisitor = async () => {
  try {
    const log = await AsyncStorage.getItem(VISITORLOG);
    const parsed = JSON.parse(log);
    console.log(parsed.slice(-1)[0]);
  } catch (error) {
    console.log(error);
  }
};

export const displayVisitors = async () => {
  try {
    const visitorLog = await AsyncStorage.getItem(VISITORLOG);
    const parsed = JSON.parse(visitorLog);
    parsed.forEach(visitor => console.log(visitor));
  } catch (error) {
    console.log(error);
  }
};

export const displayMojos = async () => {
  try {
    const mojoList = await AsyncStorage.getItem(MOJOS);
    const parsed = JSON.parse(mojoList);
    parsed.forEach(mojo => console.log(mojo));
  } catch (error) {
    console.log(error);
  }
};
