// Your code here //

// Model //
$(document).ready(function() {

var model = {
	loggedIn: false,
	username: undefined,
	userId: undefined,
	categories: undefined,
	articles: undefined
};

// View // 

	function renderArticle() {	
	  var templateSource = $('#article-template').html();
	  var template = Handlebars.compile(templateSource);
	  var renderedTemplate = template(model);

  		$('#main').html(renderedTemplate);
	}

	function renderLogin() {
		var templateSource = $('#login-template').html();
	  	var template = Handlebars.compile(templateSource);
	 	var renderedTemplate = template(model);

  		$('#loginContainer').html(renderedTemplate);
	}

	function renderCategories() {
		var templateSource = $('#category-template').html();
	  	var template = Handlebars.compile(templateSource);
	 	var renderedTemplate = template(model);

	 	$('#categories').html(renderedTemplate);
	}

// Controller //

	function setup() {
		renderLogin()

		$('#loginContainer').on('click', '#loginSubmit', handleLogin)
		$('#categories').on('click', 'span', handleToggleCategory)
		$('#main').on('click', 'article', handleToggleBookmark)
	}

	function handleLogin() {
		var username = $('#username').val();
		$.post('/login', {username: username}, function(data) {
			model.loggedIn = true;
			model.userId = data.userId;
			model.username = username;

			loadCategories()
			loadArticle();
			renderLogin();
		})
	}

	function loadCategories() {
		$.get('/categories?userId=' + model.userId, function(data) {
			model.categories = data;

			renderCategories()
		})
	}

	function handleToggleCategory() {
		var category = $(this).text();
		if ($(this).hasClass('label-default')) {
			$.post('/interests/' + category + '?userId=' + model.userId, function(data) {
				loadCategories();
				loadArticle();
			});
		} else {
			$.ajax({
				type: 'DELETE',
				url: '/interests/' + category + '?userId=' + model.userId,
				success: function(data) {
					loadCategories();
					loadArticle();
				}
			})
		}
	}

	function handleToggleBookmark() {
		var articleIndex = $(this).index();
		var article = model.articles[articleIndex]
		var articleId = article.id;
		var bookmarked = article.bookmarked;

		if (!bookmarked) {
			$.post('/bookmarks/' + articleId + '?userId=' + model.userId, function(data) {
				loadArticle();
			});
		} else {
			$.ajax({
				type: 'DELETE',
				url: '/bookmarks/' + articleId + '?userId' + model.userId,
				success: function(data) {
					loadArticle()
				}
			})
		}
	}

	function loadArticle() {
		$.get('/feed?userId=' + model.userId, function(data) {
			model.articles = data;

			renderArticle();
		});
	}

	setup();	
});


