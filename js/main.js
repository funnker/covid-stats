$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success: function(responce)
    {
        console.log(responce)
        for(var i = 0; i < responce.Countries.length; i++)
        {
            var tablerow = `<tr> <td>${responce.Countries[i].Country}</td> </tr>`
            $('#tbody').append(tablerow)
        }
    },
    error : function(error)
    {
        console.log(eror)
    }
})