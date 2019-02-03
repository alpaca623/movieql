# movieql
Movie API with graphql and NomadCoder lesson

# 4 Creating the first Query and Resolver
* 이번 강의의 핵심은 schema, resolver를 이해하는 것이다.
    * graphql 서버에서는 어떤 타입의 데이터를 요청할지 알아야 하는데(요청할 시), 이때 이를 알려주는 역할을 하는 것이 schema다.
    * 요청받은 데이터를 이해하고 돌려줄 때 응답하는 객체가 resolver. 요청할 때 name을 요청하면 resolver에 있는 name에 해당하는 값이 불러와진다.

# 5 Extending the Schema
* schema와 resolver의 차이를 잘 이해해야 한다..
    * schema는 요청하는 형식에 대한 정의이다.
    * resolver는 응답하는 객체다.
    * schema는 요청하는 frontend.
    * resolver는 요청을 받는 DB, 서버의 역할을 한다.


# 6 Extending the Schema part Two
* DB에 있는 데이터의 형식을 resolver에 정의를 해줘야 한다!
    * 이게 좀.. resolver에 형식을 지정해놓지 않으면 데이터를 꺼내올 수가 없다.
    * DB는 샘플로 만들어서 처리하고 있지만, 앞으로는 직접 DB와 연동해서 가져올듯
    * person, people의 차이는 people는 DBDP 있는 전체 사람들을 대상으로 DB를 매칭했고, person은 특정 사람에 대해서 매칭하는건데, db.js안에 특정 인원을 가져오는 getById라는 함수를 만듬. 이 함수는 다음 영상에서 설명
* 결론적으로, 이 영상에서 한 내용은
    * resolver의 내용을 좀 더 심화함 -> 샘플데이터를 더 만들고, schema에서 query 형식을 어떻게 변화시켜야하는지 알아봄.
    * 전체데이터를 받아오게 하려면(배열의 경우) ```people : [people]!``` 이와 같은 형식으로 해야함.
    * `!`는 필수로 넣어줘야한다는 것을 표시한 것


# 7 Creating Queries with Arguments
* 결국엔 어떤 일이 일어나는지에 대한 설명을 만들어내는것이 핵심!
    * 문슨 일이 벌어지는지 설명하고 그것을 실행한다.
    * Resolvers는 API가 될수도 있고, DB가 될수도 있다.
    * schema와 resolver에 대해서 좀 더 반복적인 공부를 해야할거 같다.
    * schema 먼저 정의를 하고, resolver를 정의하고, db에서 함수를 정의하는 순서로 가면 편할듯.
        * 설계만 잘 되어있으면 문제는 없겠다.

# 8 Defining Mutations
* db를 movie로 바꾸고, Mutation의 기본을 알려줌
    * 금방 넘어감..

# 9 Creating first Mutation
* 이 강의를 들으면서 3박자를 느꼈다. schema, resolver, db 결국은 이 3개의 반복이다.
    * schema는 graphql에 있는 데이터를 가져오기 위한 형식을 정의하는 것. 특정 조건에 맞게 요청할때와 전체를 요청할때를 구분한다.
    * resolver는 요청한 내용을 실행시키고 db(or api)와 연결시켜서 실제 실행시키고 return값을 돌려준다.
    * db에서는 실제 데이터와 연산(함수)를 정의해놓는다.

# 10 Delete Mutation
* 영화 삭제함.
    * very easy..

# 11 REST API with GraphQL Part One
* node-fetch를 추가하고 기존의 movie 코드를 제거하였다.
* 영화 API를 제공하는 사이트에서 데이터를 받아 그 데이터를 이용해 graphql을 이용한 API를 만들 예정이다.

# 12 Wrapping a REST API with GraphQL Part Two
* REST API를 이용해 받은 영화 데이터들을 graphQL로 감싸서 다시 리턴을 시켰다.
* 선택적으로 데이터를 가져올 수 있는건 정말 큰 이득인듯!
* [참고]여기서 DB에서 리턴시키는 함수의 첫번째 인자는 event 객체이고, 두번째 인자는 argument인데 객체로 받는다.
* 의외로 어렵진 않다.. 역시 배우는게 최고 이득이다.