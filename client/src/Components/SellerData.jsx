import React from 'react';
import FAQs from './FAQs.jsx';

class SellerData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideFAQs: true,
    };

    this.onFAQClick = this.onFAQClick.bind(this);
  }

  onFAQClick() {
    this.setState({
      hideFAQs: !this.state.hideFAQs,
    });
  }

  render() {
    return (
      <div className='sellerData'>
        <div>
          <span className='selectorStyling' onClick={this.onFAQClick}><b>FAQs</b></span>
        {this.state.hideFAQs
          ?
          <p></p>
          :
          <div className='FAQs'>
            {this.props.store.store_FAQs.map((FAQ) => {
            return (<div key={FAQ._id}><FAQs FAQ={FAQ} /></div>);
            })}
          </div>
        }
        </div>
        <p className='greyText'>Meet your seller</p>
        <div className='storeOwner'>
          <img className='storeOwnerAvatar' src={this.props.store.store_owner_avatar} alt='' style={{ borderRadius: '100%' }} />
          <div className='storeOwnerInfo'>
            {this.props.store.store_owner}
            <div className='greyText'>Owner of <a href='/' className='storeOwnerLink'>{this.props.store.store_name}</a></div>
          </div>
        </div>
        <div className='responseTime'>
          <p>
            <button type='button' className='messageButton'>
              Message {this.props.store.store_owner}
            </button>
          </p>
          <p className='greyText'>This seller usually responds <b>within {this.props.store.store_response_time} hours.</b></p>
        </div>
      </div>
    );
  }
}

export default SellerData;
