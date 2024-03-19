import {expect, test} from 'vitest';
import {render} from '@testing-library/react';
import LandingPage from '../pages/LandingPage/LandingPage';
import App from '../App';

// test('LandingPage', () => {
//   const {getByText} = render(<LandingPage />);
//   expect(getByText('Create Post')).toBeInTheDocument();
// });

// test('Renders App', () => {
//     render(<App />);
//     expect(true).toBeTruthy();
//   });

test('1 + 1', () => {
    // render(<LandingPage />);
    expect(1 + 1).toEqual(2);
  });