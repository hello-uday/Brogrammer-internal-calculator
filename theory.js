function calculateResult() {
    const attendance = parseFloat(document.getElementById('attendance-marks').value) || 0;
    const suprise = parseFloat(document.getElementById('suprise-test').value) || 0;
    const quiz = parseFloat(document.getElementById('quiz').value) || 0;
    const assignment = parseFloat(document.getElementById('assignment-marks').value) || 0;
    const mst1 = parseFloat(document.getElementById('mst1').value) || 0;
    const mst2 = parseFloat(document.getElementById('mst2').value) || 0;

    const newsuprise = (suprise/12)*4;
    const newmst = (mst1+mst2)/2;

    console.log(attendance);
    console.log(newsuprise);
    console.log(quiz);
    console.log(assignment);
    console.log(newmst);

    const finalresult = attendance + newsuprise  + quiz + assignment + newmst;
    document.getElementById('result').innerText = finalresult.toFixed(2);
}