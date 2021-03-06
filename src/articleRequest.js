
function ArticleRequest() {
  this.content = [];
  this.url = 'https://content.guardianapis.com/science?api-key=010003a7-6a82-46c4-97eb-a674d68315ca&show-fields=thumbnail';
}

ArticleRequest.prototype.getArticles = function() {
  var httpReq = new XMLHttpRequest();
  httpReq.open("GET", this.url, false);
  httpReq.send();  
  var articles = JSON.parse(httpReq.responseText);
  this.content = articles.response.results;
}

// ArticleRequest.prototype.request = function() {
//   var httpReq = new XMLHttpRequest();
//   httpReq.onreadystatechange = function(self = this) {
//     if (this.status !== 200) {
//       throw new Error ("Response Status error")
//     }
//     httpReq.open("GET", self.url, false);
//     httpReq.send();
//     var articles = JSON.parse(httpReq.responseText);
//     this.content = articles.response.results;
//   }
// }
