export default function checkAns(answers) {
    let score = 0;
    if (answers.q1 === "Jaipur") score += 1;
    if (answers.q2 === "Shimla") score += 1;
    if (answers.q3 === "Itanagar") score += 1;
    if (answers.q4 === "Ranchi") score += 1;
    if (answers.q5 === "Dispur") score += 1;
    return score;
}