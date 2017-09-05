var employeeArray = [];

$(document).ready(startup);

function startup() {
    $('#addEmployeeButton').on('click', submission);
    $('#dataBody').on('click', '.deleteMe', deleteEmployee)
};

var mrc = 0;

function submission() {
    new employeeData($('#firstIn').val(), $('#lastIn').val(), $('#eNoIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val());

    $("#dataTable > #dataBody:last-child").append("<tr><td><span id='firstNameData'><td><span id='lastNameData'><td><span id='eNoData'><td><span id='jobTitleData'><td><span id='salaryData'><td><span id='deleteEmployee'>");
    $('#deleteEmployee').replaceWith("<button class='deleteMe'>Delete Employee</button>");
    $('#firstNameData').replaceWith(employeeArray[employeeArray.length - 1].firstName);
    $('#lastNameData').replaceWith(employeeArray[employeeArray.length - 1].lastName);
    $('#eNoData').replaceWith(employeeArray[employeeArray.length - 1].eNo);
    $('#jobTitleData').replaceWith(employeeArray[employeeArray.length - 1].jobTitle);
    $('#salaryData').replaceWith(employeeArray[employeeArray.length - 1].salary);
    mrc = calcMonthly(employeeArray[employeeArray.length - 1].salary);
    console.log('Monthly cost for this employee is ' + mrc);
    var mcd = parseInt($('#monthlyCostData').text());
    console.log('Current Monthly cost is ' + mcd);
    $('#monthlyCostData').text(mcd + mrc);
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
    var salaryDeduction = ($(this).parent().prev().text());
    $('#monthlyCostData').text(parseInt($('#monthlyCostData').text()) - parseInt(calcMonthly(salaryDeduction)));
    $(this).parent().parent().remove();
}

function calcMonthly(value) {
    MonthlyAmt = 0;
    MonthlyAmt += parseInt(value) / 12;
    MonthlyAmt *= 100;
    MonthlyAmt = Math.round(MonthlyAmt);
    MonthlyAmt /= 100;
    return MonthlyAmt;
};