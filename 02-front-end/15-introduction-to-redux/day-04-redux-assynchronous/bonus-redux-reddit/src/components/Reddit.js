import React from 'react';
import { connect } from 'react-redux';

class Reddit extends React.Component {
  render() { 
    const {items, isFetching} = this.props;
    if (isFetching) {
      return <p>Loading...</p>;
    }
    if(items.length > 0) {
        return (
        items.map((item) => {
          return (
            <div key={item.data.name}> 
              <p>{item.data.title}</p>
            </div>
          )
        })
      )
    }
    return (
      <div>
        <h3>Your list has no Subreddits. Please refresh your Subreddits.</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.itemsReducer.isFetching,
    items: state.itemsReducer.items,
  };
};
 
export default connect(mapStateToProps)(Reddit);