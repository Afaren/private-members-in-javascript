function Container(param) {

    function dec() {
        if (secret > 0) {
            secret -= 1;
            return true;
        } else {
            return false;
        }
    }

    this.member = param;
    var secret = 3;
    var that = this;

    this.service = function () {
        return dec() ? that.member : null;
    };
}

const container = new Container("abc");

console.log(container.member);      // 3
console.log(container.service());   // 3
console.log(container.service());   // 3
console.log(container.service());   // 3
console.log(container.service());   // null


console.log(container.dec())  // should throw error cause dec is private