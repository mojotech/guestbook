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

export const NameInput = ({ nextPage }) => (
  <NameInputView style={{ flex: 1, flexDirection: 'row' }}>
    <TextInputWrapper>
      <NameInputText placeholder="What&apos;s your name?" />
    </TextInputWrapper>
    <NextButton onPress={nextPage}>
      <ButtonText>Next</ButtonText>
      <WhiteArrowIcon source={ArrowIcon} />
    </NextButton>
  </NameInputView>
);

NameInput.propTypes = { nextPage: PropTypes.func.isRequired };

export default NameInput;
