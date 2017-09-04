var employeeArray = [];

$(document).ready(startup);

function startup() {
    $('#addEmployeeButton').on('click', submission);
};

var mrc = 0;

function submission() {
    console.log('button working');
    new employeeData($('#firstIn').val(), $('#lastIn').val(), $('#eNoIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val());
    $("#dataTable > #dataBody:last-child").append("<tr>");
    $("#dataTable > #dataBody:last-child").append("<td><span id='firstNameData'>");
    $('#firstNameData').replaceWith(employeeArray[employeeArray.length-1].firstName);
    $("#dataTable > #dataBody:last-child").append("</span></td>");
    $("#dataTable > #dataBody:last-child").append("<td><span id='lastNameData'>");
    $('#lastNameData').replaceWith(employeeArray[employeeArray.length - 1].lastName);
    $("#dataTable > #dataBody:last-child").append("</span></td>");
    $("#dataTable > #dataBody:last-child").append("<td><span id='eNoData'>");
    $('#eNoData').replaceWith(employeeArray[employeeArray.length - 1].eNo);
    $("#dataTable > #dataBody:last-child").append("</span></td>");
    $("#dataTable > #dataBody:last-child").append("<td><span id='jobTitleData'>");
    $('#jobTitleData').replaceWith(employeeArray[employeeArray.length - 1].jobTitle);
    $("#dataTable > #dataBody:last-child").append("</span></td>");
    $("#dataTable > #dataBody:last-child").append("<td><span id='salaryData'>");
    $('#salaryData').replaceWith(employeeArray[employeeArray.length - 1].salary);
    $("#dataTable > #dataBody:last-child").append("</span></td>");
    $("#dataTable > #dataBody:last-child").append("</tr>");
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