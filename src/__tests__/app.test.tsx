import {expect, test} from 'vitest';

// test('LandingPage', () => {
//   render(<LoginForm />);
//   const check = screen.getByText(/Not Registered?/i);
//   expect(check).toBeVisible();
// });

test('demo', () => { expect(true).toBe(true) })
// test('Renders App', () => {
//     render(<App />);
//     expect(true).toBeTruthy();
//   });

test('1 + 1', () => {
    // render(<LandingPage />);
    expect(1 + 1).toEqual(2);
  });