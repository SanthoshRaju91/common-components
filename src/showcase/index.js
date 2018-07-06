import React, { Component } from "react";
import styled from "styled-components";
import "./styles/index.css";
import generateDataSet from "./utils";
import Stack from "../components/Stack";
import Heading from "../components/Heading";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Tabs from "../components/Tabs";
import TextArea from "../components/TextArea";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import List from "../components/List";
import ButtonGroup from "../components/ButtonGroup";
import Table from "../components/Table";
import Secondary from "../components/Secondary";
import Timer from "../components/Timer";
import Icon from "../components/Icon";
import TabbedButtons from "../components/TabbedButtons";
import FileUpload from "../components/FileUpload";

import { color, misc } from "../theme";

const Container = styled.div`
  width: ${props => props.width || "80%"};
  margin-bottom: 50px;
  border: 1px solid ${color.base.line};
  border-radius: ${misc.radius};
  padding: 20px;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const Render = styled.div`
  width: 60%;
  margin-top: 20px;
`;

const Decorated = styled.span`
  font-size: 0.8em;
  letter-spacing: 1px;
`;

const Block = props => (
  <Wrapper>
    <Container id={props.id} width={props.width}>
      <Heading text={props.id} type="doc" />
      <Render>{props.children}</Render>
    </Container>
  </Wrapper>
);
const tabButtons = [
  {
    id: 1,
    icon: "rss",
    label: "Blogs"
  },
  {
    id: 2,
    icon: "graduation-cap",
    label: "Learning"
  },
  {
    id: 3,
    icon: "sign-in",
    label: "Login"
  }
];

class ShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSet: generateDataSet()
    };
  }

  addMore = () => {
    this.setState(state => ({
      dataSet: [...state.dataSet, ...generateDataSet()]
    }));
  };

  fileDropped = files => {
    console.log(files);
  };

  fileRemoved = files => {
    console.log(files);
  };

  render() {
    const { dataSet } = this.state;

    return (
      <div>
        <Wrapper>
          <h1>Components - Design System.</h1>
        </Wrapper>
        <Block id="Button" width="60%">
          <Stack align="left">
            <Button type="primary" classes="classes" size="tiny">
              <Icon name="rocket" />Button
            </Button>

            <Button type="secondary" theme={{ type: "secondary" }} size="small">
              <Icon name="free-code-camp" /> Button
            </Button>

            <Button type="success">
              <Icon name="battery-full" /> Button
            </Button>

            <Button type="danger" size="large">
              <Icon name="envelope-o" />Button
            </Button>
          </Stack>
        </Block>

        <Block id="TextInput" width="60%">
          <TextInput defaultValue={"Hello World"} />
          <br />
          <br />
          <TextInput defaultValue={"Hello"} masked />
          <br />
          <br />
          <TextInput defaultValue={"Hello"} error={`This is not the format`} />
        </Block>

        <Block id="Tabs">
          <Tabs>
            <Tabs.Tab label="Tab1">
              This is Tab 1 content
              <br />
              <br />
              <Button type="success">
                Button <Icon name="battery-full" />
              </Button>
            </Tabs.Tab>
            <Tabs.Tab label="Tab2"> This is Tab 2 content</Tabs.Tab>
          </Tabs>
        </Block>

        <Block id="TextArea">
          <TextArea defaultValue={`Hello World`} />
          <br />
          <br />
          <TextArea defaultValue={`Hello World`} limit={12} />
          <br />
          <br />
          <TextArea
            defaultValue={`Hello World`}
            limit={10}
            error={`This is not the format`}
          />
          <br />
          <br />
          <TextArea defaultValue={`Hello World`} resizable={false} length={7} />
        </Block>

        <Block id="Card">
          <Card theme={{ cardLabel: "ada", cardBody: "body", type: "primary" }}>
            <p>
              Find some of the best coding solutions related to front end and
              tools contributed by Front End Masters of Deloitte Digital.
            </p>
          </Card>
          <br />
          <br />
          <Card
            theme={{ type: "ternary", cardLabel: "label", spinnerColor: "red" }}
            cardLabel={"ada"}
            isSpinnerShown
          >
            <div>
              Find some of the best coding solutions related to front end and
              tools contributed by Front End Masters of Deloitte Digital.
            </div>
          </Card>
        </Block>

        <Block id="Spinner">
          <Spinner />
        </Block>

        <Block id="Dropdown">
          <Dropdown
            onChange={value => {
              console.log(value);
            }}
          >
            <Dropdown.Option value="codecamp">
              <Icon name="free-code-camp" /> Free Code Camp
            </Dropdown.Option>

            <Dropdown.Option value="microchip">
              <Icon name="microchip" /> Micro Chip
            </Dropdown.Option>
          </Dropdown>
        </Block>

        <Block id="Tags">
          <Tag>Javascript</Tag>

          <Tag appearance="success">
            <Icon name="cloud" />React
          </Tag>

          <Tag appearance="warning">Ember</Tag>

          <Tag appearance="danger">Angular</Tag>

          <Tag appearance="secondary" size="small">
            <Icon name="telegram" />ML
          </Tag>
        </Block>

        <Block id="List">
          <List
            type="pill"
            items={[
              { id: 1, name: "New Hackathon is Here", actions: ["Register"] },
              { id: 2, name: "Virtual Reality session", actions: ["Play"] }
            ]}
          >
            {({ items, getItemsHelpers }) => {
              return (
                <div>
                  {items.map(current => (
                    <div key={current.id}>
                      <List.Item {...getItemsHelpers()}>
                        <Decorated>{current.name}</Decorated>

                        {current.actions.length > 0 && (
                          <List.ListAction>
                            <Stack align="left">
                              {current.actions.map((action, index) => (
                                <Button size="tiny">
                                  <Icon name="sign-in" /> {action}
                                </Button>
                              ))}
                            </Stack>
                          </List.ListAction>
                        )}
                      </List.Item>
                    </div>
                  ))}
                </div>
              );
            }}
          </List>
        </Block>

        <Block id="Table">
          <Button onClick={this.addMore} type="danger">
            Add More
          </Button>
          <Table
            data={dataSet}
            headers={[
              { id: "name", label: "Name" },
              { id: "age", label: "Age" },
              { id: "status", label: "Status" },
              { id: "visits", label: "Visits" }
            ]}
          >
            {row => {
              return (
                <div>
                  <Table.Cell>
                    {row.name} {row.id}
                  </Table.Cell>
                  <Table.Cell>{row.age}</Table.Cell>
                  <Table.Cell>{row.status}</Table.Cell>
                  <Table.Cell>{row.visits}</Table.Cell>
                  <Table.Cell>
                    <Stack align="left" width={50}>
                      <Secondary>
                        <Icon name="edit" />
                      </Secondary>
                      <Secondary>
                        <Icon name="close" />
                      </Secondary>
                    </Stack>
                  </Table.Cell>
                </div>
              );
            }}
          </Table>
        </Block>

        <Block id="Timer">
          <Timer seconds={90} notify={() => console.log("done")} />
        </Block>

        <Block id="Tabbed Buttons">
          <TabbedButtons
            tabs={tabButtons}
            handleClick={selected => console.log(selected)}
          />
        </Block>

        <Block id="FileUpload">
          <FileUpload
            fileDropped={this.fileDropped}
            fileRemoved={this.fileRemoved}
          />
        </Block>
      </div>
    );
  }
}

export default ShowCase;
