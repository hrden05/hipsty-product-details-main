import React from 'react';

class SellerData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideFAQs: true,
    };

    this.onFAQClick = this.onFAQClick.bind(this);
  }

  onFAQClick() {
    console.log('clicked');
    this.setState({
      hideFAQs: !this.state.hideFAQs,
    });
  }

  render() {
    return (
      <div className='sellerData'>
        <div className='selectorStyling' onClick={this.onFAQClick}>FAQs</div>
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
            <button type='button'>
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
