export function setupCalculateButton(onCalculate) {
  document.getElementById("calculate-btn").onclick = () => {
    onCalculate();
  };
}
