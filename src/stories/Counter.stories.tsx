import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Counter from '../Components/Counter'
import { CounterProvider } from '../context/CounterContext'

// Default export to tell Storybook how to render the story
export default {
  title: 'Example/Counter',
  component: Counter
} as Meta<typeof Counter>

// Template for stories
const Template: StoryFn<React.ComponentProps<typeof Counter>> = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
)

// Export the default story
export const Default = Template.bind({})
Default.args = {}
