import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ handleChange, handleMinus, handlePlus }) => (
  <section className={css.controls}>
    <input type="number" name="amount" onChange={handleChange} />
    <button type="button" name="Deposit" onClick={handlePlus}>
      Deposit
    </button>
    <button type="button" name="Withdraw" onClick={handleMinus}>
      Withdraw
    </button>
  </section>
);
Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleMinus: PropTypes.func.isRequired,
  handlePlus: PropTypes.func.isRequired,
};

export default Controls;
