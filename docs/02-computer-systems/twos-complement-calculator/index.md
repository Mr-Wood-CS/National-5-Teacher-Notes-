# Two's Complement Calculator

[Back to Two's Complement Tasks](../2.1.1-twos-compliment-tasks.md)

Enter the negative number you want to convert, then complete the three rows.

To complete the ==Add 1== row, start at the right-hand side and add ==1== to the flipped bits.

If the last bit is ==0==, change it to ==1==.

If the last bit is ==1==, it becomes ==0== and you carry ==1== to the next column on the left.

<link rel="stylesheet" href="twos-complement-calculator.css">

<div class="tc-calc" data-bits="8">
    <div class="tc-calc__top">
        <label for="tc-target">Convert</label>
        <input id="tc-target" class="tc-calc__target" type="text" inputmode="numeric" value="-28" aria-label="Number to convert">
        <button id="tc-clear" class="tc-calc__button" type="button">Clear</button>
    </div>

    <p id="tc-message" class="tc-calc__message" aria-live="polite">Fill in the rows, then press Check.</p>

    <div class="tc-calc__table-wrap">
        <table class="tc-calc__table">
            <thead>
                <tr>
                    <th>Step</th>
                    <th>128</th>
                    <th>64</th>
                    <th>32</th>
                    <th>16</th>
                    <th>8</th>
                    <th>4</th>
                    <th>2</th>
                    <th>1</th>
                </tr>
            </thead>
            <tbody>
                <tr data-row="positive">
                    <th>Think positive</th>
                    <td><input aria-label="Think positive 128" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Think positive 64" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Think positive 32" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Think positive 16" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Think positive 8" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Think positive 4" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Think positive 2" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Think positive 1" inputmode="numeric" maxlength="1"></td>
                </tr>
                <tr data-row="flipped">
                    <th>Flip the bits</th>
                    <td><input aria-label="Flip the bits 128" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Flip the bits 64" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Flip the bits 32" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Flip the bits 16" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Flip the bits 8" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Flip the bits 4" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Flip the bits 2" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Flip the bits 1" inputmode="numeric" maxlength="1"></td>
                </tr>
                <tr data-row="answer">
                    <th>Add 1</th>
                    <td><input aria-label="Add 1 128" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Add 1 64" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Add 1 32" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Add 1 16" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Add 1 8" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Add 1 4" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Add 1 2" inputmode="numeric" maxlength="1"></td>
                    <td><input aria-label="Add 1 1" inputmode="numeric" maxlength="1"></td>
                </tr>
            </tbody>
        </table>
        <div class="tc-calc__check-row">
            <button id="tc-check" class="tc-calc__button tc-calc__button--primary" type="button">Check</button>
        </div>
    </div>
</div>

<script src="twos-complement-calculator.js" defer></script>
