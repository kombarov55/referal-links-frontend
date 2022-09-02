const root = "http://192.168.0.11:8666"

export default {
    login: `${root}/account/login`,
    addPartner: `${root}/partner`,
    getPartners: (page = 0, size = 10) => `${root}/partner?page=${page}&size=${size}`,
    findPartnerByLogin: (login) => `${root}/partner/find?login=${login}`,
    findPartnerById: (id) => `${root}/partner/byId?q=${id}`,
    countries: `${root}/dictionary/countries`,
    addClient: `${root}/client`,
    getClients: (page = 0, size = 10) => `${root}/client?page=${page}&size=${size}`,
    findClientById: (id) => `${root}/client/findById?q=${id}`,
    addBonuses: `${root}/partner/addBonuses.do`,
    removeBonuses: `${root}/partner/removeBonuses.do`,
    findBonusHistory: partnerId => `${root}/bonusHistory/findByPartnerId?q=${partnerId}`
}