// docs: https://support.demandbase.com/hc/en-us/articles/360053223451-Reference-Demandbase-IP-API-for-Demandbase-One
window.analytics.ready(function () {
    if (!Demandbase && !Demandbase.Segments && !Demandbase.Segments.IsCompany && !Demandbase.Segments.CompanyProfile && analytics.group().traits().website) {
        return;
    }

    var company = Demandbase.Segments.CompanyProfile;
    if (!company.isp && !company.web_site) {
        return;
    }

    analytics.group(company.demandbase_sid, {
        website: company.web_site,
        source: "demandbase",
        name: company.company_name || undefined,
        country: company.country_name || undefined,
        industry: company.industry || undefined,
        number_of_employees: company.employee_count || undefined,
        annual_revenue: company.annual_sales || undefined,
    });
});