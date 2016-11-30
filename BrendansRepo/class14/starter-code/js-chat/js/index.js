// Model

var model = {
  loggedIn: false,
  user: undefined,
  messages: {}
};

// View

var chatTemplate;
var formTemplate;
function compileTemplates() {
  var templateSource = $('#chat-template').html();
  chatTemplate = Handlebars.compile(templateSource);

  var formTemplateSource = $('#form-template').html();
  formTemplate = Handlebars.compile(formTemplateSource);
}

function renderChat() {
  var chatHtml = chatTemplate(model);
  $('#chatLog').html(chatHtml);
}

function renderForm() {
  var formHtml = formTemplate(model);
  $('#formContainer').html(formHtml);
}

// Controller

function setup() {
  compileTemplates();
  renderForm();
  renderChat();

  // TODO: Event Listeners
  $('#formContainer').on('click', '#register', handleRegister);
  $('#formContainer').on('click', '#login', handleLogin);
  $('#formContainer').on('click', '#signOut', handleSignout);
  firebase.auth().onAuthStateChanged(handleAuthStateChange);

  $('#formContainer').on('click', '#comment', addMessage);
  $('#chatLog').on('click', '.delete', deleteMessage);
  $('#chatLog').on('click', '.upvote', handleUpVote);
}

function handleAuthStateChange() {
  var user = firebase.auth().currentUser;

  if (user) {
    model.loggedIn = true;
    model.user = user;
    firebase.database().ref('messages').on('value', getMessages)
  } else {
    model.loggedIn = false;
    model.user = undefined;
    model.messages = [];
  }

  renderForm();
  renderChat();
}

function handleSignout() {
  firebase.auth().signOut()
}

function handleRegister() {
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();

  firebase.auth().createUserWithEmailAndPassword(email, password);
}

function handleLogin() {
  var email = $('input[name="email"]').val();
  var password = $('input[name="password"]').val();

  firebase.auth().signInWithEmailAndPassword(email, password);

}

function getMessages(snapshot) {
  model.messages = snapshot.val();

  renderChat();
  // We have updated the model from the database, so we need to rerender the chat template//
}

function addMessage() {
  var messageDB = firebase.database().ref('messages');
  var newMessage = $('textarea[name="message"]').val();
  $('textarea[name="message"]').val(''); //this just resets the comment field to an empty string so we don't see the same text from the last comment still in the box//
  messageDB.push({
    author: model.user.email,
    text: newMessage,
    upvotes: 0
  });
}

function deleteMessage() {
  var messageId = $(this).parent().attr('data-id');
  firebase.database().ref('messages').child(messageId).remove();
}

 $(document).ready(setup);
