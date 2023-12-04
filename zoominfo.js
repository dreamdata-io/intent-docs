window.analytics.ready(function () {
    function getStorage(lsKey) {
        try {
            return JSON.parse(localStorage.getItem(lsKey));
        } catch (e) {
            return null;
        }
    }

    var data = getStorage("_ziVisitorInfo");
    if (!data || data.status !== 'success' || !data.ziDetails || !data.ziDetails.website || analytics.group().traits().website) {
        return;
    }

    var reveal = data.ziDetails;
    analytics.group(null, {
        website: reveal.website,
        source: "zoominfo",
        name: reveal.companyName || undefined,
        country: reveal.country || undefined,
        industry: reveal.primaryIndustry || undefined,
        number_of_employees: reveal.employeeCount || undefined,
        annual_revenue: reveal.revenue || undefined,
    });
});