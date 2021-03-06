import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  AInput = React.createRef();
  goToStore = e => {
    e.preventDefault();
    const storeName = this.AInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }
  render() { 
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2> Please Enter a Store</h2>
          <input 
            type="text" 
            ref={this.AInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()}
          />
          <button type="submit"> Visit store -> </button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;