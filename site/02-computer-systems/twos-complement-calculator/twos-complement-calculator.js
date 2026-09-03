(function () {
    const calculator = document.querySelector(".tc-calc");

    if (!calculator) {
        return;
    }

    const bits = 8;
    const minValue = -128;
    const maxValue = -1;
    const targetInput = document.getElementById("tc-target");
    const message = document.getElementById("tc-message");
    const checkButton = document.getElementById("tc-check");
    const clearButton = document.getElementById("tc-clear");
    const allInputs = Array.from(document.querySelectorAll(".tc-calc__table input"));
    let hasCopiedFlippedRow = false;

    function toBinary(value) {
        return value.toString(2).padStart(bits, "0");
    }

    function getTargetValue() {
        return Number.parseInt(targetInput.value, 10);
    }

    function getRowBits(rowName) {
        return Array.from(document.querySelectorAll('[data-row="' + rowName + '"] input'))
            .map(function (input) {
                return input.value;
            })
            .join("");
    }

    function getRowInputs(rowName) {
        return Array.from(document.querySelectorAll('[data-row="' + rowName + '"] input'));
    }

    function isValidTarget(value) {
        return Number.isInteger(value) && value >= minValue && value <= maxValue;
    }

    function expectedPositiveBits(value) {
        return toBinary(Math.abs(value));
    }

    function flipBits(bitsText) {
        return bitsText.replace(/[01]/g, function (bit) {
            return bit === "0" ? "1" : "0";
        });
    }

    function expectedFlippedBits(value) {
        return flipBits(expectedPositiveBits(value));
    }

    function expectedAnswerBits(value) {
        return toBinary(256 + value);
    }

    function resetResult() {
        document.querySelector('[data-row="answer"]').classList.remove("is-correct", "is-wrong");
    }

    function animateCheckButton() {
        checkButton.classList.remove("is-pop");
        void checkButton.offsetWidth;
        checkButton.classList.add("is-pop");
    }

    function setAnswerRowState(state) {
        const answerRow = document.querySelector('[data-row="answer"]');

        answerRow.classList.remove("is-correct", "is-wrong");
        void answerRow.offsetWidth;
        answerRow.classList.add(state);
    }

    function clearTable() {
        allInputs.forEach(function (input) {
            input.value = "";
        });
        hasCopiedFlippedRow = false;
        resetResult();
        message.textContent = "Fill in the rows, then press Check.";
    }

    function copyFlippedRowToAnswer() {
        const flippedBits = getRowBits("flipped");

        getRowInputs("answer").forEach(function (input, index) {
            input.value = flippedBits[index];
        });
    }

    function tryAutoFillAnswer() {
        const value = getTargetValue();

        resetResult();

        if (!isValidTarget(value)) {
            return;
        }

        if (
            !hasCopiedFlippedRow &&
            getRowBits("positive") === expectedPositiveBits(value) &&
            getRowBits("flipped") === expectedFlippedBits(value)
        ) {
            copyFlippedRowToAnswer();
            hasCopiedFlippedRow = true;
            message.textContent = "Correct flip. The Add 1 row has been copied from above. Now add 1.";
        }
    }

    function checkAnswer() {
        const value = getTargetValue();
        const finalRow = getRowBits("answer");

        animateCheckButton();
        resetResult();

        if (!isValidTarget(value)) {
            setAnswerRowState("is-wrong");
            message.textContent = "Choose a whole number from -128 to -1.";
            return;
        }

        if (!/^[01]{8}$/.test(finalRow)) {
            setAnswerRowState("is-wrong");
            message.textContent = "Complete the Add 1 row using only 0s and 1s.";
            return;
        }

        if (finalRow === expectedAnswerBits(value)) {
            setAnswerRowState("is-correct");
            message.textContent = "Correct. The final row is the two's complement answer.";
        } else {
            setAnswerRowState("is-wrong");
            message.textContent = "Not quite. Check the flip row, then add 1 again.";
        }
    }

    allInputs.forEach(function (input, index) {
        input.addEventListener("keydown", function (event) {
            const columnCount = 8;

            if (event.key === "ArrowLeft" && allInputs[index - 1]) {
                event.preventDefault();
                allInputs[index - 1].focus();
            }

            if (event.key === "ArrowRight" && allInputs[index + 1]) {
                event.preventDefault();
                allInputs[index + 1].focus();
            }

            if (event.key === "ArrowUp" && allInputs[index - columnCount]) {
                event.preventDefault();
                allInputs[index - columnCount].focus();
            }

            if (event.key === "ArrowDown" && allInputs[index + columnCount]) {
                event.preventDefault();
                allInputs[index + columnCount].focus();
            }

            if (event.key === "0" || event.key === "1") {
                event.preventDefault();
                input.value = event.key;
                resetResult();
                tryAutoFillAnswer();
            }
        });

        input.addEventListener("input", function () {
            input.value = input.value.replace(/[^01]/g, "").slice(0, 1);
            resetResult();
            tryAutoFillAnswer();
        });
    });

    targetInput.addEventListener("input", function () {
        clearTable();
        hasCopiedFlippedRow = false;
    });

    calculator.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkAnswer();
        }
    });

    checkButton.addEventListener("click", checkAnswer);
    clearButton.addEventListener("click", clearTable);

    resetResult();
}());
