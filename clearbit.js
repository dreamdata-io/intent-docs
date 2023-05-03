function clearbitCallback(response) {
  sessionStorage.setItem("cb_reveal", JSON.stringify(response));

  if (
    !response ||
    !response.company ||
    response.type !== "company" ||
    !response.company.domain
  ) {
    return;
  }

  analytics.group(null, {
    website: response.company.domain,
    source: "clearbit",
    name: response.company.name || undefined,
    country: response.company.geo.country || undefined,
    industry: response.company.category.industryGroup || undefined,
    number_of_employees: response.company.metrics.employeesRange || undefined,
    annual_revenue:
      response.company.metrics.estimatedAnnualRevenue || undefined,
  });
}

window.analytics.ready(function () {
  const clearbitKey = "{pk_replace_me}";
  const response = sessionStorage.getItem("cb_reveal");

  if (response || analytics.group().traits().website) {
    return;
  }

  const script = document.createElement("script");
  script.src = `https://reveal.clearbit.com/v1/companies/reveal?authorization=${clearbitKey}&callback=clearbitCallback`;
  document.body.appendChild(script);
});
