import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
ClassNameGenerator.configure((componentName) => `example-remote--${componentName}`);