import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FormCoding from '../components/FormCoding';

describe('Form Coding', () => {
  test('renders Form Coding', () => {
    render(<FormCoding />);
    expect(
      screen.getByText('Pendaftaran Peserta Coding Bootcamp')
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
  });

  test('renders input Form', () => {
    render(<FormCoding />);
    const inputNama = screen.getByRole('textbox', { name: /nama/i });
    const inputEmail = screen.getByRole('textbox', { name: /email/i });
    const inputHandphone = screen.getByRole('spinbutton', {
      name: /no handphone/i,
    });
    fireEvent.input(inputNama, {
      target: { value: 'erwin' },
    });

    fireEvent.input(inputEmail, {
      target: { value: 'erwin@gmail.com' },
    });

    fireEvent.input(inputHandphone, {
      target: { value: 87889822313 },
    });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue('erwin');
    expect(screen.getByLabelText(/Email:/)).toHaveValue('erwin@gmail.com');
    expect(screen.getByLabelText(/No Handphone:/)).toHaveValue(87889822313);
  });

  test('renders submit', () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {
      target: { value: 'erwin' },
    });
    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue('erwin');
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    const alertSuccess = jest.spyOn(window, 'alert').mockImplementation();

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(alertSuccess).toHaveBeenCalledTimes(1);
  });

  it('Should error when input', () => {
    render(<FormCoding />);
    const inputNama = screen.getByRole('textbox', { name: /nama/i });
    const inputEmail = screen.getByRole('textbox', { name: /email/i });
    const inputHandphone = screen.getByRole('spinbutton', {
      name: /no handphone/i,
    });
    fireEvent.input(inputNama, {
      target: { value: 'Erwin2002' },
    });

    fireEvent.input(inputEmail, {
      target: { value: 'erwin.gmail' },
    });

    fireEvent.input(inputHandphone, {
      target: { value: '087789' },
    });

    expect(inputNama).toHaveValue('Erwin2002');
    expect(inputEmail).toHaveValue('erwin.gmail');
    expect(inputHandphone).toHaveDisplayValue('087789');

    expect(
      screen.getByText('Nama Lengkap Harus Berupa Huruf')
    ).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByText('No Handphone Tidak Sesuai')).toBeInTheDocument();
  });

  it('Should error when submit', () => {
    render(<FormCoding />);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    const inputNama = screen.getByRole('textbox', { name: /nama/i });
    const inputEmail = screen.getByRole('textbox', { name: /email/i });
    const inputHandphone = screen.getByRole('spinbutton', {
      name: /no handphone/i,
    });
    const inputLatar = screen.getByRole('radio', { name: /pendidikan/i });
    const inputKelas = screen.getByRole('combobox', { name: /kelas/i });

    userEvent.selectOptions(inputKelas, 'reactjs');

    fireEvent.input(inputNama, {
      target: { value: 'Erwin2002' },
    });

    fireEvent.input(inputEmail, {
      target: { value: 'erwin@gmail.com' },
    });

    fireEvent.input(inputHandphone, {
      target: { value: '087789' },
    });

    fireEvent.change(inputLatar);

    // fireEvent.click(screen.getByLabelText(/IT/), { target: { value: 'IT' } });

    // fireEvent.change(inputLatar);

    fireEvent.click(screen.getByLabelText(/Non IT/), {
      target: { value: 'Non IT' },
    });

    fireEvent.click(screen.getByText('Submit'));

    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
