import React, { useState, useRef } from 'react';
// import "codemirror/lib/codemirror.css";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import  "./index.less"
import { Button, Modal } from 'antd';

import Prism from 'prismjs';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import tableMergedCellPlugin from '@toast-ui/editor-plugin-table-merged-cell';
import chartPlugin from '@toast-ui/editor-plugin-chart';
import umlPlugin from '@toast-ui/editor-plugin-uml';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

const colorSyntaxOptions = {
    preset: ['#181818', '#292929', '#393939']
};

const chartOptions = {
    minWidth: 100,
    maxWidth: 600,
    minHeight: 100,
    maxHeight: 300,
};

const initData =`
2013年2月10日，由文章主演，周星驰执导的电影《西游·降魔篇》在全国上映，该片全球票房破2.15亿美元，打破华语片票房纪录 [17]；9月2日，文章首部导演作品《小爸爸》完成制作，在东方、浙江、深圳、陕西四大卫视并同步优酷、土豆网双平台首播；9月，参演姜文执导的动作喜剧《一步之遥》 [18]；11月，凭借抗战剧《雪豹》中的演出获得第12届四川电视节金熊猫奖长篇电视剧类最佳男演员奖，这是他获得的第一个电视剧类专业个人表演奖项。
##### <span style="color: #67a38f">文章履历简介</span>
* 2017年3月2日，凭借《少帅》获得2017中国电视剧品质盛典年度品质表演剧星；3月20日，文章执导并参演的《剃刀边缘》在东方卫视和北京卫视播出。11月11日，指导的由马云、甄子丹、吴京、邹市明主演的微电影《功守道》上映。 [26]
* 2018年9月30日，主演的喜剧动作电影《胖子行动队》上映。 [8]
* 2020年5月29日，主演抗日电影《雪豹之虎啸军魂》 [27]，再度饰演周卫国。
* 2021年8月20日，主演的电影《测谎人》上映。 [47]
* 2022年11月，参演上剧场专属版《如梦之梦》 [53]。
* 2023年3月30日至4月9日，出演话剧《宝岛一村》；8月23日至26日，参演的话剧《钟馗嫁妹》在北京首都剧场上演。 [55] [57]`;

export default function App() {
    const editor_ref = useRef<Editor>(null);

    const [content, setContent] = useState('')

    const handleChange = () => {
        const editor_instance = editor_ref.current?.getInstance();
        setContent(editor_instance?.getMarkdown())
        console.log("内容MD", content)
    }

    return (
        <div className="App" >
            <Viewer initialValue={content} />
            <Editor
                ref={editor_ref}
                initialValue={initData}
                initialEditType="markdown"
                previewStyle="vertical"
                height={"800px"}
                plugins={[
                    [codeSyntaxHighlightPlugin, { highlighter: Prism }],
                    [chartPlugin, chartOptions],
                    tableMergedCellPlugin,
                    umlPlugin,
                    [colorPlugin, colorSyntaxOptions],
                ]}
                toolbarItems={[
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock'],
                ]}
                onChange={handleChange}
                usageStatistics={false}
            />
            <Button onClick={() => {
                    const editor_instance = editor_ref.current?.getInstance();
                    console.log("提交", editor_instance?.getMarkdown())
            }}>
                Default Button
            </Button>
        </div>
    );
}
