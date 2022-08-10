import { useState } from 'react';

export function Welcome() {
  const [show, setShow] = useState(false);

  function toggleShowAfterOneSecond() {
    setShow(!show);
  }

  return (
    <div data-test-id="welcome">
      <h1 data-test-id="title">
        {' '}
        Ugly text with some extra spaces and line breaks{' '}
      </h1>
      <ul>
        <li>first </li>
        <li>second </li>
        <li>third </li>
      </ul>
      <button onClick={toggleShowAfterOneSecond} data-test-id="show">
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <div data-test-id="wait">I am hear</div>}
    </div>
  );
}

export default Welcome;
