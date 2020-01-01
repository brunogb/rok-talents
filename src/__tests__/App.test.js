import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Commanders from '../data/Commanders.json';
import { dataVersion } from '../../package.json';

afterEach(cleanup);

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App url="/" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('URL', () => {
    it('renders empty build correctly', () => {
      const url = `/`;
      const { asFragment } = render(<App url={url} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('renders build example 1 correctly', () => {
      const url = `?1;1;irnsscpkv;faaaaaaaaa;issralahnq`;
      const { asFragment } = render(<App url={url} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('renders build example 2 correctly', () => {
      const url = `?1;4;imrskma25kz;aaaaaaaaaa;isbsfkmcp3`;
      const { asFragment } = render(<App url={url} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('causes invalid modal when incorrect data version', () => {
      const url = `?${dataVersion + 1};1;irnsscpkv;faaaaaaaaa;issralahnq`;
      const { getByTestId } = render(<App url={url} />);

      expect(document.body).toHaveClass('modal-open');
      expect(getByTestId('invalid-modal-body')).toHaveTextContent(
        'Incorrect game data version'
      );
    });

    it('causes invalid modal when commander ID is unknown', () => {
      const url = `?1;${Object.keys(Commanders).length +
        1};irnsscpkv;faaaaaaaaa;issralahnq`;
      const { getByTestId } = render(<App url={url} />);

      expect(document.body).toHaveClass('modal-open');
      expect(getByTestId('invalid-modal-body')).toHaveTextContent(
        'Unknown commander ID'
      );
    });

    it('causes invalid modal when the talent array is the wrong length', () => {
      const url = `?1;1;irnsscpkv;faaaaaaaaa;issralahn`;
      const { getByTestId } = render(<App url={url} />);

      expect(document.body).toHaveClass('modal-open');
      expect(getByTestId('invalid-modal-body')).toHaveTextContent(
        'Incorrect number of talents'
      );
    });

    it('causes invalid modal when too many points assigned to a talent', () => {
      const url = `?1;1;irnsscpkv;kaaaaaaaaa;issralahnq`;
      const { getByTestId } = render(<App url={url} />);

      expect(document.body).toHaveClass('modal-open');
      expect(getByTestId('invalid-modal-body')).toHaveTextContent(
        'Too many points assigned in talent'
      );
    });

    it('causes invalid modal when too many points spent', () => {
      const url = `?1;1;irnsscpkv;faaaaaaaab;issralahnq`;
      const { getByTestId } = render(<App url={url} />);

      expect(document.body).toHaveClass('modal-open');
      expect(getByTestId('invalid-modal-body')).toHaveTextContent(
        'Number of spent talent points exceeds maximum'
      );
    });

    it('causes invalid modal when too many URL params', () => {
      const url = `?1;1;irnsscpkv;faaaaaaaab;issralahnq;123`;
      const { getByTestId } = render(<App url={url} />);

      expect(document.body).toHaveClass('modal-open');
      expect(getByTestId('invalid-modal-body')).toHaveTextContent(
        'Incorrect number of build parameters '
      );
    });

    it('causes invalid modal when too few URL params', () => {
      const url = `?1;1;irnsscpkv;faaaaaaaab`;
      const { getByTestId } = render(<App url={url} />);

      expect(document.body).toHaveClass('modal-open');
      expect(getByTestId('invalid-modal-body')).toHaveTextContent(
        'Incorrect number of build parameters '
      );
    });
  });
});
