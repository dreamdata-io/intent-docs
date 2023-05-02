function clearbitCallback(response) {
    sessionStorage.setItem("cb_reveal", JSON.stringify(response));
    if (response && response.company && response.type === 'company' && response.company.domain) {
        var company = { website: response.company.domain, source: 'clearbit' }

        if (response.company.name)
            company.name = response.company.name;
        if (response.company.geo.country)
            company.country = response.company.geo.country;
        if (response.company.category.industryGroup)
            company.industry = response.company.category.industryGroup;
        if (response.company.metrics.employeesRange)
            company.number_of_employees = response.company.metrics.employeesRange;
        if (response.company.metrics.estimatedAnnualRevenue)
            company.annual_revenue = response.company.metrics.estimatedAnnualRevenue;

        analytics.group(null, company);
    }
}

window.analytics.ready(function () {
    const clearbit_key = '{pk_replace_me}'; 
    var response = sessionStorage.getItem("cb_reveal");
    if (!response && !analytics.group().traits().website) {
        let s = document.createElement("script");
        s.src = `https://reveal.clearbit.com/v1/companies/reveal?authorization=${clearbit_key}&callback=clearbitCallback`;
        document.body.appendChild(s);
    }
});