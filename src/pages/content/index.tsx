import React, { useState, useRef } from 'react';
import { Col, Row } from 'antd';
import styles from "@/pages/content/index.less";

export default function HomePage() {
  return (
      <Row className={styles.center}>
          <Col className={styles.pad} xs={24} sm={24} md={24} lg={24} xl={{ span: 10, offset: 7}}>
              <div>
                  <h2>镀金时代</h2>
                  <span><a className={styles.author}>栗·YLeseclaireurs</a> <span className={styles.tag}> 2023-12-05 19:34 发表于北京 </span></span>
                  <p>
                      <p>
                          11月比较忙，重读了之前读过的2本好书：
                          《思考快与慢》
                          《错误的行为》
                          画外音：坚持一件事很难，但读书，真的有用。
                      </p>
                      <p>
                        《思考快与慢》
                        在生活中，我们会经常下意识地用直觉判断问题。这样快捷又省力，不用做复杂的思考活动。
                      </p>
                      <p>
                          我们累积记忆，让大脑给我们形成一套习惯的认知模式，冠上一些常规的印象。但是，我们这些由直觉与记忆产生的想法，不仅草率，而且会产生很多偏见，甚至是错误。
                      </p>
                      <p>更糟糕的是，我们常常察觉不到这种偏见与错误。以为做出的是理智决定，其实是直觉引导的行为。以为是毋庸置疑的真理，其实是记忆累加变成的习惯。</p>
                      <p>《思考快与慢》就揭示了一个可怕的真相：我们的大脑太容易上当了，常常高估对这个世界的理解，我们根本没有自己想象的那么理性。</p>
                      <p>原来在我们的大脑里，有两个系统，作者将它称为系统1和系统2。</p>
                      <p>系统1是快思考，类似我们常说的直觉，帮助我们在生活琐事上快速作出反应，比如怎么穿衣服、怎么刷牙等，这能节省日常生活的脑力损耗。</p>
                      <p>系统2是慢思考，面对认知，理解，思考等稍稍复杂的问题，必须交给系统2，也就是慢思考处理，它更理性、更谨慎。</p>
                      <p>但是慢思考实在是太累了，太消耗能量，太反人性了，快思考就成了我们现实生活中的主宰。这种直觉式的思考会经常让我们在判断与决策中产生偏见，错过了更好的选择。
                          改变一个人对人性的看法很难，改变一个人对自身阴暗面的看法就更难了。</p>
                      <p>我们能相互交流，因为我们关于世界的知识和对文字的运用水平都相当。</p>
                      <p>我们大脑有说不清楚的局限:我们对自己认为熟知的事物确信不疑，我们显然无法了解自己的无知程度，无法确切了解自己所生活的这个世界的不确定性。</p>
                      <p>书里不仅详细阐述了这种思考模式给我们带来的负面影响，同时通过经典有趣的行为实验来引导我们认识习惯性思考模式的弊端。</p>
                      <p>书告诉我们在什么情况下可以相信自己的直觉，什么时候又不能相信。并有效实用的办法能帮助我们做出理性的决策，避免那些常常使我们陷入麻烦的思维失误。</p>
                  </p>
                  <p>

                      调研：
                      朋友，最近读了一些什么书？
                      欢迎推荐给我，我转荐好书给大家？
                  </p>
                  <p>
                      #读书会 12
                  </p>
              </div>
          </Col>
      </Row>
  );
}
