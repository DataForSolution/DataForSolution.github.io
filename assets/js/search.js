let idx = null;

fetch('/search.json')
  .then(res => res.json())
  .then(data => {
    idx = lunr(function () {
      this.field('title');
      this.field('content');
      this.ref('url');

      data.forEach(doc => {
        this.add(doc);
      });
    });

    document.getElementById('search-box').addEventListener('input', function () {
      const resultsContainer = document.getElementById('search-results');
      resultsContainer.innerHTML = '';

      const query = this.value.trim();
      if (query.length < 2) return;

      const results = idx.search(query);
      results.forEach(result => {
        const item = data.find(d => d.url === result.ref);
        const div = document.createElement('div');
        div.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        resultsContainer.appendChild(div);
      });
    });
  });
