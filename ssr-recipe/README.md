# SSR(Server Side Rendering)

서버 사이드 렌더링은 UI를 서버에서 렌더링하는 것을 의미한다.  
클라이언트 사이드 렌더링(CSR)은 UI 렌더링을 브라우저에서 모두 처리하는 것.

서버 사이드 렌더링을 구현하면 사용자가 웹 서비스에 방문했을 대 서버 쪽에서 초기 렌더링을 대신해준다.  
그리고 사용자가 html을 전달받을 때 그 내부에 렌더링된 결과물이 보인다.

## SSR의 장점

1. 구글, 네이버, 다음 등의 검색 엔진이 우리가 만든 웹 애플리케이션을 원활하게 수집할 수 있다.  
   따라서 웹 서비스의 검색 엔진 최적화를 위해서라면 서버 사이드 렌더링을 해주는 것이 좋다.

2. 초기 렌더링 성능을 개선할 수 있다.

## SSR의 단점

1. 서버의 리소스가 사용된다는 단점이 있다.  
   서버 사이드 렌더링은 결국 원래 브라우저가 해야 할 일을 서버가 대신 처리하는 것이므로 서버 리스소가 사용된다는 단점이 있다.

2. 프로젝트의 구조가 좀 더 복잡해질 수 있다.  
   데이터 미리 불러오기, 코드 스플리팅과의 호환 등 고려해야할 사항이 더 많아져서 개발이 어려워질 수도 있다.

## SSR과 Code Spilting Conflict

서버 사이드 렌더링과 코드 스플리팅을 함께 적용하면 작업이 꽤 까다롭다.  
별도의 호환 작업없이 두 기술을 함께 적용하면, 페이지에 깜빡임이 발생한다.  
이러한 이슈를 해결하려면 라우트 경로마다 코드 스플리팅된 파일 중에서 필요한 모든 파일을 브라우저에서 렌더링하기 전에 미리 불러와야한다.  
이 문제점은 Loadable Component 라이브러리에서 제공하는 기능을 써서 서버 사이드 렌더링 후 필요한 파일의 경로를 추출하여 렌더링 결과에 스크립트/스타일 태그를 삽입해줌으로 서 해결해준다.

**npm eject**
기본 관련 설정 파일들을 밖으로 꺼내옴으로써 웹팩과 바벨을 커스터마이징할 수 있다.