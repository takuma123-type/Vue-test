<template>
  <div id="app">
      <input type="text" v-model="keyword" />
      <button @click="Saerch(keyword)">検索</button>
      <div>
        <ul>
            <li v-for="(book, index) in saerchResults" :key="index">
                {{ book.title }}
                <button @click="addBook(book)">追加</button>
            </li>
        </ul>
      </div>
    </div>
</template>

 <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script>
      let app = new Vue({
        el: "#app",
        data() {
          return {
            keyword: "",
            saerchResults: [], //検索結果の一覧
            books:[] //追加したデータの格納先
          };
        },
        methods: {
          //クエリストリングの作成
          async Saerch(keyword) {
            //初期化
            this.saerchResults = [];
            const baseUrl = "https://www.googleapis.com/books/v1/volumes?";
            const params = {
              q: `intitle:${keyword}`,
              maxResults: 40,
            };
            const queryParams = new URLSearchParams(params);
            console.log(baseUrl + queryParams);

            //fetchでjson取得
            const response = await fetch(baseUrl + queryParams)
              //responseをjsonに変換
              .then((response) => response.json())
              .then(console.log());
            for (let book of response.items) {
              //jsonオブジェクトのtitle,imageLinks, descriptionまでアクセス
              let title = book.volumeInfo.title;
              let img = book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks
                : "";
              let description = book.volumeInfo.description;
              //必要な情報をpush, title情報なければ空を追加
              this.saerchResults.push({
                title: title ? title : "",
                image: img.thumbnail ? img.thumbnail : "",
                //40文字以内
                description: description ? description.slice(0, 40) : "",
              });
            }
          },
          addBook(book) {
            this.books.push(book); //bookオブジェクトを受け取る。
            this.saveBooks();
          },
          saveBooks() {
            const parsed = JSON.stringify(this.books); //文字列 ->json
            localStorage.setItem('books', parsed); //第一引数：keyの名前,第二引数：value
          },
        },
      });
    </script>