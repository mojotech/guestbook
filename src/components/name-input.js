import React from 'react';
import PropTypes from 'prop-types';
import {
  NameInputContainer,
  TextInputWrapper,
  NextButton,
  ButtonText,
  NameInputText,
  NameInputLabel,
  WhiteArrowIcon,
} from '../styles/pages/welcome';
import ArrowIcon from '../icons/white-arrow.png';

export class NameInputView extends React.Component {
  state = {
    isFocused: false,
  };

  promptText = "What's your name?";

  handleInputFocus = () => this.setState({ isFocused: true });

  handleInputBlur = () => this.setState({ isFocused: false });

  render() {
    const {
      guestName,
      offsetOnFocus,
      handleNextPress,
      handleChangeNameText,
      inputRef,
    } = this.props;
    const { isFocused } = this.state;

    return (
      <NameInputContainer
        style={{ marginTop: isFocused ? 105 + offsetOnFocus : 105 }}
      >
        <TextInputWrapper>
          {isFocused && <NameInputLabel>{this.promptText}</NameInputLabel>}
          <NameInputText
            value={guestName}
            placeholder={isFocused ? '' : this.promptText}
            onChangeText={handleChangeNameText}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            innerRef={inputRef}
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
  offsetOnFocus: PropTypes.number,
  handleNextPress: PropTypes.func.isRequired,
  handleChangeNameText: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
};

NameInputView.defaultProps = {
  offsetOnFocus: 0,
};

export default NameInputView;
