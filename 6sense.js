window.analytics.ready(function () {
    if (window.localStorage && localStorage["_6senseCompanyDetails"] && !analytics.group().traits().website) {
        try {
            const details = JSON.parse(localStorage["_6senseCompanyDetails"]);

            if (!details || !details.company || !details.company.domain || analytics.group().traits().website) {
                return;
            }

            const reveal = details.company;
            const company = {
                website: reveal.domain,
                source: '6sense',
                name: reveal.name || undefined,
                country: reveal.country || undefined,
                industry: reveal.industry || undefined,
                number_of_employees: reveal.employee_range || undefined,
                annual_revenue: reveal.revenue_range || undefined,
            };

            analytics.group(null, company);
        } catch (e) { }
    }
});