module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: ['eslint-config-ali', 'plugin:vue/recommended'],
  'settings': {
    "import/resolver": {
      "webpack": {
        "config": "node_modules/@vue/cli-service/webpack.config.js"
      }
    },
  },
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'no-cond-assign': 0,
    // 不能使用某些语法。airbnb中禁止了for循环
    'no-restricted-syntax': 0,
    // 关闭console监测
    'no-console': 0,
    // 有未使用的变量
    'no-unused-vars': 0,
    // 换行的方式是unix还是windows
    'linebreak-style': 0,
    // 参数不能直接修改，参数的属性可以修改
    // 'no-param-reassign': ['error', { props: false }],
    'no-param-reassign': 0,
    // 允许动态加载模块
    'import/no-dynamic-require': 0,
    // 允许在标识符中使用悬空下划线
    'no-underscore-dangle': 0,
    // 允许var定义变量
    'no-var': 0,
    // return可以有赋值表达式
    'no-return-assign': 0,
    // 推荐使用const
    'prefer-const': 0,
    // 允许多个变量同时定义
    'one-var': 0,
    // 允许变量定义在同一行
    'one-var-declaration-per-line': 0,
    // 不能在函数流程控制等地方加载模块（临时屏蔽）
    'global-require': 0,
    // package.json包中没有的依赖不能引用。因现在依赖有部分在ap-web中因此先屏蔽。
    'import/no-extraneous-dependencies': 0,
    // 如果只有一个变量只允许export default
    'import/prefer-default-export': 0,
    // 忽略注释、忽略代码后注释。单行最长140。
    'max-len': 0,
    // 使用prototype的一些方法
    'no-prototype-builtins': 0,
    // 强制结构解析
    'prefer-destructuring': 0,
    // vue v-if和v-for可以同时使用
    'vue/no-use-v-if-with-v-for': 'off',
    // 未知作用
    'no-unused-expressions': 0,
    'import/no-webpack-loader-syntax': 0,
    'consistent-return': 0,
    'array-callback-return': 0,
    'no-eval': 0,
    'no-nested-ternary': 0,
    'vue/no-v-html': 0,
    'no-plusplus': 0,
    'import/extensions': 0,
    'prefer-arrow-callback': 0,
    "no-control-regex": 0,
    "no-new": 0,
    "radix": 0,
    "camelcase": ["error", { properties: "never" }],
    "no-multi-assign": 0,
    "eqeqeq": 0,
    "no-shadow": 0,
    // Stylistic Issues
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // 大括号风格
    'comma-style': [2, 'last'], // 逗号风格
    'consistent-this': [2, 'self'], // 当获取当前环境的this是用一样的风格
    'eol-last': 0, // 文件以换行符结束
    'func-names': 0, // 函数表达式必须有名字
    'indent': [2, 2],
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
    'max-depth': [2, 7], // 嵌套块深度
    'max-nested-callbacks': [2, 6], // 回调嵌套深度
    'max-params': [2, 6], // 函数最多能有多少个参数
    'new-cap': 0, // 构造函数名字首字母要大写
    'new-parens': 2, // new时构造函数必须有小括号
    'no-constant-condition': 0, // 条件语句的条件中不允许出现恒定不变的量
    'no-lonely-if': 2, // 不允许else语句内只有if语句
    'no-mixed-spaces-and-tabs': 2, // 不允许混用tab和空格
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }], // 空行最多不能超过两行
    'no-trailing-spaces': 2, // 一行最后不允许有空格
    'padded-blocks': [2, 'never'], // 块内行首行尾是否空行
    'quote-props': [0, 'consistent', { keywords: true }], // 对象字面量中属性名加引号
    'semi-spacing': [2, { before: false, after: true }], // 分后前后空格
    'semi': [2, 'always'], // 强制语句分号结尾
    'space-before-blocks': [2, 'always'], // 块前的空格
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }], // 函数定义时括号前的空格
    'space-infix-ops': 2, // 操作符周围的空格
    'space-unary-ops': [1, { words: true, nonwords: false }], // 一元运算符前后不要加空格
    'no-bitwise': 0,
    'consistent-this': ['error', 'that', 'self', '_this', '_self'],
    "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }],
    "prefer-promise-reject-errors": 0,
    "no-sequences": 0,
    'vue/valid-template-root': 0,
    'prefer-spread': 0,
    "indent": [
      "error",
      2,
      {
        "ignoredNodes": [
          "TemplateLiteral"
        ]
      }
    ],
    "template-curly-spacing": [
      "off"
    ],
  },
}
