import React from "react";

// 컴포넌트가 가져야할 기본적인 요소들을 interface를 통해 타입으로 관리하도록 함.
interface TestProp {
  backgroundColor?: string;
  color?: string;
  border?: string;
  outline: string;
  padding?: string;
  margin?: string;
  title: string;
  onClick: (e: React.MouseEvent) => void;
  state: string;
}

// StoryBook을 통해서 관리하고 싶은 컴포넌트를 아래와 같이 생성해주자.
// 할당 방식
const SimplePractice = ({
  backgroundColor,
  color,
  border,
  outline,
  padding,
  margin,
  title,
  onClick,
}: TestProp) => {
  return (
    <>
      {title === "RESET" ? (
        <button
          onClick={onClick}
          style={{
            backgroundColor,
            color,
            border,
            outline,
            padding,
            margin,
            cursor: "pointer",
          }}
        >
          {title}
        </button>
      ) : title === "SUBMIT" ? (
        <button
          onClick={onClick}
          style={{
            backgroundColor,
            color,
            border,
            outline,
            padding,
            margin,
            cursor: "pointer",
          }}
        >
          {title}
        </button>
      ) : (
        <button
          onClick={onClick}
          style={{
            backgroundColor,
            color,
            border,
            outline,
            padding,
            margin,
            cursor: "pointer",
          }}
        >
          Button
        </button>
      )}
    </>
  );
};

// props만 지정해서 사용하는 방식
// const StudyButton = (props: TestProp) => {
//   return (
//     <button onClick={props.onClick} style={props.style}>
//       {props.title}
//     </button>
//   );
// };

export default SimplePractice;

// 이렇게 생성해준 컴포넌트는 이제 케이스 별로 테스트를 해줄 수 있게 스토리를 만들어주자.
// Study.stories.tsx 파일을 생성 -> 해당 파일 참고
