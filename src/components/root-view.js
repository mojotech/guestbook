import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const RootView = ({ children }) => (
  <View style={{ ...StyleSheet.absoluteFillObject }}>{children}</View>
);

RootView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootView;
