import React from 'react';
import * as SVG from './svgFiles.jsx';

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
      <div className='FAQs'>
        <div className='FAQQuestionButton FAQButton' onClick={this.onFAQClick}>
          <span className='FAQQuestion'><b>{this.state.FAQ.store_FAQ_question}</b></span>
          {this.state.hideFAQ
            ?
              <span>{SVG.FAQsArrow}</span>
            :
              <span>{SVG.FAQsArrowRotate}</span>
          }
        </div>
        {this.state.hideFAQ
          ?
          <div></div>
          :
          <p className='FAQAnswer'>{this.state.FAQ.store_FAQ_answer}</p>
        }
      </div>
    );
  }
}

export default FAQs;
