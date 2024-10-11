document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const employeeName = document.getElementById('employeeName').value;
    const status = document.getElementById('status').value;
    alert(`Attendance for ${employeeName} marked as ${status}`);
});
