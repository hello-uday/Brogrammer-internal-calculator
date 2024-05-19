function calculateResult() {
    const finalPractical = parseFloat(document.getElementById('final-practical').value) || 0;
    const attendance = parseFloat(document.getElementById('attendance-marks').value) || 0;
    const suprise = parseFloat(document.getElementById('suprise-test').value) || 0;
    const w1 = parseFloat(document.getElementById('worksheet1').value) || 0;
    const w2 = parseFloat(document.getElementById('worksheet2').value) || 0;
    const w3 = parseFloat(document.getElementById('worksheet3').value) || 0;
    const w4 = parseFloat(document.getElementById('worksheet4').value) || 0;
    const w5 = parseFloat(document.getElementById('worksheet5').value) || 0;
    const w6 = parseFloat(document.getElementById('worksheet6').value) || 0;
    const w7 = parseFloat(document.getElementById('worksheet7').value) || 0;
    const w8 = parseFloat(document.getElementById('worksheet8').value) || 0;
    const w9 = parseFloat(document.getElementById('worksheet9').value) || 0;
    const w10 = parseFloat(document.getElementById('worksheet10').value) || 0;
    const practicalmst = parseFloat(document.getElementById('practical-mst').value) || 0;
    const quiz = parseFloat(document.getElementById('quiz').value) || 0;
    const assignment = parseFloat(document.getElementById('assignment-marks').value) || 0;
    const mst1 = parseFloat(document.getElementById('mst1').value) || 0;
    const mst2 = parseFloat(document.getElementById('mst2').value) || 0;


    const worksheetsum = w1+w2+w3+w4+w5+w6+w7+w8+w9+w10;
    const finalworksheet = (worksheetsum/300)*20;
    const newsuprise = (suprise/12)*4;
    const newpracticalmst = (practicalmst/10)*4;
    const newmst = (mst1+mst2)/4;
    const newassign = (assignment/10)*6

    console.log(finalPractical/2);
    console.log(attendance);
    console.log(newsuprise);
    console.log(finalworksheet);
    console.log(newpracticalmst);
    console.log(quiz);
    console.log(newassign);
    console.log(newmst);

    const finalresult = (finalPractical/2) + attendance + newsuprise + finalworksheet + newpracticalmst + quiz + newassign + newmst;
    document.getElementById('result').innerText = finalresult.toFixed(2);
}