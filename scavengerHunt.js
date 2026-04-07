const expected = ["ALGORITHM", "FUNCTION", "DEBUG", "LOOP", "VARIABLE"];

document.getElementById("check").addEventListener("click", () => {
	const entries = [1, 2, 3, 4, 5].map((n) =>
		document.getElementById(`a${n}`).value.trim().toUpperCase()
	);

	const correct = entries.filter((value, idx) => value === expected[idx]).length;
	const result = document.getElementById("result");

	if (correct === expected.length) {
		result.className = "ok";
		result.textContent = "Great work! All 5 clues are correct.";
		return;
	}

	result.className = "bad";
	result.textContent = `You got ${correct}/5 correct. Keep hunting.`;
});
