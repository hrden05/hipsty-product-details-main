import React from 'react';

class FAQs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FAQ: this.props.FAQ || [],
      hideFAQ: true,
    };

    this.onFAQClick = this.onFAQClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      FAQ: this.props.FAQ,
    })
  }

  onFAQClick() {
    this.setState({
      hideFAQ: !this.state.hideFAQ,
    })
  }

  render() {
    return (
      <div>
        <div className='selectorStyling' onClick={this.onFAQClick}><b>{this.state.FAQ.store_FAQ_question}</b></div>
        {this.state.hideFAQ
          ?
          <div></div>
          :
          <div>{this.state.FAQ.store_FAQ_answer}</div>
        }
      </div>
    );
  }
}

export default FAQs;
