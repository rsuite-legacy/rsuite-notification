import React, { Component } from 'react';
import { Markdown } from 'markdownloader';
import Basic from './component/Basic';
import Decimals from './component/Decimals';
import ToggleStatus from './component/ToggleStatus';
import PrefixAndPostfix from './component/PrefixAndPostfix';
import Header from './component/Header';
import './less/index.less';
import './less/highlight.less';
import './less/style.less';

class App extends Component {
  handleOnChange = (value) => {
  }
  render() {
    return (
      <div className="doc-page">
        <Header />
        <div className="container">
          <h1>Rsuite InputNumber</h1>
          <p>通过鼠标或键盘，输入范围内的数值</p>
          <hr />
          <div>
            <h2>基本数字输入</h2>
            <div className="row">
              <div className="col-md-8">
                <Markdown>{require('./md/basic.md')}</Markdown>
              </div>
              <div className="col-md-4">
                <Basic />
              </div>
            </div>
          </div>

          <div>
            <h2>小数</h2>
            <p>和原生数字输入框一样，value的精度由step的小数位决定</p>
            <div className="row">
              <div className="col-md-8">
                <Markdown>{require('./md/decimals.md')}</Markdown>
              </div>
              <div className="col-md-4">
                <Decimals />
              </div>
            </div>
          </div>

          <div>
            <h2>状态切换</h2>
            <p>点击按钮切换状态</p>
            <div className="row">
              <div className="col-md-8">
                <Markdown>{require('./md/toggleStatus.md')}</Markdown>
              </div>
              <div className="col-md-4">
                <ToggleStatus />
              </div>
            </div>
          </div>

          <div>
            <h2>前缀、后缀</h2>
            <p>使用prefix 添加前缀，postfix 添加后缀</p>
            <div className="row">
              <div className="col-md-8">
                <Markdown>{require('./md/prefix.md')}</Markdown>
              </div>
              <div className="col-md-4">
                <PrefixAndPostfix />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
                <Markdown>{require('./md/props.md')}</Markdown>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
