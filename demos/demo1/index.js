/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2023-03-13 18:03:40
 * @LastEditors: 唐王瑶
 * @Description: 示例1的入口文件
 * @FilePath: /twy-ai/demos/demo1/index.js
 */
import * as tf from '@tensorflow/tfjs';
// const t0 = tf.tensor(1);
// t0.print();
// console.log(t0,'t0');
const input = [1, 2, 3, 4];
//第一层神经元的权重
const w = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];
const output = [0, 0, 0, 0];

// //循环权重
// for (let i = 0; i < w.length; i++) {
//   for (let j = 0; j < input.length; j++) {
//     //1 * [1, 2, 3, 4]遍历 + 2 * [1, 2, 3, 4]遍历
//     output[i] += input[j] * w[i][j];
//   }
// }
// console.log('output: ', output);

tf.tensor(w).dot(tf.tensor(input)).print();
