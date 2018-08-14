import React from 'react';
import {NameInputView, TextInputWrapper, NextButton, ButtonText, NameInputText } from '../styles/pages/welcome';

export const NameInput = () => (
  <NameInputView style={{flex: 1, flexDirection: 'row'}}>
    <TextInputWrapper>
      <NameInputText
        placeholder='What&apos;s your name?'
      />
    </TextInputWrapper>
    <NextButton>
      <ButtonText>
        Next
      </ButtonText>
    </NextButton>
  </NameInputView>
);

export default NameInput;