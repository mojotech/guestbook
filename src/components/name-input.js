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

export class NameInputView extends React.Component {
  render() {
    const { guestName, handleNextPress, handleChangeNameText } = this.props;
    return (
      <NameInputContainer>
        <TextInputWrapper>
          <NameInputText
            value={guestName}
            placeholder="What&apos;s your name?"
            onChangeText={handleChangeNameText}
          />
        </TextInputWrapper>
        <NextButton onPress={handleNextPress}>
          <ButtonText>Next</ButtonText>
          <WhiteArrowIcon source={ArrowIcon} />
        </NextButton>
      </NameInputContainer>
    );
  }
}

NameInputView.propTypes = {
  guestName: PropTypes.string.isRequired,
  handleNextPress: PropTypes.func.isRequired,
  handleChangeNameText: PropTypes.func.isRequired,
};

export default NameInputView;
