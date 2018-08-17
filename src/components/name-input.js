import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, StyleSheet } from 'react-native';
import {
  NameInputView,
  TextInputWrapper,
  NextButton,
  ButtonText,
  NameInputText,
} from '../styles/pages/welcome';
import ArrowIcon from '../constants/images/arrowicon.png';
import { colors, fonts } from '../lib/theme';

const styles = StyleSheet.create({
  focusedText: {
    color: colors.grey,
    paddingLeft: 15,
    paddingBottom: 5,
    fontFamily: fonts.GTAmericaReg,
  },
});

export default class NameInput extends React.Component {
  static propTypes = {
    handleOnFocus: PropTypes.func.isRequired,
    handleMarginTop: PropTypes.number.isRequired,
    handleOnPress: PropTypes.func.isRequired,
    isFocused: PropTypes.bool.isRequired,
    handleKeyboard: PropTypes.func.isRequired,
    inputRef: PropTypes.func.isRequired,
  };

  render() {
    const {
      handleOnFocus,
      handleMarginTop,
      handleOnPress,
      isFocused,
      handleKeyboard,
      inputRef,
    } = this.props;

    return (
      <NameInputView style={{ marginTop: handleMarginTop }}>
        <TextInputWrapper>
          {isFocused ? (
            <Text style={styles.focusedText}>What&apos;s your name?</Text>
          ) : null}
          <NameInputText
            placeholder={isFocused ? '' : "What's your name?"}
            onFocus={handleOnFocus}
            onKeyPress={handleKeyboard}
            innerRef={inputRef}
          />
        </TextInputWrapper>
        <NextButton onPress={handleOnPress}>
          <ButtonText>Next</ButtonText>
          <Image
            /* eslint-disable-next-line */
            source={ArrowIcon}
          />
        </NextButton>
      </NameInputView>
    );
  }
}
