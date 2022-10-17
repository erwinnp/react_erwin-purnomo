import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useInputValue } from './useInputValue';

describe('custom hook for user input', () => {
  it('render component', () => {
    const { result } = renderHook(() => useInputValue());
    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  it('use input value for input.target.value', () => {
    const { result } = renderHook(() => useInputValue());
    act(() => {
      result.current.onChange({ target: { value: 'input user' } });
    });

    expect(result.current.value).toBe('input user');
  });

  it('use input value for input.target.innerText', () => {
    const { result } = renderHook(() => useInputValue());
    act(() => {
      result.current.onChange({ target: { innerText: 'input user' } });
    });

    expect(result.current.value).toBe('input user');
  });
});
