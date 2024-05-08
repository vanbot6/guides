function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Command copied to clipboard!');
    }, function(err) {
        alert('Failed to copy: ', err);
    });
}
