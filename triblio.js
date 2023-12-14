window.analytics.ready(function () {
  if (!window.Triblio || analytics.group().traits().website) {
    return;
  }

  var account = Triblio.getAccountIdentification();
  if (account.isIsp || !account.domain) {
    return;
  }

  analytics.group(null, {
    website: account.domain,
    source: "triblio",
    name: account.name || undefined,
    country: account.country || undefined,
    industry: account.industry || undefined,
    number_of_employees: account.employees || undefined,
    annual_revenue: account.revenue || undefined,
  });
});
