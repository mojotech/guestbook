import styled from 'styled-components';
import {
  fontSizes, colors, weights, spacing,
} from '../../lib/theme';

export const Heading = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
  margin-top: ${spacing.xxl};
  margin-left: ${spacing.l};
`;

export const SubHeading = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
  margin-top: ${spacing.m};
  margin-left: ${spacing.l};
`;

export const NameInput = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  borderBottomEndRadius: 20px;
  lineHeight: 60px;
  margin-top: ${spacing.xl};
  text-align: left;
  padding-left: 15px;
`;

export const Background = styled.Image`
  resizeMode: contain;
  alignSelf: flex-end;
`;

export const InputWrapper = styled.View`
  borderBottomColor: ${colors.green};
  borderBottomWidth: 2px;
  margin-left: ${spacing.l};
  margin-right: ${spacing.l};
`;
