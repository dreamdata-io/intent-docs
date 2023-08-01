// docs: https://docs.snitcher.com/spotter-api/#install-on-your-website

function dreamdataCallback(identification) {
    if (!identification || identification.type !== "business" || !window.analytics || analytics.group().traits().website)
        return;

    var reveal = identification.company;
    analytics.group(null, {
        website: reveal.domain,
        source: "leadfeeder",
        name: reveal.name || undefined,
        industry: reveal.industry || undefined,
        number_of_employees: reveal.employee_range || undefined,
        annual_revenue: reveal.revenue.amount || undefined,
    });
}

window.SpotterSettings = {
    token: "YOUR-API-TOKEN",
    callback: dreamdataCallback,
};