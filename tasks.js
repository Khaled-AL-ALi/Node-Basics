
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
items = ['a', 'b', 'c', 'd'];

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var t = text.trim();

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if (text.startsWith("hello")) {
    hello(t);
  }
  else if (text === 'list\n') {
    list();
  }
  else if (text.startsWith("add")) {
    add(t);
  }
  else if (text.startsWith("remove")) {
    remove(t);
  }
  else if (text === 'help\n') {
    help();
  }
  else if (text.startsWith("edit")) {
    edit(t);
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(batata) {
  batata == "hello" ? console.log("hello!") : console.log(batata + "!");

}

/**
 * help list(show the list of commands possible)
 * 
 * @returns {void}
 */
function help() {
  choices = ['hello', 'quit', 'exit', 'help', 'hello bstata', 'add', 'list', 'remove'];
  console.log('the command available are :');
  choices.map((value) => {
    console.log(value);

  });
}

/**
 *  list(show the list i added)
 * 
 * @returns {void}
 */
function list() {

  console.log("the list content :");
  items.map((value) => {
    console.log(`${items.indexOf(value) + 1} - ${value}`);
  });
}


/**
 * add(add item to the list)
 * 
 * @returns {void}
 */
function add(item) {
  item == "add " ? console.log("Error") : items.push(item.substring(4));

}

/**
 * remove(remove item from the list)
 * 
 * @returns {void}
 */
function remove(item) {
  const myArray = item.split(" ");
  if ((myArray[1] - 1) < items.length) {
    item == "remove " ? items.pop() : items.splice((myArray[1] - 1), 1);
  }
  else { console.log('this number not exist'); }
}

/**
 * add(add item to the list)
 * 
 * @returns {void}
 */
function edit(item) {
  let myArray = item.split(" ");
  if (item == 'edit') {
    console.log('error');
  }
  else if (isNaN(myArray[1])) {
    items.pop();
    myArray.shift();
    let text = myArray.join(' ');
    items.push(text);
  }
  else {
    let pos =myArray[1] - 1;
    myArray.shift();
    myArray.shift();
    items.splice(pos, 1, myArray.join(' '));

  }


}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("khaled AL-ALi")
