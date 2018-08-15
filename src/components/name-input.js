import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, StyleSheet} from 'react-native';
import {NameInputView, TextInputWrapper, NextButton, ButtonText, NameInputText } from '../styles/pages/welcome';
import ArrowIcon from '../constants/images/arrowicon.png';
import { colors, fonts } from '../lib/theme';

const styles = StyleSheet.create({
  focusedText: {
    color: colors.grey,
    paddingLeft: 15, 
    paddingBottom: 5,
    fontFamily: fonts.GTAmericaReg,
  }
});

export default class NameInput extends React.Component {
  static propTypes = {
    handleOnFocus: PropTypes.func.isRequired,
    handleMarginTop: PropTypes.number.isRequired,
    handleOnPress: PropTypes.func.isRequired,
    isFocused: PropTypes.bool.isRequired,
  };

  render(){
    const {handleOnFocus, handleMarginTop, handleOnPress, isFocused} = this.props;
    return(
      <NameInputView style={{marginTop: handleMarginTop}}>
      <TextInputWrapper>
        {
          isFocused ?
          <Text
            style={styles.focusedText}
          >
              What&apos;s your name?
          </Text>
          :
          null
        }
        {
          isFocused?
          
          <NameInputText
            placeholder=''
            onFocus = {handleOnFocus}
          />
          :
          <NameInputText
            placeholder='What&apos;s your name?'
            onFocus = {handleOnFocus}
          />
        }
      </TextInputWrapper>
      <NextButton onPress={handleOnPress}>
        <ButtonText>
          Next
        </ButtonText>
        <Image
          /* eslint-disable-next-line */
          source={ArrowIcon}
        />
      </NextButton>
    </NameInputView>
    );
  }
};
