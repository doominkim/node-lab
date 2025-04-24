const { OpenAI } = require("openai");
require("dotenv").config();

// OpenAI API 클라이언트 초기화
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * ChatGPT에 메시지를 보내고 응답을 받는 함수
 * @param {string} userMessage - 사용자 메시지
 * @returns {Promise<string>} ChatGPT 응답
 */
async function chatWithGPT(userMessage) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "당신은 도움이 되는 어시스턴트입니다." },
        { role: "user", content: userMessage },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API 오류:", error);
    return "오류가 발생했습니다: " + error.message;
  }
}

// 예제 실행
async function runExample() {
  const userQuestion = "자바스크립트에서 비동기 함수를 처리하는 방법을 알려줘";
  console.log("사용자: ", userQuestion);

  const response = await chatWithGPT(userQuestion);
  console.log("ChatGPT: ", response);
}

runExample();
