import React, { Component } from 'react';
import { Row, Col } from 'rsuite';
import { Markdown } from 'markdownloader';
import CodeView from 'react-code-view';
import { PageContainer } from 'rsuite-docs';
import 'react-code-view/lib/less/index.less';
import { Alert, Notify } from '../src';
import '../src/less/index.less';
import './less/index.less';

const babelOptions = {
  presets: ['stage-0', 'react', 'es2015'],
  plugins: ['transform-class-properties'],
};

class App extends Component {
  render() {
    return (
      <PageContainer
        activeKey="Notification"
        githubURL="https://github.com/rsuite/rsuite-notification"
      >
        <a id="README" className="target-fix" />
        <Markdown>{require('../README.md')}</Markdown>

        <h2>示例</h2>
        <Row>
          <Col md={12}>
            <CodeView
              source={require('./md/Alert.md')}
              dependencies={{
                Alert,
              }}
              babelTransformOptions={babelOptions}
            />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <CodeView
              source={require('./md/Notify.md')}
              dependencies={{
                Notify,
              }}
              babelTransformOptions={babelOptions}
            />
          </Col>
        </Row>
        <h2 id="API">API</h2>
        <Markdown>{require('./md/props.md')}</Markdown>
      </PageContainer>
    );
  }
}

export default App;
