$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success: function(responce)
    {
        console.log(responce)
        for(var i = 0; i < responce.Countries.length; i++)
        {
            var totalActive = responce.Countries[i].TotalConfirmed - responce.Countries[i].TotalDeaths - responce.Countries[i].TotalRecovered
            var tableRow = `<tr> <td>${responce.Countries[i].Country}</td> <td>${responce.Countries[i].TotalConfirmed}</td> <td>${totalActive}</td> <td>${responce.Countries[i].TotalRecovered}</td> <td>${responce.Countries[i].TotalDeaths}</td></tr>`
            $('#tbody').append(tableRow)
        }
        $('#covid-table').DataTable()
    },
    error : function(error)
    {
        console.log(eror)
    }
})