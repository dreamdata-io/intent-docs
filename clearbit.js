window.analytics.ready(function () {
  if (!window.reveal || analytics.group().traits().website || window.reveal.type !== 'company') {
    return;
  }

  var reveal = window.reveal;
  analytics.group(null, {
    website: reveal.company.domain,
    source: "clearbit",
    name: reveal.company.name || undefined,
    country: reveal.company.geo.country || undefined,
    industry: reveal.company.category.industryGroup || undefined,
    number_of_employees: reveal.company.metrics.employeesRange || undefined,
    annual_revenue: reveal.company.metrics.estimatedAnnualRevenue || undefined,
  });
});
