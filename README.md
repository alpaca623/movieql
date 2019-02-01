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