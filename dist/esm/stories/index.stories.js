// Button.stories.ts|tsx
import React from 'react';
import Button from '../components/Button';
export default {
    title: 'Button',
    component: Button,
};
export var Primary = function () { return React.createElement(Button, null); };
