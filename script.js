
// 2)  Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду,
// но всего 5 раз.
// После 5 итераций скрипт должен вывести сообщение “Done”,
// после чего процесс завершится.
// При решении данной задачи нельзя вызывать setTimeout.


function printHello() {
  let count = 0;
  const intervalId = setInterval(function () {
    console.log("Hello World");
    count++;

    if (count === 5) {
      console.log("Done");
      clearInterval(intervalId); // Остановить интервал после 5 итераций
    }
  }, 1000); // Интервал 1 секунда
}

printHello();
  


/*
3) Выводим 2 следующих сообщения после соответствующих задержек.
 Сообщение “Hello after 4 seconds” выводим через 4 секунды.
 Сообщение “Hello after 8 seconds” выводим через 8 секунд.
 В решении нужно определить всего одну функцию, содержащую встроенные функции.
Это означает, что множество вызовов setTimeout должны будут использовать одну и ту же функцию.
 Пример вызова:
 setTimeout(func1) => Hello after 4 seconds
 setTimeout(func1) => Hello after 8 seconds
 */
/*
  const printMessage = (message) => {
    setTimeout(() => {
      console.log(message);
    },1000);
  };
  
  printMessage("Hello after 4 seconds", 4);
  printMessage("Hello after 8 seconds", 8);
  */