
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

export const initMojoNames = async () => {
  try {
    const mojoList = [
      {
        name: 'Jen Kaplan',
        image: ' ',
      },
      {
        name: 'Steph Racca',
        image: ' ',
      },
    ];
    setObjectInAsyncStorage(MOJOS, mojoList);
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
    for (let i = 0; i < parsed.length; i + 1) {
      console.log(parsed[i]);
    }
  } catch (error) {
    console.log(error);
  }
};

export const displayMojos = async () => {
  try {
    const mojoList = await AsyncStorage.getItem(MOJOS);
    const parsed = JSON.parse(mojoList);
    for (let i = 0; i < parsed.length; i + 1) {
      console.log(parsed[i]);
    }
  } catch (error) {
    console.log(error);
  }
};
