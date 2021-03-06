import React from 'react';

import { Switch, FormLabel } from '@grafana/ui';

export interface Style {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}

interface Props {
  oldStyle: Style;
  saveParent: (style: Style) => void;
}

interface State {
  style: Style;
}

/**
 * def
 */
class StyleComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      style: this.props.oldStyle, //{ bold: false, italic: false, underline: false },
    };
  }

  /** save data in Parent */
  callBack = () => {
    this.props.saveParent(this.state.style);
  };

  /** change bold */
  onChangeBold = () => {
    const style = this.state.style;
    style.bold = !style.bold;
    this.setState({
      style: style,
    });
    this.callBack();
  };

  /** change italic */
  onChangeItalic = () => {
    const style = this.state.style;
    style.italic = !style.italic;
    this.setState({
      style: style,
    });
    this.callBack();
  };

  /** change underline */
  onChangeUnderline = () => {
    const style = this.state.style;
    style.underline = !style.underline;
    this.setState({
      style: style,
    });
    this.callBack();
  };

  /**
   * result
   */
  render() {
    return (
      <section>
        <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Bold</FormLabel>
          <Switch label="" checked={this.state.style.bold} onChange={this.onChangeBold} />
        </div>
        <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Italic</FormLabel>
          <Switch label="" checked={this.state.style.italic} onChange={this.onChangeItalic} />
        </div>
        <div style={{ display: 'flex' }}>
          <FormLabel width={15}>Underline</FormLabel>
          <Switch label="" checked={this.state.style.underline} onChange={this.onChangeUnderline} />
        </div>
        {/* <Button onChange={this.onChangeBold}>Bold</Button>
        <Button onChange={this.onChangeItalic}>Italic</Button>
        <Button onChange={this.onChangeUnderline}>Underline</Button> */}
      </section>
    );
  }
}
export default StyleComponent;
