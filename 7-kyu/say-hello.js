function greet(name) {
  if (name !== "" && name !== "null" && name !== null) {
    return "hello " + name + '!';
  } else {
    return null;
  }
}

greet('Jff')
