# 기술 스택

### React, tailwind, shadcn/ui, zustand, node 20, pnpm

# 처음에 클론 받고

### pnpm install

### pnpm dev

---

# 커밋 할 때

### 깃 컨벤션은

#### feat: 새로운 기능 추가

#### fix: 버그 수정 또는 typo

#### refactor: 리팩토링

#### design: CSS 등 사용자 UI 디자인 변경

#### comment: 필요한 주석 추가 및 변경

#### style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우

#### test: 테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)

#### chore: 위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 등)

#### init: 프로젝트 초기 생성

#### rename: 파일 혹은 폴더명 수정하거나 옮기는 경우

#### remove: 파일을 삭제하는 작업만 수행하는 경우

### 반드시 pnpm build 실행 후 빌드 오류 없으면 커밋

### dev에 각 자 브랜치 따서 작업하고 dev에 merge를 할 때는 pr을 날린 후 서로 간단한 코드리뷰나 이상 없는지 확인 후 코멘트를 남기고 해당 pr 주인이 merge를 한다

---

# shadcn/ui 이용 법

### https://ui.shadcn.com/ 에서 사용 할 컴포넌트 install 후 사용 components/ui 폴더 안에 컴포넌트들은 절대 코드 변경 하면 안됩니다.
