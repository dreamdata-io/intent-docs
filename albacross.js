window.analytics.ready(function () {
  const reveal = window.AlbacrossReveal && window.AlbacrossReveal.company;

  if (!reveal || !reveal.url || analytics.group().traits().website) {
    return;
  }

  analytics.group(null, {
    website: reveal.url,
    source: "albacross",
    name: reveal.name || undefined,
    country: reveal.country || undefined,
    industry: reveal.linkedin_industry_code
      ? reveal.linkedin_industry_code.category
      : undefined,
    number_of_employees: reveal.employees
      ? reveal.employees.from + " - " + reveal.employees.to
      : undefined,
    annual_revenue: reveal.financial_report
      ? reveal.financial_report.from + " - " + reveal.financial_report.to
      : undefined,
  });
});
