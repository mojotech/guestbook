import { AsyncStorage } from 'react-native';
import { serializeDate } from '../lib/date';

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

export const addVisitor = async (visitorName, visitorHosts, messageState) => {
  try {
    const log = await AsyncStorage.getItem(VISITORLOG) || '[]';
    const parsed = JSON.parse(log);
    const hosts = visitorHosts.map(host => host.name);
    const newVisitor = {
      guest: visitorName,
      hosts,
      messageState,
      arrivalTime: serializeDate(new Date()),
    };
    parsed.push(newVisitor);
    setObjectInAsyncStorage(VISITORLOG, parsed);
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
    if (!visitorLog) {
      console.log('There are no visitors in the visitor log.');
      return;
    }
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
