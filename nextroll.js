window.onB2BPersonalizationDataReady = function (data) {
  if (
    !data ||
    !window.analytics ||
    analytics.group().traits().website ||
    !data["domain"]
  ) {
    return;
  }

  analytics.group(null, {
    website: data.domain,
    source: "nextroll",
    name: data.company_name || undefined,
    industry: data.company_industry || undefined,
    number_of_employees: data.company_size || undefined,
    annual_revenue: data.company_revenue || undefined,
  });
};
