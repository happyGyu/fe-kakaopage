# fe-kakaopage

## 🎯 소개 및 목적
- 카카오페이지 UI를 따라 만들며 HTML, CSS를 익힌다.
- DOM 조작과 이벤트 처리 방식을 익힌다.
- 라이브러리 없이 슬라이드를 구현한다.
- 간단한 Express 서버를 구축한다.

***

## 🔎 Points
<details>
<summary>CSS에 대한 고민</summary>
<div markdown="1">       

- 일관되고 직관적인 네이밍을 위해 BEM 방식 채택. 
    - 단, 일부 공통으로 적용되는 스타일(ex. 정렬을 위한 .center, .vertical-center 등)은 예외로 BEM 규칙을 따르지 않음. 
- CSS를 재사용하기 위해 노력. 중복 코드로 인한 실수와 비효율을 줄이기 위함.
    -  그러나 공통 스타일을 너무 잘게 쪼개 재사용가능한 클래스로 만들 경우 한 DOM에 적용해야하는 css 클래스 리스트가 너무 길어져 오히려 불편. 적절한 선을 고민.

</div>
</details>
<details>
<summary>슬라이드 구현에 대한 고민</summary>
<div markdown="1">       

- 슬라이드 데이터를 한번에 얼마나 fetch 받아야할까?
- 현재 주어진 요구 사항상에는 슬라이드의 데이터 수가 그리 많지 않음. 한번에 받아오고 이후에는 추가 요청하지 않는 것이 좋을까?
- 그러나 데이터 수가 많아지면, 사용자 입장에서는 불필요한 리소스 낭비 및 서버에 부담이 될 수도.
- 가장 중요한 것은 사용자가 느끼기에 슬라이드가 자연스러운가.
    - 만약 이미지를 매 슬라이드마다 로드하여 잠시라도 빈 화면이 사용자에게 노출된다면? --> 좋지 않음.
    - 슬라이드가 자연스럽게 넘어가기 위한 최소한의 양을 받고, 만약 사용자가 슬라이드를 넘기면 우선 렌더링한 후 fetch 받아와 다시 슬라이드를 세팅하는 방식으로 구현.

</div>
</details>
<details>
<summary>추상화를 통한 중복 로직 처리</summary>
<div markdown="1">       

- 상단의 슬라이드와 하단의 슬라이드는 같은 로직으로 동작함.
- 그러나 크기, 버튼 모양 및 위치 등 UI가 다름.
- 처음에는 각 컴포넌트(UI)에 같은 로직을 각각 불러다가 사용.
- 슬라이드를 만드는 함수를 추상화하고 구체화시키는 요소를 인자로 전달하는 방식으로 리팩토링. [받았던 코드 리뷰](https://github.com/codesquad-members-2022/fe-kakaopage/pull/153)

</div>
</details>
<details>
<summary>코드 구조에 대한 고민</summary>
<div markdown="1">       

- Step5에서 구조 리팩토링을 진행.
- 이유    
    - 이전 코드는 각 컴포넌트 파일을 따로따로 만들어 렌더해주는 방식이어서 DOM조작도 여러번에 걸쳐 나눠서 일어나고, 그 결과 렌더링시 레이아웃이 채워지지 않아 화면이 흔들거리는 현상 발생
    - 컴포넌트에 명확한 계층이 없어 누가 누구를 사용하는지 직관적으로 알기 어려움.
- 결과
    - 각 컴포넌트를 역할 단위에 따라 계층적으로 구분
        - 여러 시스템에서 쓰일 수 있는 banner, slide 등은 components
        - 하나의 독립된 시스템으로써 내부 컨텐츠만 변경되고 여러군데에서 사용될 수 있는 mainBanner, genreTab 등은 system
        - 시스템을 모아 만든 최종 단위로서 다른 곳에서 재사용 되지 않는 pages

![client](https://user-images.githubusercontent.com/95538993/156708502-8dcd785d-f1ec-45bf-8ba6-30e736c71b45.JPG)

</div>
</details>

***

## 🎞 데모

```
npm install
npm run init
```
<details>
<summary>UI 전반</summary>
<div markdown="1">       

![image](https://user-images.githubusercontent.com/95538993/154620136-1d595e2c-f035-427b-9e99-73211fcf9634.png)

</div>
</details>
<details>
<summary>슬라이드(메인 배너)</summary>
<div markdown="1">       

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/95538993/155664737-a6f90116-a294-4798-8b50-1121f86de6d7.gif)

</div>
</details>
<details>
<summary>슬라이드(하단)</summary>
<div markdown="1">       

![이벤트세션](https://user-images.githubusercontent.com/95538993/155665492-abc15aa3-bc13-47f5-9eba-98e8377f4fe6.gif)

</div>
</details>


