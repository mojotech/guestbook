import React from 'react';
import PropTypes from 'prop-types';
import {
  NameInputView,
  TextInputWrapper,
  NextButton,
  ButtonText,
  NameInputText,
  WhiteArrowIcon,
} from '../styles/pages/welcome';
import ArrowIcon from '../icons/white-arrow.png';

export default class NameInput extends React.Component {
  static propTypes = {
    handleOnFocus: PropTypes.func.isRequired,
    handleMarginTop: PropTypes.number.isRequired,
    handleOnPress: PropTypes.func.isRequired,
    isFocused: PropTypes.bool.isRequired,
  };

  render() {
    const {
      handleOnFocus,
      handleMarginTop,
      handleOnPress,
      isFocused,
    } = this.props;
    return (
      <NameInputView style={{ marginTop: handleMarginTop }}>
        <TextInputWrapper>
          <NameInputText
            placeholder={isFocused ? '' : "What's your name?"}
            onFocus={handleOnFocus}
          />
        </TextInputWrapper>
        <NextButton onPress={handleOnPress}>
          <ButtonText>Next</ButtonText>
          <WhiteArrowIcon source={ArrowIcon} />
        </NextButton>
      </NameInputView>
    );
  }
}
