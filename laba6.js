// Массив пользователей
const users = [
    { login: "arsen", password: "1234", name: "Арсен" },
    { login: "john", password: "abcd", name: "Джон" },
    { login: "admin", password: "admin", name: "Администратор" },
    { login: "maria", password: "pass", name: "Мария" },
    { login: "kydyr", password: "qwerty", name: "Кыдыр" },
    { login: "sultan", password: "9999", name: "Султан" },
  ];
  
  // При клике на кнопку
  document.getElementById("loginBtn").addEventListener("click", authorize);
  
  function authorize() {
    const login = document.getElementById("login").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
  
    // Поиск пользователя по логину и паролю
    const user = users.find(u => u.login === login && u.password === password);
  
    if (user) {
      message.textContent = `Добро пожаловать, ${user.name}! 🎉`;
      message.className = "message success";
    } else {
      message.textContent = "Неверный логин или пароль!";
      message.className = "message error";
    }
  }
  