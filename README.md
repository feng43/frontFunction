# frontFunction
----
在开发过程中，经常会用到日期格式化、url参数转对象、正则校验等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一进行封装，并发布到npm，以提高开发效率
**frontFunction**由几个兴趣相投爱好者共同开发，维护。目前仅供个人使用。
## 使用文档
###直接下载min目录下的ssf_ff.min.js使用。
html:

```html
<script src="min/ssf_ff.min.js"></script>
<script>
	ssf_ff.randomColor();
</script>
```

### 使用npm安装
npm:

```
npm install --save ssf_ff
```

## API文档
[API文档](https://frontfunction.github.io/frontFunction/out/global.html)

## 开发文档
### 开发教程
所有js文件请在src文件夹下自建分类或选择已有分类（最好将同一类型归类在同一文件夹下），在子文件夹中添加函数模块文件。

```javascript
/**
 *
 * @desc 随机生成颜色
 * @return {String}
 */
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
};

module.exports = randomColor;
```
然后需要在src/index.js文件中暴露写好的函数。

### 代码规范
* 注释规范
框架使用[jsdoc](usejsdoc.org)生成API文档，故需要使用jsdoc规范来定义代码注释。
常用指令

```
/**
 * @desc   判断身份证，可传入身份证位数，只限15与18    方法描述
 * @param  {String}  str                         传入参数{参数类型} 参数名
 * @param  {Number}  n
 * @default 18                                   默认参数
 * @return {Boolean}                             返回值类型
 */
```

* 代码规范
将会使用eslint校验，待添加= =

### 测试流程
目前使用```test.html```作为测试文件，将会使用[karma](http://karma-runner.github.io/)等进行单元测试。

### 打包流程
* jsdoc生成API文档

```
jsdoc src -r
```
生成文档在```out```目录下，可直接访问```index.html```文件查看是否包含新添加函数，如若没有，请检查函数注释

* webpack打包

```
npm run build
```

```build.js```文件是我仿照vue-cli中的webpack模板写成的，以后会慢慢改进？？？

### npm发布
这个有兴趣的私聊。。。。。。
