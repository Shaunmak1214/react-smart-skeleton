// Button.stories.ts|tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from '../components/Button';
export default { 
  title: 'Button',
  component: Button,
} as Meta;

export const Primary: Story<any> = () => <Button />;