# Node Lab - ChatGPT API 샘플

OpenAI의 ChatGPT API를 사용하는 Node.js 샘플 프로젝트입니다.

## 설치 방법

```bash
npm install
```

## 설정 방법

1. `.env` 파일에 OpenAI API 키를 입력하세요:

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

2. OpenAI API 키는 [OpenAI 웹사이트](https://platform.openai.com/api-keys)에서 얻을 수 있습니다.

## 사용 방법

```bash
node chatgpt-api-sample.js
```

## 기능

- `chatWithGPT` 함수를 통해 ChatGPT에 메시지를 보내고 응답을 받을 수 있습니다.
- 이 샘플은 gpt-3.5-turbo 모델을 사용합니다.
- 사용자 질문과 AI 응답이 콘솔에 출력됩니다.

## 커스터마이징

`chatgpt-api-sample.js` 파일에서 다음 부분을 필요에 맞게 수정하세요:

- 사용할 모델 (model 파라미터)
- 응답의 창의성 정도 (temperature 파라미터)
- 최대 토큰 수 (max_tokens 파라미터)
- 시스템 역할 메시지 (system content)
