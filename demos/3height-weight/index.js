// 身高体重预测
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

(async()=>{

const height = [150, 160, 170];
const weight = [40, 50, 60];
// 散点图
tfvis.render.scatterplot({
name:'身高体重训练数据',
},{
values: height.map((x, i) => ({x, y: weight[i]}))
},{
xLabel: '身高',
yLabel: '体重',
xAxisDomain:[130, 190],
yAxisDomain:[30, 80]
});
// 归一化操作sub减掉150，div除以最小数到最大数的差值
const inputs = tf.tensor(height).sub(150).div(20);
const labels = tf.tensor(weight).sub(40).div(20);
inputs.print(); 
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
// 均方误差
model.compile({
loss: tf.losses.meanSquaredError,
// 随机梯度下降
optimizer: tf.train.sgd(0.1)
});
await model.fit(inputs, labels, {
batchSize: 3,
epochs: 200,
callbacks: tfvis.show.fitCallbacks({name: '训练过程'}, ['loss'])
});
const output = model.predict(tf.tensor([180])).dataSync()[0];
console.log('180cm身高的体重是', output);
})();