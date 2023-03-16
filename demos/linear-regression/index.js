/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2023-03-14 14:00:01
 * @LastEditors: 唐王瑶
 * @Description: 页面/组件/功能的描述
 * @FilePath: /twy-ai/linear-regression/index.js
 */
// // 线性回归
// import * as tf from '@tensorflow/tfjs'
// import * as tfvis from '@tensorflow/tfjs-vis'
// (async ()=>{
// // 特征值
// const xs = [1,2,3,4];
// // 标签值
// const ys = [1,3,5,7];
// // 散点图
// tfvis.render.scatterplot(
//     {
//         name:'第一个线性回归训练集'
//     },{
// values:xs.map((x,i)=>({x,y:ys[i]}))
// },
// // 调整X轴的数据集和Y轴的数据集
// {xAxisDomain:[0,5],yAxisDomain:[0,10]}

// );
// // 构建单层单个神经元的模型
// // 初始化一个连续的模型，这一层的输入一定是上一层的输出
// const model = tf.sequential(); 
// model.add(tf.layers.dense({units:1,inputShape:[1]})) // 添加一个全连接层
// // 损失函数
// // 借助优化器在不断的调整
// // 随即梯度下降
// model.compile({
//     loss:tf.losses.meanSquaredError,
//     // 超参数，调整学习速率
//     optimizer:tf.train.sgd(0.1)
// })
// // 可视化过程
// const inputs=tf.tensor(xs);
// const labels=tf.tensor(ys);
// await model.fit(inputs,labels,{
//     // 批量大小
//     batchSize:4,
//     // 训练次数
//     epochs:200,
//     // 回调函数
//     callbacks:tfvis.show.fitCallbacks({name:'训练过程'},['loss'])
// })
// const output = model.predict(tf.tensor([50]));
// console.log('X为5，预测y是',output.dataSync()[0]);
// })()