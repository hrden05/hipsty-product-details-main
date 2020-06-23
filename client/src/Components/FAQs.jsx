import React from 'react';

class FAQs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideFAQ: true,
    };

    this.onFAQClick = this.onFAQClick.bind(this);
  }

  onFAQClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default FAQs;
