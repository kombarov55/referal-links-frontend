const root = "https://sheltered-inlet-75741.herokuapp.com"
// const root = "http://localhost:8666"

export default {
    registerLink: partnerId => `${window.location.origin}#/register_client?partnerid=${partnerId}`,

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
    findBonusHistory: partnerId => `${root}/bonusHistory/findByPartnerId?q=${partnerId}`,
    findPartnerByLoginStrict: login => `${root}/partner/byLogin?q=${login}`
}