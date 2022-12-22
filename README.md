# 🍔 원하는 음식 정보를 찾고 레시피를 공유해요!

<br />

## 📃 개요

- 서비스명 : 맛집 검색, 레시피 공유 서비스 Food-Finder
- 개발 기간 : 2022.11.14 ~ 2022.12.17
- 주제 : 레시피 공유 및 인공지능을 활용한 레시피, 맛집 검색 서비스
- 목표 : 음식 레시피, 맛집 정보 제공
- api 문서 : [바로 가기](https://documenter.getpostman.com/view/22452329/2s8YzQXjQP#f27f89f7-d29f-400c-9790-bf33693f7df0)
- 테스트 페이지 : [바로 가기](http://kdt-ai5-team03.elicecoding.com/)

<br />

## 👪 팀원 소개


**김대운**
- Front-End
- Gmail : eodnsdlekd@gmail.com
- Github : [@dlzagu](https://github.com/dlzagu)

**윤태경**
- Front-End
- Gmail : origin1508@gmail.com
- Github : [@origin1508](https://github.com/origin1508)

**이재희**
- Back-End
- Gmail : jaeheelee169@gmail.com
- Github : [@L-JaeHee](https://github.com/L-JaeHee)

**지은혜**
- Back-End
- Gmail :
- Github : [@pado-c](https://github.com/pado-c)

**황현성**
- Back-End
- Gmail : hhs950120@gmail.com
- Github : [@iHateAI](https://github.com/iHateAI)

<br />

## 🔧 기술 스택

### Front-End

<div>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<br />
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/>
<img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-FAB040?style=flat-square&logo=Recoil&logoColor=white"/>
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=React Hook Form&logoColor=white"/>

</div>

<br />

### Back-End

<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=Sequelize&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-41454A?style=flat-square&logo=JSON%20web%20tokens&logoColor=white"/>
</div>

<br />

### AI

<div>
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/>
<img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=PyTorch&logoColor=white"/>
</div>

<br />

### Server-Infra
<div>
<img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white"/>
<img src="https://img.shields.io/badge/pm2-2B037A?style=flat-square&logo=pm2&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon_S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=flat-square&logo=Amazon RDS&logoColor=white"/>
</div>

<br />

## 📁 프로젝트 구조

### Front-End

```
📦front
 ┣ 📂public
 ┃ ┗ 📜favicon.png
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜authFetcher.ts
 ┃ ┃ ┣ 📜predictionFetcher.ts
 ┃ ┃ ┣ 📜recipeFetcher.ts
 ┃ ┃ ┗ 📜restaurantFetcher.ts
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜background.jpg
 ┃ ┃ ┣ 📜basicProfileImg.png
 ┃ ┃ ┣ 📜favoriteMarker.png
 ┃ ┃ ┣ 📜favoriteMarker2.png
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┣ 📜mainImg.png
 ┃ ┃ ┣ 📜mainRecipeImg.jpg
 ┃ ┃ ┣ 📜mainRecipeImg2.jpg
 ┃ ┃ ┣ 📜mainRecipeImg3.jpg
 ┃ ┃ ┗ 📜searchImg.png
 ┃ ┣ 📂atom
 ┃ ┃ ┣ 📜alert.ts
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜restaurant.ts
 ┃ ┃ ┗ 📜searchResult.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂alert
 ┃ ┃ ┃ ┣ 📜Alert.tsx
 ┃ ┃ ┃ ┣ 📜Loader.tsx
 ┃ ┃ ┃ ┗ 📜Toast.tsx
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📜AuthHeader.tsx
 ┃ ┃ ┃ ┣ 📜AuthLogin.tsx
 ┃ ┃ ┃ ┣ 📜AuthLoginForm.tsx
 ┃ ┃ ┃ ┣ 📜AuthRegister.tsx
 ┃ ┃ ┃ ┗ 📜AuthRegisterForm.tsx
 ┃ ┃ ┣ 📂comment
 ┃ ┃ ┃ ┣ 📜CommentCard.tsx
 ┃ ┃ ┃ ┣ 📜CommentEdit.tsx
 ┃ ┃ ┃ ┣ 📜CommentForm.tsx
 ┃ ┃ ┃ ┗ 📜Comments.tsx
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜ImageSearch.tsx
 ┃ ┃ ┃ ┗ 📜Search.tsx
 ┃ ┃ ┣ 📂errorBoundary
 ┃ ┃ ┃ ┣ 📜ErrorAlert.tsx
 ┃ ┃ ┃ ┗ 📜ErrorBoundary.tsx
 ┃ ┃ ┣ 📂global
 ┃ ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Logo.tsx
 ┃ ┃ ┃ ┃ ┣ 📜NavLink.tsx
 ┃ ┃ ┃ ┃ ┗ 📜NavLinkDropDown.tsx
 ┃ ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┗ 📜CustomIcon.tsx
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┣ 📜KakaoMap.tsx
 ┃ ┃ ┃ ┣ 📜LandingPage.tsx
 ┃ ┃ ┃ ┗ 📜Map.tsx
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📜ConfirmModal.tsx
 ┃ ┃ ┃ ┣ 📜imageSearchModal.tsx
 ┃ ┃ ┃ ┗ 📜ImageSearchResult.tsx
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┣ 📜CurrentUserProfile.tsx
 ┃ ┃ ┃ ┣ 📜NicknameEditForm.tsx
 ┃ ┃ ┃ ┣ 📜PasswordEditForm.tsx
 ┃ ┃ ┃ ┣ 📜RestaurantInfoCard.tsx
 ┃ ┃ ┃ ┣ 📜UserLikedRestaurant.tsx
 ┃ ┃ ┃ ┣ 📜UserProfile.tsx
 ┃ ┃ ┃ ┣ 📜UserRecipe.tsx
 ┃ ┃ ┃ ┗ 📜UserRecipeCards.tsx
 ┃ ┃ ┣ 📂recipe
 ┃ ┃ ┃ ┣ 📜RecipeCard.tsx
 ┃ ┃ ┃ ┗ 📜SuggestionRecipe.tsx
 ┃ ┃ ┣ 📂recipeDetail
 ┃ ┃ ┃ ┣ 📜Like.tsx
 ┃ ┃ ┃ ┣ 📜RecipeComment.tsx
 ┃ ┃ ┃ ┣ 📜RecipeDetaiIngredient.tsx
 ┃ ┃ ┃ ┣ 📜RecipeDetailMain.tsx
 ┃ ┃ ┃ ┣ 📜RecipeRatingStar.tsx
 ┃ ┃ ┃ ┣ 📜RecipeScoreStatus.tsx
 ┃ ┃ ┃ ┗ 📜RecipeSteps.tsx
 ┃ ┃ ┣ 📂recipeForm
 ┃ ┃ ┃ ┣ 📂info
 ┃ ┃ ┃ ┃ ┣ 📜RecipeFormInfo.tsx
 ┃ ┃ ┃ ┃ ┣ 📜RecipeFormInfoLeft.tsx
 ┃ ┃ ┃ ┃ ┗ 📜RecipeFormInfoRight.tsx
 ┃ ┃ ┃ ┣ 📂ingredient
 ┃ ┃ ┃ ┃ ┗ 📜RecipeFormIngredient.tsx
 ┃ ┃ ┃ ┣ 📂instruction
 ┃ ┃ ┃ ┃ ┣ 📜RecipeFormInstruction.tsx
 ┃ ┃ ┃ ┃ ┗ 📜RecipeFormInstructionInputComponent.tsx
 ┃ ┃ ┃ ┗ 📜RecipeForm.tsx
 ┃ ┃ ┗ 📂searchResult
 ┃ ┃ ┃ ┣ 📜PlaceResult.tsx
 ┃ ┃ ┃ ┗ 📜RecipeResult.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜kakaoMap.ts
 ┃ ┃ ┗ 📜recipeForm.ts
 ┃ ┣ 📂customRouter
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂hoc
 ┃ ┃ ┣ 📜Auth.tsx
 ┃ ┃ ┗ 📜BasePageComponent.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂Auth
 ┃ ┃ ┃ ┣ 📜useAuthInfo.ts
 ┃ ┃ ┃ ┣ 📜useAuthRecipes.ts
 ┃ ┃ ┃ ┣ 📜useEditImg.ts
 ┃ ┃ ┃ ┣ 📜useEditNickname.ts
 ┃ ┃ ┃ ┣ 📜useEditPassword.ts
 ┃ ┃ ┃ ┣ 📜useLogin.ts
 ┃ ┃ ┃ ┗ 📜useSignup.ts
 ┃ ┃ ┣ 📂Comment
 ┃ ┃ ┃ ┣ 📜useComment.ts
 ┃ ┃ ┃ ┣ 📜useDeleteComment.ts
 ┃ ┃ ┃ ┗ 📜useEditComment.ts
 ┃ ┃ ┣ 📂Recipe
 ┃ ┃ ┃ ┣ 📜useCreateRecipe.ts
 ┃ ┃ ┃ ┣ 📜useEditRecipe.ts
 ┃ ┃ ┃ ┣ 📜useLike.ts
 ┃ ┃ ┃ ┣ 📜useRating.ts
 ┃ ┃ ┃ ┣ 📜useRatingUpdate.ts
 ┃ ┃ ┃ ┗ 📜useRecipes.ts
 ┃ ┃ ┣ 📜useEventListener.tsx
 ┃ ┃ ┣ 📜useKakaoMap.ts
 ┃ ┃ ┣ 📜useLikedRestaurant.ts
 ┃ ┃ ┣ 📜useMediaQuery.ts
 ┃ ┃ ┣ 📜useModal.ts
 ┃ ┃ ┣ 📜useOnclickOutside.tsx
 ┃ ┃ ┣ 📜usePrediction.ts
 ┃ ┃ ┣ 📜usePreview.ts
 ┃ ┃ ┣ 📜useSearchForm.ts
 ┃ ┃ ┗ 📜useSetAlert.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜collectRecipes.tsx
 ┃ ┃ ┣ 📜createRecipe.tsx
 ┃ ┃ ┣ 📜editRecipe.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜likedRestaurant.tsx
 ┃ ┃ ┣ 📜login.tsx
 ┃ ┃ ┣ 📜profile.tsx
 ┃ ┃ ┣ 📜recipe.tsx
 ┃ ┃ ┣ 📜recipeDetail.tsx
 ┃ ┃ ┣ 📜register.tsx
 ┃ ┃ ┗ 📜searchResult.tsx
 ┃ ┣ 📂storage
 ┃ ┃ ┗ 📜storage.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┣ 📜fonts.css
 ┃ ┃ ┃ ┣ 📜NanumSquareNeoOTF-aLt.otf
 ┃ ┃ ┃ ┣ 📜NanumSquareNeoOTF-bRg.otf
 ┃ ┃ ┃ ┗ 📜NanumSquareNeoOTF-cBd.otf
 ┃ ┃ ┣ 📜authStyle.ts
 ┃ ┃ ┣ 📜commonStyle.ts
 ┃ ┃ ┣ 📜globalStyle.ts
 ┃ ┃ ┣ 📜recipeDetailStyle.ts
 ┃ ┃ ┣ 📜recipeFormStyle.ts
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┗ 📜baseComponentType.ts
 ┃ ┃ ┣ 📂recipe
 ┃ ┃ ┃ ┣ 📜recipeCardType.ts
 ┃ ┃ ┃ ┣ 📜recipeDetailType.ts
 ┃ ┃ ┃ ┗ 📜recipeFormType.ts
 ┃ ┃ ┣ 📂restaurant
 ┃ ┃ ┃ ┗ 📜restaurantType.ts
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┗ 📜searchType.ts
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜error.ts
 ┃ ┃ ┗ 📜user.ts
 ┃ ┣ 📂util
 ┃ ┃ ┣ 📜customAxios.ts
 ┃ ┃ ┣ 📜filterList.ts
 ┃ ┃ ┣ 📜imageResize.ts
 ┃ ┃ ┗ 📜profileImageResizeUtil.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜vite-env.d.ts
 ┣ 📜.env
 ┣ 📜.eslintrc
 ┣ 📜.prettierrc
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.node.json
 ┣ 📜vite.config.ts
 ┗ 📜yarn.lock
```

### Back-End

```
📦back
 ┣ 📂src
 ┃ ┣ 📂configs
 ┃ ┃ ┗ 📜sequelize.js
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜constant.js
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📂model
 ┃ ┃ ┃ ┣ 📜recipe.model.js
 ┃ ┃ ┃ ┣ 📜refreshToken.model.js
 ┃ ┃ ┃ ┣ 📜restaurant.model.js
 ┃ ┃ ┃ ┗ 📜user.model.js
 ┃ ┃ ┗ 📂schema
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜recipe.schema.js
 ┃ ┃ ┃ ┣ 📜recipe_comment.schema.js
 ┃ ┃ ┃ ┣ 📜recipe_like.schema.js
 ┃ ┃ ┃ ┣ 📜recipe_star.schema.js
 ┃ ┃ ┃ ┣ 📜refreshToken.schema.js
 ┃ ┃ ┃ ┣ 📜resturant.schema.js
 ┃ ┃ ┃ ┣ 📜step.schema.js
 ┃ ┃ ┃ ┗ 📜user.schema.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📜accessTokenAuthorization.js
 ┃ ┃ ┣ 📜commonValidator.js
 ┃ ┃ ┣ 📜error.js
 ┃ ┃ ┣ 📜multer.js
 ┃ ┃ ┣ 📜recipeValidator.js
 ┃ ┃ ┣ 📜refreshTokenAuthorization.js
 ┃ ┃ ┗ 📜validationCheck.js
 ┃ ┣ 📂ml
 ┃ ┃ ┣ 📂predictionImages
 ┃ ┃ ┣ 📜classes.json
 ┃ ┃ ┣ 📜model.pt
 ┃ ┃ ┗ 📜prediction.py
 ┃ ┣ 📂routers
 ┃ ┃ ┣ 📜auth.route.js
 ┃ ┃ ┣ 📜error.route.js
 ┃ ┃ ┣ 📜prediction.route.js
 ┃ ┃ ┣ 📜recipe.route.js
 ┃ ┃ ┣ 📜recipeSearch.route.js
 ┃ ┃ ┣ 📜restaurant.route.js
 ┃ ┃ ┗ 📜user.route.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜auth.service.js
 ┃ ┃ ┣ 📜prediction.service.js
 ┃ ┃ ┣ 📜recipe.service.js
 ┃ ┃ ┣ 📜recipeSearch.service.js
 ┃ ┃ ┣ 📜restaurant.service.js
 ┃ ┃ ┗ 📜user.service.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜ApiError.js
 ┃ ┃ ┗ 📜utils.js
 ┃ ┗ 📜app.js
 ┣ 📜.env
 ┣ 📜babel.config.json
 ┣ 📜ecosystem.config.js
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜server-register.js
```

<br />

## 🔧 DB TABLE 구조

![hppDGAB8d5BjJN6Gr](https://user-images.githubusercontent.com/81323697/209177662-ecf863b8-2f1b-4b91-aea9-f79c995366df.png)

