import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import Pop from './Pop';

let text;

describe('Pop', () => {
  it('Should hover in type show textContent', () => {

    description = 'descriptionContent';
    text = 'textContent';

    const { queryByText, queryAllByText } = render(
      <Pop
        description={description}
        text={text}
      />
    );
    
    expect(queryByText(text)).not.toBeInTheDocument();
    fireEvent.mouseEnter(queryAllByText(description)[0]);
    expect(queryByText(text)).toBeInTheDocument();
    fireEvent.mouseLeave(queryAllByText(description)[0]);
    expect(queryByText(text)).not.toBeInTheDocument();
  });
});
