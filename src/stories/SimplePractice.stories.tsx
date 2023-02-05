import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// 컴포넌트들을 케이스별로 확인하기 위한 story를 만들기 위해서는 기본적으로 두 가지 타입을 가져와야한다.
// ComponentStory: Storybook에서 story를 생성하기 위해 기본적으로 갖춰줘야 할 타입
// ConponentMeta: props을 인자(arg)로 받아오는 컴포넌트의 양식을 정의한 타입.
// 이를 통해서 각 story에 인자로 props를 받아오게 해준다.

import SimplePractice from "./SimplePractice";
// Story를 설정해 주기 위한 컴포넌트를 import 해서 가져와줍니다.

// export default로 storybook에 문서화 하고 싶은 컴포넌트의 정보를 담아 등록해줌 (객체로 보내줌)
export default {
  title: "Practice/SimplePractice",
  // title: StoryBook의 사이드바에서 해당 컴포넌트를 참조하는 방법
  // 이 경우, Example라는 대분류 속에 Study라는 컴포넌트가 추가된다.
  component: SimplePractice,
  // component:참고하고자 하는 컴포넌트를 지정한다.
  // decorators
} as ComponentMeta<typeof SimplePractice>;
// ComponentMeta를 통해서 참고할 컴포넌트의 인자값들을 가져온다.
// 이거 이외의 값들도 정리를 좀 해보자.

// 이렇게 위처럼 기본 설정을 하면, 이제 StoryBook에서 케이스별로 렌더링해서 보여줄
// story들을 만들어야 한다.

// StoryBook에서 권장하는 방식은 Template라는 변수를 통해서 ComponentStory 타입을 지정해
// story로 만들어 케이스화할 컴포넌트를 생성하는 방식이다.

// StoryBook에서 Story를 생성하는 데에 권장하는 방식은 하나의 기본 템플릿을 만들고
// 각 케이스/story 별로 나타내기 위해 템플릿을 복제해 사용하는 방식이다.
// 이를 위해 .bind() 메소드를 활용하게 된다.

// 우선 ComponentStory 타입을 지정해 story를 생성하기 위해 기본이 될 템플릿 함수를 생성해주자.
// 앞서, CompoentnMeta 타입에 설명하듯 args는 컴포넌트의 props들을 가져오게 된다.
const Template: ComponentStory<typeof SimplePractice> = (args) => {
  return <SimplePractice {...args} />;
};

// 이제 케이스별로 상태를 확인해볼 story들을 만들어보자.
// 기본형이 될 Template를 기준으로 .bind() 메소드를 이용해 새로운 함수(컴포넌트)를 만든 뒤,
// 해당 컴포넌트에 설정할 props를 args를 통해 설정해준다.
// 이때, args의 정보는 앞서 interface나 class, type 등으로 정의한 타입 양식과 달라서는 안된다.
export const Reset = Template.bind({});
Reset.args = {
  backgroundColor: "#9B111E",
  color: "#FFFFFF",
  outline: "none",
  border: "1px soild #FFFFFF",
  padding: "1rem 2rem",
  title: "RESET",
  onClick: (e: React.MouseEvent) => {
    e.preventDefault();
    alert("리셋했습니다.");
  },
};

export const Submit = Template.bind({});
Submit.args = {
  backgroundColor: "#00AB41",
  color: "#000000",
  outline: "none",
  border: "1px soild #FFFFFF",
  padding: "1rem 2rem",
  title: "SUBMIT",
  onClick: (e: React.MouseEvent) => {
    e.preventDefault();
    alert("논문을 제출했습니다.");
  },
};

export const Button = Template.bind({});
Button.args = {
  backgroundColor: "#EF9B0F",
  color: "#000000",
  outline: "none",
  border: "1px soild #FFFFFF",
  padding: "1rem 2rem",
  title: "BUTTON",
  onClick: (e: React.MouseEvent) => {
    e.preventDefault();
    alert("그냥 버튼입니다.");
  },
};
