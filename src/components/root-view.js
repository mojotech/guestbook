import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const RootView = ({ children, style }) => (
  <View style={{ ...StyleSheet.absoluteFillObject, ...style }}>{children}</View>
);

RootView.propTypes = {
  children: PropTypes.node.isRequired,
  style: View.propTypes.style,
};

RootView.defaultProps = {
  style: {},
};

export default RootView;
