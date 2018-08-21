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
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { nextPage } = this.props;
    const { text } = this.state;
    return (
      <NameInputContainer>
        <TextInputWrapper>
          <NameInputText
            placeholder="What&apos;s your name?"
            onChangeText={guestName => this.setState({ text: guestName })}
          />
        </TextInputWrapper>
        <NextButton onPress={() => nextPage(text)}>
          <ButtonText>Next</ButtonText>
          <WhiteArrowIcon source={ArrowIcon} />
        </NextButton>
      </NameInputContainer>
    );
  }
}

NameInputView.propTypes = { nextPage: PropTypes.func.isRequired };

export default NameInputView;
