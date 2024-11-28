// src/components/RandomButton.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RandomButton } from './RandomButton';

describe('RandomButton', () => {
  it('calls onRandomize with a random number when clicked', () => {
    const mockHandler = vi.fn();
    render(<RandomButton onRandomize={mockHandler} />);

    const button = screen.getByText('Generate Random');
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalled();
    expect(typeof mockHandler.mock.calls[0][0]).toBe('number');
  });
});
