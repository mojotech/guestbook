import styled from 'styled-components';
import { fontSizes, colors, weights, spacing } from '../../lib/theme';

export const Heading = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
  margin-top: ${spacing.xxxxl};
  margin-left: ${spacing.xxxl};
`;

export const SubHeading = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
  margin-top: ${spacing.xl};
  margin-left: ${spacing.xxxl};
`;

export const NameInput = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  border-bottom-end-radius: 20px;
  line-height: 60px;
  margin-top: ${spacing.xxxl};
  text-align: left;
  padding-left: 15px;
`;

export const Background = styled.Image`
  resize-mode: stretch;
  width: 100%;
`;

export const InputWrapper = styled.View`
  border-bottom-color: ${colors.green};
  border-bottom-width: 2px;
  margin-left: ${spacing.xxxl};
  margin-right: ${spacing.xxxl};
`;
