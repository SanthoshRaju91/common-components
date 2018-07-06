import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, spacing } from "../../theme";

const Container = styled.div``;

const TabLink = styled.a`
    display: inline-block;
    padding: 10px 0;
    letter-spacing: ${spacing.letter};
    margin-right: 20px;
    color: ${props => (props.selected ? color.base.text : color.link.ddefault)};
    cursor: ${props => (props.selected ? "default" : "pointer")};
    border-bottom: 1px solid ${props =>
      props.selected ? color.base.text : "transparent"}
    margin-bottom: -1px;

    &:hover {
        color: ${props => (!props.selected ? color.link.defaultHover : null)}
    }
`;

const TabNavigation = styled.div`
  border-bottom: 1px solid ${color.base.line};
  ${TabLink}: last-child {
    margin-right: 0;
  }
`;
const TabContent = styled.div`
  padding-top: 20px;
`;

class Tabs extends Component {
  constructor(props) {
    super(props);
    const tabs = React.Children.toArray(this.props.children);

    this.state = {
      tabs,
      selectedTab: this.getSelectedTab(tabs)
    };
  }

  componentWillReceiveProps(newProps) {
    const tabs = React.Children.toArray(newProps.children);
    this.setState({
      tabs,
      selectedTab: this.getSelectedTab(tabs)
    });
  }

  getSelectedTab(tabs) {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].props.selected) return i;
    }

    return 0;
  }

  changeTab = index => {
    if (this.state.selectedTab !== index) {
      this.setState({
        selectedTab: index
      });
    }
  };

  render() {
    const { tabs, selectedTab } = this.state;
    return (
      <Container>
        <TabNavigation>
          {tabs.map((tab, index) => (
            <TabLink
              onClick={() => this.changeTab(index)}
              key={tab.props.label}
              selected={selectedTab === index}
            >
              {tab.props.label}
            </TabLink>
          ))}
        </TabNavigation>
        {tabs[selectedTab]}
      </Container>
    );
  }
}

Tabs.Tab = TabContent;

Tabs.propTypes = {
  children: PropTypes.children
};

export default Tabs;
