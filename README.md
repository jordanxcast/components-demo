# components-demo

The goal of this repo is to experiment with component architecture, accessibility and documentation, with the hope of defining some patterns and strategies that can be used in a component library repo.

1. Create the following components using native elements only:

- Label
- Input
- Select
- Form fields: Input, Select (containing both the base component, label and wrapper for formatting in a form layout)

2. Create documentation for all components

- Define a consistent format for documenting the available API and functionality for each component

3. Add RadixUI and compare the Select component to the Radix version to the native implementation

Questions:

1. Any recommended eslint rules?
2. Pattern for components in regard to spreading `...other` props to the component or if having it more strict to the props in the type is better?
3. Should the base components be organized in a separate directory like the form-fields are?
4. Thinking I should try to make the BaseInput component resemble the Input functionality in back-office as close as possible (supporting adornment for example) -- any thoughts there?
5. Any advice on how to handle the prop types in the InputFormField component? Since this is basically using three other components, what would be the way to define the prop types? Right now I have each prop being re-defined but i feel like there could be a cleaner way to do this?
