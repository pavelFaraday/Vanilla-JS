//'this' == employee.id


var employee = {
    id: 7878,
    greet: function () {
        setTimeout(() => {
            console.log(this.id);
        }, 5000);
    }
};
employee.greet();