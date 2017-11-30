import React, { Component } from 'react';
import { Header, Navbar, Nav, Row, Col } from 'rsuite';
import Affix from 'rsuite-affix';
import { Markdown } from 'markdownloader';
import CodeView from 'react-code-view';
import 'react-code-view/lib/less/index.less';
import { PLACEMENT_TYPES } from '../src/constants/index';
import { Alert, Notify } from '../src';
import AlertDemo from './component/Alert';
import NotifyDemo from './component/Notify';
import '../src/less/index.less';
import './less/index.less';

const babelOptions = {
  presets: ['stage-0', 'react', 'es2015'],
  plugins: [
    'transform-class-properties'
  ]
};

class App extends Component {
  render() {
    return (
      <div className="doc-page">
        <Header inverse>
          <div className="container">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#"><span className="prefix">R</span>Suite Notification</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <Nav.Item href="#API">API</Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav.Item href="https://rsuite.github.io">RSuite</Nav.Item>
                <Nav.Item href="https://github.com/rsuite/rsuite-notification">GitHub</Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Header>
        <div className="container">
          <Row>
            <Col md={2} xsHidden smHidden>
              <Affix offsetTop={70}>
                <Nav pills stacked className="sidebar">
                  <Nav.Item href="#README"># 概述</Nav.Item>
                  <Nav.Item href="#examples"># 示例</Nav.Item>
                  <Nav.Item href="#alert"># Alert</Nav.Item>
                  <Nav.Item href="#notiy"># Notification</Nav.Item>
                  <Nav.Item href="#API"># API</Nav.Item>
                </Nav>
              </Affix>
            </Col>
            <Col md={10}>
              <a id="README" className="target-fix" />
              <Markdown>{require('../README.md')}</Markdown>
              <hr id="alert" className="target-fix" />
              <Row>
                <Col md={12}>
                  <CodeView
                    source={require('./md/Alert.md')}
                    dependencies={{
                      Alert
                    }}
                    babelTransformOptions={babelOptions}
                  />
                </Col>
              </Row>
              <hr id="notify" className="target-fix" />
              <Row>
                <Col md={12}>
                  <CodeView
                    source={require('./md/Notify.md')}
                    dependencies={{
                      Notify
                    }}
                    babelTransformOptions={babelOptions}
                  />
                </Col>
              </Row>
              <h2 id="API"><code>{'API'}</code></h2>
              <Markdown>
                {require('./md/props.md')}
              </Markdown>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
