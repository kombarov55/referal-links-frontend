const root = "http://localhost:8666"

export default {
    addPartner: `${root}/partner`,
    getPartners: (page = 0, size = 10) => `${root}/partner?page=${page}&size=${size}`,
    findPartnerByLogin: (login) => `${root}/partner/find?login=${login}`
}