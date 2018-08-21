import React from 'react';
import PropTypes from 'prop-types';
import {
  NameInputContainer,
  TextInputWrapper,
  NextButton,
  ButtonText,
  NameInputText,
  WhiteArrowIcon,
} from '../styles/pages/welcome';
import ArrowIcon from '../icons/white-arrow.png';

export default class NameInputView extends React.Component {
  render() {
    const { nextPage } = this.props;
    return (
      <NameInputContainer>
        <TextInputWrapper>
          <NameInputText placeholder="What&apos;s your name?" />
        </TextInputWrapper>
        <NextButton onPress={nextPage}>
          <ButtonText>Next</ButtonText>
          <WhiteArrowIcon source={ArrowIcon} />
        </NextButton>
      </NameInputContainer>
    );
  }
}

NameInputView.propTypes = { nextPage: PropTypes.func.isRequired };
