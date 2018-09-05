const averageVelocity = (base, sequence) => {
  let baseAnswer = 0;
  const seq = sequence.slice(0);
  const yResults = [];
  const finalResults = [];

  const calcYval = n => {
    let result = -4.9 * (n * n);
    result += 33 * n;
    result += 18;
    return result;
  };

  const calcResult = (yResult, i) => {
    const result = (yResult - baseAnswer) / (seq[i] - base);
    finalResults.push(result);
  };

  baseAnswer = calcYval(base);
  console.log("baseAnswer: ", baseAnswer, "\n");
  seq.forEach(n => {
    yResults.push(calcYval(n));
  });

  yResults.forEach((yResult, i) => calcResult(yResult, i));

  finalResults.forEach(n => {
    console.log(n.toFixed(4));
  });
  console.log(
    "Instanteous Velocity: ",
    finalResults[finalResults.length - 1].toFixed(1)
  );
};

averageVelocity(4, [5, 4.1, 4.01, 4.001, 4.0001]);
