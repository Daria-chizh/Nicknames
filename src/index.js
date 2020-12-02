export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (this.name.match(/^[\d-_]/)) {
      return false;
    }

    if (this.name.match(/[\d-_]$/)) {
      return false;
    }

    if (this.name.match(/\d{4,}/)) {
      return false;
    }

    if (this.name.match(/^[a-z\-_0-9]+$/)) {
      return true;
    }
    return false;
  }
}
