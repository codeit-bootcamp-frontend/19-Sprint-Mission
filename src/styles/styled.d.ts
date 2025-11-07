import { AppTheme } from '@/styles/theme.styled';

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

export {}