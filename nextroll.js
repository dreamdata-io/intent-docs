window.onB2BPersonalizationDataReady = (function (personalizationData) {
    if (personalizationData && window.analytics && !analytics.group().traits().website && personalizationData["domain"]) {
        var company = { website: personalizationData["domain"], source: 'nextroll' }

        if (personalizationData["company_name"])
            company.name = personalizationData["company_name"];
        if (personalizationData["company_industry"])
            company.industry = personalizationData["company_industry"];
        if (personalizationData["company_size"])
            company.number_of_employees = personalizationData["company_size"];
        if (personalizationData["company_revenue"])
            company.annual_revenue = personalizationData["company_revenue"];

        analytics.group(null, company);
    }
});