window.analytics.ready(function () {
  function getStorage(lsKey) {
    try {
      return JSON.parse(localStorage.getItem(lsKey));
    } catch (e) {
      return null;
    }
  }

  var details = getStorage("_6senseCompanyDetails");

  if (
    !details ||
    !details.company ||
    !details.company.domain ||
    analytics.group().traits().website
  ) {
    return;
  }

  var reveal = details.company;

  analytics.group(null, {
    website: reveal.domain,
    source: "6sense",
    name: reveal.name || undefined,
    country: reveal.country || undefined,
    industry: reveal.industry || undefined,
    number_of_employees: reveal.employee_range || undefined,
    annual_revenue: reveal.revenue_range || undefined,
  });
});
