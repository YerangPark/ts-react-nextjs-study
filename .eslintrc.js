module.exports = {
  parser: '@typescript-eslint/parser',       // TypeScript 파서 사용
  parserOptions: {
    ecmaFeatures: {
      jsx: true                              // JSX 구문 지원
    },
    ecmaVersion: 2021,                       // 최신 ECMAScript 기능 사용
    sourceType: 'module'                     // ES 모듈 사용
  },
  plugins: [
    '@typescript-eslint',                    // TypeScript ESLint 플러그인
  ],
  extends: [
    "eslint:recommended",'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙 사용
    "plugin:prettier/recommended"
	],
  env: {
    browser: true                            // 브라우저 환경에서 작동할 것임을 명시.
    // `window` 나 `document` 와 같은 글로벌 함수를 사용할 때 오류가 뜨지 않게 해줌
  },
  rules: {
    'prettier/prettier': 'error',            // Prettier 규칙을 ESLint 규칙으로 사용
    'semi': ['error', 'never'],              // 세미콜론 사용하지 않기
    'quotes': ['error', 'single'],           // 홑따옴표 사용 강제
    'react/react-in-jsx-scope': 'off',       // React 17 이후로 JSX 스코프 문제 해제
    '@typescript-eslint/no-unused-vars': ['warn'], // 사용되지 않는 변수 경고
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: 'detect'                      // 설치된 React 버전을 자동으로 감지
    }
  }
};