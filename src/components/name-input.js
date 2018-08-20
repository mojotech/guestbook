import React from 'react';
import {
  NameInputContainer,
  TextInputWrapper,
  NextButton,
  ButtonText,
  NameInputText,
  WhiteArrowIcon,
} from '../styles/pages/welcome';
import ArrowIcon from '../icons/white-arrow.png';

export const NameInputView = () => (
  <NameInputContainer>
    <TextInputWrapper>
      <NameInputText placeholder="What&apos;s your name?" />
    </TextInputWrapper>
    <NextButton>
      <ButtonText>Next</ButtonText>
      <WhiteArrowIcon source={ArrowIcon} />
    </NextButton>
  </NameInputContainer>
);

export default NameInputView;
