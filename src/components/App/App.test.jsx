import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from '.';

jest.mock('react-redux');

const tasks = [];

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});