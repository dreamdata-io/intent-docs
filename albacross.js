window.analytics.ready(function () {
    if (window.AlbacrossReveal && window.AlbacrossReveal.company && window.AlbacrossReveal.company.url && !analytics.group().traits().website) {
        var reveal = window.AlbacrossReveal.company;
        var company = { website: reveal.url, source: 'albacross' }

        if (reveal.name)
            company.name = reveal.name;
        if (reveal.country)
            company.country = reveal.country;
        if (reveal.linkedin_industry_code)
            company.industry = reveal.linkedin_industry_code.category;
        if (reveal.employees)
            company.number_of_employees = reveal.employees.from + ' - ' + reveal.employees.to;
        if (reveal.financial_report)
            company.annual_revenue = reveal.financial_report.from + ' - ' + reveal.financial_report.to;

        analytics.group(null, company);
    }
});