window.analytics.ready(function () {
    if (window.Triblio && !analytics.group().traits().website) {
        var account = Triblio.getAccountIdentification();
        if (!account.isIsp && account.domain) {
            var company = { website: account.domain, source: 'triblio' }

            if (account.name)
                company.name = account.name;
            if (account.country)
                company.country = account.country;
            if (account.industry)
                company.industry = account.industry;
            if (account.employees)
                company.number_of_employees = account.employees;
            if (account.revenue)
                company.annual_revenue = account.revenue;

            analytics.group(null, company);
        }
    }
});