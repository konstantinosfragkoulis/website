document.querySelectorAll('span').forEach(span => {
    span.addEventListener('dblclick', function(e) {
        // Prevent default double-click behavior
        e.preventDefault();

        // Get the selection and range
        const selection = window.getSelection();
        const range = document.createRange();
        selection.removeAllRanges();

        // Use elementFromPoint to get the element at the click position
        const wordElement = document.elementFromPoint(e.clientX, e.clientY);

        // Check if the clicked element is a text node and part of the span
        if (wordElement && span.contains(wordElement)) {
            // Set the range to select the word
            range.selectNodeContents(wordElement);

            // Add the range to the selection
            selection.addRange(range);
        }
    });
});