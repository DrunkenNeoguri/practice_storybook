# Practice StoryBook

이 레포리토리는 컴포넌트 주도 개발론(CDD, Component Driven Development)과 관련해 많은 회사에서 사용하고 있는
StoryBook이라는 툴을 학습하기 위해 만든 레포지토리입니다.

## StoryBook이란?

공식 사이트에서는 ‘UI 컴포넌트 및 페이지 개별적으로 빌드하기 위한 프론트엔드 워크숍’이라고 자신을 설명하고 있습니다.

StoryBook을 활용하면 각 페이지별로 컴포넌트들이 동작하는 방식이나 순서를 마치 책을 써내려가듯이 정리해볼 수 있고, 이를 통해 전체 빌드가 아닌 한 페이지 혹은 컴포넌트만을 빌드하여 빠르게 기능 테스트를 할 수 있다는 장점이 있습니다.

StoryBook을 활용함으로서 빠른 컴포넌트 UI 디자인을 만들어 디자이너와 개발자 간의 협업을 도울 수 있으며, 필요에 따라 테스트 코드를 작성하여
단위 테스트를 실행해 볼 수도 있습니다.

## 설치 및 실행 방법

StoryBook을 설치하고 싶다면 리액트가 설치된 환경에서 아래의 키워드를 입력해주십시오.

```jsx
  npx sb init
```

설치 후 StoryBook을 실행해보고 싶다면 아래의 키워드를 입력해주십시오.

```jsx
  npm run storybook
```

### stories 폴더 소개

StoryBook을 설치했다면 stories 폴더를 확인해봅시다.
기본 설치에는 예제 파일이 몇 개 담겨져 있는데, 기본 사항이 될 'component'와 각 케이스들을 분류할 'story'이
짝을 맞추고 있습니다.

여기에 있는 파일들은 다른 경로에 있어도 되지만, story를 관리한다는 의미에서 적어도 story는 해당 폴더에서 관리하는 걸
권장드립니다.

### 학습 내용

각 학습 내용은 'src/stories' 내에 있는 파일들을 참고해 주십시오.
학습 내용 및 파일들은 진행할 때마다 아래에 추가됩니다.

1. 간단한 컴포넌트: (SimplePractice.tsx)[src\stories\SimplePractice.tsx], (SimplePractice.stories.tsx)[src\stories\SimplePractice.stories.tsx]
