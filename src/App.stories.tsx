import React from 'react';
import {Meta, Story} from '@storybook/react';
import App from "./App";
import {ProviderDecorator} from "./decorators/ProviderDecorator";
import {RouterDecorator} from "./decorators/RouterDecorator";

export default {
    title: 'App',
    component: App,
    decorators: [ProviderDecorator, RouterDecorator]
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const AppExample = Template.bind({});
AppExample.args = {};