import React from 'react';

function Html5 (){
    return (
        <div style={{padding: '20px'}}>
            <h1>HTML5 元素示例</h1>
            <ol>
                <li><a href="#layout">容器</a></li>
                <li>- <a href="#nav">导航</a></li>
                <li>- <a href="#typo">排版</a></li>
                <li><a href="#display">数据展示</a></li>
                <li><a href="#form">数据录入</a></li>
                <li><a href="#feedback">反馈</a></li>
                <li><a href="#slot">插槽</a></li>
                <li><a href="#legacy">遗留</a></li>
            </ol>

            <h2 id='layout'>容器</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>div</td>
                        <td>Generic flow container, or container for name-value groups in dl elements</td>
                    </tr>
                    <tr>
                        <td>span</td>
                        <td>Generic phrasing container</td>
                    </tr>
                    <tr>
                        <td>header</td>
                        <td>Introductory or navigational aids for a page or section</td>
                    </tr>
                    <tr>
                        <td>section</td>
                        <td>Generic document or application section</td>
                    </tr>                                                            
                    <tr>
                        <td>nav</td>
                        <td>Section with navigational links</td>
                    </tr>
                    <tr>
                        <td>search</td>
                        <td>Container for search controls</td>
                    </tr>
                    <tr>
                        <td>main</td>
                        <td>Container for the dominant contents of the document</td>
                    </tr>
                    <tr>
                        <td>aside</td>
                        <td>Sidebar for tangentially related content</td>
                    </tr>
                    <tr>
                        <td>article</td>
                        <td>Self-contained syndicatable or reusable composition</td>
                    </tr>
                    <tr>
                        <td>footer</td>
                        <td>Footer for a page or section</td>
                    </tr>                                                                                                                        
                </tbody>
            </table>

            <p>示例：</p>
            <div>div</div>
            <span>span</span>
            <header>header</header>
            <section>section</section>
            <nav>nav</nav>
            <search>search</search>
            <main>main</main>
            <aside>aside</aside>
            <article>article</article>
            <footer>footer</footer>

            <hr />
            <h2 id='nav'>导航</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>menu</td>
                        <td>Menu of commands</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>Hyperlink</td>
                    </tr>
                    <tr>
                        <td>map</td>
                        <td>Image map</td>
                    </tr>
                    <tr>
                        <td>area</td>
                        <td>Hyperlink or dead area on an image map</td>
                    </tr>
                    <tr>
                        <td>hr</td>
                        <td>Thematic break</td>
                    </tr>
                </tbody>
            </table>

            <p>示例：</p>
            <menu>
                <li>menu 1</li>
                <li>menu 2</li>
                <li>menu 3</li>
            </menu>
            <menu type="context">
                <li>context menu 1</li>
                <li>context menu 2</li>
                <li>context menu 3</li>
            </menu>
            <menu type="toolbar">
                <li>toolbar menu 1</li>
                <li>toolbar menu 2</li>
                <li>toolbar menu 3</li>
            </menu>
            <a href="#typo">#typo</a>
            <a href="https://vikexia.com" target="_blank">_blank target</a>
            <a href="https://vikexia.com">current target</a>
            <a href="mailto:120758164@qq.com">mailto</a>
            <a href="tel:15071290194">tel</a>
            <map name="">
                <area shape="circle" coords="" href="" alt="" />
                <area shape="poly" coords="" href="" alt="" />
                <area shape="rect" coords="" href="" alt="" />
                <area shape="default" coords="" href="" alt="" />
            </map>

            <hr />
            <h2 id='typo'>排版</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>hgroup</code></td>
                        <td>Heading container</td>
                    </tr>
                    <tr>
                        <td><code>h1-h6</code></td>
                        <td>Heading</td>
                    </tr>
                    <tr>
                        <td><code>p</code></td>
                        <td>Paragraph</td>
                    </tr>
                    <tr>
                        <td><code>address</code></td>
                        <td>Contact information for a page or article element</td>
                    </tr>
                    <tr>
                        <td><code>strong</code></td>
                        <td>Importance</td>
                    </tr>
                    <tr>
                        <td><code>b</code></td>
                        <td>Keywords</td>
                    </tr>
                    <tr>
                        <td><code>em</code></td>
                        <td>Stress emphasis</td>
                    </tr>
                    <tr>
                        <td><code>i</code></td>
                        <td>Alternate voice</td>
                    </tr>
                    <tr>
                        <td><code>small</code></td>
                        <td>Side comment</td>
                    </tr>
                    <tr>
                        <td><code>sup</code></td>
                        <td>Superscript</td>
                    </tr>
                    <tr>
                        <td><code>sub</code></td>
                        <td>Subscript</td>
                    </tr>
                    <tr>
                        <td><code>del</code></td>
                        <td>A removal from the document</td>
                    </tr>
                    <tr>
                        <td><code>s</code></td>
                        <td>Inaccurate text</td>
                    </tr>
                    <tr>
                        <td><code>ins</code></td>
                        <td>An addition to the document</td>
                    </tr>
                    <tr>
                        <td><code>u</code></td>
                        <td>Unarticulated annotation</td>
                    </tr>
                    <tr>
                        <td><code>ruby</code></td>
                        <td>Ruby annotation(s)</td>
                    </tr>
                    <tr>
                        <td><code>rt</code></td>
                        <td>Ruby annotation text</td>
                    </tr>
                    <tr>
                        <td><code>rp</code></td>
                        <td>Parenthesis for ruby annotation text</td>
                    </tr>
                    <tr>
                        <td><code>abbr</code></td>
                        <td>Abbreviation</td>
                    </tr>
                    <tr>
                        <td><code>dfn</code></td>
                        <td>Defining instance</td>
                    </tr>
                    <tr>
                        <td><code>bdo</code></td>
                        <td>Text directionality formatting</td>
                    </tr>
                    <tr>
                        <td><code>bdi</code></td>
                        <td>Text directionality isolation</td>
                    </tr>
                    <tr>
                        <td><code>wbr</code></td>
                        <td>Line breaking opportunity</td>
                    </tr>
                    <tr>
                        <td><code>br</code></td>
                        <td>Line break, e.g. in poem or postal address</td>
                    </tr>
                    <tr>
                        <td><code>q</code></td>
                        <td>Quotation</td>
                    </tr>
                    <tr>
                        <td><code>blockquote</code></td>
                        <td>A section quoted from another source</td>
                    </tr>
                    <tr>
                        <td><code>cite</code></td>
                        <td>Title of a work</td>
                    </tr>
                    <tr>
                        <td><code>code</code></td>
                        <td>Computer code	</td>
                    </tr>
                    <tr>
                        <td><code>samp</code></td>
                        <td>Computer output</td>
                    </tr>
                    <tr>
                        <td><code>var</code></td>
                        <td>Variable</td>
                    </tr>
                    <tr>
                        <td><code>kbd</code></td>
                        <td>User input</td>
                    </tr>
                    <tr>
                        <td><code>mark</code></td>
                        <td>Highlight</td>
                    </tr>
                    <tr>
                        <td><code>pre</code></td>
                        <td>Block of preformatted text</td>
                    </tr>
                    <tr>
                        <td><code>dl</code></td>
                        <td>Association list consisting of zero or more name-value groups</td>
                    </tr>
                    <tr>
                        <td><code>dt</code></td>
                        <td>Legend for corresponding dd element(s)</td>
                    </tr>
                    <tr>
                        <td><code>dd</code></td>
                        <td>Content for corresponding dt element(s)</td>
                    </tr>
                    <tr>
                        <td><code>ol</code></td>
                        <td>Ordered list</td>
                    </tr>
                    <tr>
                        <td><code>ul</code></td>
                        <td>List</td>
                    </tr>
                    <tr>
                        <td><code>li</code></td>
                        <td>List item</td>
                    </tr>
                    <tr>
                        <td><code>table</code></td>
                        <td>Table</td>
                    </tr>
                    <tr>
                        <td><code>caption</code></td>
                        <td>Table caption</td>
                    </tr>
                    <tr>
                        <td><code>colgroup</code></td>
                        <td>Group of columns in a table</td>
                    </tr>
                    <tr>
                        <td><code>col</code></td>
                        <td>Table column</td>
                    </tr>
                    <tr>
                        <td><code>thead</code></td>
                        <td>Group of heading rows in a table</td>
                    </tr>
                    <tr>
                        <td><code>tbody</code></td>
                        <td>Group of rows in a table</td>
                    </tr>
                    <tr>
                        <td><code>tfoot</code></td>
                        <td>Group of footer rows in a table</td>
                    </tr>
                    <tr>
                        <td><code>tr</code></td>
                        <td>Table row</td>
                    </tr>
                    <tr>
                        <td><code>th</code></td>
                        <td>Table header cell</td>
                    </tr>
                    <tr>
                        <td><code>td</code></td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td><code>data</code></td>
                        <td>Machine-readable equivalent</td>
                    </tr>
                    <tr>
                        <td><code>time</code></td>
                        <td>Machine-readable equivalent of date- or time-related data</td>
                    </tr>
                </tbody>
            </table>

            <p>示例：</p>
            <hgroup>hgroup</hgroup>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <p>p</p>
            {/* 文档/文章的联系信息 */}
            <address>
                <p>🏠 位置</p>
                <p>☎️ 电话</p>
                <p>📧 邮箱</p>
             </address>
            {/* 加粗，强调 */}
            <strong>strong </strong>
            {/* 加粗 */}
            <b>b </b>
            {/* 斜体，强调 */}
            <em>em </em>
            {/* 斜体 */}
            <i>i </i>
            {/* 使字体变小 */}
            <small>small </small>
            {/* 上标 */}
            <sup>sup </sup>
            {/* 下标 */}
            <sub>sub </sub>
            {/* 删除线 */}
            <del>del </del>
            <s>s </s>
            {/* 下划线 */}
            <ins>ins </ins>
            <u>u </u>
            {/* 注释/注音 */}
            <ruby>
                東京 
                {/* 音标 */}
                <rt>とうきょう</rt>
                {/* 不支持 ruby 的浏览器的回退内容 */}
                <rp>東京 </rp>
             </ruby>
             {/* 缩写形式 */}
             <abbr title="HyperText Markup Language"> abbr HTML </abbr>
             {/* 定义条目 */}
             <dfn>dfn《红楼梦》</dfn>
             {/* 局部控制 文本显示方向 */}
             <bdo dir="rtl">bdo rtl <bdi>bdi </bdi> </bdo>

             {/* 单词换行 */}
             <wbr />
             {/* 换行 */}
             <br />

             {/* 引号 */}
             <q>q</q>
             {/* 引用块 */}
             <blockquote>blockquote</blockquote>
             {/* 简述引用 */}
             <cite>cite </cite>

             {/* 代码 */}
             <code>code </code>
             {/* 说明文本 */}
             <samp>samp </samp>
             {/* 变量文本 */}
             <var>var </var>
             {/* 键盘文本 */}
             <kbd>kbd </kbd>
             {/* 高亮 */}
             <mark>mark </mark>
             {/* 代码块 */}
             <pre>pre
             &lt;p&gt;Hello, &amp; welcome to &lt;strong&gt;Comate&lt;/strong&gt;!&lt;/p&gt;
             </pre>

            {/* 列表 */}
             <dl>
                <dt>dt</dt>
                <dd>dd</dd>
                <dt>dt</dt>
                <dd>dd</dd>
             </dl>
             <ol>
                <li>li</li>
                <li>li</li>
             </ol>
             <ul>
                <li>li</li>
                <li>li</li>
             </ul>

            {/* 表格 */}
             <table>
                <caption>caption</caption>
                <colgroup>
                    <col span={2}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>th</th>
                        <th>th</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>td</td>
                        <td>td</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>td</td>
                        <td>td</td>
                    </tr>
                </tfoot>
             </table>

            {/* 定义内容的机器可读翻译 */}
            <data value="10001">衫衣 </data>
            {/* 定义机器可读的时间信息 */}
            <time dateTime="2022-01-01">January 1, 2022</time>

            <hr />
            <h2 id='display'>数据展示</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>figure</code></td>
                        <td>Figure with optional caption</td>
                    </tr>
                    <tr>
                        <td><code>figcaption</code></td>
                        <td>Caption for figure</td>
                    </tr>
                    <tr>
                        <td><code>picture</code></td>
                        <td>Image</td>
                    </tr>
                    <tr>
                        <td><code>img</code></td>
                        <td>Image</td>
                    </tr>
                    <tr>
                        <td><code>iframe</code></td>
                        <td>Child navigable</td>
                    </tr>
                    <tr>
                        <td><code>embed</code></td>
                        <td>Plugin</td>
                    </tr>
                    <tr>
                        <td><code>object</code></td>
                        <td>Image, child navigable, or plugin</td>
                    </tr>
                    <tr>
                        <td><code>canvas</code></td>
                        <td>Scriptable bitmap canvas</td>
                    </tr>
                    <tr>
                        <td><code>audio</code></td>
                        <td>Audio player</td>
                    </tr>
                    <tr>
                        <td><code>video</code></td>
                        <td>Video player</td>
                    </tr>
                    <tr>
                        <td><code>source</code></td>
                        <td>Image source for img or media source for video or audio</td>
                    </tr>
                    <tr>
                        <td><code>track</code></td>
                        <td>Timed text track</td>
                    </tr>
                </tbody>
            </table>

            <p>示例：</p>
            <figure>
                <figcaption>figcaption</figcaption>
                <img src="https://img1.baidu.com/it/u=3807313837,3586889794&fm=253&fmt=auto&app=138&f=PNG?w=320&h=331" width={60} alt="" srcset="" />
                <img src="https://img1.baidu.com/it/u=3807313837,3586889794&fm=253&fmt=auto&app=138&f=PNG?w=320&h=331" width={60} alt="" srcset="" />
            </figure>
            <picture>
                picture
                {/* <source src="https://img1.baidu.com/it/u=3807313837,3586889794&fm=253&fmt=auto&app=138&f=PNG?w=320&h=331" width={60} type="" /> */}
                <img src="https://img1.baidu.com/it/u=3807313837,3586889794&fm=253&fmt=auto&app=138&f=PNG?w=320&h=331" width={60} alt="" />
                <img src="https://img1.baidu.com/it/u=3807313837,3586889794&fm=253&fmt=auto&app=138&f=PNG?w=320&h=331" width={60} alt="" />
            </picture>
            <br />
            <img src="https://img1.baidu.com/it/u=3807313837,3586889794&fm=253&fmt=auto&app=138&f=PNG?w=320&h=331" width={60} alt="" />
            {/* 子框架 */}
            <iframe src="">iframe</iframe>
            {/* 插件 */}
            <embed src="" type="" />
            {/* 图片、子框架和插件 */}
            <object data="" type=""></object>
            {/* 可脚本化的位图画布 */}
            <canvas></canvas>

            {/* 音频 */}
            <audio src="">
                <source src="" type="" />
                <track />
            </audio>
            {/* 视频 */}
            <video src="">
                <source src="" type="" />
                <track />
            </video>

            <hr />
            <h2 id='form'>数据录入</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>form</code></td>
                        <td>User-submittable form</td>
                    </tr>
                    <tr>
                        <td><code>fieldset</code></td>
                        <td>Group of form controls</td>
                    </tr>
                    <tr>
                        <td><code>legend</code></td>
                        <td>Caption for fieldset</td>
                    </tr>
                    <tr>
                        <td><code>label</code></td>
                        <td>Caption for a form control</td>
                    </tr>
                    <tr>
                        <td><code>input</code></td>
                        <td>Form control</td>
                    </tr>
                    <tr>
                        <td><code>textarea</code></td>
                        <td>Multiline text controls</td>
                    </tr>
                    <tr>
                        <td><code>select</code></td>
                        <td>List box control</td>
                    </tr>
                    <tr>
                        <td><code>optgroup</code></td>
                        <td>Group of options in a list box</td>
                    </tr>
                    <tr>
                        <td><code>option</code></td>
                        <td>Option in a list box or combo box control</td>
                    </tr>
                    <tr>
                        <td><code>datalist</code></td>
                        <td>Container for options for combo box control</td>
                    </tr>
                    <tr>
                        <td><code>button</code></td>
                        <td>Button control</td>
                    </tr>
                    <tr>
                        <td><code>output</code></td>
                        <td>Calculated output value</td>
                    </tr>
                </tbody>
            </table>

            <p>示例：</p>
            <form action="">
                <fieldset>
                    <legend>legend</legend>

                    {/* 文本框 */}
                    <label htmlFor="">
                        <input type="text" placeholder='type:text' />
                    </label>
                    {/* 搜索框 */}
                    <input type="search" name="" id="" placeholder='type:search' />
                    {/* ，密码输入框 */}
                    <input type="password" name="" id="" placeholder='type:password' />
                    {/* ，电子邮箱输入框 */}
                    <input type="email" name="" id="" placeholder='type:email' />
                    {/* ，网址输入框 */}
                    <input type="url" name="" id="" placeholder='type:url' />
                    {/* ，电话输入框 */}
                    <input type="tel" name="" id="" placeholder='type:tel' />
                    {/* ，数字输入框 */}
                    <input type="number" name="" id="" placeholder='type:number' />
                    {/* ，隐藏域 */}
                    <input type="hidden" name="" placeholder='type:hidden' />
                    {/* 多行文本框 */}
                    <textarea name="" id="" placeholder='textarea' ></textarea>

                    <br />

                    {/* 单选框 */}
                    <input type="radio" name="" id="" placeholder='radio' />
                    {/* 复选框 */}
                    <input type="checkbox" name="" id="" placeholder='checkbox' />
                    {/* 颜色选择器 */}
                    <input type="color" name="" id="" placeholder='color' />
                    {/* 文件选择器 */}
                    <input type="file" name="" id="" placeholder='file' />
                    {/* 日期选择器 */}
                    <input type="date" name="" id="" placeholder='date' />
                    {/* 时间选择器 */}
                    <input type="time" name="" id="" placeholder='time' />
                    {/* 日期时间选择器 */}
                    <input type="datetime" name="" id="" placeholder='datetime' />
                    {/* 日期时间（本地）选择器 */}
                    <input type="datetime-local" name="" id="" placeholder='datetime-local' />
                    {/* 月选择器 */}
                    <input type="month" name="" id="" placeholder='month' />
                    {/* 周选择器 */}
                    <input type="week" name="" id="" placeholder='week' />
                    {/* 区间选择器 */}
                    <input type="range" name="" id="" placeholder='input:range' />
                    {/* 列表框/选择器 */}
                    <select name="" id="">
                        <optgroup label='optgroup'>
                            <option value="1">option 1</option>
                            <option value="2">option 2</option>
                        </optgroup>
                        <option value="3">option 3</option>
                        <option value="4">option 4</option>
                    </select>
                    <select multiple name="" id="">
                        <option value="1">option 1</option>
                        <option value="2">option 2</option>
                        <option value="3">option 3</option>
                        <option value="4">option 4</option>
                    </select>
                    {/* 组合框控件 */}
                    <datalist id='animals'>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                    </datalist>

                    <br />

                    {/* 按钮控件 */}
                    <input type="button" value="input:button" placeholder='input:button' />
                    <input type="button" disabled value="input:button" placeholder='input:button' />
                    <input type="submit" value="input:submit" placeholder='input:submit' />
                    <input type="reset" value="input:reset" placeholder='input:reset' />
                    <input type="image" src="" alt="" placeholder='input:image' />
                    <button type="button">button:button</button>
                    <button type="button" disabled>button:button</button>
                    <button type="submit">button:submit</button>
                    <button type="reset">button:reset</button>

                    <br />

                    {/* 计算输入值 */}
                    <output id='output'>output
                    &lt;p&gt;Hello, &amp; welcome to &lt;strong&gt;Comate&lt;/strong&gt;!&lt;/p&gt;
                    </output>
                </fieldset>
            </form>

            <hr />
            <h2 id='feedback'>反馈</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>progress</code></td>
                        <td>Progress bar</td>
                    </tr>
                    <tr>
                        <td><code>meter</code></td>
                        <td>Gauge</td>
                    </tr>
                    <tr>
                        <td><code>dialog</code></td>
                        <td>Dialog box or window</td>
                    </tr>
                    <tr>
                        <td><code>details</code></td>
                        <td>Disclosure control for hiding details</td>
                    </tr>
                </tbody>
            </table>

            <p>示例：</p>
            {/* 进度条 */}
            <progress value={undefined} />
            {/* 计量器 */}
            <meter value={0.5}></meter>
            {/* 对话框 */}
            <dialog open>dialog</dialog>
            {/* 详情 */}
            <details open name='details'>
                <summary>summary</summary>
                <div>div</div>
                <ul>
                    <li>li</li>
                    <li>li</li>
                </ul>
            </details>
            {/* <button popovertarget="sub-nav">sub-nav</button>
            <ul popover id="sub-nav">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul> */}

            <hr />
            <h2 id='slot'>插槽</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>template</code></td>
                        <td>Template</td>
                    </tr>
                    <tr>
                        <td><code>slot</code></td>
                        <td>Shadow tree slot</td>
                    </tr>
                </tbody>
            </table>

            <p>示例：</p>
            {/* 插槽 */}
            <template>
                <slot name=''>slot</slot>
            </template>
            

            <hr />
            <h2 id='legacy'>遗留</h2>
            <table>
                <thead>
                    <tr>
                        <th>元素(Element)</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>param</code></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><code>dir</code></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><code>font</code></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><code>frameset</code></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><code>frame</code></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><code>marquee</code></td>
                        <td></td>
                    </tr>                                                                                                    
                </tbody>
            </table>

            {/* <p>示例：</p>
            <param name="" value="" />
            <dir>
                <li>li</li>
                <li>li</li>
            </dir>
            <font>font</font>
            <frameset>
                <frame />
            </frameset>
            <marquee behavior="marquee" direction="left">跑马灯 * 跑马灯 * 跑马灯 * 跑马灯 * 跑马灯 * 跑马灯 * 跑马灯</marquee> */}
            {/* <acronym title="">acronym</acronym>
            <applet>applet</applet> */}

            <div style={{height: '400px'}}></div>
        </div>
    )
}

export default Html5