// docs: https://help.dealfront.com/en/articles/5559824-set-up-the-javascript-object-connector
window.analytics.ready(function () {
    if (window.discover && window.discover.meta.status === 200)
    {
        var reveal = window.discover.data.company;
        analytics.group(null, {
          website: reveal.domain,
          source: "dealfront",
          name: reveal.name || undefined,
          industry: reveal.industries.name || undefined,
          number_of_employees: reveal.employees_category || undefined,
          annual_revenue: reveal.revenue.amount || undefined,
        });
    }
});