import React from 'react';
import {Image} from 'react-native';
import {NameInputView, TextInputWrapper, NextButton, ButtonText, NameInputText } from '../styles/pages/welcome';
import ArrowIcon from '../constants/images/arrowicon.png'

export const NameInput = () => (
  <NameInputView>
    <TextInputWrapper>
      <NameInputText
        placeholder='What&apos;s your name?'
      />
    </TextInputWrapper>
    <NextButton>
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

export default NameInput;