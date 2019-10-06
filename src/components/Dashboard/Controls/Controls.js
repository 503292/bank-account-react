import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ handleChange, handleMinus, handlePlus }) => (
  <section className={css.controls}>
    <div className={css.wrapIntBut}>
      <input
        className={css.amount}
        type="number"
        name="amount"
        onChange={handleChange}
        placeholder=" enter sum ..."
      />
      <button
        className={`${css.depositBtn} ${css.btn}`}
        type="button"
        name="Deposit"
        onClick={handlePlus}
      >
        Deposit
      </button>
      <button
        className={`${css.withdrawBtn} ${css.btn}`}
        type="button"
        name="Withdraw"
        onClick={handleMinus}
      >
        Withdraw
      </button>
    </div>
  </section>
);
Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleMinus: PropTypes.func.isRequired,
  handlePlus: PropTypes.func.isRequired,
};

export default Controls;
