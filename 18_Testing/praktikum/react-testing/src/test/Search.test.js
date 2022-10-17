import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';
import axios from 'axios';

jest.mock('axios');

describe('Search Component', () => {
  //test fetch API
  it('Test fetch API and display API', async () => {
    render(<Search />);
    const stories = [
      { storyID: '1', title: 'flow' },
      { storyID: '2', title: 'JavaScript' },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
  });

  it('failed to fetch API', async () => {
    render(<Search />);

    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    const errMsg = await screen.findByText('Ada yang error ...');
    expect(errMsg).toBeInTheDocument();
  });

  it('search box inputed by user', async () => {
    render(<Search />);

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { vaue: '' } })
    );

    await act(async () => {
      const input = screen.getByRole('textbox');
      await fireEvent.input(input, {
        target: {
          value: 'Relicensing React',
        },
      });

      const inputTxt = await screen.findByPlaceholderText(/Tulis Cerita/);

      expect(inputTxt).toHaveValue('Relicensing React');
    });
  });
});
