var employeeArray = [];

$(document).ready(startup);

function startup() {
    $('#addEmployeeButton').on('click', submission);
    $('#dataBody').on('click', '.deleteMe', deleteEmployee)
};

var mrc = 0;

function submission() {
    console.log('button working');
    new employeeData($('#firstIn').val(), $('#lastIn').val(), $('#eNoIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val());
    /*
    $("#dataTable > #dataBody:last-child").append("<tr>");
    $("#dataTable > #dataBody:last-child").append("<td><span id='firstNameData'>");
    $('#firstNameData').replaceWith(employeeArray[employeeArray.length-1].firstName);
    $("#dataTable > #dataBody:last-child").append("<td><span id='lastNameData'>");
    $('#lastNameData').replaceWith(employeeArray[employeeArray.length - 1].lastName);
    $("#dataTable > #dataBody:last-child").append("<td><span id='eNoData'>");
    $('#eNoData').replaceWith(employeeArray[employeeArray.length - 1].eNo);
    $("#dataTable > #dataBody:last-child").append("<td><span id='jobTitleData'>");
    $('#jobTitleData').replaceWith(employeeArray[employeeArray.length - 1].jobTitle);
    $("#dataTable > #dataBody:last-child").append("<td><span id='salaryData'>");
    $('#salaryData').replaceWith(employeeArray[employeeArray.length - 1].salary);
    $("#dataTable > #dataBody:last-child").append("<td><span id='deleteEmployee'>");
    $('#deleteEmployee').replaceWith("<button class='deleteMe'>Delete Employee</button>");
    */
    $("#dataTable > #dataBody:last-child").append("<tr><td><span id='firstNameData'><td><span id='lastNameData'><td><span id='eNoData'><td><span id='jobTitleData'><td><span id='salaryData'><td><span id='deleteEmployee'>");
    $('#deleteEmployee').replaceWith("<button class='deleteMe'>Delete Employee</button>");
    $('#firstNameData').replaceWith(employeeArray[employeeArray.length - 1].firstName);
    $('#lastNameData').replaceWith(employeeArray[employeeArray.length - 1].lastName);
    $('#eNoData').replaceWith(employeeArray[employeeArray.length - 1].eNo);
    $('#jobTitleData').replaceWith(employeeArray[employeeArray.length - 1].jobTitle);
    $('#salaryData').replaceWith(employeeArray[employeeArray.length - 1].salary);
    mrc += employeeArray[employeeArray.length - 1].salary/12;
    mrc *= 100;
    mrc = Math.round(mrc);
    mrc /= 100;
    $('#monthlyCostData').text(mrc);
    $('#firstIn').val('');
    $('#lastIn').val('');
    $('#eNoIn').val('');
    $('#jobTitleIn').val('');
    $('#salaryIn').val('');
};

function employeeData(firstIn, lastIn, eNoIn, jobTitleIn, salaryIn) {
    this.firstName = firstIn;
    this.lastName = lastIn;
    this.eNo = eNoIn;
    this.jobTitle = jobTitleIn;
    this.salary = salaryIn;

    employeeArray.push(this);
};

function deleteEmployee() {
    $(this).parent().parent().remove()
}