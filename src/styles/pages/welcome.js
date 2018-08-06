import styled from 'styled-components';
import {
  fontSizes, colors, weights, spacing,
} from '../../lib/theme';

export const SignInHere = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
<<<<<<< HEAD
  margin-top: ${spacing.xxl};
  margin-left: ${spacing.l};
=======
  margin-top: 180px;
  margin-left: ${spacing.s};
>>>>>>> e2c6191... feat: static welcome screen
`;

export const WelcomeSignIn = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
<<<<<<< HEAD
  margin-top: ${spacing.m};
  margin-left: ${spacing.l};
=======
  margin-top: 20px;
  margin-left: ${spacing.s};
>>>>>>> e2c6191... feat: static welcome screen
`;

export const NameInput = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  borderBottomEndRadius: 20px;
  borderBottomWidth: 2px;
  lineHeight: 60px;
  borderBottomColor: ${colors.green};
<<<<<<< HEAD
  margin-top: ${spacing.xl};
  margin-left: ${spacing.l};
  margin-right: ${spacing.l};
=======
  margin-top: 109px;
  margin-left: ${spacing.s};
>>>>>>> e2c6191... feat: static welcome screen
  text-align: left;
`;

export const Background = styled.Image`
  flex: 1;
<<<<<<< HEAD
  width: 150%;
  height: 150%;
  resizeMode: cover;
=======
  width: 1024px;
  height: 396px;
  resizeMode: contain;
>>>>>>> e2c6191... feat: static welcome screen
`;
