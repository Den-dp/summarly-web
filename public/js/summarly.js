$.ajax({
    type: 'POST',
    url: 'https://to.com/postHere.php',
    crossDomain: true,
    data: '{"some":"json"}',
    dataType: 'json',
    success: function(responseData, textStatus, jqXHR) {
        var value = responseData.someKey;
    },
    error: function (responseData, textStatus, errorThrown) {
        alert('POST failed.');
    }
});